const Employee = require("../models/employe.schema");

exports.createEmploye = async (req, res) => {
  const employeeData = req.body;
  console.log("data", employeeData);
  try {
    const existingEmployeeEmail = await Employee.findOne({
      email: employeeData.email,
    });
    if (existingEmployeeEmail) {
      return res
        .status(409)
        .json({
          error: "Email already exists",
          message: "Employee creation failed",
        });
    }
    const existingEmployeeMobileNo = await Employee.findOne({
      phoneNumber: employeeData.phoneNumber,
    });
    if (existingEmployeeMobileNo) {
      return res
        .status(409)
        .json({
          error: "Mobile number already exists",
          message: "Employee creation failed",
        });
    }
    const savedEmployee = await Employee.create({
      name: employeeData.name,
      phoneNumber: employeeData.phoneNumber,
      email: employeeData.email,
      address: employeeData.address,
    });
    console.log("save", savedEmployee);
    res
      .status(201)
      .json({ message: "Employee created successfully", data: savedEmployee });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to create employee record",
        message: "Employee creation failed",
      });
  }
};

exports.findEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json({ message: "Employees Found successfully", data: employees });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to retrieve employees",
        message: "Employee retrieval failed",
      });
  }
};

exports.updateEmploye = async (req, res) => {
  const employeeId = req.params.id;
  const updatedData = req.body;
  try {
    const employee = await Employee.findByIdAndUpdate(employeeId, updatedData, {
      new: true,
    });
    if (!employee) {
      return res
        .status(404)
        .json({
          error: "Employee not found",
          message: "Employee update failed",
        });
    }
    res.json({ message: "Employee updated successfully", data: employee });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to update employee record",
        message: "Employee update failed",
      });
  }
};

exports.removeEmploye = async (req, res) => {
  const employeeId = req.params.id;
  try {
    const employee = await Employee.findByIdAndDelete(employeeId);
    if (!employee) {
      return res
        .status(404)
        .json({
          error: "Employee not found",
          message: "Employee deletion failed",
        });
    }
    res.sendStatus(204);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to delete employee record",
        message: "Employee deletion failed",
      });
  }
};
