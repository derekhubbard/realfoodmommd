/*
 EasyRecipe PLUS 3.2.2708 Copyright (c) 2014 BoxHill LLC
*/
window.EASYRECIPE=window.EASYRECIPE||{};EASYRECIPE.widget=EASYRECIPE.widget||jQuery.widget;EASYRECIPE.button=EASYRECIPE.button||jQuery.fn.button;
(function(a){function Jb(b,a){Va.show();Z.hide();Wa.show();switch(a.newTab?a.newTab.index():a.index){case 0:Z.css("right","10px");Z.show();break;case 3:Z.css("right","inherit");Wa.hide();Z.show();break;case 4:Va.hide()}}function Xa(){Ea.off("change",Xa);U=!0}function g(b){return b?(b+"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&nbsp;/g," "):""}function $(b){return b?a("<div />").text(b).html():""}function t(b){return a.trim($(b.val()))||!1}function Kb(b,a){var c=Fa.tabs("option",
"active");Fa.tabs("option","active",++c)}function x(b){var a,c=/\[img +(.*?) *\/?\]/i,f=/\[url ([^\]]+)\](.*?\[\/url\])/i,e=/\[cap ([^\]]+)\](.*])(.*?)\[\/cap\]/i;if(""!==b){for(a=c.exec(b);null!==a;)aa.push(a[1].replace(/</g,"&lt;").replace(/>/g,"&gt;")),b=b.replace(c,"[img:"+aa.length+"]"),a=c.exec(b);for(a=f.exec(b);null!==a;)G.push(a[1]),b=b.replace(f,"[url:"+G.length+"]$2"),a=f.exec(b);for(a=e.exec(b);null!==a;)ja.push(a[1]),Ya.push(a[3].replace(/</g,"&lt;").replace(/>/g,"&gt;")),b=b.replace(e,
"[cap:"+ja.length+"]$2[/cap]"),a=e.exec(b)}return b}function z(a){var d,c,f=/\[img:(\d+)\]/i,e=/\[url:(\d+)\](.*?)\[\/url\]/i,h=/\[cap:(\d+)\](.*\])\[\/cap\]/i;if(a){for(c=f.exec(a);null!==c;)d=aa[c[1]-1].replace(/&quot;/g,"&amp;quot;"),a=a.replace(f,"[img "+d+"]"),c=f.exec(a);for(c=e.exec(a);null!==c;)d=G[c[1]-1],a=a.replace(e,"[url "+d+"]$2[/url]"),c=e.exec(a);for(c=h.exec(a);null!==c;)d=ja[c[1]-1],c=Ya[c[1]-1],a=a.replace(h,"[cap "+d+"]$2"+c+"[/cap]"),c=e.exec(a)}return a}function rb(a,d){var c,
f,e,h=0,s="",l,g,k,n,m;c=a;for(d=d||{};;){e=c.length;f=c.indexOf("#",h);-1!==f&&(e=f,l=0);f=c.indexOf("\x3c!-- START REPEAT ",h);-1!==f&&f<e&&(e=f,l=1);f=c.indexOf("\x3c!-- START INCLUDEIF ",h);-1!==f&&f<e&&(e=f,l=2);if(e===c.length)return s+c.substr(h);f=e-h;s+=c.substr(h,f);h=e;switch(l){case 2:e=c.substr(h,44);e=Lb.exec(e);if(null!==e)f=e[1],g="!"!==f,k=e[2];else break;n="\x3c!-- END INCLUDEIF "+f+k+" --\x3e";e=n.length;n=c.indexOf(n);if(-1===n){h++;break}m=typeof d[k]!==ka&&!1!==d[k];m===g?(f=
"\x3c!-- START INCLUDEIF "+f+k+" --\x3e",f=f.length,c=c.substr(0,h)+c.substr(h+f,n-h-f)+c.substr(n+e)):c=c.substr(0,h)+c.substr(n+e);break;case 0:e=c.substr(h,22);e=Mb.exec(e);if(null===e){s+="#";h++;continue}e=e[1];if(""!==d[e]&&!d[e]){s+="#"+e+"#";h+=e.length+2;continue}s+=d[e];h+=e.length+2;break;case 1:e=c.substr(h,45);e=Nb.exec(e);if(null===e){s+="<";h++;continue}e=e[1];if(!(d[e]&&d[e]instanceof Array)){s+="<";h++;continue}h+=e.length+22;f=c.indexOf("\x3c!-- END REPEAT "+e+" --\x3e",h);if(-1===
f){s+="\x3c!-- START REPEAT "+e+" --\x3e";continue}g=f-h;n=c.substr(h,g);k=d[e];for(f=0;f<k.length;f++)s+=rb(n,k[f]);h+=e.length+g+20}}}function Ga(b){var d=a.trim(b.val()),c=0,f=0;Za.hide();if(""===d)return!0;p=$a.exec(d);if(null===p){p=Ob.exec(d);if(null===p)return Za.show(),!1;c=0;f=p[1]}else c=p[1]?parseInt(p[1],10):0,f=p[2]?parseInt(p[2],10):0;0===c&&0===f?b.val(""):(d=0<c?c+" hour":"",1<c&&(d+="s"),c=0<f?f+" min":"",1<f&&(c+="s"),b.val(a.trim(d+" "+c)));return!0}function sb(b){var d,c,f="";
for(d=0;d<b.length;d++)c=b[d],3===c.nodeType?(c=a.trim(c.nodeValue),""!==c&&(f+=c+"\n")):1===c.nodeType&&0<c.childNodes.length&&(f+=sb(c.childNodes));return f}function tb(){var b;a(ab,q).remove();b=H.selection.getNode();"#document"===b.nodeName&&(b=la[0]);if("BODY"===b.nodeName.toUpperCase())a(b).hasClass("mceContentBody")||(b=la[0]),/^<p><br[^>]*><\/p>$/.test(b.innerHTML)?a(b).prepend(ma):a(b).append("&nbsp;"+ma);else{for(;b.parentNode&&"BODY"!==b.parentNode.nodeName.toUpperCase();)b=b.parentNode;
b.parentNode?"DIV"===b.nodeName.toUpperCase()||"SPAN"===b.nodeName.toUpperCase()?a(b,q).after(ma):a(b,q).before(ma):(b=la[0],a(b).append("&nbsp;"+ma))}ba=-1;return a(ab,q)}function Pb(a,d,c){}function Qb(b){switch(b.type){case "js":a("head").append(a('<script type="text/javascript">'+b.js+"\x3c/script>"));m[b.f]();break;case "html":a(b.dest).html(b.html)}}function Rb(){Ha.unbind(N);Ia.unbind(N);V.dialog(I);bb=!0;cb()}function Sb(b,d){var c,f="",e;e=b.recipe;"success"!==d&&(V.dialog(I),bb=!0,cb());
P.val(g(e.recipe_title));e.rating&&a.isNumeric(e.rating)&&db.val(e.rating);y=e.recipe_image;Q.val("");e.author?E.val(g(e.author)):E.val("");W.val(e.cuisine||"");Q.val(e.mealType||"");eb.val("");R.val(g(e.summary));p=ub.exec(e.prep_time);null!==p?(c=p[1]?p[1]+"h ":"",A.val(c+p[2]+"m")):A.val(g(e.prep_time));p=ub.exec(e.cook_time);null!==p?(c=p[1]?p[1]+"h ":"",B.val(c+p[2]+"m")):B.val(g(e.cook_time));X.val(g(e.yield));ca.val(g(e.serving_size));e.nutrition?(c=e.nutrition,da.val(g(c.calories)),ea.val(g(c.totalFat)),
na.val(g(c.saturatedFat)),oa.val(g(c.unsaturatedFat)),pa.val(g(c.transFat)),qa.val(g(c.totalCarbohydrates)),ra.val(g(c.sugars)),sa.val(g(c.sodium)),ta.val(g(c.dietaryFiber)),ua.val(g(c.protein)),va.val(g(c.cholesterol))):(da.val(g(e.calories)),ea.val(g(e.fat)));for(c=0;c<b.ingredients.length;c++)f+=Tb(g(b.ingredients[c]))+"\n";wa.val(f);xa.val(g(e.instructions.replace("\r","")));ya.val(g(e.notes));C.easyrecipeDialog("option","title","Update Recipe");V.dialog(I);Ja.hide();Ka.show();La.hide();""!==
y&&vb(y,w.length,!0);k=tb();C.easyrecipeDialog(fa)}function Ub(){Ma.show();Ha.unbind(N);Ia.unbind(N);a.post(ajaxurl,{action:"easyrecipeConvert",id:fb,type:Na},Sb,"json")}function gb(b){var d,c,f=0,e="",h="",k="",g="",v=["instruction","method","cooking method","procedure","direction"];c=["ingredients?"];var u=["note","cooking note"],n,q;n=a.parseJSON(m.ingredients);q=a.parseJSON(m.instructions);d=a.parseJSON(m.notes);-1===a.inArray(n,c)&&c.push(n);n="^\\s*(?:"+c.join("|")+")";n=new RegExp(n,"i");-1===
a.inArray(q,v)&&c.push(q);v="^\\s*(?:"+v.join("|")+")";v=new RegExp(v,"i");-1===a.inArray(d,u)&&u.push(d);u="^\\s*(?:"+u.join("|")+")\\s*$";u=new RegExp(u,"i");b=a("<div>"+b+"</div>");b=sb(b[0].childNodes);b=b.split("\n");for(d=0;d<b.length;d++)if(c=a.trim(b[d]),""!==c)if(v.test(c))f=2;else if(n.test(c))f=1;else if(u.test(c))f=3;else switch(f){case 0:e+=c+"\n";break;case 1:h+=c+"\n";break;case 2:k+=c+"\n";break;case 3:g+=c+"\n"}return{summary:e,ingredients:h,instructions:k,notes:g}}function Vb(b){var d,
c=a(".easyrecipe",q),f=a("#divERSELRecipes").find("ul");f.empty();c.each(function(c){d=a(".ERName",this).text();""===d&&(d="Recipe "+(c+1));f.append(a("<li>"+d+"</li>").click(function(){za.dialog(I);wb(b,c)}))});za.dialog(fa)}function ga(b,d,c){J.append('<div class="ERPhoto"><img style="position:relative" id="ERPhoto_'+d+'" /></div>');w[d]=a("#ERPhoto_"+d,J);w[d].data("src",b);c&&(a(".ERPhoto",J).removeClass(S),w[d].parent().addClass(S),O=d,y=b);""===Oa&&(Oa=b);c=new Image;a.data(c,"index",d);c.onload=
function(){var b,c,d=a.data(this,"index");b=this.width/150;c=this.height/112;b=b>c?b:c;c=Math.floor(this.height/b);b=Math.floor(this.width/b);w[d].height(c);w[d].width(b);w[d].css("top",(112-c)/2);w[d].attr("src",this.src);0===d&&a("#ERDTabs").find(".divERNoPhotos").remove()};c.src=b}function Wb(){ga(hb.val(),w.length,!0);hb.val("");Pa.hide();a(".divERNoPhotos").remove()}function Qa(a,d){var c,f=!1;for(c=0;c<w.length;c++)if(w[c].data("src")===a){f=!0;break}f||ga(a,w.length,d)}function Aa(b,d){var c,
f,e,h,s,l,v,u={},n=l="",p="";e="";if(!b||1===b.which)if(b&&b.data===Ba&&(d=Ba,b=b.delegateTarget),typeof d===ka&&1<K)K=a(".easyrecipe",q).length,Vb(b);else{k=a(".easyrecipe",q);if(d===Ba){for(h=0;h<k.length;h++)if(k[h]===b){ba=h;break}k=a(b)}typeof d===ka&&typeof b===ka&&(ba=0);d!==Ra&&1<k.length&&(k=a(k[d]),ba=d);h=a.support.cors?"json":"jsonp";a.ajax(Xb,{dataType:h,data:{v:m.version,p:1,u:m.wpurl},success:Qb,error:Pb});ib=!1;typeof tinyMCE!==ka&&tinyMCE.activeEditor&&!tinyMCE.activeEditor.isHidden()&&
(ib=!0);if(ib){P.val("");Q.val("");W.val("");eb.val("");E.val("");R.val("");A.val("");B.val("");X.val("");wa.val("");xa.val("");ca.val("");da.val("");ea.val("");na.val("");oa.val("");pa.val("");qa.val("");ra.val("");sa.val("");ta.val("");ua.val("");va.val("");ya.val("");if(d!==Ra&&1===k.length)C.easyrecipeDialog("option","title","Update Recipe"),La.hide(),Ja.hide(),Ka.show(),jb=!0;else{Sa=H.getContent();if(!bb&&((h=Yb.exec(Sa)||Zb.exec(Sa)||$b.exec(Sa))||(c=a("#hasRecipe").is(":checked")),h||c)){c?
(Na="recipress",fb=m.postID):(Na=h[2],fb=h[3]);Ma.hide();Ha.click(Rb);Ia.click(Ub);e=ac[Na];l=a("#txtERCNVText1",V);l.html(l.html().replace("#plugin#",e));J.html("");O=-1;w=[];J.html(xb);V.dialog(fa);return}m.isGuest&&(h=a("#inpERAuthor").val()||"",E.val(h));Ja.show();Ka.hide();La.show();C.easyrecipeDialog("option","title","Add a New Recipe");jb=!1;!1!==Ta?u=gb(Ta):(h=H.selection.getContent(),20<h.length&&(u=gb(h)));u.summary&&(l=u.summary);u.ingredients&&(n=u.ingredients);u.instructions&&(p=u.instructions);
u.notes&&(e=u.notes);k=tb()}k.find(".hiddenGrammarError, .hiddenSpellError, .hiddenSuggestion").each(function(){var b;0<a(this).parent(".mceItemHidden").length&&a(this).unwrap();b=a(this).text();a(this).replaceWith(b)});u=k;k=a("<div>"+k.html()+"</div>");a("#inpERCuisine").autocomplete({source:a.parseJSON(m.cuisines)}).autocomplete("widget").wrap('<div class="easyrecipeUI" />');a("#inpERType").autocomplete({source:a.parseJSON(m.recipeTypes)}).autocomplete("widget").wrap('<div class="easyrecipeUI" />');
U=!1;Ea.off("change",Xa).on("change",Xa);kb=!1;0<a(".hrecipe",q).length&&confirm("This post is already hrecipe microformatted\n\nDo you want me to try to convert it to an EasyRecipe?")&&(kb=!0);ha=d!==Ra?k.find(".endeasyrecipe").text():m.version;""===ha&&(ha="2.2");y=a('link[itemprop="image"]',k).attr("href")||"";J.html("");O=-1;Oa="";w=[];q.find("img").each(function(b){var c=!1;"3">ha?a(this).hasClass("photo")&&(c=!0):c=this.src===y;ga(this.src,b,c)});c=q.contents().text();h=yb.exec(c);for(v=w.length;null!==
h;)f=bc.exec(h[0]),null!==f&&(f=f[1],ga(f,v),"3"<ha?y===f&&(w[v].parent().addClass(S),O=v):cc.test(h[0])&&(w[v].parent().addClass(S),O=v,y=f),v++),h=yb.exec(c);""!==y&&Qa(y,!0);(zb=a("#set-post-thumbnail").find("img").attr("src"))&&Qa(zb,-1===O);-1===O&&0<w.length&&(O=0,y=Oa,w[0].parent().addClass(S));J.click(function(b){"IMG"===b.target.nodeName&&(a(".ERPhoto",J).removeClass(S),a(b.target).parent().addClass(S),y=b.target.src)});0===w.length?J.html(xb):-1===O&&w[0].parent().addClass(S);aa=[];G=[];
(h=k.find(".ERName .fn").html()||k.find(".ERName").html())&&""!==h?P.val(x(g(h))):P.val(x(g(a("#title").val())));Q.val(x(g(k.find(".type").html())));E.val(x(g(k.find(".author").html())));""===E.val()&&E.val(x(a.parseJSON(m.author)));W.val(x(g(k.find(".cuisine").html())));R.val(x(l+g(k.find(".summary").html())));"3"<ha?(l=k.find('time[itemprop="prepTime"]').html()||"",A.val(g(l)),l=k.find('time[itemprop="cookTime"]').html()||"",B.val(g(l))):(l=k.find(".preptime").html()||"",h=Ab.exec(l),null!==h?A.val(g(h[1])):
A.val(""),l=k.find(".cooktime").html()||"",h=Ab.exec(l),null!==h?B.val(g(h[1])):B.val(""));X.val(g(k.find(".yield").html()));k.find(".ingredients li").each(function(b,c){n=a(c).hasClass(Bb)?n+("!"+x(g(c.innerHTML))+"\n"):n+(x(g(c.innerHTML))+"\n")});wa.val(n);k.find(".instructions li, .instructions .ERSeparator").each(function(b,c){s=a.trim(c.innerHTML.replace(/^[ 0-9.]*(.*)$/ig,"$1"));p=a(c).hasClass(Bb)?p+("!"+s+"\n"):p+(s+"\n")});xa.val(x(g(p)));ca.val(g(k.find(".servingSize").html()));da.val(g(k.find(".calories").html()));
ea.val(g(k.find(".fat").html()));na.val(g(k.find(".saturatedFat").html()));oa.val(g(k.find(".unsaturatedFat").html()));pa.val(g(k.find(".transFat").html()));qa.val(g(k.find(".carbohydrates").html()));ra.val(g(k.find(".sugar").html()));sa.val(g(k.find(".sodium").html()));ta.val(g(k.find(".fiber").html()));ua.val(g(k.find(".protein").html()));va.val(g(k.find(".cholesterol").html()));l=u.parent().prop("data-rating");db.val(a.isNumeric(l)?l:"5");s=(g(k.find(".ERNotes").html())||"").replace(/<\/p>\n*<p>/ig,
"\n\n").replace(/(?:<p>|<\/p>)/ig,"").replace(/<br *\/?>/ig,"\n");""===s&&""!==e&&(s=e);s=x(s);s=s.replace(/\[br(?: ?\/)?\]/ig,"\n");ya.val(x(s));r&&(r.name&&P.val(x(g(r.name))),r.author&&E.val(x(r.author)),r.summary&&R.val(x(r.summary)),r.yield&&X.val(g(r.yield)),r.type&&Q.val(x(g(r.type))),r.cuisine&&W.val(x(g(r.cuisine))),r.prepTime&&A.val(g(r.prepTime)),r.cookTime&&B.val(g(r.cookTime)),r.summary&&R.val(x(r.summary)));k=u;C.easyrecipeDialog(fa);C.easyrecipeDialog("option","position","center")}else alert("You must use the Visual Editor to add or update an EasyRecipe")}}
function lb(b){K=a(".easyrecipe",q).length;dc||0===K?Aa(b,Ra):ec.dialog(fa)}function fc(){C.easyrecipeDialog(I)}function gc(){za.dialog(I)}function hc(){confirm("Are you sure you want to delete this recipe?")&&(k.remove(),U=k=!1);C.easyrecipeDialog(I)}function ic(){var b=a("#inpERPaste"),d,c=b.val();d=gb(c);if(0!==d.ingredients.length||0!==d.instructions.length)Ta=c,b.val(""),r={name:z($(P.val())),author:z(t(E)),yield:t(X),type:z(t(Q)),cuisine:z(t(W)),summary:z(t(R)),servesize:t(ca),prepTime:A.val(),
cookTime:B.val()},U=!1,C.easyrecipeDialog(I),lb(null)}function mb(b){b=a(b.target).parent();var d=b.parent();b.hasClass("easyrecipeAbove")?d.before(Cb):d.after(Cb);b.remove();Db()}function Db(){var b,d;d=a("<div>"+q[0].body.innerHTML+"</div>");d.find(".easyrecipeAbove,.easyrecipeBelow").remove();b=d.find(".easyrecipe");b.each(function(){var b=a(this);b.parent().hasClass("easyrecipeWrapper")&&b.unwrap();Eb(b)});b=d.html();H.setContent(b);b=q.find(".easyrecipe");b.on("mousedown",null,Ba,Aa);q.find(".ERInsertLine").on(N,
mb)}function jc(a){var d,c;d=a.prev();c=a.next();if(d=0===d.length||d.hasClass("easyrecipe")||d.hasClass("easyrecipeWrapper"))try{d=!(a[0].previousSibling&&3===a[0].previousSibling.nodeType)}catch(f){}if(c=0===c.length||c.hasClass("easyrecipe")||c.hasClass("easyrecipeWrapper"))try{c=!(a[0].nextSibling&&3===a[0].nextSibling.nodeType)}catch(e){}if(d||c)a.wrap('<div class="easyrecipeWrapper mceNonEditable" />'),a=a.parent(),d&&(a.prepend('<div class="easyrecipeAbove mceNonEditable"><input class="ERInsertLine mceNonEditable" type="button" value="Insert line above" /></div>'),
a.find("input").on(N,mb),kc.push(a.find(".easyrecipeAbove")[0])),c&&(a.append('<div class="easyrecipeBelow mceNonEditable"><input class="ERInsertLine mceNonEditable" type="button" value="Insert line below" /></div>'),a.find("input").on(N,mb))}function nb(){var b=a(".easyrecipe",q);0!==b.length&&(b.on("mousedown",null,Ba,Aa),Db())}function Fb(){var b,d="",c,f="",e=0,h="",g,l,v,u=[],n,r;if(Ga(A)&&Ga(B)){c=a.trim(A.val());""!==c?(p=$a.exec(c),g=p[1]?parseInt(p[1],10):0,l=p[2]?parseInt(p[2],10):0,e=60*
g+l,f="PT"+(0<g?g+"H":"")+(0<l?l+"M":"")):c=!1;b=a.trim(B.val());""!==b?(p=$a.exec(b),g=p[1]?parseInt(p[1],10):0,l=p[2]?parseInt(p[2],10):0,e+=60*g+l,d="PT"+(0<g?g+"H":"")+(0<l?l+"M":"")):b=!1;0<e?(g=Math.floor(e/60),l=e%60,e=0<g?g+" hour":"",1<g&&(e+="s"),h=0<l?l+" min":"",1<l&&(h+="s"),e=a.trim(e+" "+h),h="PT"+(0<g?g+"H":"")+(0<l?l+"M":"")):e=!1;g=wa.val().split("\n");for(v=0;v<g.length;v++)l=g[v],""!==l&&("!"===l.charAt(0)?(n=!0,l=l.substr(1)):n=!1,u.push({ingredient:z($(l)),hasHeading:n}));g=
xa.val().split("\n");r=[];n={INSTRUCTIONS:[]};for(v=0;v<g.length;v++)l=a.trim(g[v].replace(/^[ 0-9\.]*(.*)$/ig,"$1")),""!==l&&("!"===l.charAt(0)?((0<n.INSTRUCTIONS.length||n.heading)&&r.push(n),l=l.substr(1),n={INSTRUCTIONS:[]},n.heading=$(l)):n.INSTRUCTIONS.push({instruction:z($(l))}));(0<n.INSTRUCTIONS.length||n.heading)&&r.push(n);(l=t(ya))&&(l=l.replace(/\n/g,"[br]"));b={version:m.version,hasPhoto:""!==y,photoURL:y,name:z($(P.val())),author:z(t(E)),preptime:c,cooktime:b,totaltime:e,preptimeISO:f,
cooktimeISO:d,totaltimeISO:h,yield:t(X),type:z(t(Q)),cuisine:z(t(W)),summary:z(t(R)),servesize:t(ca),calories:t(da),fat:t(ea),satfat:t(na),unsatfat:t(oa),transfat:t(pa),carbs:t(qa),sugar:t(ra),sodium:t(sa),fiber:t(ta),protein:t(ua),cholesterol:t(va),notes:z(l),INGREDIENTS:u,STEPS:r};""===b.name&&(b.name=!1);b=rb(m.recipeTemplate,b);kb&&a(".hrecipe",q).remove();-1===ba?k=a(ab,q):(k=a(".easyrecipe",q),0<k.length&&(k=a(k[ba])));k.before(b);k.remove();k=!1;Y.css("display","inline-block");U=!1;C.easyrecipeDialog(I);
K=a(".easyrecipe",q).length;nb()}}function lc(b,d,c){r=!1;if("3"<tinymce.majorVersion){if(!Ca[d.id]&&"wp_mce_fullscreen"!==d.id){a("#"+d.controlManager.buttons.easyrecipeTest._id).hide();a("#"+d.controlManager.buttons.easyrecipeEdit._id).hide();a("#"+d.controlManager.buttons.easyrecipeAdd._id).hide();return}Ca[d.id]?(q=a("#"+d.id+"_ifr").contents(),b=a("#"+d.controlManager.buttons.easyrecipeTest._id),Y=a("#"+d.controlManager.buttons.easyrecipeEdit._id)):(q=a("#wp_mce_fullscreen_ifr").contents(),b=
a("#mce_fullscreen_easyrecipeTest"),Y=a("#mce_fullscreen_easyrecipeEdit"))}else{if(!Ca[d.editorId]&&"wp_mce_fullscreen"!==d.editorId){a("#"+d.editorId+"_easyrecipeTest").hide();a("#"+d.editorId+"_easyrecipeEdit").hide();a("#"+d.editorId+"_easyrecipeAdd").hide();return}Ca[d.editorId]?(q=a("#"+d.editorId+"_ifr").contents(),b=a("#"+d.editorId+"_easyrecipeTest"),Y=a("#"+d.editorId+"_easyrecipeEdit")):(q=a("#wp_mce_fullscreen_ifr").contents(),b=a("#mce_fullscreen_easyrecipeTest"),Y=a("#mce_fullscreen_easyrecipeEdit"))}la=
a("body",q);d=a(".easyrecipe",q);H=tinyMCE.activeEditor;d.each(function(){a(this).addClass("mceNonEditable");a(".ERRatingOuter",this).remove();a(".ERHDPrint",this).remove();a(".ERLinkback",this).remove()});K=d.length;0<K&&""!==m.testURL?b.show():b.hide();0<K?Y.css("display","inline-block"):Y.hide();q.hasERCSS||(a("head",q).append('<link rel="stylesheet" type="text/css" href="'+m.easyrecipeURL+"/css/easyrecipe-entry.css?ver="+m.version+'" />'),q.hasERCSS=!0);nb()}function mc(){Gb.toggleClass("ERNone");
ob.toggleClass("ERContract")}function nc(){Hb.toggleClass("ERNone");pb.toggleClass("ERContract")}function oc(b){var d;d=a("#ertmp_"+Ua,q);G.push('href="'+b.href+'"'+(b.target?' target="'+b.target+'"':"")+(b.title?' title="'+b.title+'"':""));T.val(D.substring(0,L)+"[url:"+G.length+"]"+D.substring(L,M)+"[/url]"+D.substring(M));T[0].focus();d.remove()}function pc(b){var d,c,f;m.isEntryDialog&&(d=a("#ertmp_"+Ua,q),"string"===typeof b?c=a(b):(b=d.html(),"link"===b?d=c=d.parent("a"):c=a(d.html())),c.is("a")&&
(b=c.attr("href"),f=c.attr("title"),c=c.attr("target"),b='href="'+b+'"'+(c?' target="'+c+'"':"")+(f?' title="'+f+'"':""),G.push(b),T.val(D.substring(0,L)+"[url:"+G.length+"]"+D.substring(L,M)+"[/url]"+D.substring(M))),T[0].focus(),d.remove())}function Ib(b,d){var c,f,e,g,k,l,m,p,n,q,r,t;c=b.sizes[d.size];f=c.url;k=c.width;l=c.height;ga(f,w.length);m=tinymce.html.Entities.encodeAllRaw(a.trim(b.title));m=m.replace(/&quot;/g,"&amp;quot;");p=tinymce.html.Entities.encodeAllRaw(a.trim(b.alt));p=p.replace(/&quot;/g,
"&amp;quot;");n=tinymce.html.Entities.encodeAllRaw(a.trim(b.caption));m=""!==m?' title="'+m+'"':"";p=""!==p?' alt="'+p+'"':"";q="align"+d.align;g=b.uploadedTo?'id="attachment_'+b.uploadedTo+'" ':"";c=D.substring(0,L);""!==n?(ja.push(g+'align="'+q+'" width="'+k+'"'),Ya.push(n),g="[cap:"+ja.length+"]",n="[/cap]",q=""):g=n="";"none"===d.link?e=r=t="":"file"===d.link?e=f:"post"===d.link?e=b.link:"custom"===d.link&&(e=d.linkUrl);""!==e&&(G.push('href="'+e+'"'),r="[url:"+G.length+"]",t="[/url]");aa.push('src="'+
f+'" width="'+k+'" height="'+l+'" class="'+q+" size-"+d.size+'"'+m+p);c+=g+r+"[img:"+aa.length+"]"+t+n;c+=D.substring(M);T.val(c);T[0].focus()}function qc(){var a;m.isGuest?m.doUpload():(ia||(ia=wp.media({title:"Select Image",multiple:!1,library:{type:"image"},button:{text:"add image"}}),ia.on("content:create:browse",function(d){a=d.view;d.view.options.display=!0}),ia.on("select",function(){var d=ia.state().get("selection"),c=a.sidebar.get("display").model.attributes;Ib(d.models[0].attributes,c)})),
ia.open())}function rc(b){var d;d=!1;var c;b.stopPropagation();F&&(F.focus(),L=F[0].selectionStart,M=F[0].selectionEnd,D=F.val(),b=a(this),b.hasClass("ERIconBold")?(d="[b]",c="[/b]"):b.hasClass("ERIconUnderline")?(d="[u]",c="[/u]"):b.hasClass("ERIconItalic")?(d="[i]",c="[/i]"):b.hasClass("ERIconLineBreak")&&(d="[br]",c=""),d?(L===M&&""!==c||F.val(D.substring(0,L)+d+D.substring(L,M)+c+D.substring(M)),F[0].focus()):(b.hasClass("ERIconImage")&&(T=F,qc()),b.hasClass("ERIconLink")&&L!==M&&(T=F,Ua++,d=
a('<div class="erdeleteme" id="ertmp_'+Ua+'">link</div>'),d.appendTo(la),H.selection.select(d[0].firstChild),H.nodeChanged(),H.execCommand("WP_Link",!1))))}function sc(){r=!1;lb()}function tc(){r=!1;Aa()}function uc(){0<K&&!m.noHTMLWarn&&(m.noHTMLWarn=!0,Da.dialog(fa))}function vc(b){var d,c;if("dopreview"===a("#wp-preview",b.target).val()||0===K)return!0;(b=tinyMCE.activeEditor&&!tinyMCE.activeEditor.isHidden())?d=a("<div>"+H.getContent()+"</div>"):(c=a("#wp-content-editor-container").find("textarea"),
d=a("<div>"+c.val()+"</div>"));var f=a(".easyrecipeWrapper",d);a(".easyrecipeAbove,.easyrecipeBelow",f).remove();a(".easyrecipe",f).unwrap();a(".easyrecipe",d).removeClass("mceNonEditable");d=a.trim(d.html());b?H.setContent(d):c.val(d);return!0}function wc(b){var d,c,f,e;e=a("#easyrecipe-snippet").find(".ERRSP");f=e.find(".ERRSPStatus");b=a.parseJSON(b);b=a(b.html);d=b.find("#ires .vsc");0===d.length&&(d=b.find("#ires .rc"));0===d.length?(f.text("No snippet data returned from Google"),f.css("color",
"#f99")):(b=d.find("h3.r").text(),c=d.find(".s").html(),d=e.find(".ERRSPResult"),d.html("<h3>"+b+'</h3><div class="s">'+c+"</div>"),f.hide(),e.find(".ERRSPResult .f.slp .csb").css("background-image",""))}function xc(){}function yc(b){""!=b.target.innerHTML&&(b=a(b.target).find("img").attr("src"))&&Qa(b,!1)}function zc(b){var d,c;b=b[0];for(d=0;d<b.addedNodes.length;d++)if(c=a(b.addedNodes[d].innerHTML),c=c.find("img").attr("src")){Qa(c,!1);break}}var Tb=jQuery.trim,H,ib,db,P,R,wa,xa,A,B,X,Ca,E,Q,
W,eb,Za,bb=!1,kb,Sa,k,jb,Lb=/\x3c!-- START INCLUDEIF (!?)([_a-z][_0-9a-z]{0,19}) --\x3e/i,Mb=/^#([_a-z][_0-9a-z]{0,19})#/im,Nb=/\x3c!-- START REPEAT ([_a-zA-Z][_0-9a-zA-Z]{0,19}) --\x3e/m,zb,Ab=/^([^<]*)/,$a=/^(?:([0-9]+) *(?:h|hr|hrs|hour|hours))? *(?:([0-9]+) *(?:m|mn|mns|min|mins|minute|minutes))?$/i,Ob=/^([0-9]+)$/,Yb=/(.*)\[amd-(recipeseo|zlrecipe)-recipe:([0-9]+)\](.*)/,Zb=/(.*)\[(yumprint)-recipe\s+id='(\d+)'\](.*)/i,$b=/(.*)\[(gmc)_recipe\s+([0-9]+)\](.*)/,fb,Na,cb,wb,Ta,ub=/PT(?:([0-9]*)+H)?([0-9]+)+M/i,
yb=/\[(?:img) +(?:[^\]]+?)\]/ig,cc=/class\s*=\s*"(?:[^"]+ )?photo[ "]/i,bc=/src\s*=\s*" *([^"]+?) *"/i,ac={recipeseo:"Recipe SEO",ziplist:"ZipList",zlrecipe:"ZipList",yumprint:"Yumprint Recipe Card",recipress:"ReciPress",gmc:"GetMeCooking"},G=[],aa=[],ja=[],Ya=[],L,M,D,F=null,Ua=0,T,m,Da,ma='<div class="easyrecipeholder">EasyRecipe</div>',ab=".easyrecipeholder",Bb="ERSeparator",C,ec,za,V,q=null,la,p,Fa,Va,Wa,w,J,La,Ma,Ha,Ia,Ja,Ka,Gb,ob,Hb,pb,ca,da,ea,na,oa,pa,qa,ra,sa,ta,ua,va,ya,Y,K=0,ba,dc=!0,Pa,
hb,O,qb,Z,I="close",N="click",ka="undefined",fa="open",S="ERPhotoSelected",Xb="http://www.easyrecipeplugin.com/checkUpdates.php",xb='<div class="divERNoPhotos">There are no photos in this post<br />Add photos anywhere in the post</div>',ha,Ra=-1,Ba=-2,y="",Oa,Cb="&nbsp;",Eb,vb,r,kc=[],U=!1,Ea,ia;"use strict";a(function(){var b,d;d=null;m=EASYRECIPE;m.dialogs=a("<div>").addClass("easyrecipeUI").prop("id","easyrecipeUI").appendTo("body");a.widget("custom.easyrecipeDialog",a.ui.dialog,{_allowInteraction:function(b){return this._super(b)||
!!a(b.target).parents(".media-modal-content, #wp-link").length}});m.button!==a.fn.button&&(d=a.fn.button,a.fn.button=m.button);C=a("#easyrecipeEntry");za=a("#easyrecipeSelect");Da=a("#easyrecipeHTMLWarn");Ca=m.isGuest?{guestpost:1}:{content:1,aviaTBcontent:1};za.dialog({autoOpen:!1,width:340,modal:!0,appendTo:m.dialogs,dialogClass:"easyrecipeSelect",close:function(){a(".easyrecipeSelect").filter(function(){return""===a(this).text()}).remove()}});a("#divERSELContainer").show();C.easyrecipeDialog({autoOpen:!1,
width:655,modal:!0,appendTo:m.dialogs,dialogClass:"easyrecipeEntry",beforeClose:function(){if(U){if(!window.confirm("Are you sure you want to close without saving the recipe?"))return!1;U=!1}return!0},close:function(){m.isEntryDialog=!1;k&&!jb&&k.remove();k=!1;a(".easyrecipeEntry").filter(function(){return""===a(this).text()}).remove()},open:function(){m.isEntryDialog=!0;Fa.tabs({active:0,beforeActivate:Jb});setTimeout(function(){var b=a(".easyrecipeEntry"),d=b.offset();d.top<qb&&(d.top=qb,b.offset(d))},
250)}});Ea=a("#divERContainer").show();Da.dialog({autoOpen:!1,width:420,modal:!0,dialogClass:"easyrecipeHTMLWarn",appendTo:m.dialogs,close:function(){a(".easyrecipeHTMLWarn").filter(function(){return""===a(this).text()}).remove()}});a(".divERHTMLWarnContainer").show();V=a("#easyrecipeConvert");Ma=a("#divERCNVSpinner");Ha=a("#btnERCNVCancel");Ia=a("#btnERCNVOK");Ma.hide();V.dialog({autoOpen:!1,width:390,modal:!0,dialogClass:"easyrecipeConvert",appendTo:m.dialogs,close:function(){a(".easyrecipeConvert").filter(function(){return""===
a(this).text()}).remove()}});a("#divERCNVContainer").show();a(window).bind("easyrecipeadd",sc);a(window).bind("easyrecipeedit",tc);a(window).bind("easyrecipeload",lc);Wa=a("#divERNext");Va=a("#btnERButtons");Fa=a("#ERDTabs");J=a("#divERPhotos");a("input:submit",".easyrecipeUI").button();a("#ed_toolbar");db=a("#inpERRating");P=a("#inpERName");E=a("#inpERAuthor");Q=a("#inpERType");W=a("#inpERCuisine");eb=a("#inpERTags");R=a("textarea#taERSummary");wa=a("textarea#taERIngredients");xa=a("textarea#taERInstructions");
A=a("#inpERPrepTime");B=a("#inpERCookTime");X=a("#inpERYield");ca=a("#inpERServeSize");da=a("#inpERCalories");ea=a("#inpERFat");na=a("#inpERSatFat");oa=a("#inpERUnsatFat");pa=a("#inpERTransFat");qa=a("#inpERCarbs");ra=a("#inpERSugar");sa=a("#inpERSodium");ta=a("#inpERFiber");ua=a("#inpERProtein");va=a("#inpERCholesterol");ya=a("textarea#taERNotes");Pa=a("#divERAddImageURL");b=a("#lnkERPhotoURL");Za=a(".ERTimeError");Ja=a("#divERAdd");Ka=a("#divERChange");a("#divERHeader");Gb=a("#divEROther");ob=a("#divEROtherLabel");
Hb=a("#divERNotes");pb=a("#divERNotesLabel");La=a("#ERDPasteTab");hb=a("#fldERAPUImageURL");a("#btnERAdd").click(Fb);a("#btnERNext").click(Kb);a("#btnERChange").click(Fb);a("#btnERDelete").click(hc);a("#btnERCancel").click(fc);b.click(function(){Pa.show(500)});a("#btnERAIUCancel").click(function(){Pa.hide()});a("#btnERAIUOK").click(Wb);ob.click(mc);pb.click(nc);A.change(function(b){Ga(a(b.target))});B.change(function(b){Ga(a(b.target))});a("#btnERPaste").click(ic);a("#btnERSELCancel").click(gc);qb=
a("#wpadminbar").height();Z=a("#divEREditBtns").on("mousedown","li",rc);Ea.find('input[type="text"], textarea').on("blur",function(){F=null}).on("focus",function(){F=a(this)});a("#wp-link").bind("wpdialogclose",pc);m.insertLink=oc;cb=lb;wb=Aa;Ta=!1;m.insertUploadedImage=Ib;Eb=jc;vb=ga;m.addListener=nb;Da.find("input").on(N,function(){Da.dialog(I)});a("#wp-content-editor-tools").on(N,"#content-html",uc);a("#post").on("submit",vc);null!==d&&(a.fn.button=d);b=a("#easyrecipe-snippet");"none"!==b.css("display")&&
(b=b.find(".ERRSPStatus").attr("postid"))&&a.ajax({url:ajaxurl,type:"POST",data:{action:"easyrecipeSnippet",id:b},success:wc,error:xc});b=a("#postimagediv").find(".inside");if(window.MutationObserver&&0<b.length)d=new MutationObserver(zc),d.observe(b[0],{childList:!0});else b.on("DOMSubtreeModified",yc);window.QTags&&QTags.addButton("easyrecipe","EasyRecipe",function(){alert("Switch to the Visual Editor to add or edit an EasyRecipe")},"","","",900)})})(jQuery);
