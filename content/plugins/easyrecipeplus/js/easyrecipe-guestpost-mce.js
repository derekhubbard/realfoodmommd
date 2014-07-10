/*
 EasyRecipe PLUS 3.2.2708 Copyright (c) 2014 BoxHill LLC
*/
(function(c){tinymce.create("tinymce.plugins.EasyRecipeGuestPost",{init:function(a,b){a.addCommand("WP_Link",function(){c(window).trigger("guestpostlink")});b=b.replace(/js$/g,"images/");a.onLoadContent.add(function(d,a){"mce_fullscreen"!==d.editorId&&c(window).trigger("guestpostloaded",[d,a])});a.onSetContent.add(function(a,b){"mce_fullscreen"!==a.editorId||b.initial||c(window).trigger("guestpostloaded",[a,b])});a.addButton("easyrecipeImage",{title:"Upload an image",image:b+"uploadimage.gif",onclick:function(){c(window).trigger("easyrecipeguestimage")}})},
getInfo:function(){return{longname:"Guest Post",author:"The Orgasmic Chef",authorurl:"http://www.orgasmicchef.com",infourl:"http://www.easyrecipeplugin.com/",version:"1.0"}}});tinymce.PluginManager.add("guestpost",tinymce.plugins.EasyRecipeGuestPost)})(jQuery);
