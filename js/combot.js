var listener = new window.keypress.Listener();

var msg_stk = document.getElementById("msg-stk");
var msg_btn = document.getElementById("msg-btn");

var cmd_history = document.getElementById("cmd-history");
var cmd_filter = document.getElementById("cmd-filter");
var cmd_query = "";

// Stick and Button mapping
var stk_u = "w";
var stk_d = "s";
var stk_b = "a";
var stk_f = "d";

var btn_1 = "y";
var btn_2 = "u";
var btn_3 = "h";
var btn_4 = "j";

var cur_stk = "n";
var cur_btn = "";
var reg_stk_input = true; // prevent directional input after a button press





function set_stk(stk) {
  cur_stk = stk;
  msg_stk.innerHTML = cur_stk;
  reg_stk_input = true;
}

function set_btn(btn) {
  cur_btn = btn;
  if(btn != ""){
    msg_btn.innerHTML = cur_btn;
  } else {
    msg_btn.innerHTML = "&nbsp;";
  }
}

function input_stk() {
  if(cur_stk != "n" && reg_stk_input && cur_btn == ""){
    cmd_query = cmd_query + cur_stk + " ";
    cmd_filter.value = cmd_query;

    var stk_icon = document.createElement("img");
    stk_icon.classList.add("input-icon");
    stk_icon.style.marginRight = "8px";
    stk_icon.src = "img/" + _ICON[cur_stk];
    cmd_history.appendChild(stk_icon);


    table.column(0).search(regex_escape(cmd_query.trim()), true, false).draw();
  }
}

function input_btn() {
  if(cur_btn == "") {
    return
  }
  var btn_icon = document.createElement("img");
  btn_icon.classList.add("input-icon");
  btn_icon.style.marginRight = "8px";
  btn_icon.src = "img/" + _ICON[cur_btn];
  if(cur_stk == "n"){
    cmd_query = cmd_query + cur_btn + " ";
  } else {
    cmd_query = cmd_query + cur_stk+"+"+cur_btn + " ";
    var stk_icon = document.createElement("img");
    stk_icon.classList.add("input-icon");
    stk_icon.src = "img/" + _ICON[cur_stk];
    cmd_history.appendChild(stk_icon);
    reg_stk_input = false;
  }
  cmd_history.appendChild(btn_icon);

  cmd_filter.value = cmd_query;

  table.column(0).search(regex_escape(cmd_query.trim()), true, false).draw();
}

function reset() {
  set_stk("n");
  set_btn("");

  while (cmd_history.lastChild) {
    cmd_history.removeChild(cmd_history.lastChild);
  }
  cmd_query = "";
  cmd_filter.value = cmd_query;

  cmd_history.innerHTML = "&nbsp;"; // placeholder
  table.column(0).search(regex_escape(cmd_query.trim()), true, false).draw();

}

reset();

var stick = listener.register_many([
  {
    "keys"          : [stk_u],
    "prevent_repeat": true,
    "is_exclusive"  : true,
    "on_keydown"    : function() {
      set_stk("u");
    },
    "on_keyup"      : function(e) {
      input_stk();
      set_stk("n");
    }
  },
  {
    "keys"          : [stk_u, stk_f],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_stk("u/f");
    },
    "on_keyup"      : function(e) {
      input_stk();
      set_stk("n");
    }
  },
  {
    "keys"          : [stk_f],
    "prevent_repeat": true,
    "is_exclusive"  : true,
    "on_keydown"    : function() {
      set_stk("f");
    },
    "on_keyup"      : function(e) {
      input_stk();
      set_stk("n");
    }
  },
  {
    "keys"          : [stk_d, stk_f],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_stk("d/f");
    },
    "on_keyup"      : function(e) {
      input_stk();
      set_stk("n");
    }
  },
  {
    "keys"          : [stk_d],
    "prevent_repeat": true,
    "is_exclusive"  : true,
    "on_keydown"    : function() {
      set_stk("d");
    },
    "on_keyup"      : function(e) {
      input_stk();
      set_stk("n");
    }
  },
  {
    "keys"          : [stk_d, stk_b],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_stk("d/b");
    },
    "on_keyup"      : function(e) {
      input_stk();
      set_stk("n");
    }
  },
  {
    "keys"          : [stk_b],
    "prevent_repeat": true,
    "is_exclusive"  : true,
    "on_keydown"    : function() {
      set_stk("b");
    },
    "on_keyup"      : function(e) {
      input_stk();
      set_stk("n");
    }
  },
  {
    "keys"          : [stk_u, stk_b],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_stk("u/b");
    },
    "on_keyup"      : function(e) {
      input_stk();
      set_stk("n");
    }
  }
]);

var button = listener.register_many([
  {
    "keys"          : [btn_1],
    "prevent_repeat": true,
    "is_exclusive"  : true,
    "on_keydown"    : function() {
      set_btn("1");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_2],
    "prevent_repeat": true,
    "is_exclusive"  : true,
    "on_keydown"    : function() {
      set_btn("2");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_3],
    "prevent_repeat": true,
    "is_exclusive"  : true,
    "on_keydown"    : function() {
      set_btn("3");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_4],
    "prevent_repeat": true,
    "is_exclusive"  : true,
    "on_keydown"    : function() {
      set_btn("4");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_1, btn_2],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("1+2");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_1, btn_3],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("1+3");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_1, btn_4],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("1+4");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_2, btn_3],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("2+3");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_2, btn_4],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("2+4");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_3, btn_4],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("3+4");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_1, btn_2, btn_3],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("1+2+3");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_1, btn_2, btn_4],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("1+2+4");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_1, btn_3, btn_4],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("1+3+4");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_2, btn_3, btn_4],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("2+3+4");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  },
  {
    "keys"          : [btn_1, btn_2, btn_3, btn_4],
    "prevent_repeat": true,
    "is_unordered"  : true,
    "is_exclusive"  : true,
    "is_sequence"  : true,
    "on_keydown"    : function() {
      set_btn("1+2+3+4");
    },
    "on_keyup"      : function(e) {
      input_btn();
      set_btn("");
    }
  }
]);

// Clear inputs
listener.simple_combo("r", function() {
  reset();
});
