import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"
import moment from "moment";

const LeftSideNav = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-semibold p-4"> All Category</h2>
            {
                categories?.map(category => <Link
                    to={`/category/${category.id}`}
                    className="block ml-4 text-xl font-semibold px-4"
                    key={category.id}
                >{category.name}</Link>)
            }

            <div className='p-4 space-y-3 mb-6'>
                <div className="space-y-5">
                    <img src={img1} alt="" />
                    <h2 className="text-xl font-semibold"> Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <p className="text-xl">{moment().format("MMM DD, YYYY")}</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;