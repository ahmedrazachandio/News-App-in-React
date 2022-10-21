import React, { useState } from "react";
import axios from "axios";



const Content = () =>{


    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    const getNews = () => {
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news',
            params: { q: query , textFormat: 'Raw'},
            headers: {
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': 'a93329cbabmsh9ca76fc55b4a6fdp10e1b3jsnf6130f9ca298',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          })


    }
    

    return(
        <div>
           <form onSubmit={getNews}>
            <input type="text" 
            placeholder="Enter your Location" 
            onChange={(e) => {
                setQuery(e.target.value);
            }}
            />
            <button type="submit">Get News</button>

           </form>
        </div>

    );
}
export default Content;