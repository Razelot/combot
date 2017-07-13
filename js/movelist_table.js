var tbl = $("<table/>").attr("id","movelist-table");

$("#movelist").append(tbl);


var th1 = "<th>Command</th>";
var th2 = "<th>Damage</th>";
var th3 = "<th>Block frame</th>";


var reformat = function(command){
  //return command
  var re = new RegExp(',', 'g');
  return command.replace(re, '');
}


$("#movelist-table").append("<thead><tr>"+th1+th2+th3+"</tr></thead>");

$("#movelist-table").append("<tbody>");

for(var i=0;i<_MOVELIST.length;i++)
{
  var td1 = "<td>"+reformat(_MOVELIST[i]["Command"])+"</td>";
  var td2 = "<td>"+_MOVELIST[i]["Damage"]+"</td>";
  var td3 = "<td>"+_MOVELIST[i]["Block frame"]+"</td>";

  $("#movelist-table").append("<tr>"+td1+td2+td3+"</tr>");
}

$("#movelist-table").append("</tbody>")


var table = $('#movelist-table').DataTable({
  "bSort" : false,
  "paging": false,
  "info": false,
  "dom": 'lrtp'
});

function regex_escape(str) {
  return str.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&');
}

// $('#cmd-filter').keyup(function(){
//   table.column(0).search($(this).val().trim(), true, false).draw();
// });
