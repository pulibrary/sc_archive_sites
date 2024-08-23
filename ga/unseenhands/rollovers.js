// JavaScript Document
<!--
//browser type variables
var DOM = document.getElementById?1:0;
var NS = document.layers?1:0;
var IE = document.all?1:0;
var OK = DOM||NS||IE?1:0;


function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


//Window object that allows display customizations.
function CustomizableWindow() {
	this.url = "";
	this.name = "";
	this.toolbar = false;
	this.location = false;
	this.directories = false;
	this.status = false;
	this.menubar = false;
	this.scrollbars = false;
	this.resizable = false;
	this.centered = true;
	this.x = 0;
	this.y = 0;
	this.width = 200;
	this.height = 200;
	this.open = winOpen;
}

//Window object method to open new window.
function winOpen() {
	var winX, winY;
	if (this.centered) {
		if (IE) {
			winX = parseInt(document.body.clientWidth / 2 + window.screenLeft - this.width / 2);
			winY = parseInt(document.body.clientHeight / 2 + window.screenTop - this.height / 2);
		}
		else if (DOM || NS) {
			winX = parseInt(window.outerWidth / 2 + window.screenX - this.width / 2);
			winY = parseInt(window.outerHeight / 2 + window.screenY - this.height / 2);
		}
		else {
			winX = 750;
			winY = 600;
		}
	}
	else {
		winX = win.x;
		winY = win.y;
	}
	
	var winStyle = "toolbar=";
	winStyle += this.toolbar?"yes":"no";
	winStyle += ",location=";
	winStyle += this.location?"yes":"no";
	winStyle += ",directories=";
	winStyle += this.directories?"yes":"no";
	winStyle += ",status=";
	winStyle += this.status?"yes":"no";
	winStyle += ",menubar=";
	winStyle += this.menubar?"yes":"no";
	winStyle += ",scrollbars=";
	winStyle += this.scrollbars?"yes":"no";
	winStyle += ",resizable=";
	winStyle += this.resizable?"yes":"no";
	winStyle += ",width=" + this.width + ",height=" + this.height + ",left=" + winX + ",top=" + winY;
	
	return window.open(this.url, this.name, winStyle);
}


var win = new CustomizableWindow();
    win.name = "image"
    win.scrollbars = true;
	win.resizable = true;
    win.width = 750;
    win.height = 600;

function openwin(url) {
    win.url = url;
    win.open();
}

//-->