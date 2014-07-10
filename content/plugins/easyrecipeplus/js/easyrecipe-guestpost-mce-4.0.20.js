/*
 EasyRecipe PLUS 3.2.2708 Copyright (c) 2014 BoxHill LLC
*/
(function(e){tinymce.create("tinymce.plugins.EasyRecipeGuestPost",{init:function(c,d){d=d.replace(/js$/g,"images/");c.onLoadContent.add(function(a,b){"mce_fullscreen"!==a.editorId&&e(window).trigger("guestpostloaded",[a,b])});c.onSetContent.add(function(a,b){"mce_fullscreen"!==a.editorId||b.initial||e(window).trigger("guestpostloaded",[a,b])});c.addButton("easyrecipeImage",{title:"Upload an image",image:d+"uploadimage.gif",onclick:function(){EASYRECIPE.doUpload()}})},getInfo:function(){return{longname:"Guest Post",
author:"The Orgasmic Chef",authorurl:"http://www.orgasmicchef.com",infourl:"http://www.easyrecipeplugin.com/",version:"1.0"}}});tinymce.PluginManager.add("guestpost",tinymce.plugins.EasyRecipeGuestPost)})(jQuery);
