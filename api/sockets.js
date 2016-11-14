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


 		// la on find et on envoye sur le socket.on(getanswers) du form controller
 		// alors oui là c'est con pcq on fait ce find à chaque fois que on charge socket.js 
 		// mais je dois faire un petit truc en plus je le ferai plus tard je dois aller mangay la.

 		Form.find(function(err, answers) {
				socket.emit('getAnswers', answers);
				console.log(answers);
			});


 		
 	});
 }