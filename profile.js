	const readline = require('readline')
	const fs = require('fs')
	const app = 'Writecomrade'

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
});
	
	rl.question('username: ', (name) => {
	rl.question('password: ', (password) => {

	let tag = Math.floor((Math.random() * 999) + 1)
	let filename = './logins/' + name + '-' + tag + '.json' 

	fs.exists('./logins/' + name + '-' + tag + '.json', (exists) => {

		if (exists) {
		console.error(name + ' is taken. try again.'); return; }

		const user = name + '-' + tag
		fs.writeFileSync(filename, '{ "name": "' + user + '", "password": "' + password + '"}', fs.write);
		console.log('===============\nuser: ' + user + '\npassword: ' + password);
		fs.mkdir('./notes/' + user, function (err) {
    		if (err) {
		console.log('failed to create directory in ./notes/', err);

	rl.close();
}
});
});
});
});
