const express = require("express");
const {createEmploye,findEmployee,updateEmploye,removeEmploye} = require('../Controllers/employe.controller');

const router = express.Router();

router.post("/", createEmploye);
router.get("/list", findEmployee);
router.put("/:id", updateEmploye);
router.delete("/:id", removeEmploye);

module.exports = router;
