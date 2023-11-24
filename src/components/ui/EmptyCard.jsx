import {PlusOutlined} from "@ant-design/icons"

const EmptyCard = ({clickAction}) => {
  return (
    <div className="mc-card mc-card-empty" onClick={clickAction}><PlusOutlined /></div>
  )
}

export default EmptyCard