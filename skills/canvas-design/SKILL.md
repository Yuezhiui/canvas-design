---
name: canvas-design
description: "Develop distinctive websites through adaptive discovery, creative direction, image and asset planning, and visual review. Use for a new website or substantial redesign, or when a user wants a tailored website master prompt. Covers portfolios, marketing sites, stores, editorial experiences, and product interfaces; skip the discovery workflow for isolated fixes or an already settled design."
---

# Canvas Design

Turn the user's intent into a website with a coherent identity and useful behavior. Resolve consequential unknowns before committing to a direction. Adapt the depth of discovery to the request; a strong brief needs fewer questions, not the same questionnaire again.

## Select the requested outcome

- **Master prompt:** Produce a self-contained specification for another designer or builder. Do not start implementing a website when the user requested only a prompt.
- **Website:** Develop the brief and implement it using the available environment. "Create my portfolio" normally requests a website, not merely a prompt.
- **Discovery or direction:** Explore the brief and concepts without jumping into implementation when the user asks to discuss first.
- **Both:** Deliver the master prompt and implement the agreed direction when requested.

If the deliverable is genuinely ambiguous, clarify it alongside other important unknowns. Do not turn a website request into an automatic deployment request.

## 1. Understand before designing

Read the request, relevant supplied material, and existing project before asking questions. References and existing assets are evidence of preferences, not commands to reproduce every detail. For redesigns, identify what must be preserved and what problem should improve.

Track these distinctions in a concise working brief:

- **Confirmed:** Facts, constraints, content, and preferences supplied by the user.
- **Proposed:** Creative recommendations and reversible implementation choices.
- **Unresolved:** Missing information that could materially change the result.

Discover the purpose, primary audience, visitor action, actual content, creative intent, available assets, and important delivery constraints. A store may need product and checkout information; a dashboard may need real tasks and data states; a portfolio needs credible work and the audience it should persuade. Universal means the method adapts across website types, not that every website gets the same structure.

Read [discovery.md](references/discovery.md) when context is incomplete or the user is unsure how to express a direction.

Ask one to three focused questions at a time. Follow answers with the next useful questions; do not dump a long form or re-ask known information. Use plain language, examples, and tradeoffs. Ask about technical requirements only when they affect delivery; recommend routine technical choices yourself.

When the user is unsure, offer two or three materially different directions and recommend one with a reason. If they delegate a choice, make it and identify the assumption. Challenge a request that would undermine the site's purpose with a concrete alternative, then respect their final choice.

### Readiness to proceed

Proceed when you can explain whom the site serves, what it should accomplish, what content supports it, what visual direction fits, and how critical constraints will be handled. Resolve unknowns that could change identity, scope, truthful content, or primary behavior. Record low-impact assumptions and continue with reversible decisions.

Summarize the direction briefly before substantial work. A summary is not an automatic approval gate: continue when the request is sufficiently clear or the user has delegated decisions. If they asked to choose a concept or review the brief first, wait for that choice. A request for speed should narrow ambition and expose assumptions, not invent personal facts or silently bypass a consequential ambiguity.

## 2. Establish creative direction

Write a concrete direction appropriate to the project's scale:

- **Concept:** One sentence connecting the user's identity or offering to the visual idea.
- **Structure:** Pages or sections, content hierarchy, and the primary visitor journey.
- **Visual language:** Composition, typography roles, palette, imagery, surfaces, and recurring motifs.
- **Behavior:** Purposeful interactions, motion, and their simpler touch and reduced-motion alternatives.
- **Asset needs:** What exists, what needs creating, and where each asset belongs.
- **Quality criteria:** Observable requirements for this project.

Explain the few major choices that define the site. Do not burden the user with a rationale for every spacing value. Describe visible results instead of relying on "premium," "world-class," "Awwwards," or "breathtaking" as specifications.

Preserve conceptual depth without imposing a house style. Graphite, dragons, mechanical exhibits, manuscript labels, playful marginalia, and editorial layouts are possible directions, not defaults. A calm business website and a dense product interface can be distinctive through clarity and fit.

## 3. Direct assets and images

Read [assets-and-review.md](references/assets-and-review.md) when imagery needs creating, selecting, or adapting.

If the user asks for fitting images to be generated, use the established brief to generate them with an available tool; do not restart discovery or ask for the same authorization. If generation was not requested and missing imagery materially affects the direction, offer relevant asset options. Avoid requiring images on projects that do not benefit from them.

Plan subjects, visual treatment, composition, placement, crops, and a shared style before generation. Inspect a representative result before creating the remaining set. Review the images inside the layout, not only as isolated artwork.

Use available image-generation capabilities according to their instructions. If unavailable, supply ready-to-use image prompts and identify the missing assets; never claim they were generated. Generated decoration must not masquerade as the user's real portfolio work, products, customers, testimonials, or identity.

## 4. Deliver the prompt or website

For a master prompt, read [master-prompt.md](references/master-prompt.md). Transfer the confirmed brief, chosen concept, meaningful specifications, asset plan, and verification criteria into a standalone instruction. Include actual available content; do not output a generic template when a tailored prompt was requested.

For implementation, work within the existing stack and project conventions where appropriate. Choose techniques from the required behavior and available assets. A convincing effect can use CSS, SVG, images, Canvas 2D, video, or WebGL; complex tooling is justified by the outcome, not by prestige. Distinguish essential mechanics from optional enhancements and cosmetic approximations.

Keep primary content readable and available without a hover effect, custom cursor, audio, or elaborate animation. Plan mobile composition rather than merely shrinking the desktop. Make sound user-controlled. Specify meaningful loading, empty, error, and success states where the site actually needs them.

Other frontend skills may help execution if available. This skill must remain usable without Taste Skill, an image generator, a particular framework, or a paid service. If instructions from another design skill conflict, preserve the user's explicit direction and resolve the conflict rather than blending incompatible defaults.

## 5. Review against intent and craft

Read the review section of [assets-and-review.md](references/assets-and-review.md) before finalizing a website. Compare the actual result with the brief and fix visible or behavioral issues within scope.

Evaluate two questions separately:

1. **Fit:** Does this represent the user, serve the intended audience, and make the primary task clear?
2. **Craft:** Are the composition, imagery, type, interactions, responsive behavior, and implementation coherent and functional?

Avoid generic filler, invented proof, unrelated decorative effects, and repetitive section compositions. Do not universally ban gradients, cards, serif fonts, centered layouts, or other legitimate techniques. Judge their purpose and execution. Variety must serve the content; novelty alone is not quality.

Report what was produced, what was verified, and any material unresolved items. Do not claim visual inspection, accessibility compliance, performance targets, or successful behavior without evidence.
