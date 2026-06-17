import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Register = () => {
  const [form, setForm] = useState({
    name: "",
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
    await axios.post("http://localhost:5500/api/auth/register",form);
    alert("Regisitration successfully");
    navigate("/login");
  } catch (err) {
    console.log(err);
  }
}

  return <>
  
  <div>
    <h2>Register</h2>
    <form onSubmit={hs}>
      <input 
      
      type='text'
      name='name'
      placeholder='enter name'
      
      onChange={hc}
      required
      
      
      />

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
      <button>Register</button>
    </form>
  </div>
  
  </>
}

export default Register