import Authors from './components/Authors/Authors';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Support from './components/Support/Support';
import './styles/styles.scss';

function App() {
    return (
        <>
            <Header />
            <div className='content'>
                <Main />
                <Cards />
                <Authors />
                <Support />
            </div>
            <Footer />
        </>
    );
}

export default App;
