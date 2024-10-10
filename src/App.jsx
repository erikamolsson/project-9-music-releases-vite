import data from "./data.json";
import Header from "./components/Header.jsx";
import MusicGallery from "./components/MusicGallery.jsx";

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <MusicGallery />
    </>
  );
};
