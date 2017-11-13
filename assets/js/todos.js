$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    let EnterKeyCode = 13;
    if(event.which === EnterKeyCode){
        let textVal = $(this).val();
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span>" + textVal +"</li>");
        $(this).val("");  
    }
});

$("#toDoListAdder").click(function(event){
    $("input[type='text']").slideToggle(500);
});