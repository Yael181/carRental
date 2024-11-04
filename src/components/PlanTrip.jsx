import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plannifiez vos besoins auto</h3>
              <h2> On s'occupe du reste </h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Qualité & Assurance</h3>
                <p>
                Nos véhicules subissent des suivis dans les plus grandes maisons d'entretien du royaume & sont assurés pour tous vos besoins. 
                Nous avons la voiture parfaite pour répondre à vos attentes
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Suivi & Support</h3>
                <p>
                  Nous sommes toujours à votre disposition 24/7 pour un service client optimal, toujours prêts à vous 
                  supporter, car votre satisfaction est notre priorité!
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3> Pick Up & Delivery</h3>
                <p>
                  Pour vous éviter des conflits temporelles, et une plannification optimale de votre expérience auto,
                  le service Pick Up du véhicule et Delivery du véhicule sont là pour vous faciliter le séjour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
