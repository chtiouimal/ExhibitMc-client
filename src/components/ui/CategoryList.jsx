import { Skeleton } from "antd";
import ListItem from "./ListItem";

function CategoryList({loading, list}) {

  return loading && list.length === 0 ? 
    new Array(10).fill(null).map((_,i) => 
            <div className="mc-card-light" key={i}>
                <Skeleton.Image className="mc-card-loading-light" key={i + 4} active={true} />
                <Skeleton.Input style={{height: 21}} active />
                <Skeleton.Input style={{height: 17}} active />
            </div>) 
        : 
    list?.map((e,i) => <ListItem model={e} index={i} key={i} />)
}

export default CategoryList