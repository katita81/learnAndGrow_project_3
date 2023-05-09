const mongoose = require('mongoose');

require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://lauraC:Laura123@cluster0.wnxdact.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect(process.env.MONGODB_URI)

module.exports = mongoose.connection; //mongodb://127.0.0.1:27017/programming-thoughts
//1.144.107.54/32 
