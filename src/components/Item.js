function Item({item}) {
    return (
        <li>
            <span style={item.packed ? {textDecoration : "line-through"} : null}>{item.quantity} {item.description}</span>
            <button>❌</button>
        </li>
    );
  }
  
  export default Item;