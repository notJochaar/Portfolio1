import '../Styles/Home.css'
import PersonalityImg from '../Images/PersonalityTest.png'

function Home1()
{
    return(
        
        <div className="home">
            <h1>Home</h1>
            <img src={PersonalityImg} alt='' />
        </div>
    )
}
const Home = () => {
 return( 
  <section className='h-full'>
            <div className='container mx-auto h-full'>
                <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
                    <div className='text-center xl:text-left'>
                        <span>Software Developer</span>
                        <h1 className='h1'>
                            Hello I'm <br/> <span>Saeed Alsuwaidi</span>
                        </h1>
                    </div>
                </div>
            </div>
  </section>
 );
};

export default Home;