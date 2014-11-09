# Basscss Color Basic

Basic color module for Basscss.

http://basscss.com

# Usage

Compile with Rework, using the following plugins:
- [rework-npm](https://github.com/reworkcss/rework-npm)
- [rework-vars](https://github.com/reworkcss/rework-vars)

Basscss Utilities also works with:
- [Basswork](https://github.com/jxnblk/basswork)
- [Suitcss Preprocessor](https://github.com/suitcss/preprocessor)

# Defaults

## Variables
To edit these defaults, define new variables afer importing basscss-color-basic.

```css
:root {

  --dark-gray: #304650;
  --blue: #0076df;
  --mid-gray: #667680;
  --light-gray: #f3f9f9;
  --red: #f95020;
  --green: #00d930;
  --yellow: #ffdc00;

  --darken-1: rgba(#036,.03125);
  --darken-2: rgba(#036,.0625);
  --darken-3: rgba(#036,.125);

  --border-color: var(--darken-3);
  --border-width: 1px;
  --border-radius: 3px;

}
```

