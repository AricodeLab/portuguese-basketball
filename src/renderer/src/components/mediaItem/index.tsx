import { useState } from 'react'
import { Content } from './style'

function MediaItem(): JSX.Element {
  //states
  const [media, setMedia] = useState<File>()
  const [eye, seteye] = useState<boolean>(true)
  const [seconds, setSeconds] = useState<number>(0)
  const [active, setActive] = useState<boolean>(true)
  const [mediaTitle, setMediaTitle] = useState<string>()
  const upload = function (ev): void {
    setMedia(ev.target.files[0])
    const title =
      ev.target.files[0].name.length > 12
        ? ev.target.files[0].name.substring(0, 9) + '...'
        : ev.target.files[0].name
    setMediaTitle(title)
  }
  const randomId = Math.random().toString(16)
  return active == true ? (
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
        <button
          className="close"
          onClick={(): void => {
            active == true ? setActive(false) : setActive(true)
          }}
        >
          x
        </button>
        <button className="play">
          <span className="iconPlay"></span>
        </button>

        <div className="mediaInfo">
          <span> {mediaTitle || 'select file'} </span>
        </div>
        <button
          onClick={(): void => {
            seteye(!eye)
          }}
        >
          👁
        </button>
        <input
          className="time"
          placeholder="seg"
          type="number"
          value={seconds}
          onChange={(ev): void => {
            setSeconds(parseInt(ev.target.value))
          }}
        />
      </div>
    </Content>
  ) : (
    <></>
  )
}

export default MediaItem
