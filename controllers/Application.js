var Application = require('../models/Application');
// List of all Applications
exports.Application_list = async function (req, res) {
    try {
        theApplications = await Application.find();
        res.send(theApplications);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Application.
exports.Application_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Application detail: ' + req.params.id);
};
// Handle Application create on POST.
exports.Application_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Application();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"App_Name": "Outlook", "App_Company": "Microsoft", "App_Size": 315.1, "App_Rating": 4.8,"App_Category":"Productivity"}
    document.App_Name = req.body.App_Name;
    document.App_Company = req.body.App_Company;
    document.App_Size = req.body.App_Size;
    document.App_Rating = req.body.App_Rating;
    document.App_Category = req.body.App_Category;

    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Application delete form on DELETE.
exports.Application_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Application delete DELETE ' + req.params.id);
};
// Handle Application update form on PUT.
exports.Application_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Application update PUT' + req.params.id);
};
exports.Application_view_all_Page = async function (req, res) {
    try {
        theApplications = await Application.find();
        res.render('Application', { title: 'Application Search Results', App_Results: theApplications });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};