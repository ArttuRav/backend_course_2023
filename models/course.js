const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  items: [],
  zipCode: {
    type: Number,
    min: [10000, 'Zip code too short'],
    max: 99999,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

module.exports = mongoose.model('Course', courseSchema);
