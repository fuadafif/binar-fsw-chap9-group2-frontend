import { Button } from "reactstrap";

function App() {
  let tampilkanPesan = (e) => {
    alert("Anda Logout");
  };
  return (
    <div>
      <Button onClick={tampilkanPesan}>Logout</Button>
    </div>
  );
}
export default App;
