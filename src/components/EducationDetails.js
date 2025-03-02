import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import { useDispatch, useSelector } from 'react-redux';

const EducationDetails = () => {
  const educationData = useSelector(state=>state.EducationReducer);
  const dispatch = useDispatch();
  const [educationInfo,setEducationInfo] = useState({
          highestEducation:"",
          passingYear:"",
          grade:"",
          college:"",
          city:"",
      });

  useEffect(()=>{
        setEducationInfo({
          highestEducation:educationData.highestEducation ||"",
          passingYear:educationData.passingYear || "",
          grade:educationData.grade ||"",
          college: educationData.college ||"",
          city:educationData.city || "",
        });
    },[educationData]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEducationInfo((prev) => ({ ...prev, [name]: value }));
    };
  console.log(educationData)
  const save = () =>{
    let myData = {type:"education",info:educationInfo};
    dispatch(myData);
    alert("education details saved successfully");
  }
  return (
    <div className='container'>
    <div className='row'> 
    <div className='col-xl-3 my-4'>
        <Navigation/>
    </div>
    <div className='col-xl-7 my-4'>
      <div className='card border-0 shadow-lg'>
        <div className='card-header bg-info text-white text-center  '>
          <h3>Education Details </h3>
        </div>
        <div className='card-body '>
          <label className="form-control mb-2">
            Highest Education : 
            <input type="text" name="highestEducation" placeholder="Highest Education"
            value={educationInfo.highestEducation} onChange={handleInputChange} className="form-control mb-2" />
          </label>  
          <label className="form-control mb-2">
            Passing Year : 
            <input type="number" name="passingYear" placeholder="Passing Year"
            value={educationInfo.passingYear} onChange={handleInputChange} className="form-control mb-2" />
          </label>
          <label className="form-control mb-2">
             Grade % :
             <input type="text" name="grade" placeholder="Grade / %"
             value={educationInfo.grade} onChange={handleInputChange} className="form-control mb-2" />
          </label>
          <label className="form-control mb-2">
            University : 
            <input type="text" name="college" placeholder="College / University"
            value={educationInfo.college} onChange={handleInputChange} className="form-control mb-2" />
          </label>
          <label className="form-control mb-2">
            City : 
            <input type="text" name="city" placeholder="City"
            value={educationInfo.city} onChange={handleInputChange} className="form-control mb-2" />
          </label>
        </div>
        <div className='card-footer bg-secondary text-white text-center py-2'>
          <button className="btn btn-danger" onClick={save}>Save & Continue</button>
        </div>
      </div>             
    </div>
    <div className='col-xl-2 my-4'></div>
    </div>
    </div>
  )
}

export default EducationDetails
