$(document).ready(function () {

    $("#btnlogin").click(function () {

        $.ajax({

            url: '/token',
            type: 'POST',
            dataType: "json",
            data: {

                username: $("#username").val(),
                password: $("#password").val(),
                grant_type: "password",

            }
            ,
            success: function (resp) {

                sessionStorage.setItem("accessToken", resp.access_token);
                window.location.href  = "/Home/Data/"
               // $("#divErrorText").text(resp);
                //$("#divError").show('fade');
            },
            error: function (jqXHR) {

                $("#divErrorText").text(jqXHR.responseText);
                $("#divError").show('fade');

            }

        });

    });

})