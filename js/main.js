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
        const data=stockdata.data[0];
        const {ticker,price}=data;
        //console.log(ticker);
        //console.log(price); 
        $('#stockdata_results').html(`
         ${data.ticker}    ${data.price}
      `)//correct
     });

  } 
 });
});

//utilizing the fetclh keyword...
//console.log('utilize fetch function');

catchCowrie()
  .then(response=>{
    //console.log('hurray');
  })

.catch(error=>{
     console.log('error');
     console.error(error);
});
async function catchCowrie(){
  const response= await fetch('cowrie.jpg');
  const blob= await response.blob();
  document.getElementById('cowrie').src=URL.createObjectURL(blob); 
}

/* fetch('cowrie.jpg')
  .then(response=>{
    console.log(response);
    return response.blob();
   })
   .then(blob=>{
     console.log(blob);
     document.getElementById('cowrie').src=URL.createObjectURL(blob);   
  })
   .catch(error=>{
     console.log('error');
     console.error(error);
   });*/


//utilzing async and await keywords
 /*
        const api_url= 'https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=pAU9ED3DrAdzl26R0HQzXGokCoIZjmbu41FLJZuJ'
        async function getStockData(){
         const response= await fetch(api_url);
         const data= await response.json();
         console.log(data);
        }

        getStockData();*/


