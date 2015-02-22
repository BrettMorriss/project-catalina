var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
       reply('hello world');
    }
});
server.route({
    method: 'GET',
    path:'/hapi', 
    handler: function (request, reply) {
       reply('<a href="http://hapijs.com/">hapijs.com</a>');
       //reply('http://hapijs.com/');
    }
}
);

/**
 *
 *  This works like 'all others'
 *
 *  Note that we URI encode the name parameter, this is to prevent content
 *  injection attacks. Remember, it's never a good idea to render user
 *  provided data without output encoding it first!
 *
 **/
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
