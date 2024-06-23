const {
  Mtech_student_info,
  MCA_student_info,
  MSc_DS_student_info,
  MSc_CS_student_info,
  MSc_AI_student_info,
  Faculty_info,
  Admin_info,
} = require("../models/RegisterDetails");
let jwtsec = process.env.JWTSec;
const jwt = require("jsonwebtoken"); // Import the jwt library
const CookieParser = require("cookie-parser");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../models/index");
const fs = require("fs");
const xlsx = require("xlsx");

async function FacultyProfileHandler(req, res) {
  try {
    const sessionId = req.body.sessionId;
    console.log("Session ID:", sessionId);
    if (!sessionId) {
      return res
        .status(401)
        .send({ message: "Unauthorized: Session ID missing" });
    }

    // Verify the JWT token
    const decoded = jwt.verify(sessionId, jwtsec);

    // Extract email from the decoded JWT payload
    const email = decoded.email;

    if (!email) {
      return res.status(400).send({ message: "Invalid token: Email missing" });
    }

    const facultyInfo = await Faculty_info.findOne({ where: { email } });

    if (!facultyInfo) {
      return res.status(404).json({ message: "Faculty information not found" });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Faculty information found",
        userData: facultyInfo,
      });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
}


async function AdminProfileHandler(req, res) {
  try {
    const sessionId = req.body.sessionId;
    console.log("Session ID:", sessionId);
    if (!sessionId) {
      return res
        .status(401)
        .send({ message: "Unauthorized: Session ID missing" });
    }

    // Verify the JWT token
    const decoded = jwt.verify(sessionId, jwtsec);

    // Extract email from the decoded JWT payload
    const email = decoded.email;

    if (!email) {
      return res.status(400).send({ message: "Invalid token: Email missing" });
    }

    const adminInfo = await Admin_info.findOne({ where: { email } });

    if (!adminInfo) {
      return res.status(404).json({ message: "Faculty information not found" });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Faculty information found",
        userData: adminInfo,
      });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

async function StudentProfileHandler(req, res) {
  try {
    const sessionId = req.body.sessionId;
    console.log("Session ID:", sessionId);
    if (!sessionId) {
      return res
        .status(401)
        .send({ message: "Unauthorized: Session ID missing" });
    }

    // Verify the JWT token
    const decoded = jwt.verify(sessionId, jwtsec);

    // Extract email from the decoded JWT payload
    const email = decoded.email;

    if (!email) {
      return res.status(400).send({ message: "Invalid token: Email missing" });
    }

    let studentInfo;

    // Array of student models corresponding to different programs
    const studentModels = [
      Mtech_student_info,
      MCA_student_info,
      MSc_DS_student_info,
      MSc_CS_student_info,
      MSc_AI_student_info,
    ];

    // Loop through each student model to search for student data
    for (const StudentModel of studentModels) {
      studentInfo = await StudentModel.findOne({ where: { email } });
      if (studentInfo) {
        break; // If student data found, break the loop
      }
    }

    if (!studentInfo) {
      return res.status(404).json({ message: "Student information not found" });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Student information found",
        userData: studentInfo,
      });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

async function fetch_Mtech_student(req, res, email) {
  let studentInfo;
  studentInfo = await Mtech_student_info.findOne({ where: { email } });
  if (studentInfo) {
    console.log("He is a M.Tech Student");
    return res.status(200).send({
      success: true,
      message: "He is a M.Tech Student",
      userData: studentInfo,
    });
  } else {
    res.send("He is not a M.Tech student");
  }
}

async function fetch_MCA_student(req, res, email) {
  let studentInfo;
  studentInfo = await MCA_student_info.findOne({ where: { email } });
  if (studentInfo) {
    console.log("He is a MCA Student");
    return res.status(200).send({
      success: true,
      message: "He is a MCA Student",
      userData: studentInfo,
    });
  } else {
    res.send("He is not a MCA student");
  }
}

async function fetch_MSc_student(req, res, email) {
  let studentInfo;
  studentInfo = await MSc_student_info.findOne({ where: { email } });
  if (studentInfo) {
    console.log("He is a MSc Student");
    return res.status(200).send({
      success: true,
      message: "He is a MSc Student",
      userData: studentInfo,
    });
  } else {
    res.send("He is not a MSc student");
  }
}

async function Faculty_Info(req, res, email) {
  let facultyInfo;
  facultyInfo = await Faculty_info.findOne({ where: { email } });
  if (facultyInfo) {
    return res.status(200).send({
      success: true,
      message: "Faculty Found",
      userData: facultyInfo,
    });
  } else {
    res.send("Faculty not found");
  }
}

async function Internal_Result_Upload(req, res) {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded" });
  }

  try {
    //const xlsx = require("xlsx");
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0]; // Assuming first sheet
    const worksheet = workbook.Sheets[sheetName];

    // Convert Excel data to JSON
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    console.log(jsonData);

    // If no data is found, return with a message
    if (jsonData.length === 0) {
      return res
        .status(400)
        .send({ message: "No data found in the Excel file" });
    }

    // Extract column headers
    const headers = Object.keys(jsonData[0]);

    // Use sheetName as tableName
    const tableName = "internal_" + sheetName;

    // Check if table exists
    const tableExists = await sequelize.getQueryInterface().showAllTables();
    if (tableExists.some((table) => table.tableName === tableName)) {
      // Table already exists
      return res.send({
        message:
          "Table already exists. Marks may have already been entered. If you want to update, please use the update section.",
      });
    }

    // Define dynamic table attributes
    const tableAttributes = {};
    headers.forEach((header) => {
      // Define attributes dynamically based on column headers
      tableAttributes[header.toLowerCase()] = Sequelize.STRING;
    });

    // Create the table
    const tableModel = await sequelize.define(tableName, tableAttributes, {
      freezeTableName: true,
    });

    await tableModel.sync();

    // Insert data into the table
    for (const data of jsonData) {
      await tableModel.create(data);
    }

    // Send success message
    res
      .status(200)
      .send({ message: "File uploaded and data inserted successfully" });
  } catch (error) {
    console.error("Error processing file:", error);
    res
      .status(500)
      .send({ message: "An error occurred while processing the file" });
  } finally {
    // Clean up uploaded file
    fs.unlinkSync(req.file.path);
  }
}

