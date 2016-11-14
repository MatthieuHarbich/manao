/**
 * Main application routes
 */

 'use strict';


 var _ = require('lodash');

 var Form = require('./form/form.model');
 

 module.exports = function connection(io) {
 	io.sockets.on('connection', function(socket) {


 		socket.on('formToSave', function(formToSave) {
 			
 			var newform = new Form();
 			newform.answers = formToSave;
 			newform.save(function(err, formaved) {
 				if (err) return handleError(err);
 				console.log("Form saved!!");
 				console.log(formaved);

 			})


 		});

 		socket.emit('findObjects', {test:'test'});
 		
 	});
 }