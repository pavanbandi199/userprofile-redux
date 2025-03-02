import React, {  useState } from 'react'
import Navigation from '../Navigation'
import { useDispatch, useSelector } from 'react-redux';

const SkillDetails = () => {
  const skillData = useSelector(state=>state.SkillReducer);
    let [skill,setSkill] = useState(skillData.skill || "");
    const dispatch = useDispatch();
    const save = () =>{
      let mySkill = {skill:skill}
      let myData = {type:"skill",info:mySkill};
        dispatch(myData);
        alert("Skills saved successfully");
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
          <h3>Skill Details</h3>
        </div>
        <div className='card-body '>
          <label className="form-control mb-2">
            Enter Your Skills :
            <textarea name="skill" maxLength="300" placeholder="Enter Skills (max 300 chars)" 
            value={skill} onChange={(e)=>setSkill(e.target.value)} className="form-control mb-2"></textarea>
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

export default SkillDetails