async function External_Result_Upload(req, res) {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded" });
  }

  try {
    //const xlsx = require("xlsx");
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0]; // Assuming first sheet
    const worksheet = workbook.Sheets[sheetName];

    // Convert Excel data to JSON
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    console.log(jsonData);

    // If no data is found, return with a message
    if (jsonData.length === 0) {
      return res
        .status(400)
        .send({ message: "No data found in the Excel file" });
    }

    // Extract column headers
    const headers = Object.keys(jsonData[0]);

    // Use sheetName as tableName
    const tableName = "external_" + sheetName;

    // Check if table exists
    const tableExists = await sequelize.getQueryInterface().showAllTables();
    if (tableExists.some((table) => table.tableName === tableName)) {
      // Table already exists
      return res.send({
        message:
          "Table already exists. Marks may have already been entered. If you want to update, please use the update section.",
      });
    }

    // Define dynamic table attributes
    const tableAttributes = {};
    headers.forEach((header) => {
      // Define attributes dynamically based on column headers
      tableAttributes[header.toLowerCase()] = Sequelize.STRING;
    });

    // Create the table
    const tableModel = await sequelize.define(tableName, tableAttributes, {
      freezeTableName: true,
    });

    await tableModel.sync();

    // Insert data into the table
    for (const data of jsonData) {
      await tableModel.create(data);
    }

    // Send success message
    res
      .status(200)
      .send({ message: "File uploaded and data inserted successfully" });
  } catch (error) {
    console.error("Error processing file:", error);
    res
      .status(500)
      .send({ message: "An error occurred while processing the file" });
  } finally {
    // Clean up uploaded file
    fs.unlinkSync(req.file.path);
  }
}

