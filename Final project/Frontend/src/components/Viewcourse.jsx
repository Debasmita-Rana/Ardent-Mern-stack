import { useState, useEffect } from "react";
import axios from "axios";

const Viewcourse = () => {

  const [courses, setCourses] = useState([]);

  const getcourses = async () => {
    try {
      const res = await axios.get("http://localhost:5500/api/courses");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getcourses();
  }, []);

  const deletecourse = async (id) => {
    await axios.delete(`http://localhost:5500/api/courses/${id}`);
    alert("course deleted sucessfully");
    getcourses();
  }

  return <>
    <div>
      {courses.map(x => (
        <div>
          <h3>{x.title }</h3>
          <p>{x.price}</p>
          <button onClick={()=>deletecourse(x._id)}>
            Delete
          </button>
        </div>  
      ))}
    </div>
  
  
  </>
};

export default Viewcourse;