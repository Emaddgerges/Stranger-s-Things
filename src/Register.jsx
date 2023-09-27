import React, { useState,useEffect } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D'

 const Register = () => {

  // const registerUser = async () => {
  //   try {




  async function registerUser (){
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

   
    let item = { email, password };
    console.log(item)
      

    let result = await fetch(`${BASE_URL}/users/register`, {
              method: 'post',
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(item)
        
             })
             result = await result.json()
             localStorage.setItem("user-info", JSON.stringify(result))


 
 
            }


//       const response = await fetch(
//         `${BASE_URL}/users/register`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           user: {
//             username: 'superman27',
//             password: 'krypt0n0rbust'
//           }
//         })
//       });
//       const result = await response.json();
// // You can log ▲▲▲ the result
// // here ▼▼▼ to view the json object before returning it
//       console.log(result)
//       return result
//     } catch (err) {
//       console.error(err);
//     }
//   }





//   const registerUser = async () => {
//     try {

//       let item = { email, password }
       
//       const response = await fetch(
//         `${BASE_URL}/users/register`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           user: {
//             username: 'superman27',  
//             password: 'krypt0n0rbust'
//           }
//         })
//       });
//       const result = await response.json();
// // You can log ▲▲▲ the result
// // here ▼▼▼ to view the json object before returning it
//       console.log(result)
//       return result
//     } catch (err) {
//       console.error(err);
//     }
//   }
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoggedin, setIsLoggedin] = useState(false);
//     let navigate = useNavigate("/add")
//     const home = useNavigate("/")
//     useEffect(() => {
//       if(localStorage.getItem('user-info')){
//         navigate.push("/")
//       }
//     }, [])
  








////////////////////////////////////////////////
//       async function login(){
//        //console.warn(email, password)
//        let item = { email, password };
//        let result = await fetch("https://fakestoreapi.com/users", {
//         method: 'post',
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify(item)
  
//        });
//        result = await result.json();
//        localStorage.setItem('token-info', JSON.stringify(item));
//         setIsLoggedin(true);
//         setEmail('');
//         setPassword('');
       
//       }
//     const goHome = () =>{
//       home("../")
//     }
    
  return (
      <>
          <div style={{ textAlign: 'center' }}>

      <form action="">
          
          <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}  placeholder="Email" />
          <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
          />
          <button type="submit" onClick={registerUser}>
              GO
          </button>
      </form>
           
          </div>
      </>
  );
}



export default Register;