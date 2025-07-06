// Contact.jsx
const Contact = () => {
  return (
    <section className="bg-[#eee3d5] dark:bg-[#2f3d2f] text-bark dark:text-ivory py-20 px-6 border-t border-paleWood dark:border-darkMoss">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="space-y-4">
          <p className="text-lg">
            Email me at: <a href="mailto:bhathal.udaibir@gmail.com" className="text-wood dark:text-moss font-semibold hover:underline">bhathal.udaibir@gmail.com</a>
          </p>
          <p className="text-lg">
            Connect with me on LinkedIn: <a
              href="https://www.linkedin.com/in/udaibir-singh-bhathal-0968401a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wood dark:text-moss font-semibold hover:underline"
            >
              Udaibir Singh Bhathal
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
