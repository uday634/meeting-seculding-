const Data = require('../models/sqldata')

exports.addData = (req, res, next) => {
    const requestData = req.body;
    const name = requestData.name;
    const email = requestData.email;
    const time= requestData.time;

    // Use the Data model to create a new record
    Data.create({
        name: name,
        email: email,
        time:time
    })
    .then(result => {
        console.log(result);
        res.status(201).json(result); // Respond with the created record
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
}

exports.sendData = (req, res, next)=>{
    Data.findAll()
        .then(result=>{
             res.json(result)
        })
        .catch(err=>console.log(err))
}

exports.deleteData= (req, res, next) => {
    const meetId = req.params.id;
    Data.findByPk(meetId)
      .then(meeting => {
        return meeting.destroy();
      })
      .then(result => console.log('Deleted'))
      .catch(err => console.log(err))
}