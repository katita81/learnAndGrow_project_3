const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://lauraC:Laura123@cluster0.wnxdact.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
