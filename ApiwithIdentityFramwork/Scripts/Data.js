$(document).ready(function () {

   

    $("#modelError").on('hidden.bs.modal', function () {

        window.location.href = "/Home/LoginPage/";
    })

    $("#btnLoad").click(function () {

       
        $.ajax({
            url: '/api/Employee/',
            type: 'GET',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")
            },
            success: function (data) {

                var strData = "";
                $("#divTest").removeClass('hidden');
                $("#loadData").empty();
                $.each(data, function (index, value) {

                    strData += "<tr><td>" + value.ProductId + "</td>";
                    strData += "<td>" + value.ProductName + "</td>";
                    strData += "<td>" + value.IntroductionDate + "</td>";
                    strData += "<td>" + value.Url + "</td>";
                    strData += "<td>" + value.Price + "</td></tr>";
                    
                });

                $("#loadData").append(strData);

            },
            error: function (jqXHR) {

                if (jqXHR.status == "401") {

                    $("#modelError").modal('show');

                }
                else {

                    $("#divErrorText").text(jqXHR.responseText);
                    $("#divError").show('fade');
                }

            }

        });
    });

});