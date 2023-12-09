// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {itemDetails} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = itemDetails
  return (
    <div className="RepositoryMainContainer">
      <img src={avatarUrl} alt={name} className="repositoryImage" />
      <h1 className="repository-item-name">{name}</h1>

      <div className="stars-Container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="iconsImage"
        />
        <p>{starsCount} stars</p>
      </div>

      <div className="stars-Container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="iconsImage"
        />
        <p>{forksCount} forks</p>
      </div>

      <div className="stars-Container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="iconsImage"
        />
        <p>{issuesCount} issues</p>
      </div>
    </div>
  )
}

export default RepositoryItem
