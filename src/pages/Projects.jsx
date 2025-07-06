// Projects.jsx
const Projects = () => {
  return (
    <section className="bg-sand dark:bg-olive text-bark dark:text-ivory py-20 px-6 border-t border-paleWood dark:border-darkMoss">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#3e4f3e] border border-wood dark:border-moss rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">AnkleHeal App</h3>
            <p className="text-coffee dark:text-[#e2dfd6]">iOS app for ankle injury recovery using AI-generated insights and physiotherapy guidance.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/UdaibirBhathal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wood dark:text-moss font-semibold hover:underline"
          >
            View more projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
