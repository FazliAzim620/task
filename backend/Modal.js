const mongoose=require('mongoose')
const worksheetSchema = new mongoose.Schema({
    questions: [{ 
      question: String,
      options: [String],
      correctOption: Number
    }]
  });
module.exports = mongoose.model('sheet', worksheetSchema);