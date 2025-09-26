let dice = 0;
let d20 = 0, d12, d10, d8, d6, d4, rnd, d100, h20 = 0, h12 = 0; h10 = 10; h8 = 20; h6 = 30; h4 = 40; h100 = 50;
let tabela = document.getElementById('tabelaresult');
function rolltst(dice){
    
    switch (dice){
        case 0:
            
            rnd = Math.floor(Math.random() * 20) + 1;
            d20 = rnd;
            
            h20++;
            document.getElementById(h20).innerHTML = d20;
            if(h20==3){
            h20=0;
            
         }
    return rnd;
    
    
    case 1:
         rnd = Math.floor(Math.random() * 4) + 1;
            d4 = rnd;
            h4++;
        document.getElementById(h4).innerHTML = d4;
            if(h4==43){
            h4=40;
            
         }
    return rnd;
    case 2: 
    rnd = Math.floor(Math.random() * 6) + 1;
            d6 = rnd;
            h6+=1;
            document.getElementById(h6).innerHTML = d6;
            if(h6==33){
            h6=30;
         }
         return rnd;
    case 3: 
        rnd = Math.floor(Math.random() * 8) + 1;
            d8 = rnd;
            h8+=1;
            document.getElementById(h8).innerHTML = d8;
            if(h8==23){
            h8=20;
         }
         return rnd;
    case 4: 
    rnd = Math.floor(Math.random() * 10) + 1;
            d10 = rnd;
            h10+=1;
            document.getElementById(h10).innerHTML = d10;
            if(h10==13){
            h10=10;
         }
         return rnd;
    
    case 5:
            rnd = Math.floor(Math.random() * 12) + 1;
            d12 = rnd;
            h12+=5;
            document.getElementById(h12).innerHTML = d12;
            if(h12==15){
            h12=0;
         }
         return rnd;
    case 6: 
        rnd = Math.floor(Math.random() * 100) + 1;
            d100 = rnd;
            h100++;
            document.getElementById(h100).innerHTML = d100;
            if(h100==53){
            h100=50;
         }
         return rnd;
}
}
function calc(){
    
    
    

}
var snd = new Audio('RollingDice.mp3');
function audioD(){
    snd.play();
}
