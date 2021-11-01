
var beneden = document.getElementById('onder'); 
var total = 1;
var imageBlok = document.getElementById('imageBox');
var nameValue = document.getElementById("uniqueID").value;


//Hier laad ik het getal in vanuit het formulier en geeft het dit nummer aan variabel x1
function start() {
    const x1 = document.getElementById("Form1").elements[0].value;
   //Om te testen of het werkt staat er een console.log in
    
   console.log(x1);

//Een for statement dat het aantal aangegeven NFT's genereerd
//Hierbij word de for zo vaak gedraaid als het nummer dat in x1 is opgegeven 

for (let i = total; i<=x1;) {
    var img = document.createElement('img');
    img.src = "/build/images/"+ total + ".png";
    document.getElementById('body').appendChild(img);
    beneden.innerHTML = "NFT collectie gegenereerd."; 
    i = i + 1;
    };

}; 
