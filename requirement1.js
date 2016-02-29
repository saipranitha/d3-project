var fs=require('fs');
// var files=[];
 var data1='csvfiles/India2011.csv';
 var data2='csvfiles/IndiaSC2011.csv';
 var data3='csvfiles/IndiaST2011.csv';

var result={};
var literatepopulation={};
var agewiseLiterates = {};
//for(var i in files ){
function necessary(files){
  fs.readFileSync(files,'utf8').toString().split("\n").forEach(function(lineContent){
      var rowDataArray = lineContent.split(",");

      if(rowDataArray[4] == "Total"){
        if (agewiseLiterates[rowDataArray[5]]){
              agewiseLiterates[rowDataArray[5]] = +agewiseLiterates[rowDataArray[5]] +  +rowDataArray[12];
        }else{
          agewiseLiterates[rowDataArray[5]] = +rowDataArray[12];
        }
        delete agewiseLiterates["undefined"];
        delete agewiseLiterates["Age-group"];
        delete agewiseLiterates["All ages"];
        }
});
}
 necessary(data1);
 necessary(data2);
 necessary(data3);

var keys = Object.keys(agewiseLiterates);
 var main = [];
for (var i = 0 , len=keys.length; i < len; i++) {
 var temp ={};
 temp["ageGroup"] = keys[i];
 temp["TotalLiteratePop"] =agewiseLiterates[keys[i]];
 main.push(temp);
}
for (var i=0;i<=main.length;i++){
  var array= main[i];
  if(array=! null){
  var dataarray= main.splice(i,1);
}console.log(dataarray);
}
fs.writeFile("jsonfiles/requirement.json", JSON.stringify(main, null, 4), function(err) {
 if(err) {
   console.log(err);
 } else {
   console.log("JSON saved ");
 }
});
