import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //get news API function
    const getTrendingNews = () => {
      setLoading(true);

      const options = {
        method: "GET",
        url: "https://bing-news-search1.p.rapidapi.com/news/",
        params: { textFormat: "Raw", safeSearch: "Off" },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "a93329cbabmsh9ca76fc55b4a6fdp10e1b3jsnf6130f9ca298",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        setData(response.data.value);
        setLoading(true);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getTrendingNews();
  }, []);

  const getNews = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news",
      params: { safeSearch: "Off", textFormat: "Raw" },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "a93329cbabmsh9ca76fc55b4a6fdp10e1b3jsnf6130f9ca298",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data.value);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={getNews}>
        <input
          type="text"
          placeholder="Enter your Location"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">Get News</button>
      </form>
      <div className="card_container">
        {data.map((eachPost) => (
          <div className="card">
            <img src={eachPost.image.thumbnail.contentUrl} alt="" />
            <h3 className="">{eachPost.name}</h3>
            <p>{eachPost.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
      {/* <div className="card">
                <img src="https://www.gannett-cdn.com/presto/2022/10/23/PPHX/b9801a15-6f44-453f-a1a3-eed7fdceec17-Lake_AZ7_2.jpg?auto=webp&crop=5203,2927,x0,y350&format=pjpg&width=1200" alt="" />
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, cumque!</h3>
            </div> */}
    </div>
  );
};
export default Content;
