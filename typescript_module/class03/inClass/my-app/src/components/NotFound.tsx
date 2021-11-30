import React from 'react'
import notF from '../images/not_found.gif'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <div>
            {/* <h1>Not Found</h1> */}
            {/* <iframe src="https://giphy.com/embed/9J7tdYltWyXIY" width="480" height="404" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/internet-google-chrone-9J7tdYltWyXIY">via GIPHY</a></p> */}
            <img className="notFound" src={notF} alt="" />
            <h1><Link to="/" >Go back to Home page</Link></h1>
        </div>
    )
}

export default NotFound
