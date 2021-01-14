$(document).ready(function () {

    $("#linkClose").click(function () {

        $("#divError").hide('fade');
    });

    $('#btnregister').click(function () {

        $.ajax({
            url: '/api/Account/Register',
            type: 'POST',
            
            data: {
                email: $("#email").val(),
                password: $("#Password").val(),
                confirmPassword: $("#confirm").val()
            },
            success: function (data) {

                $("#modelsuccess").modal('show');
            },
            error: function (jqXHR) {

                $("#divErrorText").text(jqXHR.responseText);
                $("#divError").show('fade');


            }

        });
       

    })


});