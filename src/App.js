import Navbar from './components/Navbar.tsx';
import Header from './components/Header.tsx';
import Founders from './components/Founders.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import Services from './components/Services.tsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Founders/>
      <Services/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
