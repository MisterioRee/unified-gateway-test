const Construction = require("../models/ConstructionRequestModel");
const {statusValidator}  = require('../helper/statusValidator'); 
const mongoose = require("mongoose");



exports.new_request = (req, res) => {
  const request = new Construction({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    licenseNumber: req.body.licenseNumber,
    description: req.body.description,
    status:statusValidator("Pending"),
  });
  request
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Request created successfully",
        createdRequest: {
          type: "GET",
          url: "http://localhost:5000/requests/" + result.id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.request_by_id = (req, res) => {
  const requestId = req.params.id;
  Construction.findById(requestId)
    .exec()
    .then((request) => {
      if (!request) {
        res.status(404).json({
          message: "request Not Found",
        });
      } else {
        res.status(200).json({
          request: request,
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.get_all = (req, res, next) => {
  Construction.find()
      .exec()
      .then((docs) => {
          const response = {
              count: docs.length,
              constructionRequests: docs.map((doc) => { 
                console.log(doc)
                  return {
                      _id: doc._id,
                      name: doc.name,
                      email: doc.email,
                      licenseNumber: doc.licenseNumber,
                      description: doc.description,
                      status: doc.status,
                      createdAt: doc.createdAt,
                      updatedAt: doc.createdAt,
                  }
              })
          }
          res.status(200).json(response);
      })
      .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
      })
}
  
exports.update_status = (req, res) => {
  const id = req.params.id;
  const newStatus = req.body.status;
  if (!newStatus || !statusValidator(newStatus)) {
    res.status(500).json({
      message: "Invalid status, please enter a valid status type",
    });
  }
  const updateOps = {
    status: statusValidator(newStatus),
  };

  Construction.findOneAndUpdate({ _id: id }, { $set: updateOps }, {new: true})
  .exec()
    .then((result) => { 
      console.log(result); 
      req.app.get("socketService").emiter('requestUpdated', `${JSON.stringify(result)}`);
      res.status(200).json({result: result, message:"Request updated"});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    }); 
  Construction.updateOne({ _id: id }, { $set: updateOps })
    
};
