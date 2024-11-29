import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />

      <Home />

      {/* <ShoppingCart /> */}

      <Footer />
    </>
  );
}

export default App;