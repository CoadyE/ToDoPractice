import './App.css';

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
    <MyButton />
  </div>
  );
  }

