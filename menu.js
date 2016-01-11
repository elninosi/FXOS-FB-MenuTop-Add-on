var header;
var input;

  if (document.documentElement) {
    fixedheader();
  }
  else {  
  window.addEventListener('scroll', fixedheader);
  }

 
    function fixedheader () {   
     header = document.querySelector('._52z5');
     input = document.querySelector('._55wr');
     input.style.paddingTop = '14%';
     header.style.position = 'fixed';
    }  
