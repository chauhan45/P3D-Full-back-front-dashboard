const mongoose0 = require("mongoose"); // Mongo
mongoose0.connect("mongodb+srv://amit:12345@cluster0.xeimo.mongodb.net/test?retryWrites=true&w=majority", 
                 {useNewUrlParser: true, useUnifiedTopology: true}); // Connection
module.exports = mongoose0; // Exports             