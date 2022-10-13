import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpg";
import avatarImage1 from "../assets/avatarImage1.jpg";
import avatarImage2 from "../assets/avatarImage2.jpg";

//there is no data available from the API otherwise we could have made this dynamic too.
export default function Reviews() {
  return (
    <Section id="reviews">
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <div className="testimonials">
      <div className="testimonial">
          <p>
          Vi vidste virkelig ikke, at der er mange andre smukke
            strande <br/> er der i Californien.
            Tak cabeaches.ca.gov.in for denne vidunderlige guide. 
          </p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
              <h4>Peter Andresen </h4>
              <span>13 Oct. '22, Denmark</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
           Vi vidste virkelig ikke, at der er mange andre smukke
            strande <br/> er der i Californien.
            Tak cabeaches.ca.gov.in for denne vidunderlige guide.
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Bartlomiej Wietrak </h4>
              <span>12 Oct. '22, Denmark</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            We really didn't knew that there are a lot of other beautiful
            beaches <br/> are there in California.
            Thank you cabeaches.ca.gov.in for this wonderful guide. 
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Amarjeet Kawathe</h4>
              <span>10 Oct. '22, India</span>
            </div>
          </div>
        </div>
        
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
