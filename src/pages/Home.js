import Section1 from '../components/Section1';
import Header from '../components/Header';
import Section2 from '../components/Section2';
import Section4 from '../components/Section4';
import Footer from '../components/Footer';
import Section3 from '../components/Section3';

const Home = () => {
    return(
        <div className="home">
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer/>
        </div>
    )
}

export default Home;