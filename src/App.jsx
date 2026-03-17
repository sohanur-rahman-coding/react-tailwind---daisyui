import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/daisy nav/DaisyNav";
import Navbar from "./components/daisy nav/Navbar";
import PricingOptions from "./components/pricing options/pricingOptions";

const PricingPromise = fetch("PricingOptions.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
