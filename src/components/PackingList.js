import Item from "./Item"

function PackingList({itemList}) {
    return (
   <div className="list">
    <ul>
        {itemList.map((item) => <Item item = {item} />)}
    </ul>
   </div>
    );
  }
  
  export default PackingList;