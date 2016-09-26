
var WizardStep = require('../models/wizardStep');

var wizardStepController = function () {
    

    var get = function (req, res) {

       
        var query = {};

        //fill userid and evalid for the query
        WizardStep.find(query, function (err, wizardStep) {
            if (err) {
                
                res.status(500).send(err);
            }
            else {
                
                res.json(wizardStep);
            }
        });
    }

    return {
        get: get
    }
}

module.exports = wizardStepController;