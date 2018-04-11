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

export function createmongo() {
    mongoose.connect('mongodb://localhost/edutech').then((err) => {
        console.log(err)
    });
    const model = mongoose.model('edutechstore', imageSchema);
    return new Promise((resolve, reject) => {
        model.find({}, (err, item)=>{
            resolve(item)
        })
    })
}
