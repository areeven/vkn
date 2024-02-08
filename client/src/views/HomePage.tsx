import "../assets/css/pages/HomePage.css";
import "../assets/css/global.css";
import ViperLogo from "../assets/images/vkn-logo.png";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="page-container grid-template">
        <div className="grid-header grid-gap-border">
          <div className="grid-header-content">header</div>
        </div>
        <div className="grid-content grid-gap-border">middle</div>
        <div className="grid-content grid-gap-border">
          <img src={ViperLogo} alt="" />
        </div>
        <div className="grid-content grid-gap-border">middle</div>
        <div className="grid-content-bottom grid-gap-border">bottom</div>
      </div>
    </>
  );
};

export default HomePage;
