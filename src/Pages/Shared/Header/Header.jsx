import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center mt-12 mb-8">
            <img className="mx-auto my-5" src={logo} alt="" />
            <p className="my-8"> Journalism Without Fear or Favour </p>
            <p className="text-xl">{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;