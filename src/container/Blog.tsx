import React from "react";
import { useNavigate } from "react-router";

const Blog = () => {
  const navi = useNavigate();
  return (
    <div className="blog">
      <h1 className="b__title">Some insight from us</h1>
      <p className="b__text">
        Ljdierj jnjncwjn lmkmzxwxew wecwekoiswjnehv encijneijrn
      </p>
      <div className="b__card">
        <div onClick={() => navi("/post1")} className="b__card__item">
          <img src="https://picsum.photos/300/200" alt="cardFoto" />
          <h3 className="b__card__title">
            Mdjne jnjiwenf okmoiroi wrfoijoiwjf
          </h3>
          <p className="b__card__text">
            jierfjhi ejr hifhierhfi ejfkcjwlkjfo rhfiygywuyeydfwe fweydfrwtfxctw
            wtdctfwctfedc tfwctdfcwtfcd twfedctfwct tfcwdtf tfwfcw detf wtfct
          </p>
        </div>
        <div className="b__card__item">
          <img src="https://picsum.photos/300/200" alt="cardFoto" />
          <h3 className="b__card__title">
            Mdjne jnjiwenf okmoiroi wrfoijoiwjf
          </h3>
          <p className="b__card__text">
            jierfjhi ejr hifhierhfi ejfkcjwlkjfo rhfiygywuyeydfwe fweydfrwtfxctw
            wtdctfwctfedc tfwctdfcwtfcd twfedctfwct tfcwdtf tfwfcw detf wtfct
          </p>
        </div>
        <div className="b__card__item">
          <img src="https://picsum.photos/300/200" alt="cardFoto" />
          <h3 className="b__card__title">
            Mdjne jnjiwenf okmoiroi wrfoijoiwjf
          </h3>
          <p className="b__card__text">
            jierfjhi ejr hifhierhfi ejfkcjwlkjfo rhfiygywuyeydfwe fweydfrwtfxctw
            wtdctfwctfedc tfwctdfcwtfcd twfedctfwct tfcwdtf tfwfcw detf wtfct
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
