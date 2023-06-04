import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing, faMap, faUser } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function AboutUs() {
  const destinations = [
    {
      title: "Tropical Paradise",
      image: "https://wallpaperaccess.com/full/1436516.jpg",
      description: "Explore stunning beaches and indulge in the beauty of lush greenery.",
    },
    {
      title: "City Adventure",
      image:
        "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=",
      description: "Discover the excitement and culture of vibrant city destinations.",
    },
    {
      title: "Mountain Escapes",
      image: "https://www.travellens.co/content/images/2022/12/rm-Rocky-Mountain-National-Park.jpg",
      description: "Embark on thrilling hikes and take in breathtaking mountain views.",
    },
  ];

  const features = [
    {
      title: "24/7 Customer Support",
      icon: faLifeRing,
      description: "We are available round the clock to assist you with any queries or concerns.",
    },
    {
      title: "Customized Itineraries",
      icon: faMap,
      description: "We tailor your travel plans to ensure a personalized and unforgettable experience.",
    },
    {
      title: "Expert Guides",
      icon: faUser,
      description: "Our knowledgeable guides provide valuable insights and enrich your travel experience.",
    },
  ];
  const testimonials = [
    {
      name: "Mosnur Ahmed",
      role: "Developer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor ullamcorper enim, at euismod ipsum pulvinar quis.",
      img: "https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/323271701_1108363963175002_7936387702032165710_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHjUOYkzgD_EB9lkczduCk7SLMZtUqGR4ZIsxm1SoZHhiVf7huL1ET8VRwiiJQGdz9zCi23b-YkFPTiHDbHgxNQ&_nc_ohc=4420HBiY6e8AX84ADtk&_nc_ht=scontent.fdac139-1.fna&oh=00_AfDDj4IUtURyOns8VXlD5kg-KzUIAEo-DRtwEA68C4ydJw&oe=648156B5",
    },
    {
      name: "Laes Uddin",
      role: "Developer",
      testimonial:
        "Vestibulum vel nulla et felis efficitur fermentum eget eu odio. Morbi egestas neque sed purus bibendum, ac ultrices justo bibendum.",
      img: "https://scontent.fdac139-1.fna.fbcdn.net/v/t1.6435-9/147690397_2856881977884415_9116263246161117168_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFdWhTB9R4ccNW2KXqv8U9A4pGUKGpPUe_ikZQoak9R7xFuFnPoiIWs77XUGo2jDSeORyqpE8dPbUWzRPJMDZ5Q&_nc_ohc=6cIQPhqcC40AX-J9hGf&_nc_ht=scontent.fdac139-1.fna&oh=00_AfCYuXk-nL-eEqSB5WBzwuR0t6oj8OYrVd0oN_YS7bZdNA&oe=64A45D74",
    },
    {
      name: "Rashed Khan Jobayer",
      role: "Developer",
      testimonial:
        "Suspendisse id lorem vitae lacus consectetur bibendum ut nec est. Sed tempor iaculis est, nec fermentum libero mattis in.",
    },
    {
      name: "Nusrat Jahan Sona",
      role: "Content Writer",
      testimonial:
        "Nulla facilisi. Aenean sed orci ullamcorper, tempus dui vel, maximus odio. Nam ultricies dui id massa tempor, vitae vestibulum tortor fermentum.",
      img: "https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/311661154_1138062350466199_4986118097612291206_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHMPogO_6RqYH9VxZ9tG9tcTn6_SiQ6blBOfr9KJDpuUKJTfIZe9KaN0oV90noy_fCFwDyGcB6259mmCIK4BDkB&_nc_ohc=G4sZH0SeimgAX9KFBzS&_nc_ht=scontent.fdac139-1.fna&oh=00_AfBGTl7dEB9DaG159DkQE_H53XY0zszkGS4rmh1DB6LZGA&oe=648155A7",
    },
    {
      name: "Farzana Ahamed Rithen",
      role: "Content Writer",
      testimonial:
        "Cras ullamcorper felis a bibendum ultrices. Vivamus ultricies nisi eget ex semper, eget pharetra risus consequat. Nulla facilisi.",
      img: "https://scontent.fdac139-1.fna.fbcdn.net/v/t1.6435-9/84964380_497059621223025_6303279447965433856_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEB_lErgaHJMtJNPnrmZcSC1AXqN4U4uYjUBeo3hTi5iAxYpA6NzQcY2JLckhwCG_EPoiP810x_gGAFUfxVugCz&_nc_ohc=L22KO-JKHbkAX_1iicw&_nc_ht=scontent.fdac139-1.fna&oh=00_AfDfemdh9sKsxtVS0NuVbkMN1irN-tNfIxqVn1TEt8uS3g&oe=64A44BD6",
    },
  ];

  return (
    <>
      <div>
        <Header />

        <section className="py-12 mt-24 ">
          <div className="container mx-auto">
            <h2 className="font-bold  mb-6 text-center text-2xl text-[#2ED89B]">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg">
                  <img
                    className="w-full h-48 object-cover object-center rounded-t-lg"
                    src={destination.image}
                    alt={destination.title}
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-800">{destination.title}</h3>
                    <p className="text-gray-600">{destination.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <h2 className="tfont-bold mb-6 font-bold text-center text-2xl text-[#2ED89B]">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg">
                  <div className="flex items-center justify-center bg-blue-500 rounded-t-lg p-4">
                    <FontAwesomeIcon icon={feature.icon} className="text-white w-12 h-12" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className=" font-bold  mb-6 text-center text-2xl text-[#2ED89B]">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <p className="text-gray-800">{testimonial.testimonial}</p>
                  <div className="flex items-center mt-4">
                    <div className="flex-shrink-0">
                      <img className="w-10 h-10 rounded-full" src={testimonial.img} alt={testimonial.name} />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
