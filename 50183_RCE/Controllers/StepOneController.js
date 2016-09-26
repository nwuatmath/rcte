var stepOneController = function (StepOne) {
    var post = function (req, res) {
        var step1 = new StepOne(req.body);
       
        step1.save(function (err) {
            if (err)
                console.log(err);
            else
                res.status(201).send(steps);


        });
        
    }

    var get = function (req, res) {

        var query = {};

       //fill userid and evalid for the query
        StepOne.find(query, function (err, step1) {
            if (err)
                res.status(500).send(err);
            else
                res.json(step1);
        });
    }

    return {
        post: post,
        get: get
    }
}

module.exports = stepOneController;