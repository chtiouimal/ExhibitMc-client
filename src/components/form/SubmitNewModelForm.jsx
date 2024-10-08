import { ArrowLeftOutlined, CheckOutlined } from "@ant-design/icons"
import { Radio } from "antd"
import useAxios from "../../hooks/useAxios"

const SubmitNewModelForm = ({colors, setCurrentForm, newTrack, setNewTrack, onClose, setReftech}) => {
  const {data, loading, post} = useAxios()
  
  const onColorChange = (e) => {
    setNewTrack({...newTrack, color: e.target.value})
  }

  const handleSubmit = async () => {
    await post(import.meta.env.VITE_NEW, newTrack)
    setReftech(true)
      setNewTrack({
          songName: "",
          songArtist: "",
          coverArt: "",
          music: null,
          color: "",
          category: null,
          video: null
      })
      onClose();
      setCurrentForm(0);
  }

  const handleGoBack = () => {
    setNewTrack(prev => ({...prev, color: ""}))
    setCurrentForm(1);
  }

  return (
    <div className="mc-color-form">
      {colors.length > 0 ? 
        <Radio.Group className="mc-radio-color-group" onChange={onColorChange}>
          {colors?.map((co,i) => <Radio
            key={i} 
            value={`rgb(${co[0]},${co[1]},${co[2]})`}
            className="mc-radio-color"
            style={{backgroundColor: `rgb(${co[0]},${co[1]},${co[2]})` }}/>
          )}
        </Radio.Group> : null
      }
      <div className="mc-color-form-actions">
        <button className="mc-btn mc-btn-round mc-btn-outlined" onClick={handleGoBack}><ArrowLeftOutlined /></button>
        <button className="mc-btn mc-btn-round mc-btn-primary" onClick={handleSubmit}><CheckOutlined /></button>
      </div>
    </div>
  )
}

export default SubmitNewModelForm