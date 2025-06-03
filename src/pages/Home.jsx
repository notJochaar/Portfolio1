import PersonalityImg from '../Images/PersonalityTest.png'
import '../Styles/Home.css'
function Home()
{
    return(
        <div className="home">
            <h1>Home</h1>
            <img src={PersonalityImg} alt='' />
        </div>
    )
}

export default Home;