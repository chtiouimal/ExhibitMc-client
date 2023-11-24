import { useEffect, useState } from "react"
import VINYL from "../../assets/disc_texture.png"
import PLACEHOLDER from "../../assets/placeholder.svg"

const ModelPreview = ({img}) => {
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
          <div className="mc-model-img">
              <img src={loadImg ? img : PLACEHOLDER} className={!loadImg ? "mc-border-img" : ""} alt="model-preview-image" />
              <img src={VINYL} alt="vinyl-record" />
          </div>
      </div>
    </div>
  )
}

export default ModelPreview