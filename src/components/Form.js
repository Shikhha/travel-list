import { useState } from "react";

function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: count,
      packed: false,
    };
    addItem(newItem);
    setDescription("");
    setCount(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      What do you need for your trip? 😍
      <select value={count} onChange={(e) => setCount(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="item..."
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
