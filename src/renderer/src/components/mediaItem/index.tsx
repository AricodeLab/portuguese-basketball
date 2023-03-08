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
          {!eye ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30}>
              <g>
                <path fill="none" d="M0 0h24v24H0z" />{' '}
                <path d="M9.342 18.782l-1.931-.518.787-2.939a10.988 10.988 0 0 1-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 0 1-2.371-5.07l1.968-.359C3.903 10.812 7.579 14 12 14c4.42 0 8.097-3.188 8.856-7.39l1.968.358a10.957 10.957 0 0 1-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.988 10.988 0 0 1-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.072 11.072 0 0 1-3.74 0l-.788 2.94z" />{' '}
              </g>
            </svg>
          ) : (
            <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.2572 10.9622C21.7314 11.5813 21.7314 12.4187 21.2572 13.0378C19.764 14.9868 16.1818 19 12 19C7.81823 19 4.23598 14.9868 2.74284 13.0378C2.26857 12.4187 2.26856 11.5813 2.74283 10.9622C4.23598 9.01321 7.81823 5 12 5C16.1818 5 19.764 9.01321 21.2572 10.9622Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{' '}
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{' '}
            </svg>
          )}
        </button>
        <input
          className="time"
          placeholder="seg"
          type="number"
          min={0}
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
