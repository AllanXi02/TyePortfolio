import React from "react";

function Title(props) {
  if (typeof props.text !== "string") {
    console.warn("Warning: text prop is not a string.");
  }

  if (!props.text) {
    console.warn("Warning: text prop is required.");
  }

  React.useEffect(() => {
    document.title = props.text;

    const favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
      favicon.href = `${process.env.PUBLIC_URL}/${props.icon}`;
    }
  }, [props.text, props.icon]);

  return null;
}

export default Title;
