// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickShow = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {faqItem} = this.props

    const {questionText, answerText} = faqItem
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altTxt = isActive ? 'minus' : 'plus'
    return (
      <li>
        <div>
          <h1>{questionText}</h1>
          <button type="button" onClick={this.onClickShow}>
            <img src={imgUrl} alt={altTxt} />
          </button>
          {isActive && <p>{answerText}</p>}
        </div>
      </li>
    )
  }
}
export default FaqItem
