import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import editors1 from "../../assets/editorsInsight1.png"
import editors2 from "../../assets/editorsInsight2.png"
import editors3 from "../../assets/editorsInsight3.png"
import moment from "moment";


const News = () => {
    const [findNews, setFindNews] = useState({});
    const { id } = useParams();
    const news = useLoaderData();


    useEffect(() => {
        const findNews = news.find(findNews => findNews._id === id);
        console.log(findNews);
        setFindNews(findNews);
    }, [news, id])


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-3xl font-bold py-5"> Dragon News </h1>
                    <div className="card bg-base-100 shadow-xl mb-16 p-5">
                        <figure><img src={findNews.image_url} alt="Shoes" /></figure>
                        <div className="py-5">
                            <h2 className="text-3xl font-bold">{findNews.title}</h2>
                        </div>
                        <p>
                            {findNews.details}
                        </p>
                        <div className="my-5">
                            <Link to='/'>
                                <button className=" px-4 py-2 rounded-lg font-medium text-white text-left bg-red-500"> All news in this category </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">Editors Insight</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                            <div>
                                <img src={editors1} alt="" />
                                <h3 className="text-2xl font-semibold">21 The Most Stylish Wedding Guest Dresses For Spring </h3>
                                <p className="text-xl">{moment().format("MMM DD, YYYY")}</p>
                            </div>
                            <div>
                                <img src={editors2} alt="" />
                                <h3 className="text-2xl font-semibold">21 The Most Stylish Wedding Guest Dresses For Spring </h3>
                                <p className="text-xl">{moment().format("MMM DD, YYYY")}</p>
                            </div>
                            <div>
                                <img src={editors3} alt="" />
                                <h3 className="text-2xl font-semibold">21 The Most Stylish Wedding Guest Dresses For Spring </h3>
                                <p className="text-xl">{moment().format("MMM DD, YYYY")}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;