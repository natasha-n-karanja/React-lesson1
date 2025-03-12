import FormComponent from "./Components/FormComponent";
import LogInComponent from "./Components/LogInComponent";

const App = () => {
  const handleForm = () => {
    console.log("Form submmited")
  }

  return (
    <div className="App">
      <button onClick={handleForm}>Register</button>
      <button onClick={handleForm}>Login</button>
      <FormComponent />
      <LogInComponent />
    </div>
  );
}

export default App;