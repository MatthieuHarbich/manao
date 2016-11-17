'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CounterSchema = new Schema({
	type: String,
	counter: Number
});

module.exports = mongoose.model('Counter', CounterSchema);