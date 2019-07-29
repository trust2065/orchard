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

Please note there are custom class that following Bootstrap's naming strategy.
Ex:
`line-height-28`, which set `line-height 28px;`
`letter-spacing-04`, which set `letter-spacing 0.4px;`

Some of Bootstrap variable has been change in order to meet color's need

```
$body-bg: #0e1414;
$danger: #cf1430;
$secondary: #c2c2c2;
```
