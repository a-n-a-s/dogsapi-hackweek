import { useState, useEffect } from "react";

function App() {
  const [dogs, setDogs] = useState([]);
  const [breedList, setBreedList] = useState([]);

  const getRandom5Dogs = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
    const data = await response.json();
    setDogs(data.message);
  };
  const getBreedList = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.entries(data.message).flatMap(([breed, subBreeds]) =>
      subBreeds.length > 0
        ? subBreeds.map((subBreed) => `${breed}/${subBreed}`)
        : breed
    );
    setBreedList(breeds);
  };

  const getDogsOfBreed = async (breed) => {
    try {
      const apiPath = breed.split("/").join("/");
      const response = await fetch(
        `https://dog.ceo/api/breed/${apiPath}/images`
      );
      if (!response.ok) throw new Error("Failed to fetch breed");
      const data = await response.json();
      setDogs(data.message.slice(0, 20)); // Show first 20 results
    } catch (error) {
      console.error("Error fetching breed:", error);
      setDogs([]); // Clear dogs on error
    }
  };

  useEffect(() => {
    getBreedList();
    getRandom5Dogs();
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-center bg-[#F7BC81] h-24 text-5xl gap-4">
        <p>DOGS </p>
        <p>ALBUM</p>
      </div>
      <div className="w-3/5 mx-auto ">
        <select
          className="w-full p-4 text-2xl border-[#f7bc81] border-2 m-2"
          onChange={(e) => getDogsOfBreed(e.target.value)}
        >
          <option value="" disabled>
            Select a breed
          </option>
          {breedList.map((breed) => (
            <option key={breed} value={breed}>
              {breed.split("/").reverse().join(" ").toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="container grid grid-cols-3 gap-8 w-4/5 mx-auto py-8">
        {dogs.map((dog, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="relative group overflow-hidden rounded-lg shadow-lg border-4 border-white bg-white">
              <img
                src={dog}
                alt="dog"
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-8 border-transparent group-hover:border-[#f7bc81] transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-2 w-full mx-auto flex items-center justify-center">
        <button
          className="bg-[#f7bc81] text-xl px-8 py-4 rounded-lg cursor-pointer"
          onClick={getRandom5Dogs}
        >
          Refresh
        </button>
      </div>
    </>
  );
}

export default App;
