import Header from "../components/Header";
import Footer from "../components/Footer"
import Home from "./Home"
import {Link, Route, Routes} from 'react-router-dom';
import "../App.css"

export default function About(){
    return(
        <>
            <Header/>
            <div class="container">
            <div>
            <h2>About Us</h2>
			<p>Our college is committed to providing students with a well-rounded education that prepares them for success in their chosen fields. We offer a supportive and challenging academic environment that encourages students to think critically, engage with diverse perspectives, and develop the skills and knowledge necessary to thrive in today's rapidly changing world.</p>
			<p>At our college, you'll have access to a wide range of resources and opportunities, including:</p>
			<ul>
				<li>Expert faculty with extensive industry experience</li>
				<li>State-of-the-art facilities and equipment</li>
				<li>Internship and research opportunities</li>
				<li>Student clubs and organizations</li>
				<li>Professional development and career services</li>
			</ul>
            <Link to="/Home">
            <button class="btn btn-primary">Home</button>
        </Link>
        </div>
        </div>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
        </Routes>
        <Footer/>
        </>
    )
}