import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Voter from './Voter'
import Input from './Input'

export default function Comment({ comment }) {
  const { name, content, depth: parDepth } = comment
  const [replies, setReplies] = React.useState([])
  const [replying, setReplying] = React.useState(false)
  const [depth, setDepth] = React.useState(parDepth + 1)
  const onSubmit = r => {
    const { name: n, content: c, depth: d } = r
    setReplies([...replies, { name: n, content: c, depth: d + 1 }])
    setDepth(depth + 1)
    setReplying(false)
  }

  return (
    <>
      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
        <div>{content}</div>
        <div><Voter /></div>
        <div>
          {replies.map(reply => (
            <Comment key={uuidv4()} comment={reply} />
          ))}
        </div>
        <div>{!replying && depth < 3 && (<button type="button" className="btn btn-outline-primary" onClick={() => setReplying(true)}>Reply</button>)}</div>
        {replying && (<Input onSubmit={onSubmit} depth={depth} />)}
      </div>
    </>
  )
}
