import { Component } from "react";
import Soma from "./components/Somar";
import env from "react-dotenv";


export function MyComponent() {
  return <div>{env.API_URL}</div>;
}

class App extends Component {
  
  render() {
    return (
      <div >

        <h1>{process.env.REACT_APP_TITLE}</h1>      
        <Soma/>
        
      </div>

    )
  }
}

export default App;
