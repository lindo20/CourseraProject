const names = ['Yaakov','John','jen','jason','Paul','Frank','Larry','Paula','Laura','jim'];

names.forEach(name => {
	if(name.startswith('j')|| name.startswith('J')){
		console.log('Goodbye, ${name}!');
	}
	else{
		console.log('Goodmorning, ${name}!');
	}
});