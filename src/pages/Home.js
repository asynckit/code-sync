import React from 'react'

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src='/code-sync.png' alt="code-sync-logo" />
        <h4 className="mainLabel">Please paste your room invitation ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder='Room Id'></input>
          <input type="text" className="inputBox" placeholder='Username'></input>
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            if you don't have an invite then create &nbsp;
            <a href="" className='createNewBtn'>new room</a>
          </span>
        </div>
      </div>
      <footer>
        <h4>Built with ❤️ with <a href="www.google.com">Ankit k</a></h4>
      </footer>
    </div>
  )
}

export default Home