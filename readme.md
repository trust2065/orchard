using `yarn build` to minify and uglify by running production mode
using `yarn start` to dev with hot-reload

**recommend using vscode extension 'live server' to browse result on dev/pro environment**

## page 1 note

- story's height vh 100% minus margin
- story's max-width reference to vh (16-9)
- content's flex-basis 1/3
- large resolution(>=920px) flex direction row
- small resolution(< 920px) flex direction column
- image container's height 100% or 50%
- image's height 100%, width 100% so that object-fit would work as expect

# Interface Development Test

## Design assets

- Invision public URL: https://projects.invisionapp.com/share/5WQPC1IJM9N
- You should also have been added to the board to have access to the inspect tab.

## Test instructions

Attached you will find two screenshots representing two content blocks in a page. Complete the following:

- The code should be submitted on a public github account. Bonus points for more than one commit.
- Build the two blocks using modern HTML5 standards.
- Build a container area to house the two sections; there are no dimensional requirements for this although we're looking for something similar to bootstrap's `.container` class.
- Use JavaScript to capture all anchor clicks, and `console.log()` the element which has been clicked.
- As with any modern web-build we expect a level of interactivity/animation to be displayed on the nodes.
- All content areas should be deemed as being populated from a CMS - so all copy lengths can vary!

## Technologies

- Any CSS-preprocessors.
- Any CSS frameworks.
- If vanilla CSS is used, please include some reasoning for the decision.
- Build tools and task runners are encouraged (i.e. grunt/gulp/webpack).

## Layout

- The layout is expected to work in the latest Chrome/FireFox/Edge versions.
- The layout should be responsive and work down to a `320px` mobile device.
- Bearing in mind that this application is expected to be responsive, the developer should consider the appropriate `<meta>` tags.
- _Section: All the latest:_ Each image in this section should display in a modal on click.
- _Section: Answer your body's needs:_ These items should be links to new pages.

## Review Criteria

We are looking for your ability to give life to static designs. During that process consider:

- _Project structure:_ Clean project and logical traversal.
- _JavaScript:_ Efficiency of code and efficacy in bringing the design to life.
- _Interface:_ Semantic markup and styling.
- _Git:_ Bonus points for submission on a github account showing multiple commits.
- _Quality:_ Production-grade.
