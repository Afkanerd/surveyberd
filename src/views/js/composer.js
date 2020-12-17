// Composer JS

var input_question_id = document.getElementById("input_question_id");
var input_question_text = document.getElementById("input_question_text");
var select_response_type = document.getElementById("select_response_type");
var response_value_label = document.getElementById("response_value_label");
var response_value = document.getElementById("response_value");
var add_response_button = document.getElementById("add_response_button");
var blk_question_container = document.getElementById("blk_question_container");
var blk_responses_container = document.getElementById(
  "blk_responses_container"
);
var blk_response_values = document.getElementById(
    "blk_response_values"
  );
var question_save_button = document.getElementById("question_save_button");

select_response_type.addEventListener("change", () => {

  console.log(`
   ${input_question_id.value} \n
   ${input_question_text.value} \n
   ${select_response_type.value} \n
   `);

  switch (select_response_type.value) {
    case "MCQ":
      // handle
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

