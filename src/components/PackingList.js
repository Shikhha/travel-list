import { useState } from "react";
import Item from "./Item";

function PackingList({ itemList, toggleItem, deleteItem, clearItems }) {
  const [sortedItems, setSortedItems] = useState(itemList);

  const sortItems = (option) => {
    if (option === "input") setSortedItems(itemList);
    if (option === "description")
      setSortedItems(
        itemList
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description))
      );
    if (option === "packed")
      setSortedItems(
        itemList.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
      );
  };
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item deleteItem={deleteItem} toggleItem={toggleItem} item={item} />
        ))}
      </ul>
      <select onChange={(e) => sortItems(e.target.value)}>
        <option value="input">Sort by Input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={clearItems}> Clear form</button>
    </div>
  );
}

export default PackingList;
