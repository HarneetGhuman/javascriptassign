var fs=require('fs');

function ReadAppend(file,appendFile){
	fs.readFile(appendFile, 'utf8', function(err,data) {
		
	console.log("Readed");

	fs.appendFile(file, data, function(err){
		if(err) throw err;
		console.log("data appended to merge.csv");
	});
});

}
file='merge1.csv';
appendFile='IndiaST2011 (3).csv';
ReadAppend(file,appendFile);

appendFile='IndiaSC2011 (4).csv';
ReadAppend(file,appendFile);

appendFile='India2011 (5).csv';
ReadAppend(file,appendFile);