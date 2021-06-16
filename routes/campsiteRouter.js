const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

campsiteRouter.route('/:campsiteId')

.all((req, res, next) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end(`will send campsite ${req.params.campsiteId} to you`)
})

//POST

.post((req, res) => {
    res.statusCode = 403;
    res.end(`Post operation not supported on /campsite/${req.params.campsiteId}`);
})

//PUT 
.put( (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`)
    res.end(`Will update the campsite: ${req.body.name}
           with description: ${req.body.description}`)
})

//delete
.delete( (req, res) => {
    res.end(`Deleting the campsite ${req.params. campsiteId}`)
})


module.exports = campsiteRouter;