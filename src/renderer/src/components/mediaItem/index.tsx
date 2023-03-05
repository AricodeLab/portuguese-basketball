import { useState } from 'react'
import { Content } from './style'

function MediaItem(): JSX.Element {
  //states
  const [media, setMedia] = useState<File>()
  const [seconds, setSeconds] = useState<number>(0)
  const [active, setActive] = useState<boolean>(true)
  const [mediaTitle, setMediaTitle] = useState<String>()
  const upload = function (ev: any): void {

    setMedia(ev.target.files[0])
    const title = ev.target.files[0].name.length > 12 ? ev.target.files[0].name.substring(0, 9) + '...' : ev.target.files[0].name
    setMediaTitle(title)
  }
  const randomId = Math.random().toString(16)
  return active==true? <Content>
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
      <button className="close" onClick={() => { active == true ? setActive(false) : setActive(true) }}>x</button>
      <button className="play">
        <span className="iconPlay"></span>
      </button>
      <div className="mediaInfo">
        <span> {mediaTitle || 'select file'} </span>
      </div>
      <button className="eyeIcon">👁</button>
      <input className="time"
        placeholder='seg'
        type="number"
        value={seconds}
        onChange={(ev) => { setSeconds(parseInt(ev.target.value)) }} />
    </div>
  </Content>:<></>
     
}

export default MediaItem
