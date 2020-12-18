// Composer JS

var input_question_id = document.getElementById("input_question_id");
var input_question_text = document.getElementById("input_question_text");
var select_response_type = document.getElementById("select_response_type");
var response_value_label = document.getElementById("response_value_label");
var response_value = document.getElementById("response_value");
var btn_add_response = document.getElementById("btn_add_response");
var blk_question_container = document.getElementById("blk_question_container");
var blk_responses_container = document.getElementById("blk_responses_container");
var btn_save_question = document.getElementById("btn_save_question");

//counter for number of questions and responses
var rs_number = 0;
var qs_number = 0;

// variable contains all questions

var questions = [];

btn_add_response.onclick = () => {
  console.log(`
   ${input_question_id.value} \n
   ${input_question_text.value} \n
   ${select_response_type.value} \n
   `);

  rs_number += 1;
  blk_responses_container.classList.remove("d-none");

  // use this to toggle selected question type
  switch (select_response_type.value) {
    case "MCQ":
      let rs = new Create_response_fields(rs_number);
      blk_responses_container.appendChild(rs.rs_row);
      // console.log(rs);
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
};

function Create_response_fields(rs_number) {

  this.rs_row = document.createElement("div");
  this.rs_row.className = "form-row mb-3";
  this.rs_row.id = "blk_rs_" + rs_number;

  this.col_1 = document.createElement("div");
  this.col_1.className = "col-12 col-md-4 mb-3";

  this.rs_value_label_input = document.createElement("input");
  this.rs_value_label_input.className = "form-control";
  this.rs_value_label_input.setAttribute("type", "text");
  this.rs_value_label_input.setAttribute("placeholder", "value label");
  this.rs_value_label_input.id = "response_value_label";

  this.col_1.appendChild(this.rs_value_label_input);
  this.rs_row.appendChild(this.col_1);

  this.col_2 = document.createElement("div");
  this.col_2.className = "col-12 col-md-4 mb-3";

  this.rs_value_input = document.createElement("input");
  this.rs_value_input.className = "form-control";
  this.rs_value_input.setAttribute("type", "text");
  this.rs_value_input.setAttribute("placeholder", "value");
  this.rs_value_input.id = "response_value";

  this.col_2.appendChild(this.rs_value_input);
  this.rs_row.appendChild(this.col_2);

  this.col_3 = document.createElement("div");
  this.col_3.className = "col-12 col-md-4 d-flex d-md-block justify-content-between";

  this.save_btn = document.createElement("button");
  this.save_btn.className = "btn btn-outline-primary";
  this.save_btn.id = "btn_save_rs_" + rs_number;
  this.save_btn.textContent = " save";

  this.save_icon = document.createElement("i");
  this.save_icon.className = "las la-save";

  this.save_btn.prepend(this.save_icon);

  this.remove_btn = document.createElement("button");
  this.remove_btn.className = "btn btn-outline-danger mx-md-2";
  this.remove_btn.id = "btn_remove_rs_" + rs_number;
  this.remove_btn.textContent = " remove";

  this.remove_icon = document.createElement("i");
  this.remove_icon.className = "las la-minus-circle";

  this.remove_btn.prepend(this.remove_icon);

  this.col_3.appendChild(this.save_btn);
  this.col_3.appendChild(this.remove_btn);

  this.rs_row.appendChild(this.col_3);


  // save btn handler
  this.save_btn.onclick = () => {
    console.log(this.save_btn.id + " clicked");
    // Todo : update handler for response on save
  }
  // remove btn handler
  this.remove_btn.onclick = () => {
    this.rs_row.parentNode.removeChild(this.rs_row);
    console.log(this.rs_row.id + " removed")
  }
};

function Save_question_fields(qs_number) {

  let question = {
    id: input_question_id.value,
    text: input_question_text.value,
    type: select_response_type.value,
    response: []
  }
  questions.push(question);
}

btn_save_question.onclick = () => {
  Save_question_fields(qs_number);
  console.log(questions);
}