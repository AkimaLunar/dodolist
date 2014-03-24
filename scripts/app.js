// $(document).ready(function(){
//     $('#add').click(function() {
//         var toAdd = $('input[name=checkListItem]').val();
//         $('.list').append('<li><p class="item">' + toAdd + '</p><button class="delete"></button></li>');
//         $('input[name=checkListItem]').val(" ");
//     });
//     $(document).on('click', '.item', function() {
//         $(this).toggleClass("checked");
//     });
//     $(document).on('click', ".delete", function () {
//     	$(this).parent().remove();
//     });
// });



function addItem(){
	var form = $('input[name=checkListItem]')
	var toAdd = form.val();
	var newItem = '<li><p class="item">' + toAdd + '</p><button class="delete"></button></li>';
	if (toAdd == 0) {
		var l = 20;  
   		for( var i = 0; i < 10; i++ )   
     	form.animate( { 'margin-left': "+=" + ( l = -l ) + 'px' }, 50); 
	}
	else {
		$('.list').append(newItem);
		$('input[name=checkListItem]').val(" ");
	}

};

$(document).ready(function() {
	$('input[name=checkListItem]').keypress(function(e){
		if(e.keyCode == 13) {
			addItem();
			e.preventDefault();	
		}
	});
	$(document).on('click', '.item', function() {
        $(this).toggleClass("checked");
    });
    $(document).on('click', ".delete", function () {
    	$(this).parent().remove();
    });
});