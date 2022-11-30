$(document).ready(function(){
  $('#searchStocks').on('keypress',function(e){
    if (e.which==13){
      let information = e.target.value;

      //Make ajax request to sotckdata.org Api
      $.ajax({
        url: 'https://api.stockdata.org/v1/data/quote?symbols='+information+'&api_token=pAU9ED3DrAdzl26R0HQzXGokCoIZjmbu41FLJZuJ',
        /*data: {
          sources:information,
          access_key: 'e7a211e54fe4a9c68b6dcbfecd183933',
          }*/
  
      }).done(function(response) {
        console.log(response.data);
        let data=response.data[0]
        let dayHigh= "<div class = 'block'>"+data.day_high+"</div>"
        $('#profile_results').html(dayHigh)
      });
    }
   
  });
  });