async function Fetch_Courses(req, res) {
  try {
    const { regulation, semester, batch } = req.query;
    console.log("Semester:", semester);
    const tableName = `grid_${regulation.toLowerCase()}`;
    console.log("Looking for table:", tableName);

    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log("Available tables:", tables);

    if (!tables.includes(tableName)) {
      console.error("Table not found:", tableName);
      return res.status(404).json({ message: "Table not found" });
    }

    const courses = await sequelize.query(
      `SELECT course_code, course_name FROM ${tableName} WHERE semester = :semester`,
      {
        replacements: { semester },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    res.send({ success: true, courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function Fetch_GridSyllabus(req, res) {
  try {
    const { regulation } = req.query;

    const tableName = `grid_${regulation.toLowerCase()}`;
    console.log("Looking for table:", tableName);

    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log("Available tables:", tables);

    if (!tables.includes(tableName)) {
      console.error("Table not found:", tableName);
      return res.status(404).json({ message: "Table not found" });
    }

    // Assuming the table structure contains a column named 'course_code'
    const courses = await sequelize.query(`SELECT * FROM ${tableName} `, {
      type: sequelize.QueryTypes.SELECT,
    });

    const gridSyllabus = courses;
    res.send({ success: true, gridSyllabus });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function Fetch_Marks(req, res) {
  try {
    const { regulation, courseId, semester, batch } = req.query;

    console.log("Request query:", req.query);

    const InternalTableName = `internal_${regulation.toLowerCase()}sem${semester}${batch}`;
    const ExternalTableName = `external_${regulation.toLowerCase()}sem${semester}${batch}`;

    console.log(
      "Internal : " +
        InternalTableName +
        " & " +
        "External : " +
        ExternalTableName
    );

    const tables = await sequelize.getQueryInterface().showAllTables();

    if (
      !tables.includes(InternalTableName) ||
      !tables.includes(ExternalTableName)
    ) {
      const missingTable = !tables.includes(InternalTableName)
        ? "Internal"
        : "External";
      console.error(`${missingTable} Result Table not found`);
      return res
        .status(404)
        .json({ message: `${missingTable} Result Table not found` });
    }

    const StudentsDetails = await sequelize.query(
      `SELECT id,name, register_number FROM ${InternalTableName}`,
      { type: sequelize.QueryTypes.SELECT }
    );

    const InternalStudentMarks = await sequelize.query(
      `SELECT register_number, ${courseId} FROM ${InternalTableName}`,
      { type: sequelize.QueryTypes.SELECT }
    );

    const ExternalStudentMarks = await sequelize.query(
      `SELECT register_number, ${courseId} FROM ${ExternalTableName}`,
      { type: sequelize.QueryTypes.SELECT }
    );

    res.json({
      success: true,
      StudentsDetails,
      InternalStudentMarks,
      ExternalStudentMarks,
    });
  } catch (error) {
    console.error("Error fetching marks:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function Fetch_Consolidate(req, res) {
  try {
    const { regulation, semester, batch } = req.query;

    console.log("Request query:", req.query);

    const InternalTableName = `internal_${regulation.toLowerCase()}sem${semester}${batch}`;
    const ExternalTableName = `external_${regulation.toLowerCase()}sem${semester}${batch}`;

    console.log(
      "Internal : " +
        InternalTableName +
        " & " +
        "External : " +
        ExternalTableName
    );

    const tables = await sequelize.getQueryInterface().showAllTables();

    if (
      !tables.includes(InternalTableName) ||
      !tables.includes(ExternalTableName)
    ) {
      const missingTable = !tables.includes(InternalTableName)
        ? "Internal"
        : "External";
      console.error(`${missingTable} Result Table not found`);
      return res
        .status(404)
        .json({ success: false, message: `${missingTable} Result Table not found` });
    }

    const InternalStudentMarks = await sequelize.query(
      `SELECT * FROM ${InternalTableName}`,
      { type: sequelize.QueryTypes.SELECT }
    );

    const ExternalStudentMarks = await sequelize.query(
      `SELECT * FROM ${ExternalTableName}`,
      { type: sequelize.QueryTypes.SELECT }
    );

    // Combine internal and external student marks
    const StudentsDetails = InternalStudentMarks.map((internal) => {
      const external = ExternalStudentMarks.find(
        (ext) => ext.register_number === internal.register_number
      );

      return {
        register_number: internal.register_number,
        // Add more fields here as needed
        // For example:
        name: internal.name,
        // semester: internal.semester,
        // batch: internal.batch,
        // Add corresponding external fields if needed
        // ext_field_1: external.ext_field_1,
        // ext_field_2: external.ext_field_2,
        ...internal, // Include all internal fields
        ...external, // Include all external fields
      };
    });

    res.json({
      success: true,
      StudentsDetails,
      // You can also include InternalStudentMarks and ExternalStudentMarks separately if needed
      InternalStudentMarks,
      ExternalStudentMarks,
    });
  } catch (error) {
    console.error("Error fetching marks:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

async function Update_Marks(req, res) {
  try {
    const { registerNumber, courseId, internalMark, externalMark, regulation, semester, batch } = req.body;

    const course_number = courseId.toLowerCase();

    const InternalTableName = `internal_${regulation.toLowerCase()}sem${semester}${batch}`;
    const ExternalTableName = `external_${regulation.toLowerCase()}sem${semester}${batch}`;

    const tables = await sequelize.getQueryInterface().showAllTables();

    if (
      !tables.includes(InternalTableName) ||
      !tables.includes(ExternalTableName)
    ) {
      const missingTable = !tables.includes(InternalTableName)
        ? "Internal"
        : "External";
      console.error(`${missingTable} Result Table not found`);
      return res
        .status(404)
        .json({ message: `${missingTable} Result Table not found` });
    }

    // Find the student's internal and external marks records using raw SQL queries
    const [internalResult] = await sequelize.query(
      `SELECT * FROM ${InternalTableName} WHERE register_number = :registerNumber`,
      {
        replacements: { registerNumber },
        type: sequelize.QueryTypes.SELECT
      }
    );

    const [externalResult] = await sequelize.query(
      `SELECT * FROM ${ExternalTableName} WHERE register_number = :registerNumber`,
      {
        replacements: { registerNumber },
        type: sequelize.QueryTypes.SELECT
      }
    );

    // Check if records exist
    if (internalResult && externalResult) {
      // Update the marks for the specified course
      const updateInternalQuery = `UPDATE ${InternalTableName} SET ${course_number} = :internalMark WHERE register_number = :registerNumber`;
      const updateExternalQuery = `UPDATE ${ExternalTableName} SET ${course_number} = :externalMark WHERE register_number = :registerNumber`;

      await Promise.all([
        sequelize.query(updateInternalQuery, {
          replacements: { internalMark, registerNumber }
        }),
        sequelize.query(updateExternalQuery, {
          replacements: { externalMark, registerNumber }
        })
      ]);

      res.status(200).json({ success: true, message: 'Marks updated successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Student marks record not found' });
    }
  } catch (error) {
    console.error('Error updating marks:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}


async function Update_Regulation(req, res) {
  try {
    const { regulationId, recordId, ...updatedData } = req.body;
    const tableName = `grid_${regulationId.toLowerCase()}`;
    const tables = await sequelize.getQueryInterface().showAllTables();

    if (!tables.includes(tableName)) {
      // If the table for the regulation ID doesn't exist, return a 404 response
      console.error(`Table '${tableName}' not found`);
      return res.status(404).json({ message: `Table '${tableName}' not found` });
    }
    
    // Update the regulation record in the corresponding table based on the provided recordId
    const [updatedRowsCount] = await sequelize.models[tableName].update(updatedData, {
      where: { id: recordId } // Assuming 'id' is the unique identifier for each record
    });

    if (updatedRowsCount > 0) {
      // If one or more rows were updated successfully, return a success message
      return res.status(200).json({ success: true, message: 'Regulation updated successfully' });
    } else {
      // If no rows were updated, return a 404 response
      return res.status(404).json({ success: false, message: 'No matching records found' });
    }
  } catch (error) {
    console.error('Error updating regulation:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}




async function Upload_Regulation(req, res) {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded." });
  }



  try {
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0]; // Assuming first sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    if (!jsonData.length) {
      return res.status(400).send({ message: "No data found in the Excel file." });
    }

    const headers = Object.keys(jsonData[0]);
    const tableName = "grid_" + sheetName; // Ensure table name is SQL-safe

    const tableExists = await sequelize.getQueryInterface().showAllTables();
    if (tableExists.includes(tableName)) {
      return res.status(400).send({
        message: "Table already exists. Please update using the appropriate section."
      });
    }

    const tableAttributes = headers.reduce((acc, header) => {
      acc[header.toLowerCase()] = Sequelize.STRING;
      return acc;
    }, {});

    const tableModel = sequelize.define(tableName, tableAttributes, { freezeTableName: true });
    await tableModel.sync();

    await tableModel.bulkCreate(jsonData);

    res.status(200).send({ message: "File uploaded and data inserted successfully." });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).send({ message: "An error occurred while processing the file." });
  } finally {
    if (req.file && req.file.path) {
      await fs.unlink(req.file.path).catch(error => console.error("Failed to delete file:", error));
    }
  }
}



async function Delete_Result(req, res) {
  try {
    const { regulation, semester, batch } = req.body;

    

    const InternalTableName = `internal_${regulation.toLowerCase()}sem${semester}${batch}`;
    const ExternalTableName = `external_${regulation.toLowerCase()}sem${semester}${batch}`;

    const tables = await sequelize.getQueryInterface().showAllTables();

    if (
      !tables.includes(InternalTableName) ||
      !tables.includes(ExternalTableName)
    ) {
      const missingTable = !tables.includes(InternalTableName)
        ? "Internal"
        : "External";
      console.error(`${missingTable} Result Table not found`);
      return res.json({ message: `${missingTable} Result Table not found` });
    } else {
      await sequelize.query(`DROP TABLE IF EXISTS ${InternalTableName}`);
      await sequelize.query(`DROP TABLE IF EXISTS ${ExternalTableName}`);
      res.send({success:true, message: "Successfully deleted" });
    }
  } catch (error) {
    console.error('Error updating marks:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}



async function Upload_Subject_Allocation(req, res) {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded." });
  }

  try {
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0]; // Assuming first sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    console.log(jsonData);

    if (!jsonData.length) {
      return res.status(400).send({ message: "No data found in the Excel file." });
    }

    const headers = Object.keys(jsonData[0]);
    const tableName = "SA_" + sheetName; // Ensure table name is SQL-safe

    const tableExists = await sequelize.getQueryInterface().showAllTables();
    if (tableExists.includes(tableName)) {
      return res.status(400).send({
        message: "Table already exists. Please update using the appropriate section."
      });
    }

    const tableAttributes = headers.reduce((acc, header) => {
      acc[header.toLowerCase()] = Sequelize.STRING;
      return acc;
    }, {});

    const tableModel = sequelize.define(tableName, tableAttributes, { freezeTableName: true });
    await tableModel.sync();

    await tableModel.bulkCreate(jsonData);

    res.status(200).send({ message: "File uploaded and data inserted successfully." });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).send({ message: "An error occurred while processing the file." });
  } finally {
    if (req.file && req.file.path) {
      await fs.unlink(req.file.path).catch(error => console.error("Failed to delete file:", error));
    }
  }
}


async function UserINFO(req, res) {
  // Extract JWT from cookies

  let token = req.cookies.sessionId; // Assuming 'token' is the name of your JWT cookie
  console.log(token);

  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, jwtsec);
    return res.status(200).send({ role: decoded.role });
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized" });
  }
}
module.exports.FacultyProfileHandler = FacultyProfileHandler;
module.exports.StudentProfileHandler = StudentProfileHandler;
module.exports.Internal_Result_Upload = Internal_Result_Upload;
module.exports.External_Result_Upload = External_Result_Upload;
module.exports.Fetch_Courses = Fetch_Courses;
module.exports.Fetch_GridSyllabus = Fetch_GridSyllabus;
module.exports.Fetch_Marks = Fetch_Marks;
module.exports.Fetch_Consolidate = Fetch_Consolidate;
module.exports.Update_Marks = Update_Marks;
module.exports.AdminProfileHandler = AdminProfileHandler;
module.exports.Upload_Regulation = Upload_Regulation;
module.exports.Upload_Subject_Allocation = Upload_Subject_Allocation;
module.exports.Update_Regulation = Update_Regulation;
module.exports.Delete_Result = Delete_Result;
module.exports.UserINFO = UserINFO;
