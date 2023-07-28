import React from "react";

function Covidtext() {
  return (
    <>
      <div className="container">
        <h1>Large Grid</h1>
        <p>
          The following example will result in a 25%/75% split on small devices,
          a 50%/50% split on medium devices, and a 33%/66% split on large
          devices. On extra small devices, it will automatically stack (100%).
        </p>
        <p>Resize the browser window to see the effect.</p>
        <div className="row">
          <div
            className="col-sm-3 col-md-6 col-xl-4"
            style={{backgroundColor:"yellow"}}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div
            className="col-sm-9 col-md-6 col-xl-8"
            style={{backgroundColor:"pink"}}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </div>
      </div>
    </>
  );
}

export default Covidtext;
