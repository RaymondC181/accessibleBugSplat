one = true; 
two = true; 
three = true; 
four = true; 
five = true; 
six = true; 
seven = true; 
eight = true; 
nine = true; 
ten = true; 
eleven = true; 
twelve = true; 
thirteen = true; 
fourteen = true; 
fifteen = true; 


function check(x)
{
    if(x==1)
    {
        if(one)
        {
            log();
        }
        one = false; 
        bug1.src ="img/squashed.png";
    }
    if(x==2)
    {
        if(two)
        {
            log();
        }
        two = false; 
        bug2.src ="img/squashed.png";

    }
    if(x==3)
    {
        if(three)
        {
            log();
        }
        three = false; 
        bug3.src ="img/squashed.png";

    }
    if(x==4)
    {
        if(four)
        {
            log();
        }
        four = false; 
        bug4.src ="img/squashed.png";

    }
    if(x==5)
    {
        if(five)
        {
            log();
        }
        five = false; 
        bug5.src ="img/squashed.png";

    }
    if(x==6)
    {
        if(six)
        {
            log();
        }
        six = false; 
        bug6.src ="img/squashed.png";

    }
    if(x==7)
    {
        if(seven)
        {
            log();
        }
        seven = false; 
        bug7.src ="img/squashed.png";

    }
    if(x==8)
    {
        if(eight)
        {
            log();
        }
        eight = false; 
        bug8.src ="img/squashed.png";

    }
    if(x==9)
    {
        if(nine)
        {
            log();
        }
        nine = false; 
        bug9.src ="img/squashed.png";

    }
    if(x==10)
    {
        if(ten)
        {
            log();
        }
        ten = false; 
        bug10.src ="img/squashed.png";

    }
    if(x==11)
    {
        if(eleven)
        {
            log();
        }
        eleven = false; 
        bug11.src ="img/squashed.png";

    }
    if(x==12)
    {
        if(twelve)
        {
            log();
        }
        twelve = false; 
        bug12.src ="img/squashed.png";

    }
    if(x==13)
    {
        if(thirteen)
        {
            log();
        }
        thirteen = false; 
        bug13.src ="img/squashed.png";

    }
    if(x==14)
    {
        if(fourteen)
        {
            log();
        }
        fourteen = false; 
        bug14.src ="img/squashed.png";

    }

    if(x==15)
    {
        if(fifteen)
        {
            log();
        }
        fifteen = false; 
        bug15.src ="img/squashed.png";

    }
    
    
}

function initialize()
{
    bug1 = document.getElementById("bug1");
    bug2 = document.getElementById("bug2");
    bug3 = document.getElementById("bug3");
    bug4 = document.getElementById("bug4");
    bug5 = document.getElementById("bug5");
    bug6 = document.getElementById("bug6");
    bug7 = document.getElementById("bug7");
    bug8 = document.getElementById("bug8");
    bug9 = document.getElementById("bug9");
    bug10 = document.getElementById("bug10");
    bug11 = document.getElementById("bug11");
    bug12 = document.getElementById("bug12");
    bug13 = document.getElementById("bug13");
    bug14 = document.getElementById("bug14");
    bug15 = document.getElementById("bug15");


}

let arrayNonDefiant = ["No Please!","whyyyy", "Oww", "No more", "mercy!!", "please no", "AAAAAaa", "please stop", "gahhhh", "HELP"];
let arrayDefiant = ["Haha", "it tickles", "whats the point?", "we ate all your food", "hehehe", "useless", "nice attempt"];

counter = 15; 
function log()
{
    if(counter >= 9)
    {
        defiant = true; 
    }
    else{
        defiant = false; 
    }



    if(defiant)
    {
        document.getElementById("log").innerHTML += "<br/>"+nextDefiant(); 
        counter--; 
    }
    else
    {
        document.getElementById("log").innerHTML += "<br/>"+nextNonDefiant(); 
        counter--; 

    }

    if (counter == 0)
    {
        document.getElementById("log").innerHTML += "<br/>"+"That’s it. Now Mamma’s angry!"; 

        let images = document.getElementsByTagName("img");
        let images_length = images.length-1;
        for (let i = 0; i < images_length; i++) 
        {
            images[i].style.setProperty("display", "none", "important");
        }
        document.getElementById("mother").style.visibility = 'visible';

    }
    console.log(counter);
}
shuffle(arrayNonDefiant);
shuffle(arrayDefiant);

defiantCounter = 0;
function nextDefiant()
{
    defiantCounter++; 
    return arrayDefiant[defiantCounter];
}

nonDefiantCounter = 0;
function nextNonDefiant()
{
    nonDefiantCounter++; 
    return arrayNonDefiant[nonDefiantCounter];
}


//src = https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }






