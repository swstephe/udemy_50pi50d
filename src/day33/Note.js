import classNames from 'classnames'
import { useState } from 'react'
import marked from 'marked'

function Note({text, setText, onDelete}) {
  const [edit, setEdit] = useState(!!text)

  return (
    <div className="note">
      <div className="tools">
        <button className="edit" onClick={() => setEdit(!edit)}>
          <i className="fas fa-edit"/>
        </button>
        <button className="delete" onClick={onDelete}>
          <i className="fas fa-trash-alt"/>
        </button>
      </div>
      <div className={classNames('main', {hidden: !edit})}
           dangerouslySetInnerHTML={{__html: marked(text)}}/>
      <textarea className={classNames({hidden: edit})}
                onInput={e => setText(e.target.value)}
                value={text}/>
    </div>
  )
}

export default Note
