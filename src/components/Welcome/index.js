import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  isClicked = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getText()
    return (
      <div className="welcome-container">
        <h1 className="title">Welcome</h1>
        <p className="pera-tag">Thank you!Happy learning</p>
        <div>
          <button className="btn-sty" type="button" onClick={this.isClicked}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
