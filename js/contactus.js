/*----------------
		sending contact mail
    -------------------*/
    
    $(window).on('load', function() {
        $('#contactNow').on('click', function(e){
            e.preventDefault();
            $.ajax('https://foodiebells-83042.firebaseapp.com/contact/',{
                type:'POST',
                data: JSON.stringify({ 
                    "from":$('#from').val(),
                    "subject":$('#subject').val(),
                    "message":$('#message').val() 
                    }),
                //contentType: "application/json; charset=utf-8",
                //dataType: "json",
                success: function(data){
                    $('.greeting').append(data);
                },
                failure: function(errMsg) {
                    $('.greeting').append('Error' + errMsg);
                }
                });
            });
        });