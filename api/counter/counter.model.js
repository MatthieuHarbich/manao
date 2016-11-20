'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CounterSchema = new Schema({
	type: String,
	name : String,
	counter: { type: Number, default: 0 },
});

module.exports = mongoose.model('Counter', CounterSchema);