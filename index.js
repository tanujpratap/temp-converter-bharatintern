const celciuse1=document.getElementById("celcius");
const fahrenheite1=document.getElementById("fahrenheit");
const kelvine1=document.getElementById("kelvin");


function computetemp(){
   //add + to avoid string problem
   const currentvalue=+event.target.value;
   switch(event.target.name){
    case "celcius":
        kelvine1.value=currentvalue+273.15;
        fahrenheite1.value=currentvalue*1.8+32;
         break;
       
            case "fahrenheit":
                celciuse1.value=(currentvalue-32)/1.8;
                kelvine1.value=(currentvalue-32)/1.8+273.15;
                 break;
                 case "kelvin":
                    fahrenheite1.value=(currentvalue+273.15)*1.8+32;
                    celciuse1.value=currentvalue-273.15;
                     break;

                 default:
                    break;


   }

}