import Navbar from '../components/Navbar'
import Bground from '../components/Bground';
import Programs from '../Programs.jsx';
import Reasons from '../components/reasons';
import Plans from '../components/plans.js';
import Hero from '../components/hero.jsx'

const Home =()=>{
    
    return(
        <>
        <Navbar/>
        <Hero/>
        <Programs/>
        <br/>
        <br/>
        <br/>
        <Reasons/>
        <Plans/>
        <br/>
        <br/>
        </>
        
    );
}
export default Home;