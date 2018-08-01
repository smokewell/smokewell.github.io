//////////////////////////////////////////////////////////////////////////////////////////////
//// THIS FUNCTION SETS THE VALUE OF REM BASED ON THE USER'S SCREEN SIZE AND ASPECT RATIO ////
//////////////////////////////////////////////////////////////////////////////////////////////
//// min sets minimum REM size in px /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

function scaleRootSize(min) {
	var vw = window.innerWidth/100;
	var vh = window.innerHeight/100;
	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;
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
	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;
    if (pageWidth > pageHeight) {
    	var aspectRatio = pageWidth/pageHeight;
    } else if (pageHeight > pageWidth){
    	var aspectRatio = pageHeight/pageWidth;
    } else {
    	var aspectRatio = 1;
    }
    return aspectRatio;
}

//////////////////////////////////////////////////////////////////////////////////////////////

function openCart() {
	var cart = document.getElementById("cart-container");
	var pageWidth = window.innerWidth;
	if (pageWidth > 768) {
		cart.style.width = "50%";
	} else {
		cart.style.width = "100%";
	}
}

function toggleCart() {
	var cart = document.getElementById("cart-container");
	var pageWidth = window.innerWidth;
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
    } else {
    	menu.style.width = "100%";
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
	}
}

function resizeNav(navWidth) {
	var menu = document.getElementById("menu-container");
	var pageWidth = window.innerWidth;
	menu.style.transition = "all 0ms linear";
	if (menu.style.width == "" || (pageWidth <= 768 && menu.style.width == "90%")) {
		menu.style.width = "0px";
	} else if (menu.style.width == "0px" && pageWidth <= 768) {
		menu.style.width = "0px";
	} else {
		openNav();
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////
////// EVENT LISTENERS////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("load", function() {
    scaleRootSize(8);
});

window.addEventListener("resize", function() {
    scaleRootSize(8);
    resizeNav();
    resizeCart()
});



