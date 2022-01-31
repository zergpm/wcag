(function(b){if(typeof define==="function"&&define.amd){define(b)}else{if(typeof exports==="object"){module.exports=b()}else{var a=window.Cookies;var c=window.Cookies=b();c.noConflict=function(){window.Cookies=a;return c}}}}(function(){function b(){var f=0;var c={};for(;f<arguments.length;f++){var d=arguments[f];for(var e in d){c[e]=d[e]}}return c}function a(d){function c(o,n,k){var r;if(typeof document==="undefined"){return}if(arguments.length>1){k=b({path:"/"},c.defaults,k);if(typeof k.expires==="number"){var h=new Date();h.setMilliseconds(h.getMilliseconds()+k.expires*86400000);k.expires=h}try{r=JSON.stringify(n);if(/^[\{\[]/.test(r)){n=r}}catch(m){}if(!d.write){n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}else{n=d.write(n,o)}o=encodeURIComponent(String(o));o=o.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);o=o.replace(/[\(\)]/g,escape);return(document.cookie=[o,"=",n,k.expires&&"; expires="+k.expires.toUTCString(),k.path&&"; path="+k.path,k.domain&&"; domain="+k.domain,k.secure?"; secure":""].join(""))}if(!o){r={}}var q=document.cookie?document.cookie.split("; "):[];var p=/(%[0-9A-Z]{2})+/g;var l=0;for(;l<q.length;l++){var j=q[l].split("=");var f=j[0].replace(p,decodeURIComponent);var g=j.slice(1).join("=");if(g.charAt(0)==='"'){g=g.slice(1,-1)}try{g=d.read?d.read(g,f):d(g,f)||g.replace(p,decodeURIComponent);if(this.json){try{g=JSON.parse(g)}catch(m){}}if(o===f){r=g;break}if(!o){r[f]=g}}catch(m){}}return r}c.set=c;c.get=function(e){return c(e)};c.getJSON=function(){return c.apply({json:true},[].slice.call(arguments))};c.defaults={};c.remove=function(f,e){c(f,"",b(e,{expires:-1}))};c.withConverter=a;return c}return a(function(){})}));jQuery(window).on("load",function(){$body_link=jQuery("body a, body button");jQuery("a.aicon_link").fadeIn(350);setTimeout(function(){if(typeof removeLinkTitles!="undefined"&&removeLinkTitles==1){$body_link.each(function(){if(jQuery(this).attr("title")){jQuery(this).attr("title","");jQuery(this).removeAttr("title")}})}},500);if(typeof roleLink!="undefined"&&roleLink==1){setTimeout(function(){$body_link.each(function(){var a=jQuery(this);if(typeof Foundation!="undefined"&&typeof Foundation.version!="undefined"&&Foundation.version){if(a.attr("role")!="tab"){a.attr("role","link")}}else{a.attr("role","link")}})},500)}check_wah_free_credits()});jQuery(document).ready(function(){var b=jQuery("body");var c=1;var d=100;jQuery("#wp_access_helper_container").prependTo("body");jQuery(".wah-skiplinks-menu").prependTo("body");jQuery(".greyscale").click(function(){jQuery("img").each(function(){jQuery(this).toggleClass("active_greyscale")})});jQuery(".aicon_link").click(function(e){e.preventDefault();jQuery(".accessability_container").addClass("active");jQuery("#access_container button").removeAttr("tabindex");jQuery("#access_container").attr("aria-hidden","false")});jQuery(".close_container, .close-wah-sidebar").click(function(e){e.preventDefault();jQuery(".accessability_container").removeClass("active");jQuery("#access_container button").attr("tabindex","-1");jQuery("#access_container").attr("aria-hidden","true")});if(jQuery("body").hasClass("wah_fstype_rem")){jQuery(".smaller").click(function(e){e.preventDefault();var f=parseInt(jQuery("html").css("font-size"));if(f>12){f=f-1+"px";jQuery("html").css({"font-size":f})}});jQuery(".larger").click(function(e){e.preventDefault();var f=parseInt(jQuery("html").css("font-size"));if(f<24){f=f+1+"px";jQuery("html").css({"font-size":f})}})}else{if(jQuery("body").hasClass("wah_fstype_zoom")){jQuery(".larger").click(function(){var e;if(b.hasClass("gecko")){e=0.05;c+=e;b.css("MozTransform","scale("+c+","+c+")");b.css("transform-origin","50% 50%")}else{e=5;d+=e;b.css("zoom"," "+d+"%")}});jQuery(".smaller").click(function(){var e;if(b.hasClass("gecko")){e=0.05;c-=e;b.css("MozTransform","scale("+c+","+c+")");b.css("transform-origin","50% 50%")}else{e=5;d-=e;b.css("zoom"," "+d+"%")}})}else{var a=jQuery("a,p,span,h1,h2,h3,h4,h5,h6");a.each(function(){jQuery(this).attr("data-wahfont",parseInt(jQuery(this).css("font-size")))});wah_font_resizer()}}jQuery(".wah-call-remove-styles").click(function(e){e.preventDefault();jQuery("link:not(#wpah-front-styles-css)").each(function(f,g){if(jQuery(this).attr("disabled")){jQuery(this).removeAttr("disabled")}else{jQuery(this).attr("disabled","disabled")}})});jQuery(".wah-call-underline-links").click(function(e){e.preventDefault();b.toggleClass("is_underline")});jQuery("#contrast_trigger").click(function(e){e.preventDefault();jQuery(".color_selector").toggleClass("is_visible");jQuery(".color_selector").attr("aria-hidden","false")});jQuery(".convar").click(function(e){e.preventDefault();var g=jQuery(this).data("bgcolor");var f=jQuery(this).data("color");jQuery("body :not(.wahcolor), body").css({"background-color":g,color:f});setContrastCookie(g,f);jQuery(".color_selector").removeClass("is_visible");jQuery(".color_selector").attr("aria-hidden","true")});if(typeof headerElementSelector!="undefined"&&headerElementSelector){b.find(headerElementSelector).attr("role","banner")}if(typeof sidebarElementSelector!="undefined"&&sidebarElementSelector){b.find(sidebarElementSelector).attr("role","complementary")}if(typeof footerElementSelector!="undefined"&&footerElementSelector){b.find(footerElementSelector).attr("role","contentinfo")}if(typeof mainElementSelector!="undefined"&&mainElementSelector){b.find(mainElementSelector).attr("role","main")}if(typeof navElementSelector!="undefined"&&navElementSelector){b.find(navElementSelector).attr("role","navigation")}if(typeof Cookies.get("wahFontColor")!="undefined"&&typeof Cookies.get("wahBgColor")!="undefined"){jQuery("body :not(.wahcolor), body").css({"background-color":Cookies.get("wahBgColor"),color:Cookies.get("wahFontColor")})}if(typeof wah_lights_off_selector!="undefined"&&wah_lights_off_selector){jQuery(".wah-lights-off").click(function(f){f.preventDefault();if(!jQuery("body").hasClass("wah-lights-off")){jQuery("body").append('<div class="wah-dark-overlay"></div>');jQuery("body").addClass("wah-lights-off");jQuery(wah_lights_off_selector).addClass("wah-lights-selector")}else{jQuery("body .wah-dark-overlay").remove();jQuery("body").removeClass("wah-lights-off");jQuery(wah_lights_off_selector).removeClass("wah-lights-selector")}})}jQuery(".wah-call-clear-cookies").click(function(e){e.preventDefault();removeAllCookies()});jQuery(".wah-call-highlight-links").click(function(e){e.preventDefault();b.toggleClass("highlight_links_on")});jQuery(".wah-call-invert").click(function(e){e.preventDefault();b.toggleClass("invert_mode_on")});jQuery(".wah-call-remove-animations").click(function(e){e.preventDefault();b.toggleClass("remove_animations")});jQuery(".wah-action-button").click(function(){jQuery(this).toggleClass("active_button")});jQuery(".readable_fonts .wah-action-button").click(function(e){b.toggleClass("arial_font_on")});jQuery(".wah-call-keyboard-navigation").click(function(){b.toggleClass("wah_keyboard_access")});if(typeof wah_target_src!="undefined"){wah_target_element=jQuery("body").find("img[src='"+wah_target_src+"']");wah_target_element.addClass("wah_scanner_element")}if(typeof wah_target_link!="undefined"){wah_target_element=jQuery('a[href="'+wah_target_link+'"]');wah_target_element.addClass("wah_scanner_link")}});function check_wah_free_credits(){var e=jQuery(".wah-free-credits");var a=jQuery(".wah-free-credits-inner");var c=jQuery(".wah-free-credits-inner > a");var b=[e,a,c];var d=[];setTimeout(function(){jQuery.each(b,function(f,g){if(g.is(":hidden")){d.push({is_hidden:g})}if(!g.length){d.push({not_exists:g})}if(g.css("visibility")==="hidden"){d.push({visibility_hidden:g})}if(g.css("opacity")==="0"){d.push({opacity0:g})}});if(d.length){jQuery("#access_container").css("display","none").remove();jQuery("#wp_access_helper_container").append('<div style="text-align:center; font-size: 13px !important;">WAH Credits missing.</div>')}},10000)}function setContrastCookie(b,a){Cookies.set("wahFontColor",a,{expires:14});Cookies.set("wahBgColor",b,{expires:14})}function removeAllCookies(){Cookies.remove("wahFontColor");Cookies.remove("wahBgColor");location.reload()}function wah_font_resizer(){var a=jQuery("a,p,span,h1,h2,h3,h4,h5,h6");jQuery(".font_resizer .larger").click(function(b){b.preventDefault();a.each(function(){var c=parseInt(jQuery(this).css("font-size"));jQuery(this).css("font-size",parseInt(c+1)+"px")})});jQuery(".font_resizer .smaller").click(function(b){b.preventDefault();a.each(function(){var c=parseInt(jQuery(this).css("font-size"));if(c>12){jQuery(this).css("font-size",parseInt(c-1)+"px")}})});jQuery(".wah-font-reset").click(function(b){b.preventDefault();a.each(function(){var c=parseInt(jQuery(this).css("font-size"));jQuery(this).css("font-size",parseInt(jQuery(this).data("wahfont"))+"px")})})};


/*
 * jQuery jFontSize Plugin
 * Examples and documentation: http://jfontsize.com
 * Original Author: Frederico Soares Vanelli
 *   fredsvanelli@gmail.com
 *   http://twitter.com/fredvanelli
 *   http://facebook.com/fred.vanelli
 *
 * Copyright (c) 2011
 * Version: 1.0 (2011-07-15)
 * Dual licensed under the MIT and GPL licenses.
 * http://jfontsize.com/license
 * Requires: jQuery v1.2.6 or later
 * 
 * Version 2.0 by Vincent Chabredier / Ouvrages
 * http://www.ouvrages-web.fr
 *
 * Copyright (c) 2013
 * Requires: 
 ** jQuery v1.2.6 or later
 ** jStorage (http://www.jstorage.info/)
 * 
*/

!function(s){s.fn.jfontsize=function(t){var n,e,i,a,l;return n=s(this),a={btnMinusClasseId:"#jfontsize-minus",btnDefaultClasseId:"#jfontsize-default",btnPlusClasseId:"#jfontsize-plus",btnMinusMaxHits:10,btnPlusMaxHits:10,sizeChange:1},t&&(t=s.extend(a,t)),l=function(){return s.jStorage.set("jfontsize",i)},e=function(){return n.each(function(n){var e,a;return null==s(this).data("initial_size")&&(e=s(this).css("font-size"),e=parseInt(e.replace("px","")),s(this).data("initial_size",e)),a=s(this).data("initial_size")+i*t.sizeChange,s(this).css("font-size",a+"px")})},s(t.btnMinusClasseId+", "+t.btnDefaultClasseId+", "+t.btnPlusClasseId).removeAttr("href"),s(t.btnMinusClasseId+", "+t.btnDefaultClasseId+", "+t.btnPlusClasseId).css("cursor","pointer"),(i=s.jStorage.get("jfontsize",0))===-t.btnMinusMaxHits&&s(t.btnMinusClasseId).addClass("jfontsize-disabled"),i===t.btnPlusMaxHits&&s(t.btnPlusClasseId).addClass("jfontsize-disabled"),e(),s(t.btnMinusClasseId).click(function(){if(s(t.btnPlusClasseId).removeClass("jfontsize-disabled"),i>-t.btnMinusMaxHits)return--i===-t.btnMinusMaxHits&&s(t.btnMinusClasseId).addClass("jfontsize-disabled"),e(),l()}),s(t.btnDefaultClasseId).click(function(){return s(t.btnMinusClasseId).removeClass("jfontsize-disabled"),s(t.btnPlusClasseId).removeClass("jfontsize-disabled"),i=0,n.each(function(t){return s(this).css("font-size",s(this).data("initial_size")+"px")}),l()}),s(t.btnPlusClasseId).click(function(){if(s(t.btnMinusClasseId).removeClass("jfontsize-disabled"),i<t.btnPlusMaxHits)return++i===t.btnPlusMaxHits&&s(t.btnPlusClasseId).addClass("jfontsize-disabled"),e(),l()})}}(jQuery);

/*
 * ----------------------------- JSTORAGE -------------------------------------
 * Simple local storage wrapper to save data on the browser side, supporting
 * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Author: Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 *
 * Licensed under Unlicense:
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org/>
 */

 !function(){var e=window.jQuery||window.$||(window.$={}),t={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(e){return String(e).evalJSON()}||e.parseJSON||e.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||e.toJSON};if(!("parse"in t&&"stringify"in t))throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var r,a={__jstorage_meta:{CRC32:{}}},o={jStorage:"{}"},n=null,i=0,s=!1,u={},g=!1,c=0,_={},l=+new Date,d={isXML:function(e){var t=(e?e.ownerDocument||e:0).documentElement;return!!t&&"HTML"!==t.nodeName},encode:function(e){if(!this.isXML(e))return!1;try{return(new XMLSerializer).serializeToString(e)}catch(t){try{return e.xml}catch(e){}}return!1},decode:function(e){var t,r="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(e){var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t};return!!r&&(t=r.call("DOMParser"in window&&new DOMParser||window,e,"text/xml"),!!this.isXML(t)&&t)}};function f(){var e="{}";if("userDataBehavior"==s){n.load("jStorage");try{e=n.getAttribute("jStorage")}catch(e){}try{c=n.getAttribute("jStorage_update")}catch(e){}o.jStorage=e}h(),b(),v()}function S(){var e;clearTimeout(g),g=setTimeout(function(){if("localStorage"==s||"globalStorage"==s)e=o.jStorage_update;else if("userDataBehavior"==s){n.load("jStorage");try{e=n.getAttribute("jStorage_update")}catch(e){}}e&&e!=c&&(c=e,function(){var e,r=t.parse(t.stringify(a.__jstorage_meta.CRC32));f(),e=t.parse(t.stringify(a.__jstorage_meta.CRC32));var o,n=[],i=[];for(o in r)if(r.hasOwnProperty(o)){if(!e[o]){i.push(o);continue}r[o]!=e[o]&&"2."==String(r[o]).substr(0,2)&&n.push(o)}for(o in e)e.hasOwnProperty(o)&&(r[o]||n.push(o));j(n,"updated"),j(i,"deleted")}())},25)}function j(e,t){if(e=[].concat(e||[]),"flushed"==t){e=[];for(var r in u)u.hasOwnProperty(r)&&e.push(r);t="deleted"}for(var a=0,o=e.length;a<o;a++){if(u[e[a]])for(var n=0,i=u[e[a]].length;n<i;n++)u[e[a]][n](e[a],t);if(u["*"])for(n=0,i=u["*"].length;n<i;n++)u["*"][n](e[a],t)}}function w(){var e=(+new Date).toString();if("localStorage"==s||"globalStorage"==s)try{o.jStorage_update=e}catch(e){s=!1}else"userDataBehavior"==s&&(n.setAttribute("jStorage_update",e),n.save("jStorage"));S()}function h(){if(o.jStorage)try{a=t.parse(String(o.jStorage))}catch(e){o.jStorage="{}"}else o.jStorage="{}";i=o.jStorage?String(o.jStorage).length:0,a.__jstorage_meta||(a.__jstorage_meta={}),a.__jstorage_meta.CRC32||(a.__jstorage_meta.CRC32={})}function m(){!function(){if(!a.__jstorage_meta.PubSub)return;for(var e=+new Date-2e3,t=0,r=a.__jstorage_meta.PubSub.length;t<r;t++)if(a.__jstorage_meta.PubSub[t][0]<=e){a.__jstorage_meta.PubSub.splice(t,a.__jstorage_meta.PubSub.length-t);break}a.__jstorage_meta.PubSub.length||delete a.__jstorage_meta.PubSub}();try{o.jStorage=t.stringify(a),n&&(n.setAttribute("jStorage",o.jStorage),n.save("jStorage")),i=o.jStorage?String(o.jStorage).length:0}catch(e){}}function p(e){if(!e||"string"!=typeof e&&"number"!=typeof e)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==e)throw new TypeError("Reserved key name");return!0}function b(){var e,t,o,n,i=1/0,s=!1,u=[];if(clearTimeout(r),a.__jstorage_meta&&"object"==typeof a.__jstorage_meta.TTL){e=+new Date,o=a.__jstorage_meta.TTL,n=a.__jstorage_meta.CRC32;for(t in o)o.hasOwnProperty(t)&&(o[t]<=e?(delete o[t],delete n[t],delete a[t],s=!0,u.push(t)):o[t]<i&&(i=o[t]));i!=1/0&&(r=setTimeout(b,i-e)),s&&(m(),w(),j(u,"deleted"))}}function v(){var e;if(a.__jstorage_meta.PubSub){var t,r=l;for(e=a.__jstorage_meta.PubSub.length-1;e>=0;e--)(t=a.__jstorage_meta.PubSub[e])[0]>l&&(r=t[0],y(t[1],t[2]));l=r}}function y(e,r){if(_[e])for(var a=0,o=_[e].length;a<o;a++)try{_[e][a](e,t.parse(t.stringify(r)))}catch(e){}}e.jStorage={version:"0.4.7",set:function(e,r,o){if(p(e),o=o||{},void 0===r)return this.deleteKey(e),r;if(d.isXML(r))r={_is_xml:!0,xml:d.encode(r)};else{if("function"==typeof r)return;r&&"object"==typeof r&&(r=t.parse(t.stringify(r)))}return a[e]=r,a.__jstorage_meta.CRC32[e]="2."+function(e,t){for(var r,a=e.length,o=t^a,n=0;a>=4;)r=1540483477*(65535&(r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+((1540483477*(r>>>16)&65535)<<16),o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),a-=4,++n;switch(a){case 3:o^=(255&e.charCodeAt(n+2))<<16;case 2:o^=(255&e.charCodeAt(n+1))<<8;case 1:o=1540483477*(65535&(o^=255&e.charCodeAt(n)))+((1540483477*(o>>>16)&65535)<<16)}return o=1540483477*(65535&(o^=o>>>13))+((1540483477*(o>>>16)&65535)<<16),(o^=o>>>15)>>>0}(t.stringify(r),2538058380),this.setTTL(e,o.TTL||0),j(e,"updated"),r},get:function(e,t){return p(e),e in a?a[e]&&"object"==typeof a[e]&&a[e]._is_xml?d.decode(a[e].xml):a[e]:void 0===t?null:t},deleteKey:function(e){return p(e),e in a&&(delete a[e],"object"==typeof a.__jstorage_meta.TTL&&e in a.__jstorage_meta.TTL&&delete a.__jstorage_meta.TTL[e],delete a.__jstorage_meta.CRC32[e],m(),w(),j(e,"deleted"),!0)},setTTL:function(e,t){var r=+new Date;return p(e),t=Number(t)||0,e in a&&(a.__jstorage_meta.TTL||(a.__jstorage_meta.TTL={}),t>0?a.__jstorage_meta.TTL[e]=r+t:delete a.__jstorage_meta.TTL[e],m(),b(),w(),!0)},getTTL:function(e){var t=+new Date;return p(e),e in a&&a.__jstorage_meta.TTL&&a.__jstorage_meta.TTL[e]&&a.__jstorage_meta.TTL[e]-t||0},flush:function(){return a={__jstorage_meta:{CRC32:{}}},m(),w(),j(null,"flushed"),!0},storageObj:function(){function e(){}return e.prototype=a,new e},index:function(){var e,t=[];for(e in a)a.hasOwnProperty(e)&&"__jstorage_meta"!=e&&t.push(e);return t},storageSize:function(){return i},currentBackend:function(){return s},storageAvailable:function(){return!!s},listenKeyChange:function(e,t){p(e),u[e]||(u[e]=[]),u[e].push(t)},stopListening:function(e,t){if(p(e),u[e])if(t)for(var r=u[e].length-1;r>=0;r--)u[e][r]==t&&u[e].splice(r,1);else delete u[e]},subscribe:function(e,t){if(!(e=(e||"").toString()))throw new TypeError("Channel not defined");_[e]||(_[e]=[]),_[e].push(t)},publish:function(e,t){if(!(e=(e||"").toString()))throw new TypeError("Channel not defined");var r,o;r=e,o=t,a.__jstorage_meta||(a.__jstorage_meta={}),a.__jstorage_meta.PubSub||(a.__jstorage_meta.PubSub=[]),a.__jstorage_meta.PubSub.unshift([+new Date,r,o]),m(),w()},reInit:function(){f()},noConflict:function(e){return delete window.$.jStorage,e&&(window.jStorage=this),this}},function(){var e=!1;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","tmpval"),e=!0,window.localStorage.removeItem("_tmptest")}catch(e){}if(e)try{window.localStorage&&(o=window.localStorage,s="localStorage",c=o.jStorage_update)}catch(e){}else if("globalStorage"in window)try{window.globalStorage&&(o="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],s="globalStorage",c=o.jStorage_update)}catch(e){}else{if(!(n=document.createElement("link")).addBehavior)return void(n=null);n.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(n);try{n.load("jStorage")}catch(e){n.setAttribute("jStorage","{}"),n.save("jStorage"),n.load("jStorage")}var t="{}";try{t=n.getAttribute("jStorage")}catch(e){}try{c=n.getAttribute("jStorage_update")}catch(e){}o.jStorage=t,s="userDataBehavior"}h(),b(),"localStorage"==s||"globalStorage"==s?"addEventListener"in window?window.addEventListener("storage",S,!1):document.attachEvent("onstorage",S):"userDataBehavior"==s&&setInterval(S,1e3),v(),"addEventListener"in window&&window.addEventListener("pageshow",function(e){e.persisted&&S()},!1)}()}();


 /**
WCA Suite
*/

(function($) {
	'use strict';
	
	$(document).ready(function(){
	
	var theHTMLToInsert = '<aside class="wcag-wrap"><div class="wcag-tools"><section class="wcag-colors"><h5 class="wcag-section-title" style="font-size: 16px;">Contrast</h5><ul><li class="default" title="Enable the default mode."><span class="fa fa-sun-o" style="font-size: 16px;"></span></li><li class="night" title="Enable the night mode."><span class="fa fa-moon-o" style="font-size: 16px;"></span></li><li class="black_white" title="Enable high contrast black/white mode."><span class="fa fa-eye" style="font-size: 16px;"></span></li><li class="black_yellow" title="Enable high contrast black/yellow mode."><span class="fa fa-eye" style="font-size: 16px;"></span></li><li class="yellow_black" title="Enable high contrast yellow/black mode."><span class="fa fa-eye" style="font-size: 16px;"></span></li></ul></section><section class="wcag-maginifier"><h5 class="wcag-section-title" style="font-size: 16px;">Maginifier</h5><i class="fa fa-search-plus" data-zoom-level="1" style="font-size: 16px;"></i><i class="fa fa-search-plus" data-zoom-level="1.25" style="font-size: 16px;"></i><i class="fa fa-search-plus" data-zoom-level="1.5" style="font-size: 16px;"></i></section><section class="wcag-font-size"><h5 class="wcag-section-title" style="font-size: 16px;">Font size</h5><div class="wcag-font-size-selectors"><i class="wcag-size-minus wcag-font-size-selector fa fa-minus" style="cursor: pointer; font-size: 14px;"></i><i class="wcag-size-plus wcag-font-size-selector fa fa-plus" style="cursor: pointer; font-size: 14px;"></i></div></section><section class="wcag-links-and-font"><h5 class="wcag-section-title" style="font-size: 16px;">Links and text settings</h5><label style="font-size: 14px;"><input type="checkbox" id="highlight-links"><span style="font-size: 14px;">Highlight links</span></label><label style="font-size: 14px;"><input type="checkbox" id="highlight-headings"><span style="font-size: 14px;">Highlight headings</span></label><div class="wcag-fonts"><label style="font-size: 14px;"><input type="radio" value="default" name="wcag_font" id="default-font"><span style="font-size: 14px;">Default font</span></label><label style="font-size: 14px;"><input type="radio" value="readable" name="wcag_font" id="readable-font"><span style="font-size: 14px;">Readable font</span></label><label style="font-size: 14px;"><input type="radio" value="dyslexic" name="wcag_font" id="dyslexic-font"><span style="font-size: 14px;">Dyslexic font</span></label></div></section><section class="wcag-cursors"><h5 class="wcag-section-title" style="font-size: 16px;">Cursor settings</h5><label style="font-size: 14px;"><input type="radio" value="dfault-cursor" name="wcag_cursor" class="wcag-cursor"><span style="font-size: 14px;">Default cursor</span></label><label style="font-size: 14px;"><input type="radio" value="white-cursor" name="wcag_cursor" class="wcag-cursor"><span style="font-size: 14px;">Big white cursor</span></label><label style="font-size: 14px;"><input type="radio" value="black-cursor" name="wcag_cursor" class="wcag-cursor"><span style="font-size: 14px;">Big black cursor</span></label></section><section class="wcag-animations"><h5 class="wcag-section-title" style="font-size: 16px;">Animation</h5><label style="font-size: 14px;"><input type="checkbox" id="wcag-disable-animations"><span style="font-size: 14px;">Disable all animations and transitions</span></label></section></div><i class="fa fa-cogs" id="wcag-trigger-icon" style="font-size: 26px;"></i></aside>';
		document.body.insertAdjacentHTML("beforeend", theHTMLToInsert);
		
		var cookie_lifetime = 30;
		var wcagWrap = $('.wcag-wrap')[0];
		
		$(document).on('click touchstart', function(event) {
			var isClickInside = wcagWrap.contains(event.target);
			if (!isClickInside) {
				wcagWrap.classList.remove('shown');
			}
		});
		
		$('a, span, p, em, h1, h2, h3, h4, h5, h6, i, label, input[type="submit"], input[type="text"], input[type="email"], input[type="password"], input[type="number"]').jfontsize({
			btnMinusClasseId: '.wcag-size-minus',
			btnDefaultClasseId: '#jfontsize-d2',
			btnPlusClasseId: '.wcag-size-plus',
			btnMinusMaxHits: 1,
			btnPlusMaxHits: 3,
			sizeChange: 3
		});
		
		$(document).on('click', '#wcag-trigger-icon', function(event){
			$('.wcag-wrap').toggleClass('shown');
		});
		
		$(document).on('click touchend', '.wcag-colors li', function(event){
			$('body').attr('data-color', $(this).attr('class'));
			Cookies.set('data-color', $(this).attr('class'), { cookie_lifetime, path: '/' });
		});
		
		$(document).on('click touchend', '.wcag-maginifier i', function(event){
			$('.wcag-maginifier i').removeClass('activated');
			$(this).toggleClass('activated');
			$('body').attr('data-zoom-level', $(this).attr('data-zoom-level'));
			Cookies.set('data-zoom-level', $(this).attr('data-zoom-level'), { cookie_lifetime, path: '/' });
		});
		
		$(document).on('click touchend', '#highlight-links', function(event){
			if ($( this).is(":checked")) {
				$('body').attr('data-highlight-links', 'true');
				Cookies.set('data-highlight-links', 'true', { cookie_lifetime, path: '/' });
				} else {
				$('body').attr('data-highlight-links', 'false');
				Cookies.set('data-highlight-links', 'false', { cookie_lifetime, path: '/' });
			}
		});
		
		$(document).on('click touchend', '#highlight-headings', function(event){
			if ($( this).is(":checked")) {
				$('body').attr('data-highlight-headings', 'true');
				Cookies.set('data-highlight-headings', 'true', { cookie_lifetime, path: '/' });
				} else {
				$('body').attr('data-highlight-headings', 'false');
				Cookies.set('data-highlight-headings', 'false', { cookie_lifetime, path: '/' });
			}
		});
		
		$(document).on('click touchend', '.wcag-fonts input', function(event){
			if ($( this).is(":checked")) {
				$('body').attr('data-font', $(this).val());
				Cookies.set('data-font', $(this).val(), { cookie_lifetime, path: '/' });
			}
		});
		
		$(document).on('click touchend', '.wcag-cursors .wcag-cursor', function(event){
			if ($( this).is(":checked")) {
				$('body').attr('data-cursor', $(this).val());
				Cookies.set('data-cursor', $(this).val(), { cookie_lifetime, path: '/' });
			}
		});
		
		$(document).on('click touchend', '#wcag-disable-animations', function(event){
			if ($( this).is(":checked")) {
				$('body').attr('data-disable-animations', 'true');
				Cookies.set('data-disable-animations', 'true', { cookie_lifetime, path: '/' });
				} else {
				$('body').attr('data-disable-animations', 'false');
				Cookies.set('data-disable-animations', 'false', { cookie_lifetime, path: '/' });
			}
		})
		
		if (typeof Cookies.get('data-color') !== "undefined" && Cookies.get('data-color')) {
			$('body').attr('data-color', Cookies.get('data-color'));
		}
		
		if (typeof Cookies.get('data-zoom-level') !== "undefined" && Cookies.get('data-zoom-level')) {
			$('body').attr('data-zoom-level', Cookies.get('data-zoom-level'));
		}
		
		if (typeof Cookies.get('data-highlight-links') !== "undefined" && Cookies.get('data-highlight-links') && Cookies.get('data-highlight-links')=='true') {
			$('body').attr('data-highlight-links', 'true');
			$('#highlight-links').prop( 'checked', true );
		}
		
		if (typeof Cookies.get('data-highlight-headings') !== "undefined" && Cookies.get('data-highlight-headings') && Cookies.get('data-highlight-headings')=='true') {
			$('body').attr('data-highlight-headings', 'true');
			$('#highlight-headings').prop( 'checked', true );
		}
		
		if (typeof Cookies.get('data-font') !== "undefined" && Cookies.get('data-font')) {
			var font_selected=Cookies.get('data-font');
			$('body').attr('data-font', font_selected);
			
			$('.wcag-fonts input').each(function( ) {
				if ($(this).val()==font_selected) {
					$(this).prop( 'checked', true );
				}
				
			});
		}
		
		if (typeof Cookies.get('data-disable-animations') !== "undefined" && Cookies.get('data-disable-animations') && Cookies.get('data-disable-animations')=='true') {
			$('body').attr('data-disable-animations', 'true');
			$('#wcag-disable-animations').prop( 'checked', true );
		}
		
		if (typeof Cookies.get('data-cursor') !== "undefined" && Cookies.get('data-cursor')) {
			var cursor_selected=Cookies.get('data-cursor');
			$('body').attr('data-cursor', cursor_selected);
			
			$('.wcag-cursors .wcag-cursor').each(function( ) {
				if ($(this).val()==cursor_selected) {
					$(this).prop( 'checked', true );
				}
				
			});
		}
		
	});
	
}(jQuery));