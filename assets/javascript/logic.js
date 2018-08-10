function cartIconHover() {
    var cartIcon = document.getElementById("cart-icon");
    var cartCounter = document.getElementById("cart-counter-icon");
    cartIcon.classList.toggle("cart-icon-hover");
    cartCounter.classList.toggle("cart-icon-hover");
}
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

function positionHeader() {
	var offset 	= window.pageYOffset;
	var header = document.getElementById("header");
	var spacer = document.getElementById("spacer");
	var menu = document.getElementById("menu-container");
	var counter = document.getElementById("cart-counter-link");
	var rem = window.document.documentElement.style.fontSize;
	var rem = rem.replace("px", "");
	var x = 3 * rem;
	var trigger = header.offsetHeight - menu.offsetHeight + 1;
	var spacerHeight = x + trigger - (.5 * rem);
	if (offset >= trigger) {
		header.style.position = "fixed";
		header.style.marginTop = "-" + trigger + "px";
		spacer.style.height = spacerHeight + "px";
		menu.style.padding = "0 5%";
		counter.style.display = "inline-block";
	} else {
		header.style.position = "inherit";
		header.style.marginTop = "0";
		spacer.style.height = "0";
		menu.style.padding = "0";
		counter.style.display = "none";
	}
}
 function stopScroll() {
	var pageWidth = window.innerWidth;
	if (pageWidth > 768) {
		positionHeader();
	} 
}

//////////////////////////////////////////////////////////////////////////////////////////////
//// THIS FUNCTION SETS THE VALUE OF REM BASED ON THE USER'S SCREEN SIZE AND ASPECT RATIO ////
//////////////////////////////////////////////////////////////////////////////////////////////
//// min sets minimum REM size in px /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

function scaleRootSize(min) {
	var vw = window.outerWidth/100;
	var vh = window.outerHeight/100;
	var pageWidth = window.outerWidth;
	var pageHeight = window.outerHeight;
	var aspectRatio = getAspectRatio();
	console.log(aspectRatio);
	if (pageWidth > pageHeight && vw > min) {
		window.document.documentElement.style.fontSize = vw + "px";
	} else if (vh + aspectRatio > min) {
		window.document.documentElement.style.fontSize = vh + aspectRatio + "px";
	} else {
		window.document.documentElement.style.fontSize = min + "px";
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////
////// THIS FUNCTION RETURNS THE ASPECT RATIO OF THE USER'S DEVICE ///////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

function getAspectRatio() {
	var pageWidth = window.outerWidth;
	var pageHeight = window.outerHeight;
    if (pageWidth > pageHeight) {
    	var aspectRatio = pageWidth/pageHeight;
    } else if (pageHeight > pageWidth){
    	var aspectRatio = pageHeight/pageWidth;
    } else {
    	var aspectRatio = 1;
    }
    var aspectRatio = Math.round((aspectRatio + 0.00001)*100)/100;
    return aspectRatio;
}

//////////////////////////////////////////////////////////////////////////////////////////////
////// THIS FUNCTION RETURNS THE ASPECT RATIO OF THE USER'S DEVICE ///////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
function navLinkDisplay() {
	var navLink = document.getElementsByClassName("nav-link");
	var pageWidth = window.innerWidth;
	var linkCount = navLink.length;
	var lastInArray = linkCount - 1;
	if (pageWidth > 768) {
		navLink[lastInArray].style.display = "none";
	} else {
		navLink[lastInArray].style.display = "block";
		navLink[lastInArray].style.borderBottom = "none";
	}
	
}

function toggleAccordion() {
	var accordion = document.getElementsByClassName("accordion");
	for (i = 0; i < accordion.length; i++) {
	  	accordion[i].addEventListener("click", function() {
		    this.classList.toggle("open");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		     	panel.style.maxHeight = null;
		    } 
		    openAccordionPanels();
		});
	};
}

function openAccordionPanels() {
	var openAccordions = document.getElementsByClassName("open");
	for (i = 0; i < openAccordions.length; i++) {
		var openPanel = openAccordions[i].nextElementSibling;
		openPanel.style.maxHeight = openPanel.scrollHeight + "px";
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////

function openCart() {
	var cart = document.getElementById("cart-container");
	var pageWidth = window.innerWidth;
	document.body.style.overflowY = "hidden";
	if (pageWidth > 768) {
		cart.style.width = "50%";
	} else {
		cart.style.width = "100%";
	}
}

function toggleCart() {
	var cart = document.getElementById("cart-container");
	var pageWidth = window.innerWidth;
	document.body.style.overflowY = "scroll";
	cart.style.transition = "all 250ms linear";
	if (cart.style.width == "" || cart.style.width == "0px") {
		openCart();
	} else {
		cart.style.width = "0px";
	}
}

function resizeCart() {
	var cart = document.getElementById("cart-container");
	var pageWidth = window.innerWidth;
	document.body.style.overflowY = "scroll";
	cart.style.transition = "all 0ms linear";
	if (cart.style.width !== "" && cart.style.width !== "0px") {
		openCart();
	} 
}

function openNav() {
	var menu = document.getElementById("menu-container");
	var pageWidth = window.innerWidth;
	if (pageWidth > 768) {
		menu.style.width = "90%";
		document.body.style.overflowY = "scroll";
    } else {
    	menu.style.width = "100%";
    	document.body.style.overflowY = "hidden";
    }
}

function toggleNav() {
	var menu = document.getElementById("menu-container");
	var pageWidth = window.innerWidth;
	menu.style.transition = "all 250ms linear";
	if (menu.style.width == "" || menu.style.width == "0px") {
		openNav();
	} else {
		menu.style.width = "0px";
		document.body.style.overflowY = "scroll";
	}
}

function resizeNav(navWidth) {
	var menu = document.getElementById("menu-container");
	var pageWidth = window.innerWidth;
	menu.style.transition = "all 0ms linear";
	menu.style.padding = "0";
	if ((pageWidth <= 768 && menu.style.width == "") || (pageWidth <= 768 && menu.style.width == "90%")) {
		menu.style.width = "0px";
		document.body.style.overflowY = "scroll";
	} else if (menu.style.width == "0px" && pageWidth <= 768) {
		menu.style.width = "0px";
		document.body.style.overflowY = "scroll";
	} else {
		openNav();
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////
////// EVENT LISTENERS////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("load", function() {
    scaleRootSize(8);
    toggleAccordion();
    navLinkDisplay();
});

window.addEventListener("scroll", function() {
	stopScroll();
});

window.addEventListener("resize", function() {
    scaleRootSize(8);
    resizeNav();
    resizeCart();
    openAccordionPanels();
    navLinkDisplay();
});



