/**
 * Main application routes
 */

 'use strict';


 var _ = require('lodash');

 var Form = require('./form/form.model');

 var Counter = require('./counter/counter.model');

 var Mail = require('./mail/mail.model');

 var Comment = require('./comment/comment.model');
 // init counter

 Counter.find(function(err,counters) {
 	if (err) { console.log("error find counter") }
 		if (!counters.length) {

 			var newcounter = new Counter();
 			newcounter.type = "designer";
 			newcounter.name = "Nb clicks designer";
 			newcounter.save(function(err, countersaved) {
 				if (err) console.log("error create counter");
 				console.log("Counter saved!!");

 			});

 			var newcounter2 = new Counter();
 			newcounter2.type = "particulier";
 			newcounter2.name = "Nb clicks particulier";
 			newcounter2.save(function(err, countersaved) {
 				if (err) console.log("error create counter");
 				console.log("Counter saved!!");

 			});

 			var visitor = new Counter();
 			visitor.type = "visitor";
 			visitor.name = "Nombre de visteur sur la page principale"
 			visitor.save(function(err, visrosaved) {
 				if (err) console.log("error create counter");
 				console.log("Counter saved!!");

 			});

 			var designerNo = new Counter();
 			designerNo.type = "designerNo",
 			designerNo.name =  "Designer : Nombre de click sur je ne suis pas int.." 
 			designerNo.save(function(err, visrosaved) {
 				if (err) console.log("error create counter");
 				console.log("Counter saved!!");

 			});

 			var partiNo = new Counter();
 			partiNo.type = "particulierNo"
 			partiNo.name =  "Particulier : Nombre de click sur je ne suis pas int.."
 			partiNo.save(function(err, visrosaved) {
 				if (err) console.log("error create counter");
 				console.log("Counter saved!!");

 			});


 		}
 	});
 

 Mail.find(function(err,mails) {
 	if (err) { console.log("error find counter") }
 		if (!mails.length) {

 			var mailD = new Mail();
 			mailD.type = "designer"
 			mailD.save(function(err, mailDsaved) {
 				if (err) console.log("error create mailD");
 				console.log("mailD saved!!");

 			})

 			var mailP = new Mail();
 			mailP.type = "particulier"
 			mailP.save(function(err, mailPsaved) {
 				if (err) console.log("error create mailP");
 				console.log("mailP saved!!");

 			})

 		}
 	});

 module.exports = function connection(io) {
 	io.sockets.on('connection', function(socket) {

 		socket.on('formToSave', function(formToSave) {
 			var newform = new Form();
 			newform.type = formToSave.type;
 			delete newform.type;
 			newform.answers = formToSave;
 			newform.save(function(err, formaved) {
 				if (err)  console.log(err)
 					console.log("Form saved!!");
 				console.log(formaved);
 			})
 		});

 		socket.on('commentToSave', function(commentToSave) {
 			console.log(commentToSave);
 			var newcomment = new Comment();
 			newcomment.commentaire = commentToSave.commentsNo;
 			newcomment.save(function(err, commensaved) {
 				if (err)  console.log(err)
 					console.log("comment saved!!");
 			})
 		});

 		socket.on('mailToSave', function(mail) {
 			Mail.findOneAndUpdate({ type : mail.type}, {$push: {mails: mail.email}}, {new: true}, function (err, counter) {

 			})

 		});

 		socket.on('counter', function(path) {
 			
 			Counter.findOneAndUpdate({ type : path[1]}, {$inc: { counter: 1 }}, {new: true}, function (err, counter) {
 			})

 		});

 		// socket.on('visitor', function(params) {
 		// 	console.log("+1 visitor");
 		// 	Counter.findOneAndUpdate({ type : 'visitor'}, {$inc: { counter: 1 }}, {new: true}, function (err, counter) {
 		// 	})

 		// });

 			socket.on('noInterest', function(type) {
 			console.log("+1 No interst");
 			Counter.findOneAndUpdate({ type : type}, {$inc: { counter: 1 }}, {new: true}, function (err, counter) {
 			})

 		});


 		// la on find et on envoye sur le socket.on(getanswers) du form controller
 		// alors oui là c'est con pcq on fait ce find à chaque fois que on charge socket.js 
 		// mais je dois faire un petit truc en plus je le ferai plus tard je dois aller mangay la.

 		Form.find(function(err, answers) {
 			socket.emit('getAnswers', answers);
 			//console.log(answers);
 		});


 		
 	});
 }