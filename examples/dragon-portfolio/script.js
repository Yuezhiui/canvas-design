(() => {
  'use strict';
  const profile = window.portfolioProfile || {};
  document.querySelectorAll('.profile-name').forEach(el => { el.textContent = profile.name || 'Yue'; });
  document.querySelectorAll('.profile-role').forEach(el => { el.textContent = profile.role || 'Artist'; });
  const contact = document.querySelector('[data-contact]');
  if (contact && profile.contact) {
    const value = profile.contact.trim();
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    let social = false;
    try { social = new URL(value).protocol === 'https:'; } catch { /* An email is not a URL. */ }
    if (email || social) { contact.href = email ? `mailto:${value}` : value; contact.hidden = false; }
  }

  // Native dialog keeps keyboard focus inside the enlarged artwork view.
  const dialog = document.querySelector('.art-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-art]').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const image = dialog.querySelector('.dialog-image');
        image.src = link.dataset.art;
        image.alt = link.querySelector('img').alt;
        dialog.querySelector('#art-title').textContent = link.dataset.title;
        dialog.querySelector('.dialog-description').textContent = link.dataset.description;
        dialog.querySelector('.art-download').href = link.dataset.art;
        dialog.showModal();
      });
    });
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
  }

  // A few imperfect blue lines; no hidden cursor and no perpetual idle animation.
  const trail = document.querySelector('#ink-trail');
  const toggle = document.querySelector('.trail-toggle');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const hoverMark = document.createElement('div');
  hoverMark.className = 'sketch-cursor';
  hoverMark.setAttribute('aria-hidden', 'true');
  hoverMark.innerHTML = '<svg viewBox="0 0 50 50"><path d="M43 25C45 10 30 5 17 8 4 11 3 29 12 39c10 11 30 7 33-7 2-12-7-24-19-25M40 11c-14-9-33 3-31 18 2 16 28 19 35 5"/></svg>';
  document.body.append(hoverMark);
  let hoverFrame = 0, hoverX = 0, hoverY = 0;
  document.addEventListener('pointermove', event => {
    const clickable = event.target.closest('a, button');
    const show = finePointer.matches && !motion.matches && event.pointerType === 'mouse' && clickable && !clickable.disabled;
    hoverMark.classList.toggle('is-visible', Boolean(show));
    if (!show) return;
    hoverX = event.clientX; hoverY = event.clientY;
    if (!hoverFrame) hoverFrame = requestAnimationFrame(() => {
      hoverMark.style.left = `${hoverX}px`; hoverMark.style.top = `${hoverY}px`; hoverFrame = 0;
    });
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => hoverMark.classList.remove('is-visible'));
  let enabled = true;
  try { enabled = localStorage.getItem('yue-ink-trail') !== 'off'; } catch { /* Works without storage. */ }
  const ctx = trail?.getContext('2d');
  let segments = [], last = null, frame = 0;
  const lifetime = 650;
  const resizeTrail = () => {
    if (!ctx) return;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    trail.width = Math.round(innerWidth * dpr); trail.height = Math.round(innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    segments = []; last = null;
  };
  const paintTrail = now => {
    frame = 0;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    segments = segments.filter(segment => now - segment.time < lifetime);
    ctx.lineCap = 'round';
    for (const segment of segments) {
      const fade = 1 - (now - segment.time) / lifetime;
      ctx.strokeStyle = `rgba(36,61,145,${fade * .38})`; ctx.lineWidth = .8;
      ctx.beginPath(); ctx.moveTo(segment.x1, segment.y1);
      ctx.quadraticCurveTo((segment.x1 + segment.x2) / 2 + segment.jitter, (segment.y1 + segment.y2) / 2 - segment.jitter, segment.x2, segment.y2); ctx.stroke();
      ctx.strokeStyle = `rgba(36,61,145,${fade * .15})`; ctx.lineWidth = .5;
      ctx.beginPath(); ctx.moveTo(segment.x1 + 2, segment.y1 - 2); ctx.lineTo(segment.x2 + 1, segment.y2 - 1); ctx.stroke();
    }
    if (segments.length) frame = requestAnimationFrame(paintTrail);
  };
  const clearTrail = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; segments = []; last = null;
    ctx?.clearRect(0, 0, innerWidth, innerHeight);
  };
  const syncToggle = () => {
    if (!toggle) return;
    const allowed = finePointer.matches && !motion.matches;
    if (!allowed) hoverMark.classList.remove('is-visible');
    toggle.disabled = !allowed;
    toggle.setAttribute('aria-pressed', String(enabled && allowed));
    toggle.querySelector('.trail-status').textContent = enabled && allowed ? 'on' : 'off';
    toggle.title = motion.matches ? 'Ink trail is off for reduced motion' : !finePointer.matches ? 'Ink trail is available with a mouse' : 'Toggle the blue ink trail';
    if (!allowed || !enabled) clearTrail();
  };
  if (ctx) {
    resizeTrail();
    addEventListener('resize', resizeTrail);
    document.addEventListener('pointermove', event => {
      if (!enabled || motion.matches || !finePointer.matches || event.pointerType !== 'mouse' || event.target.closest('#drawing-pad') || dialog?.open) { last = null; return; }
      const now = performance.now();
      const point = { x: event.clientX, y: event.clientY, time: now };
      if (last && now - last.time < 90 && Math.hypot(point.x - last.x, point.y - last.y) < 160) {
        segments.push({ x1: last.x, y1: last.y, x2: point.x, y2: point.y, time: now, jitter: (Math.random() - .5) * 3 });
        if (segments.length > 120) segments.shift();
        if (!frame) frame = requestAnimationFrame(paintTrail);
      }
      last = point;
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => { last = null; });
    document.addEventListener('visibilitychange', () => { if (document.hidden) clearTrail(); });
    toggle?.addEventListener('click', () => {
      enabled = !enabled;
      try { localStorage.setItem('yue-ink-trail', enabled ? 'on' : 'off'); } catch { /* Preference remains for this page. */ }
      syncToggle();
    });
    motion.addEventListener('change', syncToggle); finePointer.addEventListener('change', syncToggle);
  }
  syncToggle();

  const pad = document.querySelector('#drawing-pad');
  const padContext = pad?.getContext('2d');
  if (padContext) {
    let drawing = false, previous = null, activePointer = null;
    const wrapper = pad.parentElement;
    const status = document.querySelector('.pad-status');
    const resizePad = () => {
      const snapshot = document.createElement('canvas');
      snapshot.width = pad.width; snapshot.height = pad.height;
      if (pad.width && pad.height) snapshot.getContext('2d').drawImage(pad, 0, 0);
      const rect = wrapper.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      pad.width = Math.round(rect.width * dpr); pad.height = Math.round(rect.height * dpr);
      padContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (snapshot.width && snapshot.height) padContext.drawImage(snapshot, 0, 0, rect.width, rect.height);
      drawing = false; previous = null; activePointer = null;
    };
    const position = event => { const rect = pad.getBoundingClientRect(); return { x: event.clientX - rect.left, y: event.clientY - rect.top }; };
    const draw = (from, to, pressure) => {
      padContext.strokeStyle = '#243d91'; padContext.fillStyle = '#243d91';
      padContext.lineWidth = 1.2 + pressure; padContext.lineCap = 'round'; padContext.lineJoin = 'round';
      if (from.x === to.x && from.y === to.y) { padContext.beginPath(); padContext.arc(to.x, to.y, 1.1, 0, Math.PI * 2); padContext.fill(); }
      else { padContext.beginPath(); padContext.moveTo(from.x, from.y); padContext.lineTo(to.x, to.y); padContext.stroke(); }
    };
    resizePad(); new ResizeObserver(resizePad).observe(wrapper);
    pad.addEventListener('pointerdown', event => {
      if (activePointer !== null || (event.pointerType === 'mouse' && event.button !== 0)) return;
      activePointer = event.pointerId; drawing = true; previous = position(event); pad.setPointerCapture(event.pointerId);
      draw(previous, previous, event.pressure || .5); wrapper.classList.add('has-drawing'); status.textContent = '';
    });
    pad.addEventListener('pointermove', event => {
      if (!drawing || event.pointerId !== activePointer) return;
      const point = position(event); draw(previous, point, event.pressure || .5); previous = point;
    });
    const stopDrawing = event => { if (event.pointerId === activePointer) { drawing = false; previous = null; activePointer = null; } };
    pad.addEventListener('pointerup', stopDrawing); pad.addEventListener('pointercancel', stopDrawing); pad.addEventListener('lostpointercapture', stopDrawing);
    document.querySelector('#clear-pad').addEventListener('click', () => {
      padContext.clearRect(0, 0, pad.width, pad.height); wrapper.classList.remove('has-drawing'); status.textContent = 'A fresh page, ready for a new line.';
    });
    document.querySelector('#save-pad').addEventListener('click', () => {
      if (!wrapper.classList.contains('has-drawing')) { status.textContent = 'Draw a little something first, then save it.'; return; }
      const exportCanvas = document.createElement('canvas'); exportCanvas.width = pad.width; exportCanvas.height = pad.height;
      const exportContext = exportCanvas.getContext('2d'); exportContext.fillStyle = '#f5f3eb'; exportContext.fillRect(0, 0, exportCanvas.width, exportCanvas.height); exportContext.drawImage(pad, 0, 0);
      exportCanvas.toBlob(blob => {
        if (!blob) { status.textContent = 'Your sketch could not be saved. Please try again.'; return; }
        const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = 'a-little-blue-sketch.png'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); status.textContent = 'Your blue sketch is ready to keep.';
      }, 'image/png');
    });
  }
})();
