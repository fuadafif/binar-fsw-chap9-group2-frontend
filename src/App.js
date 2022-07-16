import { Button } from "reactstrap";

function App() {
  let tampilkanPesan = (e) => {
    alert("Anda Logout");
  };
  return (
    <div>
      <button onClick={tampilkanPesan}>Logout</button>
      <Button onClick={tampilkanPesan}>Logout</Button>
    </div>
  );
}
export default App;
