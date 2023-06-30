import Item from "./Item";

function PackingList({ itemList, toggleItem, deleteItem }) {
  return (
    <div className="list">
      <ul>
        {itemList.map((item) => (
          <Item deleteItem={deleteItem} toggleItem={toggleItem} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
