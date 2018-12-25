var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

const port = 3000
app.get('/scrape', function(req, res){
content =Array();
url = 'http://www.hurriyet.com.tr/';
request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);
         j=0;
        $('.swiper-wrapper .swiper-slide a').each(function(i, elem) {
            if($(this).attr('href').indexOf('gundem')>-1){
                request(url+$(this).attr('href'), function(error, response, html){
                    if(!error){
                        var $ = cheerio.load(html);
                        j++;
                        content += '<br><br><h4 style="font-family:Arial">'+j+') '+ $('h2.rhd-article-spot').html()+'</h4>';
                    }
                });
            }
          });
}
});
credentials = {
    user: 'ibrahimuslu@gmail.com',
    pass: '',
    to: 'ibrahimuslu@gmail.com'
}
setTimeout(function() {
    require('gmail-send')({
        user: credentials.user,           // Your GMail account used to send emails
        pass: credentials.pass,           // Application-specific password
        to:   credentials.user,           // Send to yourself
        subject: 'ping',
        html:    content,  // Plain text
      })({});  
    res.send(content);
}, 3000);
// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

//fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

  //  console.log('File successfully written! - Check your project directory for the output.json file');

//})

// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.

  //  }) ;
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))