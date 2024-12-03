import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   message: "",
// });

// const [status, setStatus] = useState("");

// const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value,
//   });
// };
// const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();

//   emailjs
//     .send(
//       "service_c586ps6", // Replace with your EmailJS service ID
//       "template_z9678s3", // Replace with your EmailJS template ID
//       formData,
//       "vb8wtEqf4g2jpdakK" // Replace with your EmailJS public key
//     )
//     .then(
//       (response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" }); // Clear form
//       },
//       (err) => {
//         console.error("FAILED...", err);
//         setStatus("Failed to send message. Please try again.");
//       }
//     );
// };

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally, you would send the form data to a server, but for this example, we'll just log it.
    console.log("Form submitted:", form);
    alert("Thank you for your message!");
    setForm({ name: "", email: "", message: "" }); // Clear the form after submission
  };

  return (
    <div
      id="contact"
      className="bg-highlight p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10"
    >
      <h2 className="text-3xl font-semibold text-center text-primary mb-6">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-primary  font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-primary font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-accent "
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-primary font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg text-accent"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-violet-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const cardData = [
  {
    id: 1,
    title: "Robotics Club",
    description: "Explore how our students build innovative robots.",
    image: "/images/public-min.jpg",
  },
  {
    id: 2,
    title: "Science Lab",
    description: "Dive into exciting experiments and discoveries.",
    image: "/images/science-lab-min.jpg",
  },
  {
    id: 3,
    title: "Art Gallery",
    description: "Witness stunning artworks by our talented students.",
    image: "/images/art-gallery-min.jpg",
  },
  {
    id: 4,
    title: "Sports Achievements",
    description: "Celebrate our victories in various sports events.",
    image: "/images/sports-day-min.jpg",
  },
  {
    id: 5,
    title: "Cultural Events",
    description: "Relive moments from our vibrant cultural festivals.",
    image: "/images/cultural-event-min.jpg",
  },
  {
    id: 6,
    title: "Technology Showcase",
    description:
      "Experience the latest technological advancements at our campus.",
    image: "/images/technology-showcase-min.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Parent",
    content:
      "Olmazor School has been a transformative experience for my child. The teachers are incredible!",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Student",
    content:
      "Joining Olmazor was the best decision. The robotics club helped me learn so much!",
  },
  {
    id: 3,
    name: "Emily White",
    role: "Teacher",
    content:
      "I am proud to be part of a school that values creativity and innovation.",
  },
  {
    id: 4,
    name: "Liam Brown",
    role: "Student",
    content:
      "The science lab is amazing! I’ve learned so much through hands-on experiments.",
  },
  {
    id: 5,
    name: "Sophia Green",
    role: "Parent",
    content:
      "I love how the school encourages cultural events and creativity in students.",
  },
  {
    id: 6,
    name: "Michael Blue",
    role: "Alumnus",
    content:
      "Olmazor gave me the skills and confidence to excel in university. Thank you!",
  },
  {
    id: 7,
    name: "Olivia Gray",
    role: "Student",
    content:
      "The sports achievements and teamwork spirit at Olmazor are truly inspiring!",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent text-primary">
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center opacity-30"></div>
        <h1 className="text-5xl md:text-6xl font-bold text-highlight z-10">
          Welcome to Olmazor Specialized School
        </h1>
        <p className="text-xl md:text-2xl text-accent mt-4 z-10">
          Where creativity, innovation, and excellence meet.
        </p>
        <div className="mt-8 space-x-4 z-10">
          <a
            href="#showcase"
            className="px-6 py-3 bg-highlight text-primary rounded-lg shadow-lg hover:bg-accent transition"
          >
            Explore Now
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border-2 border-highlight text-highlight rounded-lg hover:bg-highlight hover:text-primary transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Dynamic Cards Section */}
      <div id="showcase" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-highlight mb-6">
            Our Highlights
          </h2>
          <p className="text-accent mb-8">
            Discover the exciting features and activities at our school.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-primary rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-highlight">
                  {card.title}
                </h3>
                <p className="text-accent mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-highlight text-primary py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What People Say</h2>
          <div className="relative flex justify-center items-center">
            <button
              className="absolute left-0 text-accent hover:text-primary"
              onClick={prevTestimonial}
            >
              ❮
            </button>
            <div className="bg-secondary p-6 rounded-lg shadow-lg max-w-lg mx-4 transition-all duration-300">
              <p className="text-lg italic">
                "{testimonials[currentIndex].content}"
              </p>
              <h4 className="mt-4 font-bold text-highlight">
                - {testimonials[currentIndex].name},{" "}
                {testimonials[currentIndex].role}
              </h4>
            </div>
            <button
              className="absolute right-0 text-accent hover:text-primary"
              onClick={nextTestimonial}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
      <ContactForm />
      <br />
      <br />

      {/* Contact Section */}
      {/* <div className="bg-secondary py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-highlight text-center mb-6">
            Get in Touch
          </h2>
          <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-accent rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-accent rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-accent rounded-lg"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-highlight text-primary rounded-lg hover:bg-accent transition"
            >
              Send Message
            </button>
            {status && <p className="text-center text-accent mt-4">{status}</p>}
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
