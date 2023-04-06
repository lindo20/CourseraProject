const names = ['Yaakov','John','jen','jason','Paul','Frank','Larry','Paula','Laura','jim'];

names.forEach(name => {
	if(name.startsWith('j')|| name.startsWith('J')){
		console.log('Goodbye, ${name}!');
	}
	else{
		console.log('Goodmorning, ${name}!');
	}
});