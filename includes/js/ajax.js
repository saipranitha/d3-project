
function addAllColumnHeaders(myList) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
      var rowHash = myList[i];
      for (var key in rowHash) {
          if ($.inArray(key, columnSet) == -1) {
              columnSet.push(key);
              headerTr$.append($('<th/>').html(key));
          }
      }
  }
  $("#jsonTable").append(headerTr$);

  return columnSet;
}

$.getJSON("jsonfiles/requirement1.json", function (data) {
  var columns = addAllColumnHeaders(data);

  for (var i = 0; i < data.length; i++) {
      var row$ = $('<tr/>');
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
          var cellValue = data[i][columns[colIndex]];

          if (cellValue == null) { cellValue = ""; }

          row$.append($('<td/>').html(cellValue));
      }
      $("#jsonTable").append(row$);
  }
});
