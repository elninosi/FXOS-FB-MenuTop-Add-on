(function() {

  'use strict';

 
  var header;
  var input;
  
  window.addEventListener('scroll', fixedheader);
  fixedheader();

 
    function fixedheader (e) {
     header = document.querySelector('._52z5');
     input = document.querySelector('._15nx');
     input.style.marginTop = '15%';
     header.style.position = 'fixed';
     header.style.width = '100%';
     header.style.borderTopWidth = '0';
     header.style.zIndex = '1';
  }  


}());