import { Link } from "react-scroll";

const EnterButton = () => {
  return (
    <>
      <Link smooth to="works">
        <button className="enter-button">CHECK MY WORK</button>
      </Link>
    </>
  );
};

export default EnterButton;
