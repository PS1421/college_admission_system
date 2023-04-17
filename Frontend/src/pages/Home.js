
import Header from "../components/Header";
import image from "./download.jpg"
import Footer from "../components/Footer"
import About from "./About"
import Admission from "./Admission"
import {Link, Route, Routes} from 'react-router-dom';
import "../App.css"

export default function Home(){
    return(
        <>
        <Header/>
        <h2 style={{textAlign:"center"}}>
            Welcome to Thakur College of Engineering and Technology
        </h2>
        <img style={{display:"block",marginLeft: "auto", marginRight: "auto"}} src={image} breath={300} width={300}/>
        <br/>
        <div class="pages">
        <Link to="/About">
            <button class="btn btn-primary">About</button>
        </Link>
        <br/><br/>
        <Link to="/Admission">
            <button class="btn btn-primary">Admission Form</button>
        </Link>
        </div>
        <Routes> 
            <Route path="/About" element={<About/>}/>
            <Route path="/Admission" element={<Admission/>}/>
        </Routes>
        <Footer/>
        </>
    )
}