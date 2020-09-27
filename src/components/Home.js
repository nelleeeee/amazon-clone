import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={123124}
            title="The lean start"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL6_05JvxVP0l0X8qCKJqJnY3fiQwlRuhDwsf8U70NvraQ3VtYtA&usqp=CAc"
            rating={5}
          />
          <Product
            id={1231245}
            title="The lean start"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL6_05JvxVP0l0X8qCKJqJnY3fiQwlRuhDwsf8U70NvraQ3VtYtA&usqp=CAc"
            rating={5}
          />{" "}
        </div>
        <div className="home__row">
          <Product
            id={123124123}
            title="The lean start"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL6_05JvxVP0l0X8qCKJqJnY3fiQwlRuhDwsf8U70NvraQ3VtYtA&usqp=CAc"
            rating={5}
          />
          <Product
            id={123121114}
            title="The lean start"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL6_05JvxVP0l0X8qCKJqJnY3fiQwlRuhDwsf8U70NvraQ3VtYtA&usqp=CAc"
            rating={5}
          />
          <Product
            id={1231241315}
            title="The lean start"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL6_05JvxVP0l0X8qCKJqJnY3fiQwlRuhDwsf8U70NvraQ3VtYtA&usqp=CAc"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={12312410}
            title="The lean start"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL6_05JvxVP0l0X8qCKJqJnY3fiQwlRuhDwsf8U70NvraQ3VtYtA&usqp=CAc"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
