using `yarn build` to minify and uglify by running production mode
using `yarn start` to dev with hot-reload

## recommand using vscode extenstion 'live server' to browse result on dev/pro environment

## page 1 note

- story's height vh 100% minus margin
- story's max-width reference to vh (16-9)
- content's flex-basis 1/3
- large resolution(>=920px) flex direction row
- small resolution(< 920px) flex direction column
- image container's height 100% or 50%
- image's height 100%, width 100% so that object-fit would work as expect

Please note naming on custom class is different(apply camelCase) from Bootstrap's naming style(join with dash, such as `pt-3`) in purpose so that developers can realize it is customize class.
Ex:
`pt-3`, it is Bootstrap naming style, which means `$space * 1`
`pt07`, it is camelCase naming style, which is a customized class means `padding-top: 0.7rem`

Some of Bootstrap variable has been change in order to meet color's need

```
$body-bg: #0e1414;
$danger: #cf1430;
$secondary: #c2c2c2;
```
