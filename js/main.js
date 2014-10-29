$(function(){
	
	
	$('#convert').on('click', function(e){
									   
		//Prevent the page from reloading
		e.preventDefault();
		
		// Get values from form fields
		var hours = parseInt($('#hours').val(), 10);
		var minutes = parseInt($('#minutes').val(), 10);
		var seconds = parseInt($('#seconds').val(), 10);
	
		// Calculate total seconds
		var totalSeconds = ((hours * 3600) + (minutes * 60) + seconds);
			$('#total').html('<p>' + totalSeconds + '</p>').fadeIn();
		});
		
		// Reset the form
		$('#reset').on('click', function(){
			$('#total').fadeOut();
		});
});
