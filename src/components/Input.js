import React from 'react'

export default function Input(props) {
  const [name, setName] = React.useState('')
  const [content, setContent] = React.useState('')

  const finishInput = e => {
    e.preventDefault()
    setName('')
    setContent('')
    if (props.depth) {
      props.onSubmit({ name, content, depth: props.depth + 1 })
    } else {
      props.onSubmit({ name, content, depth: 0 })
    }
  }

  return (
    <>
      <form method="post" onSubmit={e => finishInput(e)}>
        <div className="form-group">
          <input
            onChange={e => {
              setName(e.target.value)
            }}
            value={name}
            className="form-control"
            placeholder="😎 Your Name"
            name="name"
            type="text"
          />
        </div>

        <div className="form-group">
          <textarea
            onChange={e => {
              setContent(e.target.value)
            }}
            value={content}
            className="form-control"
            placeholder="🤬 Your Comment"
            name="content"
            rows="5"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            New Post &#10148;
          </button>
        </div>
      </form>
    </>
  )
}
