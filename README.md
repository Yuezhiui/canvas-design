<div align="center">

<img src="examples/dragon-portfolio/assets/dragon-coil.png" width="150" alt="An intricate dragon drawn in blue ink on warm paper">

# Canvas Design

**Give your website a point of view.**

A creative-direction skill that turns a rough idea into a clear brief, fitting artwork, and a distinctive website.

Adaptive discovery · Art direction · Image planning · Master prompts · Website building · Visual review

</div>

![Yue's dragon portfolio: large blue typography, a dragon drawing on a taped paper sheet, and a quiet sketchbook layout](demo/dragon-home.png)

## About

“Make me a portfolio with a dragon pencil design” can mean many different things. Canvas Design helps an AI assistant find the right interpretation before it commits to a layout.

It asks focused questions when important context is missing, offers concrete directions when you are unsure, and proceeds when the brief is clear. It connects your audience, content, visual concept, imagery, and interactions into one coherent direction.

The result can be a **complete master prompt**, a **working website**, or both, depending on what you ask for. The skill does not impose a blue palette, a sketchbook look, a particular framework, or elaborate effects on every project.

## What it does

| Capability | How it helps |
| --- | --- |
| Adaptive discovery | Asks a few useful questions at a time and skips what you already answered. |
| Creative direction | Connects the site's purpose to its structure, typography, imagery, materials, and behavior. |
| Asset direction | Plans images for their actual placement, including composition, negative space, and mobile crops. |
| Image generation | Uses an available image tool when requested, or provides ready-to-use image prompts if generation is unavailable. |
| Master prompts | Produces a self-contained, project-specific brief another builder can use. |
| Implementation | Builds within your chosen stack and constraints, using techniques that fit the intended behavior. |
| Visual review | Checks the actual result against the brief, including responsive layouts and meaningful interactions. |

## Install

Using the [Skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add Yuezhiui/canvas-design --skill canvas-design
```

For a manual Codex installation, copy the complete [`skills/canvas-design`](skills/canvas-design) folder into `~/.codex/skills/canvas-design`. Keep its `references` and `agents` folders together with `SKILL.md`.

The portable instructions live in [`SKILL.md`](skills/canvas-design/SKILL.md). Your assistant must support loading skills or be given those instructions directly. Image generation, browser previews, and implementation depend on the tools available in your environment.

## Use

In Codex, invoke the skill with `$canvas-design` and describe the result you want:

```text
$canvas-design Create a simple three-page portfolio with blue dragon
sketches, sketch-style hover effects, and a fading blue mouse trail.
Use HTML, CSS, and JavaScript. Help me resolve any important missing context.
```

For a prompt instead of a build:

```text
$canvas-design Help me develop the direction for my portfolio, then
write a complete master prompt for another website builder.
```

For missing artwork:

```text
$canvas-design I don't have images. Plan and generate illustrations
that fit the concept and the places they will appear on the page.
```

You do not need to know design terminology. Explain what you want to achieve, share what you have, and let the skill help clarify the direction. If you already have a complete brief, it should work from that rather than interview you again.

## Dragon sketchbook example

The example began with two blue-ink dragon drawings and a request for a simple website. Discovery established a personal portfolio for **Yue**, aimed at art lovers and collaborators, with the supplied drawings featured as original work.

The resulting three-page site uses warm paper, blue ink, readable typography, small handwritten notes, and a restrained layout. The artwork sets the visual direction; the interface gives it room.

| Page | Included behavior |
| --- | --- |
| Home | Featured dragon, sketchbook navigation, sketch hover marks, and a fading mouse trail. |
| Sketchbook | Both drawings, keyboard-accessible enlarged views, and image downloads. |
| About | Introduction and an optional drawing pad with clear and PNG export controls. |

The example uses **plain HTML, CSS, and JavaScript** with no framework, external fonts, or build step. The trail can be switched off and is disabled for touch input and reduced motion. Contact details are empty by default; the name and role can be edited in `profile.js`.

### Run the example

Open [`examples/dragon-portfolio/index.html`](examples/dragon-portfolio/index.html) in a browser, or run a local server:

```sh
cd examples/dragon-portfolio
python -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173`.

### More previews

![The sketchbook page displaying two original blue-ink dragon drawings](demo/dragon-sketchbook.png)

<details>
<summary>About page and mobile layout</summary>

![The About page with Yue's introduction and an interactive drawing pad](demo/dragon-about.png)

<img src="demo/dragon-mobile.png" width="320" alt="The responsive home page on a narrow mobile screen">

</details>

## Design principles

- **Specificity before spectacle.** A concept needs concrete visual and behavioral decisions, not a string of adjectives.
- **Context before defaults.** Audience, identity, and content should shape the site.
- **A coherent visual world.** Imagery, typography, surfaces, and interactions should belong together.
- **Useful originality.** Decorative effects should support the experience; novelty alone is not quality.
- **Honest content.** Generated artwork must not masquerade as real projects, clients, testimonials, or personal facts.
- **Evidence over promises.** Inspect and test the result. Good prompts do not guarantee good design.

Cards, gradients, serif fonts, and centered layouts are not universally banned. Their purpose and execution matter more than a checklist of fashionable prohibitions.

## Repository structure

```text
skills/canvas-design/
  SKILL.md                     Core workflow
  agents/openai.yaml           Codex interface metadata
  references/
    discovery.md               Adaptive interview guide
    master-prompt.md           Tailored prompt guidance
    assets-and-review.md       Image direction and visual checks
examples/dragon-portfolio/     Complete three-page website
demo/                         Desktop and mobile screenshots
```

## Validation

The skill package passed metadata and reference-link validation. The dragon example was checked in Chrome for desktop and 320/390px layouts, asset and navigation loading, hover marks, trail painting and fading, trail preference persistence, keyboard dialog access, drawing export and clearing, and reduced-motion behavior. These checks are evidence for this example, not a guarantee for every site generated with the skill.

Dragon illustrations supplied by Yue. The example preserves the original artwork files.
