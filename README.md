# olivier-projects

> create list of projects

## Usage

```js
var projects = require('olivier-projects');
document.body.appendChild(projects({
  projects: [{
    name: 'foo',
    summary: 'hello world'
  }]
}))
```

## Notes

This module uses [vomit](http://github.com/bredele/vomit) underneath which will at some point support server side rendering as well as diff on data streams.
