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
	  	if((headers[j] === "Age-group") || (headers[j] === "Educational level - Graduate & above - Males") || (headers[j] === "Educational level - Graduate & above - Females") || (headers[j] === "Total/ Rural/ Urban") || (headers[j] === "Area Name"))
	  	{
		  obj[headers[j]] = currentline[j];
	  	}
	  	
	  }
	  result.push(obj);
  }
    	var filtered=result.filter(function(item)
  	{
  		return item["Total/ Rural/ Urban"] == "Total" && !(item["Age-group"] == "All ages"); 
  	});
    	//console.log(totalOnly);

  	var finalRequiredArray = filtered.map(function(item)
  	{
  		return{

        StateName:item["Area Name"],
        EducationMale:item["Educational level - Graduate & above - Males"],
        EducationFemale:item["Educational level - Graduate & above - Females"],
  		};
  	});
  	//console.log(finalRequiredArray);

  function groupBy(array,ageGrpCol,value1,value2)
  {
  	var finalArray=[];
  	var newObj={};
  	array.forEach(function(argPass)
  	{
  		if(!newObj[argPass[ageGrpCol]])
  		{
  			newObj[argPass[ageGrpCol]]={};
  			newObj[argPass[ageGrpCol]][ageGrpCol]=argPass[ageGrpCol];
  			newObj[argPass[ageGrpCol]][value1]=0;
        newObj[argPass[ageGrpCol]][value2]=0;
  			finalArray.push(newObj[argPass[ageGrpCol]]);
  		}
  		newObj[argPass[ageGrpCol]][value1] +=+argPass[value1];
      newObj[argPass[ageGrpCol]][value2] +=+argPass[value2];
  	});
	  		return finalArray;
  };

var temp=groupBy(finalRequiredArray,'StateName','EducationMale','EducationFemale');
//temp.pop();
//temp.pop();
 // console.log(result);
 console.log(temp);
  //console.log( JSON.stringify(result));
  json=JSON.stringify(temp);
 //fs.writeFile('graduateStateGender.json', json, function (err) {
  if (err) return console.log(err);
  console.log('success');
});

});
console.log('after calling readFile');

