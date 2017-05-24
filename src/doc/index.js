import * as React from 'react';
import { render } from 'react-dom';
import ReDemo from 'redemo';
import { Basic } from './demo/basic';
import './index.scss';

const demo = (
  <ReDemo
    className="my-demo"
    title="Remd demo"
    docgen={require('!!docgen-loader!../index')}
    doc="react markdown component"
    code={require('!!raw-loader!./demo/basic')}
    codeVisible
    propTypeVisible
    methodsVisible
  >
    <Basic/>
  </ReDemo>
)

render(demo, window.document.getElementById('app'));