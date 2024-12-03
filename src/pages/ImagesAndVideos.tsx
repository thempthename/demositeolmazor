const ImagesAndVideos = () => {
  const gallery = [
    { src: "/images/public-min.jpg", alt: "Robotics Club" },
    { src: "/images/science-lab-min.jpg", alt: "Science Lab" },
    { src: "/images/art-gallery-min.jpg", alt: "Art Gallery" },
    { src: "/images/pic1-min.jpg", alt: "Pic1" },
    { src: "/images/pic2-min.jpg", alt: "Pic2" },
    { src: "/images/pic6-min.jpg", alt: "Pic6" },
    { src: "/images/pic3-min.jpg", alt: "Pic3" },
    { src: "/images/cultural-event-min.jpg", alt: "Cultural Event" },
    { src: "/images/sports-day-min.jpg", alt: "Sports Day" },
    { src: "/images/pic4-min.jpg", alt: "Pic4" },
    { src: "/images/pic5-min.jpg", alt: "Pic5" },
    { src: "/images/pic7-min.jpg", alt: "Pic7" },
  ];

  return (
    <div className="bg-primary py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-highlight text-center mb-8">
          Images & Videos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gallery.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-highlight mb-4">
            Watch Our Journey
          </h2>
          <iframe
            className="w-full h-64 md:h-96 rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ImagesAndVideos;
