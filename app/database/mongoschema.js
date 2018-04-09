import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
 
//path and originalname are the fields stored in mongoDB
var imageSchema = mongoose.Schema({
 path: {
 type: String,
 required: true,
 trim: true
 },
 originalname: {
 type: String,
 required: true
 }
 
});

export function createmongo(){
    mongoose.connect('mongodb://127.0.0.1:27017/edutech');
}
