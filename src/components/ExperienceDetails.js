import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import { useDispatch, useSelector } from 'react-redux';

const ExperienceDetails = () => {
  
  const experienceData = useSelector(state=>state.ExperienceReducer);
  const dispatch = useDispatch();
  const [experienceInfo,setExperienceInfo] = useState({
        totalExperience:"",
          aboutExperience:"",
        });

  useEffect(()=>{
        setExperienceInfo({
          totalExperience:experienceData.totalExperience ||"",
          aboutExperience:experienceData.aboutExperience || "",
        });
    },[experienceData]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setExperienceInfo((prev) => ({ ...prev, [name]: value }));
    };
  
  const save = () =>{
    let myData = {type:"experience",info:experienceInfo};
    dispatch(myData);
    alert("experience details saved successfully");
  }

  return (
    <div className='container'>
    <div className='row'> 
    <div className='col-xl-3 my-4'>
        <Navigation/>
    </div>
    <div className='col-xl-7 my-4'>
      <div className='card border-0 shadow-lg'>
        <div className='card-header bg-info text-white text-center'>
          <h3>Experience Details</h3>
        </div>
        <div className='card-body '>
          <label className="form-control mb-2">
            Total Experience :
            <input type="number" name="totalExperience" placeholder="Total Experience (in years)"
            value={experienceInfo.totalExperience} onChange={handleInputChange} className="form-control mb-2" />
          </label>
          <label className="form-control mb-2">
            About Experience :
            <textarea name="aboutExperience" maxLength="400" placeholder="About Experience (max 400 chars)"
            value={experienceInfo.aboutExperience} onChange={handleInputChange} className="form-control mb-2"></textarea>
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

export default ExperienceDetails
