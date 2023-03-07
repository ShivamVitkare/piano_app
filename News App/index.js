//https://newsapi.org/v2/everything?q=tesla&from=2022-12-05&sortBy=publishedAt&apiKey=f919f5a25d68406ea36c6d21bd25cad0


let newsContainer=document.querySelector('.news-container')
let query='latest news'
let apiKey='f919f5a25d68406ea36c6d21bd25cad0';

async function fetchNews(){
    const response=await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-12-05&sortBy=publishedAt&apiKey=${apiKey}&q=${query}`)
    const resjson=await response.json()
    return resjson;
}
const newsData=fetchNews()
newsData.then(data=>{
  
    const newsArray=data.totalResults;

    newsArray.forEach((element)=>{
       let innerHTML;

       if(element.urlToImage==null){
        newsHTML=`  <div class="news-card">
        <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/12/breaking-news-template-2-1672277418-1672378520.jpg" alt="">
        <h3>${element.title}</h3>
    </div>`
       }
       else{

        let newsHTML=`  <div class="news-card">
        <img src="${element.urlToImage}" alt="">
        <h3>${element.title}</h3>
    </div>`
       }


    newsContainer.innerHTML += newsHTML
    });
})