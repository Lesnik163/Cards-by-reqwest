var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("language", "en");
urlencoded.append("apiKey", "Fw07-oG8z-92ktSm0nHBes-AydcXTYNydy9nZxBP3xY1gQZT");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};



  export const getCards = async() => {
    try {
        const result = await fetch("https://api.currentsapi.services/v1/latest-news?language=en&apiKey=Fw07-oG8z-92ktSm0nHBes-AydcXTYNydy9nZxBP3xY1gQZT", requestOptions)
        const data = await result.json();
        return data
    }catch(err){
        console.log('err', err)
    }
    
  }