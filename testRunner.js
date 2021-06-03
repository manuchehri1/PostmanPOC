function testRunner(collection, callback) {
    const reportOutput = path.join(reportsDirectory, collection.name + '.html');
    //call newman.run to pass `options` object and wait for callback
    getIterationData(collection);
    newman.run({
       collection: require(collection.filePath),
       environment: configData,
       reporters: ['cli', 'htmlextra'],
       reporter: { htmextra: { export: reportOutput } }
    }, function (err, summary) {
      if (err) {
        throw err;
    }
     console.log('collection run complete!');
     callback(summary);
  });
};