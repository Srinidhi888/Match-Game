import './index.css'

import {Component} from 'react'

import Navbar from '../Navbar'

import TabItem from '../TabItem'

class MatchGame extends Component {
  state = {
    tabId: 'FRUIT',
    sec: 60,
    score: 0,
    img: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    isActive: false,
  }
  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {sec} = this.state
    if (sec !== 0) {
      this.setState(prevState => ({sec: prevState.sec - 1}))
    } else {
      clearInterval(this.timerId)
    }
  }

  changePic = thumbnailUrl => {
    const {img} = this.state
    const {imagesList} = this.props
    const getImg = imagesList.filter(each => each.thumbnailUrl === thumbnailUrl)
    const image = getImg[0].imageUrl
    if (image === img) {
      const newImg =
        imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl
      this.setState(prevState => ({score: prevState.score + 1, img: newImg}))
    } else {
      this.setState(prevState => ({
        isActive: !prevState.isActive,
      }))
      clearInterval(this.timerId)
    }
  }

  onSelect = tabId => {
    this.setState({tabId})
  }

  playBtn = () => {
    const {imagesList} = this.props
    this.setState(prevState => ({
      isActive: false,
      tabId: 'FRUIT',
      img: imagesList[0].imageUrl,
    }))
    this.setState({sec: 60, score: 0})
    this.timerId = setInterval(this.tick, 1000)
  }

  render() {
    const {imagesList, tabsList} = this.props
    const {tabId, sec, score, img, isActive} = this.state
    const updatedList = imagesList.filter(each => each.category === tabId)
    const display1 = (
      <div className="total-bg">
        <div className="inner-bg">
          <img className="match-img" src={img} alt="match" />
        </div>
        <ul className="lst">
          {tabsList.map(each => (
            <TabItem
              details={each}
              key={each.tabId}
              onSelect={this.onSelect}
              tab={tabId}
            />
          ))}
        </ul>
        <ul className="lists">
          {updatedList.map(each => (
            <li key={each.id}>
              <button
                type="button"
                className="icon-btn"
                onClick={() => this.changePic(each.thumbnailUrl)}
              >
                <img className="icon" src={each.thumbnailUrl} alt="thumbnail" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )

    const display2 = (
      <div className="total-bg">
        <div className="bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy-img"
          />
          <p>YOUR SCORE</p>
          <h1>{score}</h1>
          <button className="play-btn" onClick={this.playBtn} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    )

    return (
      <div>
        <Navbar sec={sec} score={score} />

        {sec === 0 || isActive ? display2 : display1}
      </div>
    )
  }
}

export default MatchGame
