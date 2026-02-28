

const scrollingTextTrack = document.getElementById('news-track');

const newskey = "6930caa38d0e4147a639faf52a1e1edb";
async function getNews(country, from)
{
    const get = await fetch(`
        https://newsapi.org/v2/top-headlines/?language=en&sortBy=relevancy&apikey=${newskey}
    `)

    const json = await get.json();

    console.log(json)

    return json;
}



async function updateScrollingText()
{
    const now = new Date();
    now.setMonth(now.getMonth() - 1);

    let iso_one_month_ago = now.toISOString().slice(0,10);

    const news = await getNews("se", iso_one_month_ago);
    const articles = news.articles;

    let text = '';
    for (const article of articles)
    {
        text += `
            <a href="${article.url}" target="_blank"> 
                <span>${article.title}</span> 
            </a>
        `;
    }
    scrollingTextTrack.innerHTML = text;
}

updateScrollingText();