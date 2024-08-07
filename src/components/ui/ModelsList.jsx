import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios"
import ListItem from "./ListItem";
import { Input, Radio, Skeleton } from "antd";
import { SettingsContext } from "../../contexts/SettingsContext";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons"
import FormDrawer from "./FormDrawer";
import ModelPreview from "./ModelPreview";
import NewModelForm from "../form/NewModelForm";
import SubmitNewModelForm from "../form/SubmitNewModelForm";
const { Search } = Input;

const ModelsList = ({setCount}) => {
  const {settingsContext, setSettingsContext} = useContext(SettingsContext)
    const {data, loading, error, get, put} = useAxios();
    const [list, setList] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [currentForm, setCurrentForm] = useState(0)
    const [newTrack, setNewTrack] = useState({
        songName: "",
        songArtist: "",
        coverArt: "",
        music: "",
        color: ""
    })
    const [colors,setColors] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [refetch, setReftech] = useState(true)

    const addNewSong = () => {
        setOpenDrawer(true);
    };
    const onClose = () => {
        setOpenDrawer(false);
    };

    const onChange = (e) => {
        setSelectedItem(e.target.value)
    };

    const handleSelection = () => {
      if (selectedItem !== null) {
        setSettingsContext(prev => ({...prev, [`selected${settingsContext.itemPosition + 1}`]: {...selectedItem, position: settingsContext.itemPosition}, checkmode: false }))
        put(import.meta.env.VITE_SELECT, {musicId: selectedItem?._id, position: settingsContext.itemPosition})
        setSelectedItem(null)
        setCount(prev => prev + 1)
      }
    }

    const handleSorting = (e) => {
      switch (e.target.value) {
        case "title":
          setList(data.slice().sort((a, b) => a.songName.localeCompare(b.songName)));
          break;
        case "artist":
          setList(data.slice().sort((a, b) => a.songArtist.localeCompare(b.songArtist)));
          break;
        case "recent":
          setList(data.slice().sort((a, b) => a.createdAt.localeCompare(b.createdAt)));
          break;
        default:
          setList(list)
      }
    }
    
    const onSearch = (value) => {
      setSearchQuery(value)
      let filteredArray = list.filter((e) => e.songName.includes(value))
      setList(filteredArray)
    };
    
    useEffect(() => {
      if (refetch) {
        get(import.meta.env.VITE_MUSIC)
      }

      return () => {
        setReftech(false)
      }
    },[refetch])

    useEffect(() => {
        if(!loading && data.length>0) {
            setList(data)
        }
    },[loading])

  return (
    <div className="mc-model-list">
      <header>
        {/* <Search
          className="mc-search-input"
          placeholder="Search by song title"
          onSearch={onSearch}
          style={{
            width: 272,
          }}
        /> */}
        <div>
          <Radio.Group className="mc-radio-filter" onChange={handleSorting} defaultValue={"recent"}>
            <Radio.Button className="mc-radio-filter-btn" value="recent">Recent</Radio.Button>
            <Radio.Button className="mc-radio-filter-btn" value="title">Title</Radio.Button>
            <Radio.Button className="mc-radio-filter-btn" value="artist">Artist</Radio.Button>
          </Radio.Group>
        </div>
      </header>
        <Radio.Group onChange={onChange} value={selectedItem}>
            {
              loading && list.length === 0 ? 
                new Array(10).fill(null).map((_,i) => <div className="mc-card-light" key={i}>
                  <Skeleton.Image className="mc-card-loading-light" key={i + 4} active={true} />
                  <Skeleton.Input style={{height: 21}} active />
                  <Skeleton.Input style={{height: 17}} active />
                </div>) 
              : 
                list?.map((e,i) => <ListItem model={e} index={i} key={i} />)
            }
        </Radio.Group>
        <div className="mc-floating">
          <button className="mc-btn mc-btn-primary mc-btn-round" onClick={settingsContext.checkmode ? handleSelection : addNewSong}>{settingsContext.checkmode ? <CheckOutlined /> : <PlusOutlined />}</button>
        </div>
        {openDrawer ? 
          <FormDrawer openDrawer={openDrawer} onClose={onClose}>
            {
              currentForm !== 0 ? 
                <div style={{backgroundColor: newTrack?.color && newTrack?.color !== "" ? newTrack.color : "transparent", width: "100%", borderRadius: 10}}>
                  <ModelPreview img={newTrack?.coverArt} />
                </div> 
              : 
                null
            }
            {
              currentForm === 0 ? 
                <NewModelForm setCurrentForm={setCurrentForm} newTrack={newTrack} setNewTrack={setNewTrack} setColors={setColors} /> 
              : 
                <SubmitNewModelForm setReftech={setReftech} colors={colors} setNewTrack={setNewTrack} newTrack={newTrack} setPlaylist={setList} setCurrentForm={setCurrentForm} onClose={onClose}/>
            }
          </FormDrawer> 
        : null}
    </div>
  )
}

export default ModelsList