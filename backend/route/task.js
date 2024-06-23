const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const express = require("express");
const { FacultyProfileHandler, Fetch_Courses, Fetch_GridSyllabus, Fetch_Marks, Internal_Result_Upload, External_Result_Upload, StudentProfileHandler, Fetch_Consolidate, Update_Marks, AdminProfileHandler, Upload_Regulation, Delete_Result, Upload_Subject_Allocation,UserINFO } = require('../controller/taskHandler');
const { ResultView } = require("../controller/viewHandler");
const roleSwitch = require("../common/roleMaker");
const { Fetch_Regulation } = require("../API/dbTableapi");
let route = express.Router();

route.post('/faculty_profileinfo', FacultyProfileHandler);
route.post('/student_profileinfo', StudentProfileHandler);
route.post('/admin_profileinfo', AdminProfileHandler);
route.get('/userinfo', UserINFO);
route.get('/roleSwitch', roleSwitch);
route.get('/resultview', ResultView);
route.get('/fetch_consolidate',Fetch_Consolidate)
route.get('/fetch_regulation', Fetch_Regulation);
route.get('/fetch_course', Fetch_Courses);
route.get('/fetch_gridsyllabus', Fetch_GridSyllabus);
route.get('/fetch_marks', Fetch_Marks);
route.post('/upload_internal_marks', upload.single('file'), Internal_Result_Upload);
route.post('/upload_external_marks', upload.single('file'), External_Result_Upload);
route.post('/update_marks', Update_Marks);
route.post('/regulation_update')
route.post('/upload_regulation', upload.single('file'), Upload_Regulation);
route.post('/subject_allocation', upload.single('file'),Upload_Subject_Allocation);
route.delete('/delete_result', Delete_Result);


module.exports = route;