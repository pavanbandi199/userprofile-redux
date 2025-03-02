import React, {  useState } from 'react'
import Navigation from '../Navigation'
import { useDispatch,useSelector } from 'react-redux';


const BasicDetails = () => {
   
    const basicData = useSelector(state=>state.BasicReducer);
    let [fName,setfName] = useState(basicData.fullname);
    let [dob,setDob] = useState(basicData.dob);
    let [gender,setGender] = useState(basicData.gender);
    let [married,setMarried] = useState(basicData.married);
    let [proStatus,setProStatus] = useState(basicData.profileStatus);
    let [proAbout,setProAbout] = useState(basicData.about);
    
    const dispatch = useDispatch();
    
    
    
    console.log(basicData)
    const save = () =>{
        let userInfo = {
            fullname:fName,
            dob:dob,
            gender:gender,
            married:married,
            profileStatus:proStatus,
            about:proAbout,
        };
        let myData = {type:"basic",info:userInfo};
        dispatch(myData);
        alert("Basic Details Saved Successfully...");
    }
    


     // const [basicInfo,setBasicInfo] = useState({
    //     fullname:"",
    //     dob:"",
    //     gender:"",
    //     married:"",
    //     profileStatus:"",
    //     about:""
    // });

    // useEffect(()=>{
    //     setBasicInfo({
    //         fullname:basicData.fullname ||"",
    //         dob:basicData.dob || "",
    //         gender:basicData.gender ||"",
    //         married: basicData.married ||"",
    //         profileStatus:basicData.profileStatus || "",
    //         about: basicData.about ||""
    //     });
    // },[basicData]);




  return (
    <div className='container'>
    <div className='row'> 
    <div className='col-xl-3 my-4'>
        <Navigation/>
    </div>
    <div className='col-xl-7 my-4'>
        <div className='card border-0 shadow-lg'>
            <div className='card-header bg-info text-white text-center'><h3>Basic Details </h3></div>
            <div className='card-body '>
                    <label className="form-control mb-2">
                        Enter FullName : <input type='text' placeholder='Enter FullName' 
                        value={fName} onChange={(e)=>setfName(e.target.value)} className="form-control mb-2"/>
                    </label>
                    <label className="form-control mb-2">
                        Enter DOB : <input type='date' placeholder='Enter FullName'
                         value={dob} onChange={(e)=>setDob(e.target.value)} className="form-control mb-2"  />
                    </label>
                    <label className="form-control mb-2">
                        Select Gender :  
                        <select name="gender" className="form-control mb-2" 
                        value={gender} onChange={(e)=>setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label className="form-control mb-2">
                        Select Marital Status :  
                        <select name="married" className="form-control mb-2"
                        value={married} onChange={(e)=>setMarried(e.target.value)}>
                            <option >Select Marital Status</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                    <label className="form-control mb-2">
                        Profile Status :
                        <select name="profileStatus" className="form-control mb-2"
                        value={proStatus} onChange={(e)=>setProStatus(e.target.value)}>
                            <option value="">Profile Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </label>
                    <label className="form-control mb-2">
                        About Yourself :
                        <textarea name="about" maxLength="200" placeholder="About Yourself (max 200 chars)"
                        value={proAbout} onChange={(e)=>setProAbout(e.target.value)}
                        className="form-control mb-2"></textarea>
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

export default BasicDetails
