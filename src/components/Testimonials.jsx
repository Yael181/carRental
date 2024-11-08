import Img2 from "../images/testimonials/manemirati.jpg";
import Img3 from "../images/testimonials/europeanman.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Satisfaction Client</h4>
              <h2>Témoignages de ❤️CLIENTS❤️</h2>
              <p>
              Découvrez l'impact positif que nous avons eu sur nos clients en parcourant leurs témoignages. Ils ont vécu notre service et nos résultats, et sont impatients de partager leurs expériences positives avec vous.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Nous avons loué une voiture sur ce site et avons vécu une expérience incroyable ! La réservation était facile et les tarifs de location très abordables. "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Mohamed Al Utaibi</h4>
                      <p>UAE</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "La voiture était en excellent état et a rendu notre voyage encore meilleur. Je recommande vivement ce site de location de voitures !"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Frédéric Rossignol</h4>
                      <p>France</p>
                    </span>
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

export default Testimonials;
