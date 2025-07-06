// Home.jsx
import USBImage from '../assets/USB.jpeg';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-sand dark:bg-olive text-bark dark:text-ivory px-6 py-24 border-t border-paleWood dark:border-darkMoss"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="w-64 h-64 mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-wood dark:border-moss">
          <img
            src={USBImage}
            alt="Udaibir Singh Bhathal"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl font-semibold mb-4 tracking-tight">
          Hi, I'm Udaibir Singh Bhathal
        </h2>
        <p className="text-lg max-w-xl text-coffee dark:text-[#e2dfd6]">
          Final year BE CSE student at Chitkara University. AIML enthusiast and iOS developer. Currently building the AnkleHeal app for App Store.
        </p>
      </div>
    </section>
  );
};

export default Home;


