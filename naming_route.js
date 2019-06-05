//Considering our express is named server

server.get('/', function(req,res){
    res.send('something')
})

server.get('/', (req,res) => res.send('something'))

nameOfOurInstanceOfExpress.typeOfMethod(
    'PathOfWhatIWantToGetorPost', 
    callbackFunction(requestContent,responseContent, secretNext){
        console.log(requestContent.url, "I WANT TO SEE THE URL")
        res.send("SEND THE INFO BACK TO THE BROWSER")
    }
)