import { useState } from 'react'
import { Content } from './style'

function MediaItem(): JSX.Element {
  const [media, setMedia] = useState<File>()
  const [mediaTitle, setMediaTitle] = useState<String>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const upload = function (ev: any): void {

    setMedia(ev.target.files[0])
    const title = ev.target.files[0].name.length > 10 ? ev.target.files[0].name.substring(0, 9) + '...' : ev.target.files[0].name.substring(0, 9)
    setMediaTitle(title)
  }
const randomId=Math.random().toString(16)
  return (
    <Content>
      <div className="item">
        <input
          type="file"
          className="mediaUpload"
          id={randomId}
          onChange={(ev): void => {
            upload(ev)
          }}
        ></input>
        <label htmlFor={randomId} className="btnMedia">
          ...
        </label>
        <button className="close">x</button>
        <button className="play">
          <span className="iconPlay"></span>
        </button>
        <div className="mediaInfo">
          <span> {mediaTitle || 'select file'} </span>
        </div>
        <button className="eyeIcon">👁</button>
        <div className="time">{29}</div>
      </div>
    </Content>
  )
}

export default MediaItem
