'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var FormSchema = new Schema({
	answers: Schema.Types.Mixed
});

module.exports = mongoose.model('Form', FormSchema);