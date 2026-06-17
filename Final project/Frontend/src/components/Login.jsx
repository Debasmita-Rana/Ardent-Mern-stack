import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Login = () => {
  const [form, setForm] = useState({
    email:"",
    password:""
  });
const navigate = useNavigate();

const hc = (e)=>{
  setForm({
    ...form,
    [e.target.name]:e.target.value
  });
};
const hs = async(e)=>{
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5500/api/auth/login",form);
    localStorage.setItem('token', res.data.token);

    alert("Login successfully");
    navigate("/home");
  } catch (err) {
    console.log(err);
  }
}

  return <>
  
  <div>
    <h2>Login</h2>
    <form onSubmit={hs}>
      

    <input 
      
      type='email'
      name='email'
      placeholder='email'
      
      onChange={hc}
      required
      
      
      />

      <input 
      
      type='password'
      name='password'
      placeholder='enter password'
      
      onChange={hc}
      required
      
      
      />
      <button>Login</button>
    </form>
  </div>
  
  </>
}

export default Login