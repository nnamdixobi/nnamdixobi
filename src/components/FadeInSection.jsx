import React from "react";

export default function FadeInSection(props) {
  const [isVisible] = React.useState(false);
  const domRef = React.useRef();
 
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}