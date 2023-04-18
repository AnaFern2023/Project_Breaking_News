import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsList = () => {

    const [news, setNews] = useState([])
    const [search, setSearch] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const [language, setLanguage] = useState("")

    useEffect(() => {
        if (!searchInput) {
            return
        }

        fetch(`https://newsapi.org/v2/everything?q=${searchInput ? searchInput : "bitcoin"}&from=2023-03-18&sortBy=publishedAt&language=${language}&apiKey=1bf3d54d69d345d38fa008521c6a071c`)
            .then(res => res.json())
            .then(json => {
                setNews(json.articles)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])


    console.log(news);
    return (
        <section>
            <form action="">
                <input type="text" name="" id="searchText" placeholder="What do you search? ;)" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
                <input type="button" value="Search" className="searchButton" onClick={() => setSearch(!search)} />
                <div>
                    <select name="language" className="language" onChange={(event) => setLanguage(event.target.value)}>
                        <option value="">Select language</option>
                        <option value="de" >German</option>
                        <option value="en">English</option>
                        <option value="el">Greek</option>
                        <option value="fr">France</option>
                        <option value="ja">Japan</option>
                        <option value="pt">Portugese</option>
                        <option value="tr">Turkish</option>
                        <option value="zh">Chinese</option>
                        <option value="sv">Sweden</option>
                        <option value="pl">Polska</option>
                        <option value="af">Afrikaans</option>
                        <option value="it">Italy</option>
                        <option value="ru">Russia</option>
                    </select>
                </div>
            </form>
            {news.map((element, index) => {
                return (
                    <NewsItem
                        key={index}
                        id={index}
                        title={element.title}
                        image={element.urlToImage}
                        allNews={element}
                    />
                )
            })}
        </section>
    );
}

export default NewsList;