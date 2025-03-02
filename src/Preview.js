import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FinalPreview = () =>{
    const basicData = useSelector(state=>state.BasicReducer);
    const contactData = useSelector(state=>state.ContactReducer);
    const educationData = useSelector(state=>state.EducationReducer);
    const experienceData = useSelector(state=>state.ExperienceReducer);
    const projectData = useSelector(state=>state.ProjectReducer);
    const skillData = useSelector(state=>state.SkillReducer);

    // const handleChange = () =>{}
    return (
        <div className='container mt-4'>
            <div className='row'>
                
                 
                {/* Basic  section Start */}
                <div className='col-xl-6 mb-5'>
                    <div className='card border-0 shadow-lg'>
                        <div className='card-header bg-info text-white  fs-4 fw-bold'>Basic Details</div>
                        <div className='card-body '>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Full Name : </td>
                                        <td>{basicData.fullname}</td>
                                    </tr>
                                    <tr>
                                        <td>DOB : </td>
                                        <td>{basicData.dob}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender : </td>
                                        <td>{basicData.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Married : </td>
                                        <td>{basicData.married}</td>
                                    </tr>
                                    <tr>
                                        <td>Profile Status :</td>
                                        <td>{basicData.profileStatus}</td>
                                    </tr>
                                    <tr>
                                        <td >About :</td>
                                        <td >{basicData.about}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='card-footer bg-warning text-white'>
                            <Link to='/basic' className='text-decoration-none text-white'>
                                <i className='fa fa-edit'></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Basic section end */}
                
                {/* contact section Start */}
                <div className='col-xl-6 mb-5'>
                    <div className='card border-0 shadow-lg'>
                        <div className='card-header bg-info text-white fs-4 fw-bold'>Contact Details</div>
                        <div className='card-body '>
                        <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Mobile :  </td>
                                        <td>{contactData.mobile}</td>
                                    </tr>
                                    <tr>
                                        <td>Email : </td>
                                        <td>{contactData.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Local Address : </td>
                                        <td>{contactData.lAddress}</td>
                                    </tr>
                                    <tr>
                                        <td>Permanent Address : </td>
                                        <td>{contactData.pAddress}</td>
                                    </tr>
                                    <tr>
                                        <td>Reference :</td>
                                        <td>{contactData.reference}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='card-footer bg-warning text-white'>
                            <Link to='/contact' className='text-decoration-none text-white'>
                                <i className='fa fa-edit'></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Contact section end */}
                
                {/* Education section Start */}
                <div className='col-xl-6 mb-5'>
                    <div className='card border-0 shadow-lg'>
                        <div className='card-header bg-info text-white fs-4 fw-bold'>Education Details</div>
                        <div className='card-body '>
                            <table className='table'>
                                    <tbody>
                                        <tr>
                                            <td>Highest Education : </td>
                                            <td>{educationData.highestEducation}</td>
                                        </tr>
                                        <tr>
                                            <td>Passing Year : </td>
                                            <td>{educationData.passingYear}</td>
                                        </tr>
                                        <tr>
                                            <td>Grade : </td>
                                            <td>{educationData.grade}</td>
                                        </tr>
                                        <tr>
                                            <td>College : </td>
                                            <td>{educationData.college}</td>
                                        </tr>
                                        <tr>
                                            <td>City :</td>
                                            <td>{educationData.city}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <div className='card-footer bg-warning text-white'>
                        <Link to='/education' className='text-decoration-none text-white'>
                                <i className='fa fa-edit'></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Education section end */}

                {/* Project section Start */}
                <div className='col-xl-6 mb-5'>
                    <div className='card border-0 shadow-lg'>
                        <div className='card-header bg-info text-white fs-4 fw-bold'>Project Details</div>
                        <div className='card-body '>
                            <table className='table'>
                                    <tbody>
                                        <tr>
                                            <td>Project Name : </td>
                                            <td>{projectData.projectName}</td>
                                        </tr>
                                        <tr>
                                            <td>Passing Year : </td>
                                            <td>{projectData.projectDetails}</td>
                                        </tr>
                                        <tr>
                                            <td>Grade : </td>
                                            <td>{projectData.technologyUsed}</td>
                                        </tr>
                                        <tr>
                                            <td>College : </td>
                                            <td>{projectData.liveUrl}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <div className='card-footer bg-warning text-white'>
                        <Link to='/project' className='text-decoration-none text-white'>
                                <i className='fa fa-edit'></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Project section end */}

                {/* Skill section Start */}
                <div className='col-xl-6 mb-5'>
                    <div className='card border-0 shadow-lg'>
                        <div className='card-header bg-info text-white fs-4 fw-bold'>Skill Details</div>
                        <div className='card-body '>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Skills : </td>
                                        <td>{skillData.skill}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='card-footer bg-warning text-white'>
                        <Link to='/skill' className='text-decoration-none text-white'>
                                <i className='fa fa-edit'></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Skill section End */}

                {/* Experience section Start */}
                <div className='col-xl-6 mb-5'>
                    <div className='card border-0 shadow-lg'>
                        <div className='card-header bg-info text-white fs-4 fw-bold'>Experience Details</div>
                        <div className='card-body '>
                            <table className='table'>
                                    <tbody>
                                        <tr>
                                            <td>Total Experience : </td>
                                            <td>{experienceData.totalExperience}</td>
                                        </tr>
                                        <tr>
                                            <td>About Experience : </td>
                                            <td>{experienceData.aboutExperience}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <div className='card-footer bg-warning text-white'>
                        <Link to='/experience' className='text-white text-decoration-none'>
                                <i className='fa fa-edit'></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Experience section end */}
                
                <div className='col-xl-12 text-center mb-4'>
                    <button className='btn btn-danger'>Submit by Details</button>
                </div>
            </div>
        </div>
    )
}
export default FinalPreview;











