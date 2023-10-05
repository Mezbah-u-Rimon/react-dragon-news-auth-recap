// import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"



const RightSideNav = () => {
    return (
        <div className='sticky top-2'>
            <div className='p-4 space-y-3 mb-6'>
                <h1 className="text-3xl font-semibold"> Login With </h1>
                <button className="btn btn-outline w-full text-xl font-bold">
                    {/* <FcGoogle></FcGoogle> */}
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full text-xl font-semibold">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>

            {/* find us */}
            <div className='p-4 mb-6'>
                <h1 className="text-3xl font-semibold"> Find Us on  </h1>
                <a href="http://" className='p-4 text-lg border rounded-t-lg flex items-center' target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span> Facebook </span>
                </a>
                <a href="http://" className='p-4 text-lg border-x flex items-center' target="_blank" rel="noopener noreferrer">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span> Twitter </span>
                </a>
                <a href="http://" className='p-4 text-lg border rounded-b-lg flex items-center' target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span> Instagram </span>
                </a>
            </div>

            {/* Q Zone  */}
            <div className='p-4 space-y-3 mb-6'>
                <h1 className="text-3xl font-semibold"> Q Zone </h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;