//1.Get current time and find(morning,afternoon,or night)
	
	var a=new Date();
	var hour=a.getHours();
	

	if(hour<=12 && 6<=hour){
	document.write('Morning');
	}
	else if(hour<=18 && 12<hour){
	document.write('afternoon');
	}
	else{
		document.write('night');
	}