---
title: Embedding in Existing Sites
layout: home
parent: Published Sites
grand_parent: Projects
nav_order: 1
---
# Embedding an AVAnnotate Project in an Existing Website

AVAnnotate projects are published as standalone websites hosted on GitHub Pages. Once published, a project can be embedded into an existing website, such as a WordPress site, a course management system, or an institutional webpage, using an HTML `iframe` element. This allows users to display their AVAnnotate project within a broader web context without requiring visitors to leave the host site.

## Basic iframe Code

To start the embedding process, copy the URL of the desired AVAnnotate project from the project's published site. Once copied, the code below will be used to embed the AVAnnotate project into an existing website. 

<pre><code>
<iframe>
  src="https://[username].github.io/[project-slug]/"
  width="100%"
  height="800"
  style="border: none;"
  title="AVAnnotate Project">
</iframe>
</code></pre>

Paste this code into your website's HTML editor wherever you want the project to appear.

## Adjusting the iframe Display

Replace `https://[username].github.io/[project-slug]/` with the actual project URL. 

The `width` and `height` attributes control the size of the embedded frame. Width can be set as a percentage of the page container or as a fixed pixel value. For example, `width="100%"` means the iframe will span the full width of its container. Height is typically set in pixels. For AVAnnotate projects, a minimum of 700 to 800 pixels is recommended.

To remove the default border that some browsers and applications automatically apply around iframes, set the `style` attribute to `"border: none;"`.

The `title` attribute is required for accessibility purposes. It should briefly describe the contents of the iframe for screen readers.

## Embedding in WordPress

1. Open the WordPress page or post where the AVAnnotate project will be displayed.
2. Click the `+` icon to add a new block and search for `Custom HTML`.
3. Select the `Custom HTML` block.
4. Paste the iframe code into the block.
5. Select `Preview` to confirm the project displays correctly before publishing.
6. Select `Publish` or `Update` to save the page.

## Embedding in Other Platforms

The same iframe code used to embed a project in WordPress works across most web platforms that allow custom HTML. Below are the steps to embed AVAnnotate projects in other common platforms.

<b>Squarespace:</b> Add a `Code` block to your page and paste the iframe code directly into it. 
{: .note }
> In Squarespace, code blocks that include iframes may only render in preview or published view, not in the editor.

<b>Wix:</b> Use the `Embed HTML` widget (found under `Add`-->`More`-->`HTML iframe`) and paste the code into the provided field.

<b>Omeka:</b> In an Omeka exhibit or simple page, switch to the HTML source view in the text editor and paste the iframe code.

<b>Canvas</b> In the Rich Content Editor, select the HTML editor option (`< >`) and paste the iframe code. Note that some Canvas instances restrict iframes to approved domains; consult your institution's Canvas administrator if the embed does not display.
