!function(r){"use strict";r.module("firebase.utils",["firebase","MyContactsApp.config"]).factory("fbutil",["$window","FBURL","$q",function(e,n,t){function i(e){for(var n=0;n<e.length;n++)if(r.isArray(e[n]))e[n]=i(e[n]);else if("string"!=typeof e[n])throw new Error("Argument "+n+" to firebaseRef is not a string: "+e[n]);return e.join("/")}function f(r){var t=new e.Firebase(n),f=Array.prototype.slice.call(arguments);return f.length&&(t=t.child(i(f))),t}var o={handler:function(r,e){return o.defer(function(n){r.call(e,function(r,e){null!==r?n.reject(r):n.resolve(e)})})},defer:function(r,e){var n=t.defer();return r.call(e,n),n.promise},ref:f};return o}])}(angular);