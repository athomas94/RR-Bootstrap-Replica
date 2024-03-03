import './App.css';

const styledText = {
  fontSize: "30px",
  textAlign: "center",
  margin: "50px",
  border: "1px solid green"
};

const paragraphText = {
  fontSize: "16px",
  margin: "20px",
  color: "black"
};

const footerText = {
  fontSize: "12px",
  textAlign: "center",
  color: "grey",
  margin: "50px"
};

function App() {
  return (
    <div className="App">
      <div style = {styledText}>
        <h1>Hello World</h1>
      </div>
      <div style = {paragraphText}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div style = {footerText}>
        <p>Copyright 2024 Andrew Thomas LLC</p>
      </div>
    </div>
  );
}

export default App;
