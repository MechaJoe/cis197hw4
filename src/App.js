import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import logo from './logo.png'

import CommentList from './components/CommentList'
import Input from './components/Input'

export default function App() {
  const [comments, onSubmit] = React.useState([])

  return (
    <div className="App container bg-light shadow">
      <header className="App-header">
        <img src={logo} alt="" className="logo" />
        <h1 className="App-title">
          CIS 197 Community
          <span className="px-2" role="img" aria-label="Chat">
            💬
          </span>
        </h1>
      </header>

      <div className="row">
        <div className="col-4  pt-3 border-right">
          <h6>Post a comment!</h6>
          <Input onSubmit={e => onSubmit([...comments, e])} />
        </div>
        <div className="col-8  pt-3 bg-white">
          <CommentList
            comments={comments}
          />
        </div>
      </div>
    </div>
  )
}
