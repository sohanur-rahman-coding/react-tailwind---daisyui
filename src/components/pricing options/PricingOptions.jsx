import React, { use } from "react";

const PricingOptions = ({ PricingPromise }) => {
  const PricingData = use(PricingPromise);
  console.log(PricingData);
  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default PricingOptions;
