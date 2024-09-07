const mongoose = require('mongoose')
const ownerSchema = mongoose.Schema({
  fullname : {
    type : String,
    minLength : 3,
    trim : trim
  },
  email: String ,
  password : String,

  products : {
    type : Array,
    default : []
  },
  picture : String,
  gstin : String
});
module.exports =  mongoose.model('owner' , ownerSchema);
