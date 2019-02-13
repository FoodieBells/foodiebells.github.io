/*----------------
		sending contact mail
    -------------------*/
    
    $(window).on('load', function() {
        $('#contactNow').on('click', function(e){
            e.preventDefault();
            $.ajax('https://foodiebells-83042.firebaseapp.com/contact/',{
                type:'POST',
                data: JSON.stringify({
                    "name":$('#name').val(),
                    "from":$('#from').val(),
                    "subject":$('#subject').val(),
                    "message":$('#message').val() 
                    }),
                contentType: "application/json",
                //dataType: "json",
                success: function(data){
                    $('#name').val("");
                    $('#from').val(""),
                    $('#to').val(""),
                    $('#message').val(""),
                    $('.greeting').html(`<p style="color:green">${data.body}</p>`);
                    $('.greeting').fadeOut(3000);
                },
                failure: function(errMsg) {
                    $('.greeting').append('Error' + errMsg);
                    $('.greeting').fadeOut(3000);
                }
                });
            });
        });