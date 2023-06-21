const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
    },
    phoneNumber: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
      match: /^\d+$/,
    },
    address: {
      type: String,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    versionKey: false,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
