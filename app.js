var http = require('http');
var express = require("express");
var RED = require("node-red");

// Create an Express app
var app = express();

// Add a simple route for static content served from 'public'
app.use("/",express.static("static"));

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot:"/red",
    httpNodeRoot: "/",
    userDir:"app",
	uiHost: "/ui",
	httpStatic: "static",
	flowFile: 'flows.json',
    functionGlobalContext: { },    // enables global context
	contextStorage: {
		default: "file",
		memoryOnly: {
			module: 'memory'
		},
		file: {
			module: 'localfilesystem'
		},
	},
};

// Initialise the runtime with a server and settings
RED.init(server,settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(process.env.PORT || 8000);

// Start the runtime
RED.start();

setTimeout(function(){
	console.log("Open your web browser to http://localhost:8000/ui/ to play.")
},5000);