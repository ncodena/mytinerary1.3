
import React, {useContext, useState, useEffect }from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/AuthContext';
import { Navigate } from 'react-router-dom';


const Register = (props)  => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;

    const { register, error, clearErrors, isAuthenticated } = authContext;
    
    useEffect(() => {

        
        if (error === 'User already exists') {
          setAlert(error, 'danger');
          clearErrors()
        }

        //eslint-disable-next-line
      }, [error]);


   const [user, setUser] = useState({
       userName: '',
       email: '',
       password: '',
       password2: ''

   });

   const {userName, email, password, password2} = user;

   const onChange = e => setUser({...user, [e.target.name]: e.target.value });

   const onSubmit = e => {
       e.preventDefault();

       if(userName === '' || email === '' || password === '' ){
           setAlert('Please enter all fields', 'damger');
       }else if( password !== password2){
           setAlert('Passwords do not match', 'danger');
       }else {
        register({
            userName, email, password
        })
        console.log('Register submit');
       }
       
   }

   if (isAuthenticated) return <Navigate to='/' />;

    return (
        <div className="form-container">

            <h1>Account <span className="text-primary">Register</span></h1>
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='userName' value={userName} onChange={onChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Adress</label>
                    <input type="email" name='email' value={email} onChange={onChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={onChange} required minLength={6}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password2" name='password2' value={password2} onChange={onChange} required minLength={6}/>
                </div>

                <input type="submit" value="Register" className='btn btn-primary btn-block'/>
            </form>
        </div>
        
    )
}

export default Register;