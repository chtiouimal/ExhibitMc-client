import { CATEGORIES } from "../../constants/data.constants";
import { Radio } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import { useState } from "react";


function CategoryForm({newTrack, setNewTrack, setCurrentForm}) {  
  const [error, setError] = useState(false)

  const onCategoryChange = (e) => {
    setNewTrack({...newTrack, category: e.target.value})
    if (error) {
        setError(false)
    }
  }


  const handleNext = () => {
    if (newTrack.category !== null) {
        setCurrentForm(1)
    } else {
        setError(true)
    }
  }

  return (
    <div className="mc-category-form">
        <Radio.Group className="mc-radio-category-group" onChange={onCategoryChange}>
          <label style={{padding: "16px 0", color: error ? "#ff4d4f" : "#EAE9E8"}}>Please, select the category of your art:</label>
          {CATEGORIES?.map((cat,i) => <Radio
            key={i} 
            value={cat.id}
            className="mc-radio-category">{cat.category}</Radio>
          )}
        </Radio.Group>
      <div className="mc-category-form-actions">
        <button className="mc-btn mc-btn-round mc-btn-primary" onClick={handleNext}><ArrowRightOutlined /></button>
      </div>
    </div>
  )
}

export default CategoryForm