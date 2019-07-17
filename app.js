	const readline = require('readline')
	const fs = require('fs')
	let app = 'Writecomrade'

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
});

	console.log('Welcome to ' + app + '\n=======================');

	rl.question('user: ', (user) => {

		const userfile = require('./logins/' + user + '.json')
		fs.openSync('./logins/' + user + '.json', console.log('✅')); 

	rl.question('password: ', (password) => {

		if (password === userfile.password === false) { console.log('❎'); return; }
		if (password === userfile.password) { console.log('✅') 

	rl.question('filename: ', (filename) => {

		const fln = './notes/' + filename

	fs.exists(fln, (exists) => {

		if (exists) {
		console.error('❎ ' + filename + ' is used. try again.\n\nuse `ctrl+c` to exit'); return; }
		else console.log('✅');

	rl.question('input: ', (input) => {

		fs.writeFileSync(fln, input + '\n\n\n[' + user + ' on ' + app +']', fs.write)
		console.log('✅');
	rl.close();
});
});
});
}
}); 
});
