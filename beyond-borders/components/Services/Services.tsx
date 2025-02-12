import Link from "next/link";
import Image from "next/image";
import freightImage from "../../public/Images/freight.jpg";
import warehouseImage from "../../public/Images/warehouse.jpg";
import airfreightImage from "../../public/Images/airfreight.jpg";

const Services = () => {
  const services = [
    {
      image: freightImage,
      title: "Freight Forwarding",
      description: "Efficient and reliable global freight solutions.",
      link: "/freight-forwarding",
    },
    {
      image: warehouseImage,
      title: "Warehousing",
      description: "Secure and scalable storage solutions.",
      link: "/warehousing",
    },
    {
      image: airfreightImage,
      title: "Air Freight",
      description: "Fast and secure air cargo services.",
      link: "/air-freight",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-beige to-white " id="services">
      <div className="max-container padding-container">
        {/* <h2 className="text-4xl font-bold text-center mb-12">We Offer:</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-turquoise p-8 rounded-lg shadow-lg text-center overflow-hidden 
              transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container with Hover Effect */}
              <div className="w-full h-56 relative rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold mt-6 mb-4 group-hover:text-beige transition-all duration-300">
                {service.title}
              </h3>
              <Link
                href={service.link}
                className="inline-block text-black font-semibold border-b-2 border-transparent transition-all duration-300 
                group-hover:border-white group-hover:scale-105"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
       {/* Curved SVG Transition */}
        
    </section>
  );
};

export default Services;
