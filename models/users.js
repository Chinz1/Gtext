const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    
    firstName: {
      type: String,
      required: [true, 'Please input your first name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please input your last name'],
    },
    email: {
      type: String,
      required: [true, 'Please input your first name'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: [true, 'A password is required!'],
    },
    confirmPassword: {
      type: String,
      required: [true, 'Confirm password please!'],
    },
    country: {
      type: String,
      required: [true, 'Country is required!'],
    },
    state: {
      type: String,
      required: [true, 'State is required!'],
    },
    LGA: {
      type: String,
      required: [true, 'LGA is required!'],
    },
    address: {
      type: String,
      required: [true, 'Address is required!'],
    },
    userRole: {
      type: String,
      enum: {
        values: ['employer', 'employee'],
        message: 'User is either an employer or an employee',
      },
      required: [true, 'A User must be defined!'],
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },

  });

const User = mongoose.model('User', userSchema);

module.exports = User;
