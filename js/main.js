$(document).ready(function(){
 $('#searchStocks').on('keypress',function(e){
  if (e.which==13){
    let information=e.target.value;

    //make ajax requst to api-stockdata.org
     $.ajax({
        url:'https://api.stockdata.org/v1/data/quote?symbols='+information,
        data:{
         api_token:'pAU9ED3DrAdzl26R0HQzXGokCoIZjmbu41FLJZuJ',
         limit:'50'
        }
        
     }).done(function(stockdata){
        console.log(stockdata.data);
        let data=stockdata.data[0]
        let responseObject= "<div class = 'block'>"+data.currency+"</div>"
        $('#stockdata_results').html(responseObject)
     });
  }
   
 });
});






