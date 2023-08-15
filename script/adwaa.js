/*FRIEND CONNECT*/

/*  www.elahmad.com*/
var initialsubj="السلام عليكم"
var initialmsg="مرحبا:\n .... أثناء تجولي في الانترنت وجدت هذا الموقع و أتمنى أن ينال اعجابك ....... تحياتي لك: "+window.location
var good;
function checkEmailAddress(field) {

var goodEmail = field.value.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.edu)|(\.mil)|(\.gov)|(\.org)|(\.info)|(\.sex)|(\.biz)|(\.aero)|(\.coop)|(\.museum)|(\.name)|(\.pro)|(\..{2,2}))$)\b/gi);
if (goodEmail) {
good = true;
}
else {
alert("يرجى أدخال بريد الكتروني صحيح");
field.focus();
field.select();
good = false;}}
u = window.location;
function mailThisUrl() {
good = false
checkEmailAddress(document.eMailer.email);
if (good) {
window.location = "mailto:"+document.eMailer.email.value+"?subject="
+initialsubj+"&body="+initialmsg}}
/*FRIEND CONNECT*/


/*TIME */
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("divTime").innerHTML ="الوقت |  "+
        s + " : " + m + " : " + h ;
    var t = setTimeout(startTime, 500);}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;}
/*TIME */
