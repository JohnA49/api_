$(document).ready(function(){
 $('#searchStocks').on('keypress',function(e){
  if (e.which==13){
    let information=e.target.value;

    //make ajax requst to api-stockdata.org
     $.ajax({
        url:'https://api.stockdata.org/v1/data/quote?symbols='+information,
        data:{
         api_token:'pAU9ED3DrAdzl26R0HQzXGokCoIZjmbu41FLJZuJ',
       
        }
        
     }).done(function(stockdata){
        console.log(stockdata.data);
        const data=stockdata.data[0];
        //const {ticker,price}=data;
        //console.log(ticker);
        //console.log(price); 
        $('#stockdata_results').html(`
         ${data.ticker}    ${data.price}
      `)//correct
         const labels = [1,2,3,4,5,6,7]
         const chartData = {
            labels: labels,
            datasets: [{
               label: 'My First Dataset',
               data: [65, 59, 80, 81, 56, 55, 40],
               fill: false,
               borderColor: 'rgb(75, 192, 192)',
               tension: 0.1
            }]
        }; 
        const config = {
         type: 'line',
         data: chartData,
       }; 
       const ctx = document.getElementById('myChart');

       new Chart(ctx, config);
     });

  } 
 });
});

