import React, { useState } from "react"; // Import React
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// Student Link and Imports
import Login from "./pages/Login";
import StudHome from "./pages/Student/StudHome";
import StudProfile from "./pages/Student/StudProfile";
import StudServices from "./pages/Student/StudServices";
import StudHelp from "./pages/Student/StudHelp";
import StudAbout from "./pages/Student/StudAbout";
import StudAnalysis from "./pages/Student/StudAnalysis";
import StudentLayout from "./pages/Student/StudentLayout";
import StudResult from "./pages/Student/StudResult";
import Register from "./pages/Register";
import StudGridView from "./pages/Student/StudGridView";
import StudGridSyllabusView from "./pages/Student/StudGridSyllabusView";

//Json File

// Faculty Link and Imports



import FacHome from "./pages/Faculty/FacHome";
import FacProfile from "./pages/Faculty/FacProfile";
//import FacAnalysis from "./pages/Faculty/FacAnalysis";
import FacService from "./pages/Faculty/FacService";
import FacultyLayout from "./pages/Faculty/FacultyLayout";
//import FacResultUploading from "./pages/Faculty/FacResultUploading";
import FacGridSyllabus from "./pages/Faculty/FacGridSyllabus";
import FacGridSyllabusView from "./pages/Faculty/FacGridSyllabusView";
import FacViewResult from "./pages/Faculty/FacViewResult";
import FacViewResultPage from "./pages/Faculty/FacViewResultPage";
import FacConsolidateResult from "./pages/Faculty/FacConsolidateResult";
import FacViewConsolidate from "./pages/Faculty/FacViewConsolidate";
import FacHelp from "./pages/Faculty/FacHelp";
import FacAbout from "./pages/Faculty/FacAbout";

//Admin Link and Imports 



import AdminLayout from "./pages/Admin/AdminLayout";
import AdmHome from "./pages/Admin/AdmHome";
import AdmServices from "./pages/Admin/AdmServices";
import AdmAnalysis from "./pages/Admin/AdmAnalysis";
import AdmProfile from "./pages/Admin/AdmProfile";
import AdmHelp from "./pages/Admin/AdmHelp";
import AdmAbout from "./pages/Admin/AdmAbout";
import AdmUpdateResult from "./pages/Admin/AdmUpdateResult";
import AdmUpdateResultView from "./pages/Admin/AdmUpdateResultView";
import AdmUploadRegulation from "./pages/Admin/AdmUploadRegulation";
import AdmConsolidateResult from "./pages/Admin/AdmConsolidateResult";
import AdmViewConsolidate from "./pages/Admin/AdmViewConsolidate";
import AdmGridSyllabus from "./pages/Admin/AdmGridSyllabus";
import AdmGridSyllabusView from "./pages/Admin/AdmGridSyllabusView";
import AdmDeleteResult from "./pages/Admin/AdmDeleteResult";
import AdmResultUploading from "./pages/Admin/AdmResultUploading";
import AdmSubjectAllocation from "./pages/Admin/AdmSubjectAllocation";
import ViewResult from "./pages/Student/StudViewResultPage";
import MainLayout from "./pages/MainLayout";



