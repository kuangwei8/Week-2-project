// $(document).ready(function(){
//   $("input")on("submit".function(event){
//
//     var name=$("input").val();
//
//   });
// });
var json = {
    "questions": [
        {
            "type": "radiogroup",
            "name": "one",
            "title": "Radiogroup question (green)",
            "choices": ["Yes", "No"]
        }, {
            "type": "checkbox",
            "name": "two",
            "title": "Checkbox question (orange)",
            "choices": ["One", "Two"]
        }, {
            "type": "radiogroup",
            "name": "three",
            "title": "Required question (red title)",
            "isRequired": true,
            "choices": ["Yes", "No"]
        }

    ]
}
