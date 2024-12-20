import * as React from "react";
import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";

import styles from "./styles.module.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function App() {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e) => {
    api.start({ xy: [e.pageX - left, e.pageY - top] });
  };

  const chxBox = document.querySelector<HTMLInputElement>(".blob-check");
  const blob = document.querySelector<HTMLElement>(".blob-container");
  
  if (chxBox && blob) {
    chxBox.addEventListener("change", function () {
      if (chxBox.checked) {
        blob.style.display = "none";
      } else {
        blob.style.display = "block";
      }
    });
  }

  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    const heroText = document.querySelector<HTMLElement>(".hero-text");
    const topLeft = document.querySelector<HTMLElement>(".top-left");
    const bottomRight = document.querySelector<HTMLElement>(".bottom-right");
  
    if (heroText) {
      // Hero-text scrolls away slower than the regular speed
      heroText.style.transform = `translateY(-${scrollY * 0.5}px)`;
    }
  
    if (topLeft) {
      // Top-left scrolls away at the regular speed
      topLeft.style.transform = `translateY(-${scrollY}px)`;
    }
  
    if (bottomRight) {
      // Bottom-right scrolls away at the regular speed
      bottomRight.style.transform = `translateY(-${scrollY}px)`;
    }
  
    // Optional: background scrolls away at the slowest speed
    document.body.style.backgroundPositionY = `-${scrollY * 0.2}px`;
  });
  

  return (
    <div>
      <div className="header">
        <h3>Website Title</h3>
      </div>
      <div className="toggle-blob">
        <label className="switch">
         <input type="checkbox" className="blob-check"/>
          <span className="slider"></span>
        </label>
        <p>the blob</p>
      </div>
      <div className="hero-text">
        <p>Hero text</p>
      </div>
      <div className="top-left">
        <h1>Main title</h1>
        <p>Welcome to my experimental website</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab
          repellendus voluptatem vero at labore eligendi mollitia quaerat in
          delectus! Quis.
        </p>
        <button>Button</button>
      </div>
      <div className="bottom-right">
        <h2>Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab
          repellendus voluptatem vero at labore eligendi mollitia quaerat in
          delectus! Quis.
        </p>
        <button>Button</button>
      </div>
      <div className="blob-container">
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="30"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div
          ref={ref}
          className={styles.hooksMain}
          onMouseMove={handleMouseMove}
        >
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={{ transform: props.xy.to(trans) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
