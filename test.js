// const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
// newman.run({
//     collection: require('./GitHubJobAPI.postman_collection.json'),
//     reporters: 'htmlextra'
// }, function (err) {
// 	if (err) { throw err; }
//     console.log('collection run complete!');
// });

// newman.run({
//     collection: require('./sample-collection.json'),
//     environment: This is where you would specify configData that we set up earlier
//     iterationData: if any collections need a seperate iterationData file you can specify that here
//     folder: If there are any specific folders inside your collection you want to run,
//     globals: if there are any external global vars that your collection needs,
//     reporters: ['cli', 'junit'],
//     reporter: { junit: { export: reportOutput } }
// }, function (err, summary) {
//     if (err) {
//         throw err;
//     }
//     console.log('collection run complete!');
//     callback(summary);
// });

const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: [require('./GitHubJobAPI.postman_collection.json'),require('./ReqResAPI.postman_collection.json')], 
    reporters: 'cli',
    environment: ''
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});