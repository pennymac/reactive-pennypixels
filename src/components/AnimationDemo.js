import React from 'react'
import {AnimatedComponent} from 'react-set-animate'

export default class Demo extends AnimatedComponent {
  constructor(props) {
    super(props)
    this.state = {
      x: 1000,
      y: 0,
      alpha: 1,
      backgroundColor: 'green',
      enableClick: false
    }
  }

  componentDidMount() {
    this.setAnimate('x', 0, 3000)
    .then( () => this.setState({ enableClick: true }))

  }

  getAnimatedStyle() {
    return {
      position: 'relative',
      color: 'white',
      backgroundColor: this.state.backgroundColor,
      textAlign: 'center',
      paddingTop: 60,
      fontSize: '2em',
      opacity: this.state.alpha,
      left: this.state.x,
      height: this.state.y + 200,
      width: 100 + (100 * (1 / (this.state.x+1))),
      cursor: 'pointer'
    }
  }

  handleClick() {
    if (this.state.enableClick) {
      var last_alpha = this.state.alpha;
      this.setAnimate('x', 550/*end value*/, 800/*duration(ms)*/)
      .then(() => this.setAnimate('x', 0, 1600));

      this.setAnimate('backgroundColor', 'red'/*end value*/, 800/*duration(ms)*/)
      .then(() => this.setAnimate('backgroundColor', 'green', 1600));
    }
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
          {this.state.enableClick ? '\nClick here' : 'Animated movement'}
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
