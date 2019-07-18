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

## Accept various text length

To prove it, add `?debug=1` in the end of url (such as http://localhost:8080/?debug=1), then click on text to see result.
