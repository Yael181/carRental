import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Pourquoi nous choisir ?</h4>
                <h2>Car votre satisfaction est le plus grand bénéfice généré !</h2>
                <p>
                Découvrez nos offres exclusives, pensées pour vous offrir une expérience de location inégalée, avec un service centré sur vos besoins. Nous vous proposons une gamme de véhicules allant de l'élégance VIP au confort familial, le tout avec des prix transparents et raisonnables. Vous êtes notre priorité, et chaque détail de notre service est conçu pour répondre à vos attentes les plus élevées.
                </p>
                
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Véhicules Intelligents</h4>
                    <p>
                      Tous nos véhicules sont dôtés de technologie de repérage et localisation GPS en cas d'urgence!
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Tarification orientée client</h4>
                    <p>
                    Profitez de tout ce dont vous avez besoin en un seul prix pratique et transparent grâce à notre politique tarifaire tout compris.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
