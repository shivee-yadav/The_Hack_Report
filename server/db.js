const mongoose = require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        family:4
    }

    try {
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to database");
        
    }
}