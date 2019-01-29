/*----------------
		loading posts
    -------------------*/
    
$(window).on('load', function() {
          
    $.ajax('https://foodiebells-83042.firebaseapp.com/recipes/', {
            type: 'GET',  // http method,
            success: function (data, status, xhr) {
                var recipes = "";
                var i;
                for (i in data){
                    recipes += '<div class="col-lg-4 col-md-6">'
                        +'<div class="recipe">'
                            +'<img src="img/recipes/11.jpg" alt="">'
                            +'<div class="recipe-info-warp">'
                            +'<div class="recipe-info">'
                            +'<h3>' + data[i].data.name + '</h3>'
                                    +'<div class="rating">'
                                    +'<i class="fa fa-star"></i>'
                                    +'<i class="fa fa-star"></i>'
                                    +'<i class="fa fa-star"></i>'
                                    +'<i class="fa fa-star"></i>'
                                    +'<i class="fa fa-star is-fade"></i>'
                                    +'</div>'
                                    +'</div>'
                                    +'</div>'
                                    +'</div>'
                                    +'</div>';
                }
                $('.myrecipes').append(recipes);
            },
            error: function (jqXhr, textStatus, errorMessage) {
                $('.myrecipes').append('Error' + errorMessage);
            }
        });
    });