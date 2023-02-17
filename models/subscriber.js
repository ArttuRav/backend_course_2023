'use strict';

const mongoose = require('mongoose'),
  subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  });

subscriberSchema.methods.getInfo = function () {
  return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function () {
  return this.model('Subscriber').find({ zipCode: this.zipCode }).exec();
};

module.exports = mongoose.model('Subscriber', subscriberSchema);
