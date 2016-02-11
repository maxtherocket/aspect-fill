# aspect-fill

[![build status][1]][2]

[![browser support][3]][4]

Returns scale and dimensions of a rectangular area that fills the parent area.

See [aspect-fit](http://github.com/maxtherocket/aspect-fit) for a **fit** calculation

## Example

```js
var fill = require("aspect-fill")
// fill(areaWidth, areaHeight, parentWidth, parentHeight);
var fillResult = fill(400, 200, 800, 400);
// fillResult == {scale:2, width:800, height:400}
```

## Installation

`npm install aspect-fill`

## Contributors

 - maxtherocket

## MIT Licenced

  [1]: https://secure.travis-ci.org/maxtherocket/aspect-fill.png
  [2]: http://travis-ci.org/maxtherocket/aspect-fill
  [3]: http://ci.testling.com/maxtherocket/aspect-fill.png
  [4]: http://ci.testling.com/maxtherocket/aspect-fill