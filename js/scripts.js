/*This file is for your custom js.  All yours*/

// Calls input from form-input.html
$(document).ready(function () {
    $(document).on('mouseenter', '.divbutton', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.divbutton', function () {
        $(this).find(":button").hide();
    });
  });

$(document).ready(function (){
  $("#spanish-english").click(
    function () {
      $("#translate_es_en").text('I worked with Meaghan and she is very nice.');
    }
  )
});

$(document).ready(function (){
  $("#english-spanish").click(
    function () {
      $("#translate_es_en").text('Trabaje con Meaghan y ella es muy simpatica. Trabajare con ella de nuevo sin duda!');
    }
  )
});
