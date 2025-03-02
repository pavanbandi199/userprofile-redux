

const SkillReducer = (state,action) => {
    let data = {
      skill:"",
    };
  
    let skillData = Object.assign(data,state);
    if(action.type === "skill"){
      console.log(action.info)
      skillData = action.info;

    }

  return skillData;
}

export default SkillReducer
