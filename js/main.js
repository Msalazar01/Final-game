function avancerRight()
{
	var horse=document.getElementById("horse");
	x=horse.style.left;
	
		horse.className="character";
		horse.style.left=parseInt(x)+10+"px";

	return false;
}

function avancerLeft()
{
	console.log("dedede");
	var horse=document.getElementById("batman");
	x=horse.style.left;
	
		horse.className="character";
		horse.style.left=parseInt(x)-10+"px";

	return false;
}