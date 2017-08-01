// Key mapping
var STK_u = "w";
var STK_d = "s";
var STK_b = "a";
var STK_f = "d";

var BTN_1 = "y";
var BTN_2 = "u";
var BTN_3 = "h";
var BTN_4 = "j";

function set_stk(stk) {
  cur_stk = stk;
  $("#msg-stk").html(cur_stk);
  reg_stk_input = true;
}

function set_btn(btn) {
  cur_btn = btn;
  if(btn != ""){
    $("#msg-btn").html(cur_btn);
  } else {
    $("#msg-btn").html("");
  }
}

function input_reset() {
  set_stk("n");
  set_btn("");
  cmd_query = "";
  reg_stk_input = true; // prevent directional input after a button press

  $("#cmd-history").empty();
  $("#cmd-filter").val(cmd_query);

  $("#cmd-filter").val("");
  cmd_table.column(0).search(regex_format(cmd_query.trim()), true, false).draw();
}

function input_stk() {
  if(cur_stk != "n" && reg_stk_input && cur_btn == ""){
    cmd_query = cmd_query + cur_stk + " ";
    $("#cmd-filter").val(cmd_query);

    var stk_icon = document.createElement("img");
    stk_icon.classList.add("input-icon");
    stk_icon.style.marginRight = "8px";
    stk_icon.src = "img/" + _ICON[cur_stk];

    $("#cmd-history").append(stk_icon);
    cmd_table.column(0).search(regex_format(cmd_query.trim()), true, false).draw();
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
    $("#cmd-history").append(stk_icon);
    reg_stk_input = false;
  }
  $("#cmd-history").append(btn_icon);
  $("#cmd-filter").val(cmd_query);

  cmd_table.column(0).search(regex_format(cmd_query.trim()), true, false).draw();
}

function set_listener() {
  listener = new window.keypress.Listener();
  $('input[type=text]')
    .bind("focus", function() { listener.stop_listening(); })
    .bind("blur", function() { listener.listen(); });

  // Stick inputs
  listener.register_many([
    {
      "keys"          : [STK_u],
      "prevent_repeat": true,
      "is_exclusive"  : true,
      "on_keydown"    : function() {
        set_stk("u");
      },
      "on_release"      : function(e) {
        input_stk();
        set_stk("n");
      }
    },
    {
      "keys"          : [STK_u, STK_f],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_stk("u/f");
      },
      "on_release"      : function(e) {
        input_stk();
        set_stk("n");
      }
    },
    {
      "keys"          : [STK_f],
      "prevent_repeat": true,
      "is_exclusive"  : true,
      "on_keydown"    : function() {
        set_stk("f");
      },
      "on_release"      : function(e) {
        input_stk();
        set_stk("n");
      }
    },
    {
      "keys"          : [STK_d, STK_f],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_stk("d/f");
      },
      "on_release"      : function(e) {
        input_stk();
        set_stk("n");
      }
    },
    {
      "keys"          : [STK_d],
      "prevent_repeat": true,
      "is_exclusive"  : true,
      "on_keydown"    : function() {
        set_stk("d");
      },
      "on_release"      : function(e) {
        input_stk();
        set_stk("n");
      }
    },
    {
      "keys"          : [STK_d, STK_b],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_stk("d/b");
      },
      "on_release"      : function(e) {
        input_stk();
        set_stk("n");
      }
    },
    {
      "keys"          : [STK_b],
      "prevent_repeat": true,
      "is_exclusive"  : true,
      "on_keydown"    : function() {
        set_stk("b");
      },
      "on_release"      : function(e) {
        input_stk();
        set_stk("n");
      }
    },
    {
      "keys"          : [STK_u, STK_b],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_stk("u/b");
      },
      "on_release"      : function(e) {
        input_stk();
        set_stk("n");
      }
    }
  ]);

  // Button inputs
  listener.register_many([
    {
      "keys"          : [BTN_1],
      "prevent_repeat": true,
      "is_exclusive"  : true,
      "on_keydown"    : function() {
        set_btn("1");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_2],
      "prevent_repeat": true,
      "is_exclusive"  : true,
      "on_keydown"    : function() {
        set_btn("2");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_3],
      "prevent_repeat": true,
      "is_exclusive"  : true,
      "on_keydown"    : function() {
        set_btn("3");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_4],
      "prevent_repeat": true,
      "is_exclusive"  : true,
      "on_keydown"    : function() {
        set_btn("4");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_1, BTN_2],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("1+2");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_1, BTN_3],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("1+3");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_1, BTN_4],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("1+4");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_2, BTN_3],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("2+3");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_2, BTN_4],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("2+4");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_3, BTN_4],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("3+4");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_1, BTN_2, BTN_3],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("1+2+3");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_1, BTN_2, BTN_4],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("1+2+4");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_1, BTN_3, BTN_4],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("1+3+4");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_2, BTN_3, BTN_4],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("2+3+4");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    },
    {
      "keys"          : [BTN_1, BTN_2, BTN_3, BTN_4],
      "prevent_repeat": true,
      "is_unordered"  : true,
      "is_exclusive"  : true,
      "is_sequence"  : true,
      "on_keydown"    : function() {
        set_btn("1+2+3+4");
      },
      "on_release"      : function(e) {
        input_btn();
        set_btn("");
      }
    }
  ]);

  // Other inputs
  listener.simple_combo("r", function() {
    input_reset();
  });

}
