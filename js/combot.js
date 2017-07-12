var listener = new window.keypress.Listener();

var msg_stk = document.getElementById("msg_stk");
var msg_btn = document.getElementById("msg_btn");

var cmd_history = document.getElementById("cmd_history");

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


// Command input icon filename
var icon_filename = {};
icon_filename["u"] = "stick_u.png";
icon_filename["u/f"] = "stick_uf.png";
icon_filename["f"] = "stick_f.png";
icon_filename["d/f"] = "stick_df.png";
icon_filename["d"] = "stick_d.png";
icon_filename["d/b"] = "stick_db.png";
icon_filename["b"] = "stick_b.png";
icon_filename["u/b"] = "stick_ub.png";

var set_stk = function(stk) {
  cur_stk = stk;
  msg_stk.innerHTML = cur_stk;
  reg_stk_input = true;
}

var set_btn = function(btn) {
  cur_btn = btn;
  if(btn != ""){
    msg_btn.innerHTML = cur_btn;
  } else {
    msg_btn.innerHTML = "&nbsp;";
  }
}

var input_stk = function() {
  if(cur_stk != "n" && reg_stk_input && cur_btn == ""){
    // cmd_history.innerHTML = cmd_history.innerHTML + cur_stk + " ";
    var icon = document.createElement("img");
    icon.classList.add("input-icon");
    icon.src = "img/" + icon_filename[cur_stk];
    cmd_history.appendChild(icon);
  }
}

var input_btn = function(btn) {
  if(cur_stk == "n"){
    // cmd_history.innerHTML = cmd_history.innerHTML + cur_btn + " ";
  } else {
    // cmd_history.innerHTML = cmd_history.innerHTML + cur_stk+"+"+cur_btn + " ";
    reg_stk_input = false;
  }
}

var reset = function() {
  set_stk("n");
  set_btn("");
  cmd_history.innerHTML = "&nbsp;";
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
