const express = require("express");
 
const app = express();

const PORT = process.env.PORT || 4000

app.use(express.static('public'));


app.get('/', (req, res , next ) =>{
    res.sendFile(__dirname + '/public/contactFile.html')
})
app.listen(PORT, () =>{
    console.log(`This server is runnning on ${PORT}`);

});

