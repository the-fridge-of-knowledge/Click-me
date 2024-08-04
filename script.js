let clicks = 0;

function main(){
  clicks += 1;
  console.log('clicked')
  document.getElementById('counter').innerHTML= clicks;
  if (clicks > 100){
    document.getElementById('level').innerHTML = 'Level 1';
  }
  if (clicks >500){
    document.getElementById('level').innerHTML = 'Level 2';
  }
  if (clicks > 1000){
    document.getElementById("level").innerHTML = 'Level 3';
  }
  
}

function add_one(){
  clicks += 1;
}