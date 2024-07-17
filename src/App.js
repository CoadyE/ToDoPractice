import './App.css';
import MyComponent from './MyComponent'

function MyButton() {
  return (
  <button>
      I'm a button
  </button>
  );
}
  export default function MyApp() {
  return (
  <div className="App">
    <h1>
      Welcome to my app
    </h1>
    <MyComponent/>
    <MyButton />
  </div>
  );
  }

