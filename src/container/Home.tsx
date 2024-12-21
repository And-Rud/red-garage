import { useNavigate } from "react-router";
import Card from "../components/Card/Card";

const Home = () => {
  const navi = useNavigate();
  // const handleCardClick = () => {
  //   console.log("Card clicked!");
  // };
  return (
    <div className="home">
      <h1 className="home__title">Мотоцикли в наявності</h1>
      <div className="card-container">
        <Card
          title="KTM RC390 ABS"
          description={<>Об’єм двигуна : 400cc <br />Рік : 2018 <br />Доступність : Доступний</>}
          imageUrl="/images/moto.jpg"
          className="custom-card"
          onClick={() => navi("/post1")}
        >
          <span>$3400</span>
        </Card>
        <Card
          title="KTM RC390 ABS"
          description={<>Об’єм двигуна : 400cc <br />Рік : 2018 <br />Доступність : Доступний</>}
          imageUrl="/images/moto.jpg"
          className="custom-card"
          onClick={() => navi("/post1")}
        >
          <span>$3400</span>
        </Card>
        <Card
          title="KTM RC390 ABS"
          description={<>Об’єм двигуна : 400cc <br />Рік : 2018 <br />Доступність : Доступний</>}
          imageUrl="/images/moto.jpg"
          className="custom-card"
          onClick={() => navi("/post1")}
        >
          <span>$3400</span>
        </Card>
        <Card
          title="KTM RC390 ABS"
          description={<>Об’єм двигуна : 400cc <br />Рік : 2018 <br />Доступність : Доступний</>}
          imageUrl="/images/moto.jpg"
          className="custom-card"
          onClick={() => navi("/post1")}
        >
          <span>$3400</span>
        </Card>
        <Card
          title="KTM RC390 ABS"
          description={<>Об’єм двигуна : 400cc <br />Рік : 2018 <br />Доступність : Доступний</>}
          imageUrl="/images/moto.jpg"
          className="custom-card"
          onClick={() => navi("/post1")}
        >
          <span>$3400</span>
        </Card>
        <Card
          title="KTM RC390 ABS"
          description={<>Об’єм двигуна : 400cc <br />Рік : 2018 <br />Доступність : Доступний</>}
          imageUrl="/images/moto.jpg"
          className="custom-card"
          onClick={() => navi("/post1")}
        >
          <span>$3400</span>
        </Card>

      </div>
    </div>
  );
};

export default Home;
