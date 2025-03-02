

const BasicReducer = (state,action) => {
    let data = {
      fullname:"",
      dob:"",
      gender:"",
      married:"",
      profileStatus:"",
      about:""
    };

    let basicData = Object.assign(data,state);
    if(action.type === "basic"){
      basicData = action.info;
    }

  return basicData;
}

export default BasicReducer
