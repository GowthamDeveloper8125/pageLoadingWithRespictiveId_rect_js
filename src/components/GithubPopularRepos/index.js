import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    sellectingButton: languageFiltersData[0].id,
    repositoryItems: [],
    isLoading: true,
    somethingWentWrong: false,
  }

  componentDidMount() {
    this.gettingUrlDetails()
  }

  gettingUrlDetails = async () => {
    const {sellectingButton} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${sellectingButton}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok === true) {
      const update = data.popular_repos
      const updatedData = update.map(eachItem => ({
        avatarUrl: eachItem.avatar_url,
        forksCount: eachItem.forks_count,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        name: eachItem.name,
        starsCount: eachItem.stars_count,
      }))
      this.setState({
        repositoryItems: updatedData,
        isLoading: false,
        somethingWentWrong: false,
      })
      console.log(updatedData)
    } else {
      this.setState({somethingWentWrong: true})
    }
  }

  updatingValues = id => {
    console.log(id)
    this.setState(
      {sellectingButton: id, isLoading: true},
      this.gettingUrlDetails,
    )
  }

  render() {
    const {
      repositoryItems,
      isLoading,
      somethingWentWrong,
      sellectingButton,
    } = this.state
    return (
      <div>
        <h1 className="popularHeading">Popular</h1>
        <div className="ListContainer">
          {languageFiltersData.map(eachItem => (
            <li className="ListItems" key="eachItem.id">
              <LanguageFilterItem
                eachButton={eachItem}
                updatingValues={this.updatingValues}
                buttonStyle={
                  sellectingButton === eachItem.id
                    ? 'onClickStyle'
                    : 'buttonStyle'
                }
              />
            </li>
          ))}
        </div>

        <div>
          {isLoading ? (
            <div className="LoaderContainer" data-testid="loader">
              <Loader type="ThreeDots" color="blue" />
            </div>
          ) : (
            <div>
              {somethingWentWrong ? (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
                    alt="failure View"
                  />
                </div>
              ) : (
                <div className="RepostoryItemsMainContainer">
                  {repositoryItems.map(eachItem => (
                    <li key={eachItem.id} className="ListItems">
                      <RepositoryItem itemDetails={eachItem} />
                    </li>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
