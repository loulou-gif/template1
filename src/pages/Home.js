import Section1 from '../components/Section1';
import Header from '../components/Header';
import Section2 from '../components/Section2';
import Section4 from '../components/Section4';

const Home = () => {
    return(
        <div className="home">
            <Header/>
            <Section1/>
            <Section2/>
            <Section4/>
        </div>
    )
}

export default Home;