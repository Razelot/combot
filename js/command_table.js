function command_format(command){
  //return command

  // remove commas
  var re = new RegExp(',', 'g');
  var cmd =  command.replace(re, '');

  // remove '+'' symbol from initial stance
  // TODO
  var stances = ["FC", "WS", "SS"];
  re = new RegExp("(FC\\+|WS\\+|SS\\+)", 'g');

  return cmd
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
  // return "^" + escaped + "(\\s|$|\\*)"; // query from begining of string
  return escaped + "(\\s|$|\\*)";

}


function generate_menu() {
  // Side menu links
  for(var character in _CMD_LIST){
    // var character = key;
    var li = $("<li/>");
    li.addClass("pure-menu-item");
    var a = document.createElement("a");
    a.classList.add("pure-menu-link");
    a.innerHTML = character;
    a.href = "?character=" + character;
    li.append(a);
    $("#char-menu").append(li);
  }

}

function generate_table(char) {
  var th1 = "<th>Command</th>";
  var th2 = "<th>Damage</th>";
  var th3 = "<th>Block frame</th>";

  $("#cmd-table").find("thead").append("<tr>"+th1+th2+th3+"</tr>");

  for(var i=0;i<_CMD_LIST[char].length;i++)
  {
    var td1 = "<td>"+ command_format(_CMD_LIST[char][i]["Command"]) +"</td>";
    var td2 = "<td>"+_CMD_LIST[char][i]["Damage"]+"</td>";
    var td3 = "<td>"+_CMD_LIST[char][i]["Block frame"]+"</td>";

    $("#cmd-table").find("tbody").append("<tr>"+td1+td2+td3+"</tr>");
  }

  cmd_table = $('#cmd-table').DataTable({
    "bSort" : false,
    "paging": false,
    "info": false,
    "dom": 'lrtp'
  });

  // Search by directly typing to the input box
  $('#cmd-filter').keyup(function(){
    cmd_table.column(0).search(regex_format($(this).val().trim()), true, false).draw();
  });
}
