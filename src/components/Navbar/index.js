import './index.css'

const Navbar = props => {
  const {sec, score} = props
  return (
    <ul className="navbar-bg">
      <li>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </li>
      <li className="navbar-inner">
        <p>
          Score: <span className="spcl">{score}</span>
        </p>
        <div className="navbar-inner">
          <img
            className="clock-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="spcl">{sec} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default Navbar
