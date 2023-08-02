import ReactDOM from 'react-dom/client';
import MainBody from './MainBody';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import './css/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{backgroundColor:"black", color:"gray"}}>
    <Header/>
    <div className="px-4">
        <MainBody/>
    </div>
    <Footer/>
  </div>
);


