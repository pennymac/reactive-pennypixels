import React from 'react'
import ReactStateAnimation from 'react-state-animation'

export default class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      alpha: 1
    }
    // react state animation wrapper
    this._animate = new ReactStateAnimation(this);
  }

  start() {
    var last_alpha = this.state.alpha;
    this._animate.easeInOutCubic('x', 850/*end value*/, 1200/*duration(ms)*/)
    .then(() => this._animate.easeOutCubic('alpha', last_alpha * 0.5, 1000))
    .then(() => this._animate.easeInOutCubic('x', 0, 2000));
  }

  stop() {
    this._animate.stop()
  }

  getStyle() {
    return {
      position: 'relative',
      color: 'black',
      backgroundColor: 'blue',
      //left: this.state.x + 'px',
      opacity: this.state.alpha,
      left: '0px',
      width: (this.state.x + 100), //this.props.width,
      height: this.props.height,
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
        <div style={this.getStyle()} onClick={this.handleClick.bind(this)}>
          Click here to start a recursive animation sequence. Keep clicking me
          but I never go away...or do I?
          <div>{this.state.alpha}</div>
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
  height: 150
}
