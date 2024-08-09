import { Canvas } from "@react-three/fiber"
import { AudioPlayerGUI, BackDrop, ControlsPreset, EnvPreset, ModelObject } from "../components"
import { Grid } from "@react-three/drei"
import useAxios from "../hooks/useAxios"
import { useEffect, useState } from "react"
import { Modal } from "antd"
import IMG from "../assets/empty-state.svg"
import { useNavigate } from "react-router-dom"
import {LoadingOutlined} from "@ant-design/icons"

const ExhibitPage = () => {
  const {data, loading, error, get} = useAxios()
  const [selectedList, setSelectedList] = useState([])
  const [emptyState, setEmptyState] = useState(false);

  const navigate = useNavigate()
  
  useEffect(() => {
    get(import.meta.env.VITE_SELECTED);
  },[])

  useEffect(() => {
    if(!loading) {
      setSelectedList(data)
      if (data.length === 0) {
        setEmptyState(true)
      }
    }
  },[loading])

  const handleNavigation = () => {
    setEmptyState(false)
    navigate("/settings")
  }

  return (   
    <>  
      <Canvas>
        <EnvPreset />
        <ControlsPreset />
        <ambientLight intensity={1} />
        <Grid args={[12, 12]} sectionColor="#E1C258"  sectionThickness={1.25} cellThickness={0} position={[0,-2,0]} />
        {selectedList?.map((e,i) => <ModelObject key={i} data={e} index={i} />)}
      </Canvas>
      <BackDrop />
      <AudioPlayerGUI />
      <Modal className="mc-empty-state" open={emptyState} centered footer={null} closeIcon={false}>
        <div className="mc-empty-state-img">
          <img src={IMG} alt="empty-state" />
        </div>
        <div className="mc-empty-state-desc">
          <h3>No item selected</h3>
          <span>Please go to settings and selected the items u want to showcase</span>
          <button className="mc-btn mc-btn-primary" onClick={handleNavigation}>
            Go to settings
          </button>
        </div>
      </Modal>
      {loading ? <div className="mc-page-loading"><LoadingOutlined /><h4>Loading...</h4></div> : null}
    </>
  )
}

export default ExhibitPage