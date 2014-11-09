# Basscss Base

Base element styles for use with Rework. 

http://basscss.com

#Usage

Compile with Rework, using the following plugins:
- [rework-npm](https://github.com/reworkcss/rework-npm)
- [rework-vars](https://github.com/reworkcss/rework-vars)
- [rework-calc](https://github.com/reworkcss/rework-calc/)

Basscss Base also works with:
- [Basswork](https://github.com/jxnblk/basswork)
- [Suitcss Preprocessor](https://github.com/suitcss/preprocessor)

# Defaults

## Variables
To edit these defaults, define new variables afer importing basscss-base.

```css
:root {

  --font-family: 'Helvetica Neue', Helvetica, sans-serif;
  --line-height: 1.5;
  --heading-font-family: var(--font-family);
  --heading-font-weight: bold;
  --heading-line-height: 1.25;
  --monospace-font-family: 'Source Code Pro', Consolas, monospace;

  --h1: 2rem;
  --h2: 1.5rem;
  --h3: 1.25rem;
  --h4: 1rem;
  --h5: .875rem;
  --h6: .75rem;

  --bold-font-weight: bold;

  --space-1: .5rem;
  --space-2: 1rem;
  --space-3: 2rem;
  --space-4: 4rem;

  --ui-height: 2.25em;
  --ui-padding-x: 1rem;
  --ui-padding-y: .25em;

}
```
