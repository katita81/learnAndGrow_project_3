const mongoose = require('mongoose');

require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://lauraC:Laura123@cluster0.wnxdact.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test')

module.exports = mongoose.connection; 
