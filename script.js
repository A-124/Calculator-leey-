const screen = document.getElementById('1');
const button = document.querySelectorAll('button');
const theme = document.getElementById('theme');

let screenvalue = '';
let index = 0;

function ent(x) {
  
  if (x == 'CL') {
    
    screenvalue = screenvalue.slice(0,-1);
    screen.value = (screen.value).slice(0,-1);
    
  }
  else if (x == '=') {
    
    screenvalue = eval(screenvalue);
    screenvalue = (String(parseFloat((Math.trunc(parseFloat((screenvalue)*(10000))))/(10000))));
    screen.value = screenvalue;
    
  }
  else if (x == 'DEL') {
    
    screenvalue = '';
    screen.value = screenvalue;
    
  }

  else if ((screenvalue == '0')&&(!(x == '.'))) {
    
      screenvalue = x;
      screen.value = screenvalue;
      
    }
  else {
    
      screenvalue += x;
      screen.value += ((x.replace('*','×')).replace('/','÷'));
      
    }
  
  if (((String(screen.value)).length) >= 9) {
    
    screen.style.fontSize = fontscale(screen.value);
    
  }
  else {
    
    screen.style.fontSize = '48px';
    
  }
  
}

function input() {
  
  screenvalue = ((screen.value).replace(/×/g,'*')).replace(/÷/g,'/');
  
}

function px(x) {
  
  const sx = String(x);
  
  return(sx+'px');
  
}

function fontscale(x) {
  
  const sx = String(x);
  const len = sx.length;
  
  if (len < 12) {
    
    return px(40);
    
  }
  else if (len < 16) {
    
    return px(32);
    
  }
  else if (len < 20) {
    
    return px(24);
    
  }
  else if (len < 25) {
    
    return px(18);
    
  }
  else if (len < 32) {
    
    return px(14);
    
  }
  else {
    
    return px(10);
    
  }
  
}

function themef() {
  
  document.body.classList.toggle('theme1');
  
  if (index == 0) {
    
    theme.innerHTML = '<img src = "moon.png" class = "img1"></img>'
    index = 1;
    
  }
  else if (index == 1) {
    
    theme.innerHTML = '<img src = "moon1.png" class = "img1"></img>'
    index = 0;
    
  }
}

theme.innerHTML = '<img src = "moon1.png" class = "img1"></img>'

index = 0;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  
  themef();
  
}