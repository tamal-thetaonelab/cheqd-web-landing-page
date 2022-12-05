import React from "react";

export default function () {
  const embeddedCode = () => {
    return {
      __html: `<iframe src="https://meetings-eu1.hubspot.com/tamal" 
                  style="border: none;height: 90vh;width: 100%;"/>`,
    };
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={embeddedCode()} />
    </div>
  );
}
