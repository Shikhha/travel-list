import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const initialItems = [
    
    { id: 1, description : "snacks", quantity : 3, packed : true },
    { id: 2, description : "makeup", quantity : 1, packed : false }
  ]
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList  itemList={initialItems}/>
      <Stats />
    </div>
  );
}

export default App;
