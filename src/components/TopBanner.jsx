import React from 'react'
import styled from "styled-components";
import { Slideshow } from './Slideshow';

export default function TopBanner(props) {
    return (
        <Section id="topBanner">
            <div className="background">
              <Slideshow data={props.data} />
            </div>
            <div className="content">
                <div className="title">
                <h1>Hello beachgoers, Do you know?</h1> <br/>
                    <p>
                    In the state of California, the beaches & coasts are endless, but
very few people ever visit anything other than the few famous
beaches: Long Beach & Venice Beach, and this is a shame.
                    </p> <br/>
                    <p>
                    California would like to solve this problem by making the beaches
more accessible to the public and other beachgoers, this webiste gives information, locations and
some visuals about the beaches.
                    </p> <br/>
                    <p>Happy exploring!</p>
                </div>
            </div>
        </Section>
      );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }

  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    
    button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
