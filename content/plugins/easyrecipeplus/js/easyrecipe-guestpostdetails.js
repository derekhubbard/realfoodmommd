/*
 EasyRecipe PLUS 3.2.2708 Copyright (c) 2014 BoxHill LLC
*/
(function(a){function h(c){var b=!1,f=a("#spnERGPNameErr"),d=a("#spnERGPEmailErr");f.text("");d.text("");a("#spnERGPURLErr").text("");""===a.trim(g.val())&&(f.text("You must enter your name"),b=!0);""===a.trim(e.val())?(d.text("You must enter your email"),b=!0):k.test(a.trim(e.val()))||(d.text("You must enter a valid email address"),b=!0);return b?(c.preventDefault(),!1):!0}var g,e,c,k=/[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+(?:\.[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?/i;
a(function(){c=a("#frmERGPForm");g=a("#fldERGPName");e=a("#fldERGPEmail");a("#fldERGPURL");c.on("submit",h)})})(jQuery);
