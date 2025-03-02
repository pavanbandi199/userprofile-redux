import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import { useDispatch, useSelector } from 'react-redux';

const ContactDetails = () => {
  const contactData = useSelector(state=>state.ContactReducer);
  const dispatch = useDispatch();
  const [contactInfo,setContactInfo] = useState({
        mobile:"",
        email:"",
        lAddress:"",
        pAddress:"",
        reference:"",
    });

  useEffect(()=>{
        setContactInfo({
          mobile:contactData.mobile ||"",
          email:contactData.email || "",
          lAddress:contactData.lAddress ||"",
          pAddress: contactData.pAddress ||"",
          reference:contactData.reference || "",
        });
    },[contactData]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setContactInfo((prev) => ({ ...prev, [name]: value }));
    };
  
  const save = () =>{
    let myData = {type:"contact",info:contactInfo};
    dispatch(myData);
    alert("contact details saved successfully");
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
                          <h3>Contact Details </h3>
                        </div>
                        <div className='card-body '>
                          <label className="form-control mb-2">
                            Enter Mobile Number : 
                              <input type="number" name="mobile" placeholder="Mobile" 
                              value={contactInfo.mobile} onChange={handleInputChange} className="form-control mb-2" />
                          </label>
                          <label className="form-control mb-2">
                            Enter Email Address : 
                            <input type="email" name="email" placeholder="Email" 
                            value={contactInfo.email} onChange={handleInputChange} className="form-control mb-2" />
                          </label>
                          <label className="form-control mb-2">
                            Enter localAddress :
                            <textarea name="lAddress" placeholder="Local Address" 
                            value={contactInfo.lAddress} onChange={handleInputChange} className="form-control mb-2"></textarea>
                          </label>
                          <label className="form-control mb-2">
                            Enter Permanent Address : 
                            <textarea name="pAddress" placeholder="Permanent Address" 
                            value={contactInfo.pAddress} onChange={handleInputChange} className="form-control mb-2"></textarea>
                          </label>
                          <label className="form-control mb-2">
                            Enter Reference : 
                            <textarea name="reference" placeholder="Reference Address & Contact" 
                            value={contactInfo.reference} onChange={handleInputChange} className="form-control mb-2"></textarea>
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

export default ContactDetails
