import Link from "next/link";
import Image from "next/image";
import Logist from "../../public/Images/Logistics.jpg";

const AboutUs = () => {
    return (
      <section className="py-16" id="about">
        <div className="max-container padding-container flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Beyond Borders Logistics has grown into a leading provider of global
              logistics solutions. Our mission is to deliver excellence in every shipment, ensuring
              your cargo reaches its destination safely and on time.
            </p>
            <Link
              href="/about"
              className="bg-turquoise text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-turquoise transition-all"
            >
              Learn More
            </Link>
          </div>
          <div className="inline-block shadow-[0px_4px_15px_rgba(64,224,208,0.6)] rounded-lg overflow-hidden">
            <Image
                src={Logist}
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg"
            />
          </div>

        </div>
      </section>
    );
  };

  export default AboutUs;