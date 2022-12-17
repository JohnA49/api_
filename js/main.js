$(document).ready(function(){
 $('#searchStocks').on('keypress',function(e){
  if (e.which==13){
    let information=e.target.value;

    //make ajax requst to api-stockdata.org
    const quotePromise = $.ajax({
        url:'https://api.stockdata.org/v1/data/quote?symbols='+information,
        data:{
         api_token:'pAU9ED3DrAdzl26R0HQzXGokCoIZjmbu41FLJZuJ',
       
        }
        
     })
     const eodPromise= $.ajax({
      url:'https://api.stockdata.org/v1/data/eod?symbols='+information,
      data:{
       api_token:'pAU9ED3DrAdzl26R0HQzXGokCoIZjmbu41FLJZuJ',
     
      }
      
   })
     
     
   Promise.all([quotePromise, eodPromise]).then(function(stockdata){
        console.log(stockdata);
        const data=stockdata[0].data[0];
        const eodData=stockdata[1].data
        const prices=eodData.map(item=>item.close)
        const dates=eodData.map(item=>item.date)
        //const {ticker,price}=data;
        //console.log(ticker);
        //console.log(price); 
        $('#stockdata_results').html(`
         ${data.ticker}    ${data.price}
      `)//correct
         const chartData = {
            labels: dates,
            datasets: [{
               label: 'My First Dataset',
               data: prices,
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

