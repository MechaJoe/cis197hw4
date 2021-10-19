import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Comment from './Comment'

export default function CommentList({ comments }) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{comments.length}</span>
        {' '}
        Comment
        {comments.length > 1 || comments.length === 0 ? 's' : ''}
      </h5>

      {comments.length === 0 ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
      ) : null}

      <div>
        {comments.map(comment => (
          <Comment key={uuidv4()} comment={comment} />
        ))}
      </div>

    </div>
  )
}
