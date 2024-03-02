$(".btn1").click(function(){
    $(".button-container button").css("background-color" , "rgba(255, 145, 0, 0.1)");
    $(".slide").css("background-color" , "orange");
    $("#r").css("color" , "orange");
    $(".bi").css("color" , "orange");
    $("#one").css("color" ,"white");
    $("#two").css("color" ,"grey");
    $("#three").css("color" ,"grey");
    $(".con1 , .con2").css("border" , "1px solid orange");
    $("#float").css("color" , "orange");

    
    $(".btn").click(function(){
        $(".btn").css("box-shadow", "0 0 5px orange");
        setTimeout(function() {
        $(".btn").css("box-shadow", "none");
    }, 100);
    });
});




$(".btn2").click(function(){
    $(".button-container button").css("background-color" , "rgba(0, 122, 255, 0.1)");
    $(".button-container button").css("border" , "rgba(0, 122, 255, 0.1)");
    $(".slide").css("background-color" , "#007aff");
    $("#r").css("color" , "#007aff");
    $(".bi").css("color" , "#007aff");
    $("#one").css("color" ,"grey");
    $("#two").css("color" ,"white");
    $("#three").css("color" ,"grey");
    $(".con1 , .con2").css("border" , "1px solid #007aff");
    $("#float").css("color" , "#007aff");
    

    $(".btn").click(function(){
        $(".btn").css("box-shadow", "0 0 5px #007aff");
        setTimeout(function() {
        $(".btn").css("box-shadow", "none");
    }, 100);
    });
});




$(".btn3").click(function(){
    $(".button-container button").css("background-color" , "rgba(10, 198, 212, 0.193)");
    $(".button-container button").css("border" , "rgba(10, 198, 212, 0.193)");
    $(".slide").css("background-color" , "#5ac8fa");
    $("#r").css("color" , "#5ac8fa");
    $(".bi").css("color" , "#5ac8fa");
    $("#one").css("color" ,"grey");
    $("#two").css("color" ,"grey");
    $("#three").css("color" ,"white");
    $(".con1 , .con2").css("border" , "1px solid #5ac8fa");
    $("#float").css("color" , "#5ac8fa");

    $(".btn").click(function(){
        $(".btn").css("box-shadow", "0 0 5px #5ac8fa");
        setTimeout(function() {
        $(".btn").css("box-shadow", "none");
    }, 100);
    });
});


