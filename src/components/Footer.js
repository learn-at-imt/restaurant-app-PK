import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TwitterIcon />
        <InstagramIcon />
        <FacebookIcon />
        <p>&copy; 2022 TheEastSide.com</p>
      </div>
    </div>
  );
};

export default Footer;
