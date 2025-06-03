import '../Styles/Project.css'
import NinjaDrawingPic from '../Images/NinjaDrawing.png'
import CodingPic from '../Images/codingImg.png'
import RunningPic from '../Images/running.png'
import GamingPic from '../Images/gamingImg.png'
import GhostPic from '../Images/ghostDrawing.png'
function Projects()
{
    return(
        <div className="projects">
           <h1>Projects</h1>
           <div className='card'>
            <div className='gradient'>
                <div className='text'>
                    <h2>Drawing</h2>
                    <p>one of my hobbies is drawing, this is a collection of some drawings</p>
                </div>
            </div>
                <img src={GhostPic} alt="" />
           </div>

           <div className='card'>
           <div className='gradient'>
            <div className='text'>
                <h2>Coding</h2> 
                <p>one of my hobbies is drawing, this is a collection of some drawings</p>
            </div>
            </div>
            <img src={CodingPic} alt="" />
           </div>

           <div className='card'>
           <div className='gradient'>
            <div className='text'>
                <h2>Running</h2> 
                <p>one of my hobbies is drawing, this is a collection of some drawings</p>
            </div>
            </div>
            <img src={RunningPic} alt="" />
           </div>

           <div className='card'>
           <div className='gradient'>
            <div className='text'>
                <h2>Editing</h2> 
                <p>one of my hobbies is drawing, this is a collection of some drawings</p>
            </div>
            </div>
            <img src={GamingPic} alt="" />
           </div>
        </div>
    )
}

export default Projects;