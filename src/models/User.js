import mongoose from 'mongoose';

export const User = mongoose.model('User', {
  name: String,
  surname: String,
  email: String,
  birthDate: String,
  phone: String
});