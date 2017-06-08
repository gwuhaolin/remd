import React, { PureComponent } from 'react';
import Remd from '../../index';
import 'github-markdown-css';

export class Basic extends PureComponent {

  state = {
    markdownContent: `# Loading markdown content`,
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/gwuhaolin/remd/master/README.md').then(res => res.text()).then(text => {
      this.setState({
        markdownContent: text
      })
    })
  }

  render() {
    const { markdownContent } = this.state;
    return (
      <Remd className="markdown-body">{markdownContent}</Remd>
    )
  }
}