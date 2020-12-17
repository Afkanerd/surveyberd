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

  switch (select_response_type.value) {
    case "MCQ":
      create_response_fields("MCQ");
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

const create_response_fields = (type) => {
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

  switch (type) {
    case "MCQ":
      blk_responses_container.innerHTML += response_template;
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