import { Content } from './style'

function MediaItem(): JSX.Element {
  return (
    <Content>
      <div className="item">
        <input type="file" className="mediaUpload" id="media"></input>
        <button className="close">x</button>
        <button className="play">
          <span className="iconPlay"></span>
        </button>
        <div className="mediaInfo">{'video gay'}</div>
        <button>o</button>
        <div className="time">{29}</div>
      </div>
    </Content>
  )
}

export default MediaItem
