import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const initialItems = [
    { id: 1, description: "snacks", quantity: 3, packed: true },
    { id: 2, description: "makeup", quantity: 1, packed: false },
  ];
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleToggleItem = (id) => {
    console.log("clicked");
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    console.log("clicked");
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClearItems = () => {
    setItems([]);
  };
  return (
    <div className="App">
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList
        itemList={items}
        deleteItem={handleDeleteItem}
        toggleItem={handleToggleItem}
        clearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
