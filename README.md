## Setup

1. Clone this repository into the root of your projects dir¨.
1. b) Optional: Add it to `.gitignore` or delete `.git` to avoid issues with git-within-git.
2. Move or copy `index.html` into the root of your projects dir.

Edit the `includes.html` file to point at your files, for reference see `includes.html.sample`:
```html
<div class="menu" name="Week 1">
    <p class="link-item" hreflang="html" href="example-content/1.html">Example subPage 1.</p>
    <p class="link-item" hreflang="html" href="example-content/1.5.html">Example subPage 1.5.</p>
</div>

<div class="menu" name="Week 2">
    <p class="link-item" hreflang="html" href="example-content/2.html">Example Page 2a.</p>
    <p class="link-item" hreflang="html" href="example-content/2.html">Example Page 2b.</p>
</div>
```

When done you should have the following structure:

```
showcase/
index.html
...
```
