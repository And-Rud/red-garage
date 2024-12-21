import Mybutton from "../components/MyButton/Mybutton";

const Home = () => {
  return (
    <div className="wellcome">
      <div className="well__container">
        <div className="well__title__container">
          <h1 className="well__title">RED GARAGE</h1>
          <h1 className="well__title">WELLNESS JOURNEY</h1>
          <p className="well__p">Empower Your life</p>
        </div>
        <div className="well__text">
          <p className="well__text__p">
            Sefe erferf eferfe ererferfer erferferf erferfe erf er erferg5t
            plkoh jihrevbhe hberuhvbuh jehbvjhebr ehbvjhbe hebhberhb ehrbfhebrjh
            ehbrjvhebuhb
          </p>
          <div>
            <Mybutton className="mybutton__dark">Start journey</Mybutton>
          </div>
        </div>
      </div>
      <div className="well__img">
        <img
          src="/png/well_img.png"
          alt="PhotoWell"
          width="1000px"
          height="600px"
        />
      </div>
    </div>
  );
};

export default Home;
