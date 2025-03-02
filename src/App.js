import { HashRouter,Route,Routes } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import ContactDetails from "./components/ContactDetails";
import EducationDetails from "./components/EducationDetails";
import ExperienceDetails from "./components/ExperienceDetails";
import ProjectDetails from "./components/ProjectDetails";
import SkillDetails from "./components/SkillDetails";
import FinalPreview from "./Preview";


function App() {
  return (
    <HashRouter className='container mt-4'>
        <h1 className="fa-bold fa-8 text-center">  User Profile </h1>
            <Routes>
              <Route path="/basic" element={<BasicDetails/>}/>
              <Route path="/contact" element={<ContactDetails/>}/>
              <Route path="/education" element={<EducationDetails/>}/>
              <Route path="/experience" element={<ExperienceDetails/>}/>
              <Route path="/project" element={<ProjectDetails/>}/>
              <Route path="/skill" element={<SkillDetails/>}/>
              <Route path="/" element={<FinalPreview/>}/>
              {/* <BasicDetails/>
              <ContactDetails/>
              <EducationDetails />
              <SkillDetails />
              <ProjectDetails />
              <ExperienceDetails /> */}
              {/* <FinalPreview/> */}
            </Routes>
    </HashRouter>
  );
}

export default App;
