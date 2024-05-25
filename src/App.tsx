import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './styles/styles.scss';

function App() {
    return (
        <>
            <Header />
            <div className='content'>
                <Main />
            </div>
            <Footer />
        </>
    );
}

export default App;
