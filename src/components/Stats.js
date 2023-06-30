function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go 🚀"
          : `  You have ${numItems} items in your list and you already packed
          ${packedItems} items`}
      </em>
    </footer>
  );
}

export default Stats;
