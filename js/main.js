$(document).ready(function(){
  $('#searchFilla').on('keyup',function(e){
   let information = e.target.value;

    //Make request to API
    $.ajax({
      url: 'https://api.stockdata.org/v1/data/quote?symbols='+information+'&api_token=pAU9ED3DrAdzl26R0HQzXGokCoIZjmbu41FLJZuJ',
      /*data: {
        sources:information,
        access_key: 'e7a211e54fe4a9c68b6dcbfecd183933',
        }*/

    }).done(function(response) {
      console.log(response.data);
    });
  });
  });






