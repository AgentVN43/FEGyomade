import React, { useState, useEffect } from "react";

const AnimatedContent = () => {
  const contentList = [
    {
      text: "100% Happy return policy",
      link: "about.html",
      buttonText: "Learn More"
    },
    {
      text: "Big sale offer with 50%",
      link: "shop.html",
      buttonText: "Learn More"
    },
    {
      text: "New arrival item for you",
      link: "shop.html",
      buttonText: "Learn More"
    }
  ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex(
        (currentContentIndex + 1) % contentList.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentContentIndex, contentList.length]);

  return (
    <div className="cd-words-wrapper text-center">
      {contentList.map((content, index) => (
        <b
          key={index}
          className={`cs_text_slide cs_medium ${
            index === currentContentIndex ? "is-visible" : ""
          }`}
        >
          <span>{content.text}</span>
          <span>
            <a href={content.link} className="cs_text_slide_btn">
              {content.buttonText}
            </a>
          </span>
        </b>
      ))}
    </div>
  );
};

export default AnimatedContent;
