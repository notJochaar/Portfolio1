"use client";
import "../Styles/Private.css"

import TODOHero from '../components/TODOHero';
import TODOList from '../components/TODOList';
import Form from "../components/Form";

function Private()
{
    return(
        <div className="private">
            <h1>Private</h1>
            
            <div className="wrapper">
            <TODOHero todos_completed={0} total_todos={0} />
            <Form />
            <TODOList todos={[]} />
            </div>
        </div>
    )
}

export default Private;