import React, { useContext, useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./signup.css";
import Header from "./header";
import { UserContext } from './user_context';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const { setUsername, redirectPath } = useContext(UserContext);
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    axios.post('http://localhost:8000/signup/', { username, password })
      .then(response => {
        console.log('User signed up:', response.data);
        setUsername({ username: response.data.username });
        navigate(redirectPath); // Redirect to the original destination
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  return (
    <>
      <Header />
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col='10' md='5'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
          </MDBCol>

          <MDBCol col='4' md='6'>
            <br /><br /><br /><br />
            <MDBInput
              wrapperClass='mb-4'
              label='Username'
              id='formControlLg'
              type='text'
              size="lg"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='formControlLg'
              type='password'
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' onClick={handleSignUp}>Sign Up</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default SignUp;
