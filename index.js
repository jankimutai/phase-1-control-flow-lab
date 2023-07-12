function scuberGreetingForFeet(feetCount){
  // Write your code here!
  if (feetCount <400){
    return ('This one is on me!');
  }else if (feetCount > 2000 && feetCount<= 2500 ){
    return 'I will gladly take your thirty bucks.';
  } else( feetCount>2500);{
    return 'No can do.'
  }
}
function ternaryCheckCity(cityCheck){
  // Write your code here!
  if(cityCheck ==='NYC'){
    return "Ok, sounds good.";
  }else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tipCheck){
  // Write your code here!
  if(tipCheck === 'generous'){
    return "Thank you so much.";
  } else if(tipCheck === 'not as generous'){
    return "Thank you.";
  }else if(tipCheck === 'thanks for everything'){
    return "Bye.";
  }
}