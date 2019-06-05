/**
 * Handle http connections
 *  method (http)
 *  port (3000 instead of 80)
 * 
 * Need to talk with the filesystem
 * 
 */

 var http = require('http')
 var fs = require('fs')
 var port = 3000


var webServer = http.createServer(function(request, response){
    console.log('Server is hearing ?????? (but not listening)')
    // if(request.url === "/"){
    //     console.log('Welcome home !')
    // }
    // if(request.url === "/secret"){
    //     console.log('SHHHHH !')
    // }

    switch(request.url){
        case "/":
            console.log('home')
            break
        case "/secret":
            console.log('shshhh')
            break
        default:
            console.log('what are you looking at ?')
        }
}) 

webServer.listen(port, function(){
    console.log('server is listening !')
})