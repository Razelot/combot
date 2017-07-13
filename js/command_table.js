var tbl = $("<table/>").attr("id","cmd-table");

$("#cmd-list").append(tbl);


var th1 = "<th>Command</th>";
var th2 = "<th>Damage</th>";
var th3 = "<th>Block frame</th>";


function command_format(command){
  //return command

  // remove commas
  var re = new RegExp(',', 'g');
  var cmd =  command.replace(re, '');

  // remove '+'' symbol from initial stance
  // TODO
  var stances = ["FC", "WS", "SS"];
  re = new RegExp("(FC\\+|WS\\+|SS\\+)", 'g');
  
  return cmd.replace(re, '');
  //
  // for(){
  //
  // }
}

function regex_format(str) {
  // No filter
  if(str==""){
    return ".";
  }
  // Filter from beginning of string
  var escaped =  str.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&');
  return "^" + escaped + "(\\s|$|\\*)";
}


$("#cmd-table").append("<thead><tr>"+th1+th2+th3+"</tr></thead>");

$("#cmd-table").append("<tbody>");

for(var i=0;i<_CMD_LIST.length;i++)
{
  var td1 = "<td>"+ command_format(_CMD_LIST[i]["Command"]) +"</td>";
  var td2 = "<td>"+_CMD_LIST[i]["Damage"]+"</td>";
  var td3 = "<td>"+_CMD_LIST[i]["Block frame"]+"</td>";

  $("#cmd-table").append("<tr>"+td1+td2+td3+"</tr>");
}

$("#cmd-table").append("</tbody>")


var table = $('#cmd-table').DataTable({
  "bSort" : false,
  "paging": false,
  "info": false,
  "dom": 'lrtp'
});



// $('#cmd-filter').keyup(function(){
//   table.column(0).search($(this).val().trim(), true, false).draw();
// });
