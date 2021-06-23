$(document).ready(function () {
    $(".hd").hide();

    // this is to hide the previous one then wait and slidedown
    $(".hh").click(function () {
        $(".hd").slideUp();
        $(this).next().toggle()
    });


    $(".hd a").hover(function () {
        $(this).addClass("bg2");
    }, function () {
        $(this).removeClass("bg2");
    });


    $(".sub").click(function () {
        // $("#rp").load("content.html");
        var dir = $(this).attr("title")
        $.ajax({
            type: "GET",
            url: dir+"/light.html",
            success: function (data){
                $(".collect").html(data);
            }
        });
    });

});

