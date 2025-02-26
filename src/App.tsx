import * as React from "react";
import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import Draggable from 'react-draggable';

import styles from "./styles.module.css";
import { useEffect } from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';



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

    const handleMouseMove = (e: { pageX: number; pageY: number }) => {
      api.start({ xy: [e.pageX - left, e.pageY - top] });
    };

  const chxBox = document.querySelector<HTMLInputElement>(".blob-check");
  const blobContainer = document.querySelector<HTMLElement>(".blob-container");

  if (chxBox && blobContainer) {
    chxBox.addEventListener("change", function () {
      if (chxBox.checked) {
        blobContainer.style.display = "none";
      } else {
        blobContainer.style.display = "block";
      }
    });
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;

  //     const heroText = document.querySelector<HTMLElement>(".hero-text");
  //     const contentBoxes =
  //       document.querySelectorAll<HTMLElement>(".content-box");
  //     const backgroundBoxes =
  //       document.querySelectorAll<HTMLElement>(".background-box");

  //     if (heroText) {
  //       heroText.style.transform = `translateY(-${scrollY * 0.5}px)`;
  //     }

  //     if (contentBoxes) {
  //       contentBoxes.forEach((contentBox) => {
  //         contentBox.style.transform = `translateY(-${scrollY}px)`;
  //       });
  //     }

  //     if (backgroundBoxes) {
  //       backgroundBoxes.forEach((backgroundBox) => {
  //         backgroundBox.style.transform = `translateY(-${scrollY * 0.8}px)`;
  //       });
  //     }

  //     document.body.style.backgroundPositionY = `-${scrollY * 0.2}px`;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const blobs = document.querySelectorAll<HTMLElement>(".hooksMain > div");
  const blue = document.querySelector<HTMLElement>(".colour-tag");

  if (blue) {
    blue.addEventListener("click", () => {
      console.log("test");
      blobs.forEach((blob) => {
        console.log("Changing color for:", blob);
        blob.style.setProperty("background", "blue", "important");
      });
    });
  };

  // const updatePos = (event: MouseEvent): void => {
  //   console.log("test")
  //   const x = event.clientX;
  //   const y = event.clientY;
  //   console.log(x, y)
  //   const target = event.target as HTMLElement;
  //   console.log(target.style.left, target.style.top);
  //   target.style.left = `${x}px`;
  //   target.style.top = `${y}px`;
  //   console.log(target.style.left, target.style.top)
  // }
  
  // const dragElements = document.querySelectorAll('.content-box');
  
  // dragElements.forEach((element) => {
  //   element.addEventListener("mouseup", (event) => updatePos(event as MouseEvent));
  // });

  return (    
    <ParallaxProvider>
      <div className="header">
        <h3>WEBSITE TITLE</h3>
      </div>
      <div className="toggle-blob">
        <label className="switch">
          <input type="checkbox" className="blob-check" />
          <span className="slider"></span>
        </label>
        <p>the blob</p>
      </div>
      <div className="hero-text">
        <p>
          HERO<br></br>TEXT
        </p>
      </div>
      <div className="parallax-layer">
      <Parallax speed={10}>
      <Draggable>
      <div className="content-box box-1">
        <h1>Experimental site</h1>
        <p>Welcome to my experimental website</p>
        <p>
          These text boxes are filled with placeholder text for the time being.
          The content of this website has not yet been decided. The content of
          these text boxes will contain text or information relevant to the
          theme or application of this website.
        </p>
        <button>Button</button>
      </div>
      </Draggable>
      </Parallax>
      </div>
      <Draggable>
      <div className="content-box box-2">
        <h2>Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab
          repellendus voluptatem vero at labore eligendi mollitia quaerat in
          delectus! Quis.
        </p>
        <button>Button</button>
      </div>
      </Draggable>
      <Draggable>
      <div className="content-box box-3">
        <h2>Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab
          repellendus voluptatem vero at labore eligendi mollitia quaerat in
          delectus! Quis.
        </p>
        <button>Button</button>
      </div>
      </Draggable>
      <Draggable>
      <div className="content-box box-4">
        <h2>Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab
          repellendus voluptatem vero at labore eligendi mollitia quaerat in
          delectus! Quis.
        </p>
        <button>Button</button>
      </div>
      </Draggable>
      <Draggable>
      <div className="content-box background-box box-5">
        <h2>Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          libero molestiae hic nobis ipsum culpa eveniet dolores vitae, ab
          repellendus voluptatem vero at labore eligendi mollitia quaerat in
          delectus! Quis.
        </p>
        <button>Button</button>
      </div>
      </Draggable>

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
    </ParallaxProvider>
  );
}


