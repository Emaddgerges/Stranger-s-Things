import React, { useState, useEffect } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
    let navigate = useNavigate("/add")
    const home = useNavigate("/")
    useEffect(() => {
      if(localStorage.getItem('user-info')){
        navigate.push("/")
      }
    }, [])

     const login = async () => {
      let item = { email, password };

      try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'superman27',
            password: 'krypt0n0rbust'
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
    result = await result.json();
       localStorage.setItem('token-info', JSON.stringify(item));
        setIsLoggedin(true);
        setEmail('');
        setPassword('');
  }
   
     const logout = () => {
       localStorage.removeItem('token-info');
       setIsLoggedin(false);
   };
 
  return (
      <>
          <div style={{ textAlign: 'center' }}>
              <h1>Log in </h1>
              {!isLoggedin ? (
                  <>
                      <form action="">
                          
                          <input
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              placeholder="Email"
                          />
                          <input
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              placeholder="Password"
                          />
                          <button type="submit" onClick={login}>
                              GO
                          </button>
                      </form>
                  </>
              ) : (
                  <>
                      <h1>User is logged in</h1>
                      <button onClickCapture={logout}>logout user</button>
                  </>
              )}
          </div>
      </>
  );
}


export default Login