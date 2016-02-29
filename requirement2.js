var fs = require('fs');
var result2 = [];
    //file = ['csvfiles/India2011.csv', 'csvfiles/IndiaSC2011.csv', 'csvfiles/IndiaST2011.csv'];

//  for (var i = 0, fileLength = file.length;i< fileLength; i++) {
function example(files){
    var data = fs.readFileSync(files,'utf8');
    var lines = data.split("\n");
      for (var j=0, lenLDG = lines.length;j < lenLDG; j++) {
        var temp = lines[j].split(",");
        if(temp[4] === 'Total' && temp[5] === 'All ages') {
          var obj = {};
          var sCode = parseInt(temp[1])-1;

          obj.state = temp[3];
          obj.Males = temp[40];
          obj.Females = temp[41];

          if (!(result2[sCode])){
           result2[sCode] = obj;

         }

        else{
          result2[sCode].Males = parseInt(result2[sCode].Males)+parseInt(obj.Males);
          result2[sCode].Females = parseInt(result2[sCode].Females)+parseInt(obj.Females);
        }

        }
    } //console.log(obj);
  }
  example('csvfiles/India2011.csv');
  example('csvfiles/IndiaSC2011.csv');
  example('csvfiles/IndiaST2011.csv');

  fs.writeFile("jsonfiles/requirement2.json", JSON.stringify(result2, null, 4), function(err) {
   if(err) {
     console.log(err);
   } else {
     console.log("JSON saved ");
   }
  });
