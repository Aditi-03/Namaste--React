import React from "react";
import ReactDOM from "react-dom";

const title= (
<h1 id="heading">JSX Heading</h1>
);

const HeadingComponent =()=>(<div>
   {title}
<h1>Namaste React Functional Component</h1>
</div>);

    



const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);