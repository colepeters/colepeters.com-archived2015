# Basscss Utilities

Basic display, layout, typographic, and white space utilities for use with Rework.

http://basscss.com

# Usage

Compile with Rework, using the following plugins:
- [rework-npm](https://github.com/reworkcss/rework-npm)
- [rework-vars](https://github.com/reworkcss/rework-vars)
- [rework-custom-media](https://github.com/reworkcss/rework-custom-media/)

Basscss Utilities also works with:
- [Basswork](https://github.com/jxnblk/basswork)
- [Suitcss Preprocessor](https://github.com/suitcss/preprocessor)

# Defaults

## Custom Media Queries
To edit these defaults, define new custom media queries afer importing basscss-utilities.

```css
@custom-media --breakpoint-sm (min-width: 40em);
@custom-media --breakpoint-md (min-width: 52em);
@custom-media --breakpoint-lg (min-width: 64em);
```

## Variables
To edit these defaults, define new variables afer importing basscss-utilities.

```css
:root {
  --space-1: .5rem;
  --space-2: 1rem;
  --space-3: 2rem;
  --space-4: 4rem;
  --bold-font-weight: bold;
}
```

