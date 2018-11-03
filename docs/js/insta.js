$(document).ready(function(){ 


    var userFeed = new Instafeed({
        get: 'user',
        userId: '673796884',
        accessToken: '673796884.1677ed0.6a310de5d6614b248a57d3c8d7f5f110', 
        resolution: 'standard_resolution', 
        limit: 10
    });
    userFeed.run();


    setTimeout(function(){
    	$('.instafeed').addClass('shadowed');
    }, 100);

});