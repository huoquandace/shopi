
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DefaultLayout({ children }) {
    return (
        <div className="App">
            <Header />
            <main>
                <Sidebar />
                <div className="content collapse">{ children }</div>
            </main>
            <Footer />
        </div>
    );
}