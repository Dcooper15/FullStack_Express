const express = require("express");
const router = express.Router();
const ceosModel = require("../models/ceosModel");
//the "/" always references the file it is in
router.get("/", async (req, res) => {
    const executiveData = await ceosModel.getAll();
   
    res.render("template", {
        locals: {
            title: "Apple CEOs",
            data: executiveData
        },
        partials: {
            partial: "partial-ceos"
        }
    })
});

module.exports = router;