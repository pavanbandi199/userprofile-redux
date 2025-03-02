

const ProjectReducer = (state,action) => {
    let data = {
        projectName:"",
        projectDetails:"",
        technologyUsed:"",
        liveUrl:"",
      };
      let projectData = Object.assign(data,state);
        if(action.type === "project"){
            projectData = action.info;
        }
    return projectData;
}

export default ProjectReducer
