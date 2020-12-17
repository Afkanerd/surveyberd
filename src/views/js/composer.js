// Composer JS

var input_question_id = document.getElementById("input_question_id");
var input_question_text = document.getElementById("input_question_text");
var select_response_type = document.getElementById("select_response_type");
var response_value_label = document.getElementById("response_value_label");
var response_value = document.getElementById("response_value");
var btn_add_response = document.getElementById("btn_add_response");
var blk_question_container = document.getElementById("blk_question_container");
var blk_responses_container = document.getElementById("blk_responses_container");
var question_save_button = document.getElementById("question_save_button");

btn_add_response.addEventListener("click", () => {
  console.log(`
   ${input_question_id.value} \n
   ${input_question_text.value} \n
   ${select_response_type.value} \n
   `);

  // use this to toggle selected question type
  switch (select_response_type.value) {
    case "MCQ":
      create_response_fields();
      break;
    case "multiple":
      // handle
      break;

    case "numeric":
      //handle
      break;
    case "short_text":
      //handle
      break;
    case "long_text":
      //handle
      break;

    default:
      //handle
  }
});

// ToDo : add handler functions

function create_response_fields() {

  var rs_row = document.createElement("div");
  rs_row.className = "form-row mb-3";
  rs_row.id = "rs_row";

  var col_1 = document.createElement("div");
  col_1.className = "col-12 col-md-4 mb-3";

  var rs_value_label_input = document.createElement("input");
  rs_value_label_input.className = "form-control";
  rs_value_label_input.setAttribute("type", "text");
  rs_value_label_input.setAttribute("placeholder", "value label");
  rs_value_label_input.id = "response_value_label";

  col_1.appendChild(rs_value_label_input);
  rs_row.appendChild(col_1);

  var col_2 = document.createElement("div");
  col_2.className = "col-12 col-md-4 mb-3";

  var rs_value_input = document.createElement("input");
  rs_value_input.className = "form-control";
  rs_value_input.setAttribute("type", "text");
  rs_value_input.setAttribute("placeholder", "value");
  rs_value_input.id = "response_value";

  col_2.appendChild(rs_value_input);
  rs_row.appendChild(col_2);

  var col_3 = document.createElement("div");
  col_3.className = "col-12 col-md-4 d-flex d-md-block justify-content-between";

  var save_btn = document.createElement("button");
  save_btn.className = "btn btn-outline-primary";
  save_btn.id = rs_row.id;
  save_btn.textContent = " save";

  var save_icon = document.createElement("i");
  save_icon.className = "las la-save";

  save_btn.prepend(save_icon);

  var remove_btn = document.createElement("button");
  remove_btn.className = "btn btn-outline-danger mx-md-2";
  remove_btn.textContent = " remove";

  var remove_icon = document.createElement("i");
  remove_icon.className = "las la-minus-circle";

  remove_btn.prepend(remove_icon);

  col_3.appendChild(save_btn);
  col_3.appendChild(remove_btn);

  rs_row.appendChild(col_3);




  var response_template = `
                        <div class="form-row mb-3">
                        <div class="col-12 col-md-4 mb-3">
                            <input type="text" class="form-control" placeholder="Value label" id="response_value_label">
                        </div>
                        <div class="col-12 col-md-4 mb-3">
                            <input type="text" class="form-control" placeholder="value" id="response_value">
                        </div>
                        <div class="col-12 col-md-4 d-flex d-md-block justify-content-between">
                            <button class="btn btn-outline-primary"><i class="las la-save"></i>save</button>
                            <button class="btn btn-outline-danger"><i class="las la-minus-circle"></i> remove</button>
                        </div>
                    </div> `;

  blk_responses_container.classList.remove("d-none");
  blk_responses_container.appendChild(rs_row);
};