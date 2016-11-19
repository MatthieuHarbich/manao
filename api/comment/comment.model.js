'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CommentSchema = new Schema({
	commentaire: String
});

module.exports = mongoose.model('Comment', CommentSchema);