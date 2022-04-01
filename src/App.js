import "./App.css"
import Search from "./components/Search/Search";
import TabBarList from "./components/TabBarList/TabBarList";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
