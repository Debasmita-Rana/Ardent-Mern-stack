import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Addcourse = () => {
  const [course, setCourse] = useState({
    title: "",
    price:"",
  });
const navigate = useNavigate();
const hc = (e)=>{
  setCourse({
    ...course,
    [e.target.name]:e.target.value
  });
};
const hs = async(e)=>{
  e.preventDefault();

  try {
    await axios.post("http://localhost:5500/api/courses",course);
    alert("Course added successfully");
    navigate("/courses");
  } catch (err) {
    console.log(err);
  }
}

  return <>
  
  <div>
    <h2>Add Course</h2>
    <form onSubmit={hs}>
      <input 
      
      type='text'
      name='title'
      placeholder='enter title'
      value={course.title}
      onChange={hc}
      required
      
      
      />

      <input 
      
      type='number'
      name='price'
      placeholder='enter price'
      value={course.price}
      onChange={hc}
      required
      
      
      />
      <button type='submit'>Add Course</button>
    </form>
  </div>
  
  </>
}

export default Addcourse