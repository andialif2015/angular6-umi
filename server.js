const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/angular6-umi'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/angular6-umi/index.html'));});
app.listen(process.env.PORT || 8080);
