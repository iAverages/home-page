$(document).ready(function() {

    function getQuote() {
      var quotes=[{
      quote: "hehe"
      }, {
        quote: "A clock, because why not."
      },{
        quote: "k"
      },{
        quote: "Garlic Bread"
      },{
        quote: "<a href=\"https://dannn.net/wcpid\"> Click me :)</a>"
      },{
        quote: "why doesn't this work.."
      },{
        quote: "Hmm, this isn't working"
      },{
        quote: "You have been nomed"
      },{
        quote: "^-^"
      },{
        quote: "Is ranch an essential"
      },{
        quote: "mom i'm done with my homework"
      },{
        quote: "human are stupid"
      },{
        quote: "Don't reveal your tactics on youtube, you idiot you moron."
      },{
        quote: "I forgot my homework on my other hard drive"
      },{
        quote: "xd"
      },{
        quote: "Xd"
      },{
        quote: "xD"
      },{
        quote: "XD"
      },{
        quote: "windows 10 fuckin sucks"
      },{
        quote: "Dang"
      },{
        quote: "Same thing that we always do, make a shitpost that makes no fucking sense"
      },{
        quote: "uhh wtf did I just read"
      },{
        quote: "just talk in quotes"
      },{
        quote: "Tis but a scratch"
      },{
        quote: "Look, you stupid bastard, you've got no arms left!"
      },{
        quote: "fuck"
      },{
        quote: "This channel is now for shitposting only"
      },{
        quote: "Scream at the sunrise to assert your dominance"
      },{
        quote: "Dream the big chungus and you are on right path"
      },{
        quote: "Imagine imagining the unimaginable"
      },{
        quote: "only the fool believe"
      },{
        quote: "Wise men say, 'Forgiveness is divine, but never pay full price for late pizza"
      },{
        quote: "Don’t take steroids kids,it makes your pp small"
      },{
        quote: "you thought it's sexual harassment but it just a usual Discord contents"
      },{
        quote: "Don't get caught lackin"
      },{
        quote: "use milkshake to drink milkshake"
      },{
        quote: "The more you eat the harder you are to kidnap. Stay safe,eat cake"
      },{
        quote: "I'm straight up boutta resist arrest no lie"
      },{
        quote: "I just commited tax fraud"
      },{
        quote: "if you ask me \"who do you hate the most\" then probably myself"
      },{
        quote: "Don't bite my little dick"
      },{
        quote: "Great power comes with big booty bitchs"
      },{
        quote: "Yes"
      },{
        quote: "He do be vibin doe"
      },{
        quote: "Rose's are grey, Voilets are grey, I am so color blind that your mom is gay"
      },{
        quote: "Are you gay for anime girls? It’s a simple question."
      },{
        quote: "wat if your pp big tho"
      },{
        quote: "uwus & owos"
      },{
        quote: "uwus & owos & pps"
      },{
        quote: "Yoooooooooos!"
      },{
        quote: "Daniellette's pp is big"
      },];
        
        var sourceLength = quotes.length;
        var randomNumber = Math.floor(Math.random() * sourceLength);
    
        for (var i=0; i<=sourceLength; i++) {var newQuoteText = quotes[randomNumber].quote;}
        
        var quoteContainer = $("#quote");
        quoteContainer.append('<p class="text">" ' + newQuoteText + ' "</p>');
        } //end of getQuote
    getQuote();
    }); //end of document.ready


function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}