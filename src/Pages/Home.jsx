import React from "react";
import image from "../images/image-omelette.jpeg";

function Home() {
  return (
    <div className="container flex flex-col min-h-screen mx-auto md:mt-5">
      <div className="flex flex-col bg-white md:px-20 md:py-14 rounded-xl">
        {/* image section */}
        <img
          src={image}
          alt="recipie poster"
          className="w-full  md:h-[550px] h-[200px] sm:h-[300px] rounded-xl "
        />
        {/* heading and descriptions */}
        <div className="px-5">
          <div className="mt-5 ">
            <h1 className="text-4xl md:text-6xl font-youngSerif">
              Simple Omelette Recipe{" "}
            </h1>
            <p className="mt-5 text-sm font-medium md:text-xl font-Raleway">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          {/* section 2 */}
          <div className="p-10 mt-5 bg-purple-50 rounded-xl ">
            <h1 className="text-2xl font-semibold text-purple-900 font-roboto">
              Preparation Time
            </h1>
            <ul className="flex flex-col mt-3 text-lg list-disc gap-y-3 pl-7">
              <li>
                <strong>Total:</strong> Approximately 10 minutes
              </li>
              <li>
                <strong>Preparation:</strong> 5 minutes
              </li>
              <li>
                <strong>Cooking: </strong>5 minutes
              </li>
            </ul>
          </div>
          {/* section 3 */}
          <div className="py-10 mt-5 border-b-2 border-gray-300">
            <h1 className="text-4xl font-youngSerif text-amber-800">
              Ingridients
            </h1>
            <ul className="flex flex-col pl-6 mt-3 text-xl list-disc gap-y-3">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          {/* section 4 */}
          <div className="py-10 mt-5 border-b-2 border-gray-300">
            <h1 className="text-4xl font-youngSerif text-amber-800">
              Instructions
            </h1>
            <ul className="flex flex-col pl-6 mt-3 text-xl list-decimal gap-y-3">
              <li>
                <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>

              <li>
                <strong>Heat the pan:</strong>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>

              <li>
                <strong>Cook the omelette:</strong>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>

              <li>
                <strong>Add fillings (optional):</strong>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>

              <li>
                <strong> Fold and serve:</strong>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </li>

              <li>
                <strong>Enjoy:</strong>
                Serve hot, with additional salt and pepper if needed.
              </li>
            </ul>
          </div>
          {/* Section 5 */}
          <div className="py-10 mt-5">
            <h1 className="text-4xl font-youngSerif text-amber-800">
              Instructions
            </h1>
            <p className="mt-3 text-xl">
              The table below shows nutritional values per serving without the
              additional fillings:
            </p>
            <table className="w-full mt-4 font-roboto">
              <tr className="py-3 text-xl border-b-2 border-b-gray-300">
                <td className="px-4 py-3">Calories</td>
                <td className="px-4 py-3 font-black text-amber-900 ">
                  277kcal
                </td>
              </tr>
              <tr className="py-3 text-xl border-b-2 border-b-gray-300">
                <td className="px-4 py-3">Carbs</td>
                <td className="px-4 py-3 font-black text-amber-900 ">0g</td>
              </tr>
              <tr className="py-3 text-xl border-b-2 border-b-gray-300">
                <td className="px-4 py-3">Protein</td>
                <td className="px-4 py-3 font-black text-amber-900 ">20g</td>
              </tr>
              <tr className="py-3 text-xl border-b-2 border-b-gray-300">
                <td className="px-4 py-3">Fat</td>
                <td className="px-4 py-3 font-black text-amber-900 ">22g</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
