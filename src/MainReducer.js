import { combineReducers } from "redux";
import BasicReducer from "./reducers/BasicReducer";
import ContactReducer from "./reducers/ContactReducer";
import EducationReducer from "./reducers/EducationReducer";
import SkillReducer from "./reducers/SkillReducer";
import ProjectReducer from "./reducers/ProjectReducer";
import ExperienceReducer from "./reducers/ExperienceReducer";

const MainReducer = combineReducers({
    BasicReducer,ContactReducer,EducationReducer,SkillReducer,ProjectReducer,ExperienceReducer
})

export default MainReducer;