!function(e){"use strict";e.module("MyContactsApp").filter("tel",function(){return function(e){if(!e)return"";var t=e.toString().trim().replace(/^\+/,"");if(t.match(/[^0-9]/))return e;var r,i;switch(t.length){case 1:case 2:case 3:r=t;break;default:r=t.slice(0,3),i=t.slice(3)}return i?(i=i.length>3?i.slice(0,3)+"-"+i.slice(3,7):i,("("+r+") "+i).trim()):"("+r}})}(angular);