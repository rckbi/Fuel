import React, { useEffect, useState } from "react";

function HtmlRenderer() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Replace 'content.html' with the actual path to your HTML file
    fetch("./scorm/content.html")
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
      })
      .catch((error) => {
        console.error("Error loading HTML:", error);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default HtmlRenderer;
