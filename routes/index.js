const express = require("express");
const router = express.Router(); // Every Route/Controller you create. Always type these 2 lines. ^^

//in standalone routes, every router.get uses "/", it is a self reference
router.get("/", (req, res) => {
    res.render("template", {
        locals: {
            title: "Home Page"
        },
        partials: {
            partial: "partial-index"
        }
    });
});
// Before we had;
//   const rootRouter = (req, res) => {
//     const snippet = `<h1>Hello from Node!</h1>`
//     res
//         .status(200)
//         .send(snippet)
//         .end()
//   });

module.exports = router; //Always use this in export files