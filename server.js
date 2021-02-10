const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())
const apiRoutes = require('./api')
app.use('/api',apiRoutes);
const PORT = process.env.PORT || 80
app.listen(PORT,()=>{
	console.log(`API is starting on port ${PORT}`)
});


