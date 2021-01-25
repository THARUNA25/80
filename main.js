var name_of_studentes = [];
function submit() {
  for (var i = 1; i <= 6; i++) {
    var name = document.getElementById("name_of_the_student_" + i).value;
    console.log(name);
    name_of_studentes.push(name);
  }
  var len = name_of_studentes.length;
  var display_student_array = [];
  for (var k = 0; k < len; k++) {
    display_student_array.push("<h4>NAME - " + name_of_studentes[k] + "</h4>");
    console.log(display_student_array);
  }
  document.getElementById(
    "display_name_with_commas"
  ).innerHTML = display_student_array;
  var r = display_student_array.join("*******");
  document.getElementById("display_name_without_commas").innerHTML = r;
  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";

}
function sorting() {
    name_of_studentes.sort();
    var len = name_of_studentes.length;
    var display_student_array = [];
    for (var k = 0; k < len; k++) {
      display_student_array.push("<h4>NAME - " + name_of_studentes[k] + "</h4>");
      console.log(display_student_array);
    }
    document.getElementById(
      "display_name_with_commas"
    ).innerHTML = display_student_array;
    var r = display_student_array.join("*******");
    document.getElementById("display_name_without_commas").innerHTML = r;  
}