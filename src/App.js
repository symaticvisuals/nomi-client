import "./App.css";
import Header from "./components/elements/header/Header";
import Login from "./components/pages/login/Login";
import Footer from "./components/elements/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
