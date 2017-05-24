[![Npm Package](https://img.shields.io/npm/v/remd.svg?style=flat-square)](https://www.npmjs.com/package/remd)
[![Npm Downloads](http://img.shields.io/npm/dm/remd.svg?style=flat-square)](https://www.npmjs.com/package/remd)
[![Dependency Status](https://david-dm.org/gwuhaolin/remd.svg?style=flat-square)](https://npmjs.org/package/remd)

# remd
react markdown component

## install
```bash
npm i remd
```

## example
```js
import React, { PureComponent } from 'react';
import Remd from 'remd';

export default class extends PureComponent {

  render() {
    return (
      <Remd>
        # hello,remd
      </Remd>
    )
  }
}
```

## API
see `Remd`'s all props [here](https://gwuhaolin.github.io/remd/)

## In practice
- [redemo](https://github.com/gwuhaolin/redemo)