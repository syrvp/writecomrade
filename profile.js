	const readline = require('readline')
	const fs = require('fs')
	const app = 'Writecomrade'

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
});
	
	rl.question('username: ', (name) => {
	rl.question('password: ', (password) => {

	let filename = './logins/' + name + '.json' 

	fs.exists('./logins/' + name + '.json', (exists) => {

		if (exists) {
		console.error(name + ' is taken. try again.'); return; }

		fs.writeFileSync(filename, '{ "name": "' + name + '", "password": "' + password + '"}', fs.write);
		console.log('===============\nuser: ' + name + '\npassword: ' + password);
		fs.mkdir('./notes/' + user, function (err) {
    		if (err) {
		console.log('failed to create directory in ./notes/', err);

	rl.close();
}
});
});
});
});
