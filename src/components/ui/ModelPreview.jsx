import { useEffect, useState } from "react"
import VINYL from "../../assets/disc_texture.png"
import PLACEHOLDER from "../../assets/placeholder.svg"

const ModelPreview = ({img, category}) => {
  const [loadImg, setLoadImg] = useState(false);

  useEffect(() => {
    if (img !== undefined) {
        setLoadImg(img?.length > 1 ? true : false)
    } else {
      setLoadImg(false)
    }
  },[img])

  return (
    <div className="mc-model-preview-container">
      <div className="mc-model-preview">
          <div className={category === 0 ? "mc-music-img" : "mc-model-img"}>
              <img src={loadImg ? img : PLACEHOLDER} className={!loadImg ? "mc-border-img" : ""} alt="model-preview-image" />
              {category === 0 ? <img src={VINYL} alt="vinyl-record" /> : null}
          </div>
      </div>
    </div>
  )
}

export default ModelPreview