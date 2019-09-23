# Orchard Demo Page

## How to build

```cmd
yarn
yarn start

```

## Built production version

<https://choco-orchard.netlify.com>

## Note

There are custom classes that following Bootstrap's naming strategy.
Ex:
`line-height-28`, which set `line-height 28px;`
`letter-spacing-04`, which set `letter-spacing 0.4px;`

Some of Bootstrap variable has been change in order to meet color's need

```scss
$body-bg: #0e1414;
$danger: #cf1430;
$secondary: #c2c2c2;
```

## Test instructions

### Build a container area to house the two sections

Using `bootstrap` container
<https://github.com/trust2065/orchard/blob/master/index.html#L10>
<https://github.com/trust2065/orchard/blob/master/src/custom.scss#L3-L5>

### Use JavaScript to capture all anchor clicks, and `console.log()` the element which has been clicked

In order to save memory, I use only one event listener to catch all click events.
<https://github.com/trust2065/orchard/blob/master/src/index.js#L13-L17>

### All content areas should be deemed as being populated from a CMS - so all copy lengths can vary

To prove it, add `?debug=1` in the end of url (such as <https://choco-orchard.netlify.com/?debug=1>). Contents will change when page refresh.

### As with any modern web-build we expect a level of interactivity/animation to be displayed on the nodes

Animation build on hover of images. And also loading indicator of image in modal.

## Technologies

### Any CSS-preprocessor

I use SASS and compile via webpack
<https://github.com/trust2065/orchard/blob/master/src/style.scss>
<https://github.com/trust2065/orchard/blob/master/webpack.config.js#L16-L32>

### Any CSS frameworks

Bootstrap 4.3
<https://github.com/trust2065/orchard/blob/master/index.html>

### Build tools and task runners are encouraged

Webpack
<https://github.com/trust2065/orchard/blob/master/webpack.config.js>

### consider the appropriate `<meta>` tags

<https://github.com/trust2065/orchard/blob/master/index.html#L4-L6>

### Section: All the latest:\* Each image in this section should display in a modal on click

indicate after merge `modal` branch.

### Section: Answer your body's needs:\* These items should be links to new pages

the requirement is not done yet, will do soon.

## Review Criteria

### Quality:\* Production-grade

1. output file is name with hash value, it prevents cache in production.

2. css file is separated from html file.

3. implement CI by setup Netlify.
