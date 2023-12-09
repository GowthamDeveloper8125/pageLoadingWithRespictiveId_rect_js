// Write your code here
import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  onClickingButton = () => {
    const {eachButton, updatingValues} = this.props
    const {id} = eachButton
    updatingValues(id)
  }

  render() {
    const {eachButton, buttonStyle} = this.props
    const {language} = eachButton
    return (
      <li className="buttonContainer">
        <button
          type="button"
          className={buttonStyle}
          onClick={this.onClickingButton}
        >
          {language}
        </button>
      </li>
    )
  }
}

export default LanguageFilterItem
