

const ContactReducer = (state,action) => {
    let data = {
        mobile:"",
        email:"",
        lAddress:"",
        pAddress:"",
        reference:"",
    };
    let contactData = Object.assign(data,state);
    if(action.type === "contact"){
        contactData = action.info;
    }
    return contactData;
}

export default ContactReducer
