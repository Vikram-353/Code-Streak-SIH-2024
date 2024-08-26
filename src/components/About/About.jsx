import { React } from "react";
import coal from "../images/coal.jpg";
export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={coal} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Mining Manager{" "}
            </h2>
            <p className="mt-6 text-gray-600 text-justify">
              Welcome to Mining Manager, a leading name in the coal mining
              industry committed to delivering excellence through innovation,
              safety, and sustainability. With decades of experience and a deep
              understanding of the industry, we specialize in efficient coal
              extraction and management processes that meet the highest
              standards of quality and environmental responsibility.
            </p>
            <p className="mt-4 text-gray-600 text-justify">
              Our operations are driven by cutting-edge technology and a
              dedicated team of experts who work tirelessly to ensure the safe
              and efficient extraction of coal, while also prioritizing the
              well-being of our workers and the communities we serve. At Mining
              Manager, we believe in the importance of responsible mining
              practices that contribute to the long-term sustainability of our
              planet's resources.
            </p>
            <p className="mt-6 text-gray-600 text-justify">
              We are more than just a coal mining company; we are partners in
              progress, providing energy solutions that power industries and
              fuel economic growth. Our commitment to innovation, safety, and
              environmental stewardship makes us a trusted leader in the mining
              sector, constantly pushing the boundaries of what's possible in
              the pursuit of excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
