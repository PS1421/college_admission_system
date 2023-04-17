import Header from "../components/Header";
import Footer from "../components/Footer"
import Home from "./Home"
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import "../App.css"
import React, {useState} from "react";
// import { json } from "stream/consumers";



export default function Admission(){
	const [name, setName]= useState('')
	const [email, setEmail]=useState('')
	const [phone, setPhone]=useState('')
	const [dob, setDob]=useState('')
	const [gender, setGender]=useState('')
	const [marks, setMarks]=useState('')
	const [course, setCourse]=useState('')

	const navigate = useNavigate();
	
	function handleForm(event){
		event.preventDefault()
		let userData={
			name:name,
			email:email,
			phone:phone,
			dob:dob,
			gender:gender,
			marks:marks,
			course:course
	
		}
		fetch("/students",{
			method:'POST',
			headers:{"Content-Type":"Application/JSON"},
			body:JSON.stringify(userData)
	
		}).then(response=>response.json()).then(data=>{
			console.log(data)
		})
		console.log("Clicked.")
		navigate('/Home')
	}

	function show_alert(){
		alert("The From has beed Submitted.")
	}

    return(
        <>
            <Header/>
            <div class="container">
            <div>
            <h2 >Admisson Form</h2>
            <form action="Home.js" method="post" onSubmit={handleForm}>
		<div class="form-group">
			<label for="name">Name:</label>
			<input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" onChange={e=>setName(e.target.value)}/>
		</div>
		<div class="form-group">
			<label for="email">Email:</label>
			<input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" onChange={e=>setEmail(e.target.value)}/>
		</div>
		<div class="form-group">
			<label for="phone">Phone Number:</label>
			<input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" name="phone" onChange={e=>setPhone(e.target.value)}/>
		</div>
		<div class="form-group">
			<label for="dob">Date of Birth:</label>
			<input type="date" class="form-control" id="dob" name="dob" onChange={e=>setDob(e.target.value)}/>
		</div>
		<div class="form-group">
			<label for="gender">Gender:</label>
			<div class="form-check">
				<input onChange={e=>setGender(e.target.value)} class="form-check-input" type="radio" name="gender" id="male" value="male"/>
				<label class="form-check-label" for="male">
					Male
				</label>
			</div>
			<div class="form-check">
				<input onChange={e=>setGender(e.target.value)} class="form-check-input" type="radio" name="gender" id="female" value="female"/>
				<label class="form-check-label" for="female">
					Female
				</label>
			</div>
			<div class="form-check">
				<input onChange={e=>setGender(e.target.value)} class="form-check-input" type="radio" name="gender" id="other" value="other"/>
				<label class="form-check-label" for="other">
					Other
				</label>
			</div>
		</div>
		<div class="form-group">
			<label for="marks">SSC Marks:</label>
			<input type="text" class="form-control" id="marks" placeholder="Enter your SSC marks out of 500" name="marks" onChange={e=>setMarks(e.target.value)}/>
		</div>
		<div class="form-group">
			<label for="course">Course:</label>
			<select onChange={e=>setCourse(e.target.value)} class="form-control" id="course" name="course">
				<option value="">Select a course</option>
				<option value="computer_science">Computer Science</option>
				<option value="Mechanical">Mechanical</option>
				<option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
				<option value="Information Technology">Information Technology</option>
			</select>
		</div><br/>
		<button onClick={show_alert} type="submit" class="btn btn-primary">Submit</button>
	</form><br/>
    
            <Link to="/Home">
            <button class="btn btn-primary">Home</button>
            </Link>
            </div>

            <br/>
            <br/>
            <br/></div>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    )
}