//  {/* Basic  section Start */}
//                 {/* <div className='col-xl-6 mb-4'>
//                     <div className='card border-0 shadow-lg'>
//                         <div className='card-header bg-info text-white'>Basic Details</div>
//                         <div className='card-body '>Basic will come</div>
//                         <div className='card-footer bg-secondary text-white'>Edit</div>
//                     </div>
//                 </div> */}
//                 {/* Basic section end */}
                
//                 {/* contact section Start */}
//                 {/* <div className='col-xl-6 mb-4'>
//                     <div className='card border-0 shadow-lg'>
//                         <div className='card-header bg-info text-white'>Contact Details</div>
//                         <div className='card-body '>
//                         <input type="number" name="mobile" placeholder="Mobile" onChange={handleChange} className="form-control mb-2" />
//                             <input type="email" name="email" placeholder="Email" onChange={handleChange} className="form-control mb-2" />
//                             <textarea name="localAddress" placeholder="Local Address" onChange={handleChange} className="form-control mb-2"></textarea>
//                             <textarea name="permanentAddress" placeholder="Permanent Address" onChange={handleChange} className="form-control mb-2"></textarea>
//                             <textarea name="reference" placeholder="Reference Address & Contact" onChange={handleChange} className="form-control mb-2"></textarea>
//                             <button className="btn btn-danger" onClick={handleChange}>Save & Continue</button>
//                         </div>
//                         <div className='card-footer bg-secondary text-white'>Edit</div>
//                     </div>
//                 </div> */}
//                 {/* Contact section end */}
                
//                 {/* Education section Start */}
//                 {/* <div className='col-xl-6 mb-4'>
//                     <div className='card border-0 shadow-lg'>
//                         <div className='card-header bg-info text-white'>Education Details</div>
//                         <div className='card-body '>Education details</div>
//                         <div className='card-footer bg-secondary text-white'>Edit</div>
//                     </div>
//                 </div> */}
//                 {/* Education section end */}
                
//                 {/* Skill section Start */}
//                 {/* <div className='col-xl-6 mb-4'>
//                     <div className='card border-0 shadow-lg'>
//                         <div className='card-header bg-info text-white'>Skill Details</div>
//                         <div className='card-body '>Basic will come</div>
//                         <div className='card-footer bg-secondary text-white'>Edit</div>
//                     </div>
//                 </div> */}
//                 {/* Skill section End */}

//                 {/* Project section Start */}
//                 {/* <div className='col-xl-6 mb-4'>
//                     <div className='card border-0 shadow-lg'>
//                         <div className='card-header bg-info text-white'>Project Details</div>
//                         <div className='card-body '>Basic will come</div>
//                         <div className='card-footer bg-secondary text-white'>Edit</div>
//                     </div>
//                 </div> */}
//                 {/* Project section end */}

//                 {/* Experience section Start */}
//                 {/* <div className='col-xl-6 mb-4'>
//                     <div className='card border-0 shadow-lg'>
//                         <div className='card-header bg-info text-white'>Experience Details</div>
//                         <div className='card-body '>Basic will come</div>
//                         <div className='card-footer bg-secondary text-white'>Edit</div>
//                     </div>
//                 </div> */}
//                 {/* Experience section end */}