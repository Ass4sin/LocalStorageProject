$("#add").on("click",function(){
    if ($(".informations").css("display") == "none") {
        $(".informations").show("slow");
    }else{
        $(".informations").hide("slow");
    }
});

