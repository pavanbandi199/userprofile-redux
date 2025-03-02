import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import { useDispatch, useSelector } from 'react-redux';

const ProjectDetails = () => {
  const projectData = useSelector(state=>state.ProjectReducer);
  const dispatch = useDispatch();
  const [projectInfo,setProjectInfo] = useState({
          projectName:"",
          projectDetails:"",
          technologyUsed:"",
          liveUrl:"",
        });

  useEffect(()=>{
        setProjectInfo({
          projectName:projectData.projectName ||"",
          projectDetails:projectData.projectDetails || "",
          technologyUsed:projectData.technologyUsed || "",
          liveUrl:projectData.liveUrl || "",
        });
    },[projectData]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProjectInfo((prev) => ({ ...prev, [name]: value }));
    };
    

  const save = () =>{
    let myData = {type:"project",info:projectInfo};
    dispatch(myData);
    alert("Project details saved successfully");
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
          <h3>Project Details</h3>
        </div>
        <div className='card-body '>
          <label className="form-control mb-2">
            Project Name :
            <input type="text" name="projectName" placeholder="Project Name" 
            value={projectInfo.projectName} onChange={handleInputChange} className="form-control mb-2" />
          </label>
          <label className="form-control mb-2">
            Enter Project Details :
            <textarea name="projectDetails" placeholder="Project Details"
            value={projectInfo.projectDetails} onChange={handleInputChange} className="form-control mb-2"></textarea>
          </label>
          <label className="form-control mb-2">
            Technology Used :
            <textarea name="technologyUsed" placeholder="Technology Used"
            value={projectInfo.technologyUsed} onChange={handleInputChange} className="form-control mb-2"></textarea>
          </label>
          <label className="form-control mb-2">
            Project URL : 
            <input type="text" name="liveUrl" placeholder="Projecet URL"
            value={projectInfo.liveUrl } onChange={handleInputChange} className="form-control mb-2" />
          </label>
        </div>
        <div className='card-footer bg-secondary text-white text-center py-2'>
          <button className="btn btn-danger" onClick={save} >Save & Continue</button>
        </div>
      </div>
    </div>
    <div className='col-xl-2 my-4'></div>
    </div>
    </div>
  )
}

export default ProjectDetails
