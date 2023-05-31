const express = require('express');
const mongoose = require('mongoose');
const Worksheet= require('./Modal') // Create the Worksheet model
const cors = require('cors');

const app = express();
const PORT = 3434; // Update with your desired port number

app.use(express.json());
// Enable CORS
app.use(cors());
// Connect to MongoDB
 const connectDB=async()=>{
    try {
       const {connection} = await mongoose.connect('mongodb://localhost:27017/worksheet')
       console.log(`Database connected on ${connection.host}`)
    } catch (error) {
        console.log("Error",error)
    }}
    connectDB()
// Routes
app.post('/api/worksheet',async (req, res) => {
    try {
        const worksheetData = req.body;
        const worksheet = new Worksheet(worksheetData);
        await worksheet.save();
        res.status(201).json({success:true,data:worksheet});
      } catch (error) {
        res.status(500).json({ error: 'Failed to save worksheet' });
      }
 
  });

app.get('/api/worksheets', async (req, res) => {
  try {
    const worksheets = await Worksheet.find();
    res.status(200).json(worksheets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch worksheets' });
  }
});

// Start the server
const server=app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
module.exports=server
