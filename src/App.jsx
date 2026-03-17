
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ChairmanDesk from "./components/About-Us/ChairmanDesk";
import GeneralSecretary from "./components/About-Us/GeneralSecretary";
import VicePresident from "./components/About-Us/VicePresident";
import CampusDirector from "./components/About-Us/CampusDirector";
import BoardMembers from "./components/About-Us/BoardMembers";
import PrincipalDesk from "./components/About-Us/PrincipalDesk";
import MissionVision from "./components/About-Us/MissionVision";
import StudentGrievances from "./components/Grieviances/StudentGrievances";
import AntiRaggingCommittee from "./components/Grieviances/AntiRaggingCommittee";
import WomensCommittee from "./components/Grieviances/WomensCommittee";
import AntiHarassmentCommittee from "./components/Grieviances/AntiHarassmentCommittee";
import AntiSexualCommittee from "./components/Grieviances/AntiSexualCommittee";
import SCSTCommittee from "./components/Grieviances/SCSTCommittee";
import EntrepreneurshipCommittee from "./components/Grieviances/EntrepreneurshipCommittee";
import SocialLifeCommittee from "./components/Grieviances/SocialLifeCommittee";
import VishakhaCommittee from "./components/Grieviances/VishakhaCommittee";
import EmergencyCommittee from "./components/Grieviances/EmergencyCommittee";
import Faculty from "./pages/Faculty";
import EligibilityCriteria from "./components/Admissions/EligibilityCriteria";
import RequiredDocuments from "./components/Admissions/RequiredDocuments";
import Hostel from "./components/facilities/Hostel";
import FoodFacility from "./components/facilities/FoodFacility";
import Sports from "./components/facilities/Sports";
import MedicalFacility from "./components/facilities/MedicalFacility";
import Brahmutsav from "./components/Compus-life/Brahmutsav";
import AcademicAchievements from "./components/Compus-life/AcademicAchievements";
import ThemeDays from "./components/Compus-life/ThemeDays";
import ExtracurriculumActivities from "./components/Compus-life/ExtracurriculumActivities";
import Contact from "./pages/Contact";
import AddmissionForm from "./components/Admissions/AddmissionForm";

function App() {

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/president-desk" element={<ChairmanDesk/>} />
          <Route path="/general-secretary-desk" element={<GeneralSecretary/>} />
          <Route path="/vice-president-desk" element={<VicePresident/> }/>
          <Route path="/campus-director-desk" element={<CampusDirector/> }/>
          <Route path="/board-member" element={<BoardMembers/>} />
          <Route path="/principal-desk" element={<PrincipalDesk/>}/>  
          <Route path="/our-vision-mission" element={<MissionVision/>} />
          <Route path="/student-grievances" element={<StudentGrievances/>} />
          <Route path="/anti-ragging-committee" element={<AntiRaggingCommittee/>} />
          <Route path="/womens-committee" element={<WomensCommittee/>} />
          <Route path="/anti-harassment-committee" element={<AntiHarassmentCommittee/>} />
          <Route path="/anti-sexual-committee" element={<AntiSexualCommittee/>} />
          <Route path="/sc-st-committee" element={<SCSTCommittee/>} />
          <Route path="/entrepreneurship-committee" element={<EntrepreneurshipCommittee/>} />
          <Route path="/social-life-committee" element={<SocialLifeCommittee/>} />
          <Route path="/vishakha-committee" element={<VishakhaCommittee/>} />
          <Route path="/emergency-committee" element={<EmergencyCommittee/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/eligibility-criteria" element={<EligibilityCriteria/>} />
          <Route path="/required-documents" element={<RequiredDocuments/>} />
          <Route path="/hostel" element={<Hostel/>} />
          <Route path="/food" element={<FoodFacility/>} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="/medical" element={<MedicalFacility/>} />
          <Route path="/brahmutsav" element={<Brahmutsav/>} />
          <Route path="/academic-achievements" element={<AcademicAchievements/>} />
          <Route path="/theme-days" element={<ThemeDays/>} />
          <Route path="/extracurriculum-activities" element={<ExtracurriculumActivities/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admission-form" element={<AddmissionForm/>} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