// import StudentNavBar from "./components/StudentNavBar";
// import FacultyNavBar from "./components/FacultyNavBar";
// import AdminNavBar from "./components/AdminNavBar";
function App() {
  // const [role, setRole] = useState(null);

  // useEffect(() => {
  //   async function fetchUserInfo() {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/auth/userinfo", { withCredentials: true });
  //       if (response.data.role) {
  //         setRole(response.data.role);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user info", error);
  //     }
  //   }
  //   fetchUserInfo();
  // }, []);

  // function roleSwitch(role) {
    
  //   switch (role) {
  //     case "Student":
        
  //       return renderRoutes(StudentNavBar);
  //     case "Faculty":
  //       return renderRoutes(FacultyNavBar);
  //     case "Admin":
  //       return renderRoutes(AdminNavBar);
  //     default:
  //       return [];
  //   }
  // }

  // function renderRoutes(jsonfile){
  // return jsonfile.map(route => <Route index path={ route.path } element={<ProtectedRoute> lazy={() => import(route.component)}</ProtectedRoute>} />)
  // }

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* <Route path='/' >
        {roleSwitch(setRole)}
        </Route> */}
        <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route index path="/StudHome" element={<ProtectedRoute><StudHome /></ProtectedRoute>} />
          <Route path="/StudProfile" element={<ProtectedRoute><StudProfile /></ProtectedRoute>} />
          <Route path="/StudServices" element={<ProtectedRoute><StudServices /></ProtectedRoute>} />
          <Route path="/StudAbout" element={<ProtectedRoute><StudAbout /></ProtectedRoute>} />
          <Route path="/StudHelp" element={<ProtectedRoute><StudHelp /></ProtectedRoute>} />
          <Route path="/StudAnalysis" element={<ProtectedRoute><StudAnalysis /></ProtectedRoute>} />
          <Route path="/StudResult" element={<ProtectedRoute><StudResult /></ProtectedRoute>} />
          <Route path="/StudViewResultPage" element={<ProtectedRoute><ViewResult /></ProtectedRoute>} />
          <Route path="/StudGridView" element={<ProtectedRoute><StudGridView /></ProtectedRoute>} />
          <Route path="/StudGridSyllabusView" element={<ProtectedRoute><StudGridSyllabusView /></ProtectedRoute>} />

        </Route>
        <Route path="/" element={<ProtectedRoute><FacultyLayout /></ProtectedRoute>}>
          <Route index path="/FacHome" element={<ProtectedRoute><FacHome /></ProtectedRoute>} />
          <Route path="/FacProfile" element={<ProtectedRoute><FacProfile /></ProtectedRoute>} />
          <Route path="/FacServices" element={<ProtectedRoute><FacService /></ProtectedRoute>} />
          <Route path="/FacAbout" element={<ProtectedRoute><FacAbout /></ProtectedRoute>} />
          <Route path="/FacHelp" element={<ProtectedRoute><FacHelp /></ProtectedRoute>} />
          <Route path="/FacGridSyllabus" element={<ProtectedRoute><FacGridSyllabus/></ProtectedRoute>}/>
          <Route path="/FacGridSyllabusView" element={<ProtectedRoute><FacGridSyllabusView /></ProtectedRoute>} />
          <Route path="/FacViewResult" element={<ProtectedRoute><FacViewResult /></ProtectedRoute>} />
          <Route path="/FacConsolidateResult" element={<ProtectedRoute><FacConsolidateResult /></ProtectedRoute>} />
          <Route path="/FacViewResultPage" element={<ProtectedRoute><FacViewResultPage /></ProtectedRoute>} />
          <Route path="/FacViewConsolidate" element={<ProtectedRoute><FacViewConsolidate /></ProtectedRoute>} />
          
        </Route>
        <Route path="/" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route path="/AdmHome" element={<ProtectedRoute><AdmHome /></ProtectedRoute>} /> 
          <Route path="/AdmServices" element={<ProtectedRoute><AdmServices /></ProtectedRoute>} /> 
          <Route path="/AdmAnalysis" element={<ProtectedRoute><AdmAnalysis /></ProtectedRoute>} /> 
          <Route path="/AdmProfile" element={<ProtectedRoute><AdmProfile /></ProtectedRoute>} /> 
          <Route path="/AdmHelp" element={<ProtectedRoute><AdmHelp /></ProtectedRoute>} /> 
          <Route path="/AdmAbout" element={<ProtectedRoute><AdmAbout/></ProtectedRoute>} /> 
          <Route path="/AdmServices" element={<ProtectedRoute><AdmServices /></ProtectedRoute>} />
          <Route path="/AdmUpdateResult" element={<ProtectedRoute><AdmUpdateResult /></ProtectedRoute>} />
          <Route path="/AdmUpdateResultView" element={<ProtectedRoute><AdmUpdateResultView /></ProtectedRoute>} />
          <Route path="/AdmUploadRegulation" element={<ProtectedRoute><AdmUploadRegulation /></ProtectedRoute>} />
          <Route path="/AdmConsolidateResult" element={<ProtectedRoute><AdmConsolidateResult/></ProtectedRoute>}/>
          <Route path="/AdmViewConsolidate" element={<ProtectedRoute><AdmViewConsolidate /></ProtectedRoute>} />
          <Route path="/AdmGridSyllabus" element={<ProtectedRoute><AdmGridSyllabus /></ProtectedRoute>} />
          <Route path="/AdmGridSyllabusView" element={<ProtectedRoute><AdmGridSyllabusView /></ProtectedRoute>} />
          <Route path="/AdmDeleteResult" element={<ProtectedRoute><AdmDeleteResult /></ProtectedRoute>} />
          <Route path="/AdmResultUploading" element={<ProtectedRoute><AdmResultUploading /></ProtectedRoute>} />
          <Route path="/AdmSubjectAllocation" element={<ProtectedRoute><AdmSubjectAllocation /></ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
