import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

const Register = () => {
	//const navigate = useNavigate();

	const [input,setInput] = useState({
		name : "",
		email : "",
		password : "",
	})

	//storing values in local storage
	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("user",JSON.stringify (input));
		//navigate("login")
		 
	}

  return (
    <>

     <section>
		
		<div className='container h-100'>
			<div className='row d-flex justify-content-center align-items-center h-100'>
				<div className='card' style={{borderRadius: "15px"}}>
					<div className='card-body p-5'>
						<h2 className='text-uppercase text-center mb-5'>
							Create an account
						</h2>

						<form onSubmit={handleSubmit}>
							<div className='form-outline mb-4'>
								<input
									name='name'
									value={input.name}
									onChange={(e) =>setInput({...input,[e.target.name] : e.target.value })}
									type='text'
									id='form3Examples1cg'
									className='form-control form-control-lg'
								/>
								<label className='form-label' htmlFor="form3Examples1cg">
									Your Name
								</label>
							
							</div>
							<div className='form-outline mb-4'>
								<input
									name='email'
									value={input.email}
									onChange={(e) =>setInput({...input,[e.target.name] : e.target.value })}
									type='text'
									id='form3Examples1cg'
									className='form-control form-control-lg'
								/>
								<label className='form-label' htmlFor="form3Examples1cg">
									Your Email
								</label>
							</div>

							<div className='form-outline mb-4'>
								<input
									name='password'
									value={input.password}
									onChange={(e) =>setInput({...input,[e.target.name] : e.target.value })}
									
									type='text'
									id='form3Examples1cg'
									className='form-control form-control-lg'
								/>
								<label className='form-label' htmlFor="form3Examples1cg">
									Password
								</label>
							</div>

							<div className='d-flex justify-content-center'> 
								<button
									type='submit'
									className='btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white'
									>
									Register
								</button>
							
							</div>

							<p className='text-center text-muted mt-5 mb-0'>
								Have an account already?
								<a href='/login' className='fw-bold text-body'>
									<u>Login Here</u>
								</a>
							</p>


						</form>

					</div>



				</div>




			</div>




		</div>




		
    </section>


	</>
  );
};

export default Register;
