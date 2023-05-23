import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../../feature/auth/authApi";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseError, setResponseError] = useState("");
  const [login,{data,isLoading,error}] =useLoginMutation()

  const navigate=useNavigate()

  useEffect(() => {

    if(error?.data){
      setResponseError(error.data)
    }
    if(data?.user && data.accessToken){
      navigate("/")
    }

  }, [data,navigate,setResponseError,error ]);


  const loginHandle=(e) =>{
    e.preventDefault()
    setResponseError("")
    login({
      email,
      password
    })


  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={loginHandle}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>
        <div>{responseError}</div>
    
    </div>
  );
}

export default Login;
