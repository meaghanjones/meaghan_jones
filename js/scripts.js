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

$(document).ready(function (){
  $("#english-polish").click(
    function () {
      $("#translate_en_pl").text('Meaghan jest profesionalistką pod każdym względem i przyjemnie się z nią pracuje. Na początku współpracy Meaghan jest dociekliwa, by lepiej zrozumieć oczekiwania klienta. Pozwala jej to dostarczyć gotowe rozwiązania przed czasem, doskonale spełniając określone wymogi. Gorąco polecam pracę z Meaghan!');
    }
  )
});

$(document).ready(function (){
  $("#polish-english").click(
    function () {
      $("#translate_en_pl").text('Meaghan is a great professional and it was fun to work with her. She asked insightful questions to better understand my expectations. She delivered exactly what I requested and even ahead of schedule. I highly recommend her!');
    }
  )
});
