import Authors from './components/Authors/Authors';
import Cards from './components/Cards/Cards';
import Demo from './components/Demo/Demo';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Support from './components/Support/Support';

import './styles/general.scss';
import './styles/styles.scss';

function App() {
    return (
        <>
            <div className='content'>
                <Main />
                <Cards />
                <Demo />
                <Authors />
                <Support />
            </div>
            <Footer />
        </>
    );
}

export default App;
