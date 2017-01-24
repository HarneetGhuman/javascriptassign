var fs = require('fs');
var json;
fs.readFile('merge1.csv', 'utf8', function(err, contents) {
    //console.log(contents);
    var lines=contents.split("\r\n");
    var result = [];
    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");
	  for(var j=0;j<headers.length;j++)
	  {
	  	if((headers[j] === "Age-group") || (headers[j] === "Literate - Persons") || (headers[j] === "Total/ Rural/ Urban"))
	  	{
		  obj[headers[j]] = currentline[j];
	  	}
	  	
	  }
	  result.push(obj);
  }
    	var totalOnly=result.filter(function(item)
  	{
  		return item["Total/ Rural/ Urban"] == "Total" && item["Age-group"] !="All ages";
  	});
    	//console.log(totalOnly);

  	var finalRequiredArray = totalOnly.map(function(item)
  	{
  		return{
  			Age_group:item["Age-group"],
  			Literate_Persons:item["Literate - Persons"]
  		};
  	});
  	//console.log(finalRequiredArray);

  function groupBy(array,ageGrpCol,value)
  {
  	var finalArray=[];
  	var newObj={};
  	array.forEach(function(argPass)
  	{
  		if(!newObj[argPass[ageGrpCol]])
  		{
  			newObj[argPass[ageGrpCol]]={};
  			newObj[argPass[ageGrpCol]][ageGrpCol]=argPass[ageGrpCol];
  			newObj[argPass[ageGrpCol]][value]=0;
  			finalArray.push(newObj[argPass[ageGrpCol]]);
  		}
  		newObj[argPass[ageGrpCol]][value] +=+argPass[value];
  	});
	  		return finalArray;
  };

var temp=groupBy(finalRequiredArray,'Age_group','Literate_Persons');
//temp.pop();
//temp.pop();
 // console.log(result);
 console.log(temp);
  //console.log( JSON.stringify(result));
  json=JSON.stringify(temp);
 fs.writeFile('agewise-literate.json', json, function (err) {
  if (err) return console.log(err);
  console.log('success');
});

});
console.log('after calling readFile');

