import React from 'react'
import Animator from 'react-state-animation'

export default class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      alpha: 1
    }
    // react state animation wrapper
    this._animate = new Animator(this);
  }

  start() {
    var last_alpha = this.state.alpha;
    this._animate.quadOut('x', 850/*end value*/, 1200/*duration(ms)*/)
    .then(() => this._animate.cubicInOut('x', 0, 2000));

  }

  stop() {
    this._animate.stop()
  }

  getAnimatedStyle() {
    return {
      position: 'relative',
      color: 'black',
      backgroundColor: 'blue',
      opacity: this.state.alpha,
      left: this.state.x,
      height: this.state.y + 200,
      width: 100 + (100 * (1 / (this.state.x+1))),
      cursor: 'pointer'
    }
  }

  handleClick() {
    this.start();
  }

  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="page-header">
          <div className="row">
            <div className="col-lg-12">
              <h2 id="animation">Animation</h2>
            </div>
          </div>
        </div>
        <div style={this.getAnimatedStyle()} onClick={this.handleClick.bind(this)}>
          <h1>Animate movement</h1>
        </div>
      </div>
    )
  }
}

Demo.propTypes = {
  height: React.PropTypes.isNumber,
  width: React.PropTypes.isNumber
}

Demo.defaultProps = {
  width: 50,
  height: 50
}
