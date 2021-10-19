import React from 'react'

export default function Voter() {
  const [votes, setVotes] = React.useState(0)

  return (
    <>
      <div>
        <div>
          <button id="upvote" className="btn btn-success" type="button" onClick={() => setVotes(votes + 1)}>Upvote</button>
        </div>
        <div>
          {votes}
        </div>
        <div>
          <button id="downvote" className="btn btn-danger" type="button" onClick={() => setVotes(votes - 1)}>Downvote</button>
        </div>
      </div>
    </>
  )
}
