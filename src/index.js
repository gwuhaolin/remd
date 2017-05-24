import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

/**
 * React markdown component base on remarkable
 */
export default class Remd extends PureComponent {

  static propTypes = {
    /**
     * append className to Redemo
     */
    className: PropTypes.string,
    /**
     * set style for Redemo
     */
    style: PropTypes.object,
    /**
     * markdown source
     */
    children: PropTypes.string,
  }

  static defaultProps = {
    children: '',
  }

  constructor(props) {
    super(props);
    const { children } = this.props;
    this.state = {
      mdHTML: marked(children),
    }
  }

  componentWillReceiveProps(nextProps) {
    const { children } = this.props;
    if (nextProps.children !== children) {
      this.setState({
        mdHTML: marked(nextProps.children)
      });
    }
  }

  render() {
    const { className, style } = this.props;
    const { mdHTML } = this.state;
    return (
      <div className={className} style={style} dangerouslySetInnerHTML={{ __html: mdHTML }}/>
    )
  }
}