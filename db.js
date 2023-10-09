const mongoose=require('mongoose');
async function connectDB(){
    try {
        const db=await mongoose.connect('mongodb+srv://netflix-user:netflix-user@cluster0.qum0voa.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log('connected to DataBase');
    } catch (error) {
        console.log(error);
    }
}
module.exports=connectDB;