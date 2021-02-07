$("ul").on("click","li", function(){
    $(this).toggleClass("finished");
});

$("ul").on("click","span",function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function () { 
    if (event.which===13){
        var newItem = $(this).val();
        console.log(newItem);   
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-window-close' aria-hidden='true'></i> </span>"+newItem+"</li>");
    }
});

$(".fa-edit").click(function () {
    $("input[type='text']").fadeToggle();
});

