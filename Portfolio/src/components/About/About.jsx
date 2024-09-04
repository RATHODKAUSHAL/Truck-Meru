import React from "react";
import Footer from "../layout/Footer/Footer";


const TeamMember = ({ name, image }) => (
    <div className="rounded-lg p-4 ">
      <img src={image} alt={name} className="rounded-lg mb-2 h-72 w-60" />
      <p className="text-center font-medium">{name}</p>
    </div>
  );


const About = () => {
    const teamMembers = [
        {
          name: "Jaswant Singh",
          image: "https://truckmeru.com/front/assets/img/team/jaswant.jpeg", // Replace with actual path
        },
        {
          name: "Akash Patel",
          image: "https://truckmeru.com/front/assets/img/team/akash.jpeg", // Replace with actual path
        },
      ];

  return (
    <div>
      <section className="pt-5">
        <div className="bg-gray-100 text-gray-700 py-48 ">
          <div className="font-bold mx-auto text-center text-5xl">
            <h1>About</h1>
          </div>
          <div className="pt-2 text-center text-lg">
            <a href="/" className="hover:text-red-600">Home</a>
            <span className="text-gray-500"> &#62; </span>
            <a href="/about">About us</a>
          </div>
        </div>

        <div className="py-12">
          <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-row">
         <div>
         <h2 className="text-sm font-bold text-red-600 uppercase mb-2">
                Meet the Team
              </h2>
         <p className="text-3xl font-bold mb-4 text-gray-600">
                Save your time  
              </p>
         <p className="text-3xl font-bold mb-4 text-gray-600">
         and money by  choosing our
              </p>
         <p className="text-3xl font-bold mb-4 text-gray-600">
         professional team.
              </p>
              <button className="bg-red-600  text-white py-2 px-4 rounded-full hover:bg-red-700">
                See All Members
              </button>
          
         </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
            {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} image={member.image} />
          ))}
            </div>
            
              
              
            </div>
          </div>
        </div>
      </section>


      


{/* What we do  */}
      <section className="py-20">
          <div className='container mx-auto px-4 text-center'>
          <p className="text-gray-500 uppercase tracking-wide font-semibold mb-2">What We Do?</p>
            <h2 className="text-3xl font-bold mb-12">Our logistics service is designed just for <p>
                    you, meeting all your needs.
                </p>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8  col-md-6 col-xl-6'> 
            <div className="bg-white p-6 rounded-lg shadow-xl">
                    <h3 className="text-xl font-semibold mb-4">Full Load Truck Booking</h3>
                    <p>Easily book a full truck for efficient, reliable, and secure
                    <p>transportation of your goods.</p>
                    </p>
                </div>
                {/* <!-- Part Load Truck Booking --> */}
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <h3 className="text-xl font-semibold mb-2">Part Load Truck Booking</h3>
                    <p>Easily book part load trucks for flexible and reliable transportation of your goods.</p>
                </div>
            </div>
          </div>
        </section>


        <section className="py-14 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-row">
            {/* <!-- Section Header --> */}
            <div className="mb-8">
                <h2 className="text-sm font-bold text-gray-500 uppercase mb-2">WHY CHOOSE US?</h2>
                <h3 className="text-3xl font-bold mb-4">Reliable, efficient, and personalized transport solutions—choose TruckMeru today.</h3>
                <p className="mb-6">
                    Choose TruckMeru for unparalleled reliability, timely deliveries, and a commitment to excellence in transport services. Your journey matters to us, ensuring seamless transportation with every mile traveled.
                </p>
                <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900">
                    More Details
                </button>
            </div>

            {/* <!-- Feature Boxes --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-2">
                {/* <!-- Feature Box 1 --> */}
                <div className="p-6 rounded-lg text-gray-600 shadow-md bg-yellow-50">
                    <h4 className="font-semibold mb-2">Online Booking</h4>
                    <p>Easy booking online for hassle-free and convenient transportation services.</p>
                </div>
                {/* <!-- Feature Box 2 --> */}
                <div className="p-6 rounded-lg text-gray-600 shadow-md  bg-red-50">
                    <h4 className="font-semibold mb-2">Best price guarantee</h4>
                    <p>Exceptional value for your transportation requirements.</p>
                </div>
                {/* <!-- Feature Box 3 --> */}
                <div className="p-6 rounded-lg text-gray-600 shadow-md bg-green-50">
                    <h4 className="font-semibold mb-2">Daily Updates</h4>
                    <p>Stay informed with real-time information for seamless journeys.</p>
                </div>
                {/* <!-- Feature Box 4 --> */}
                <div className="p-6 rounded-lg text-gray-600 shadow-md bg-pink-50">
                    <h4 className="font-semibold mb-2">24/7 Support</h4>
                    <p>Always here for your transportation needs, anytime, anywhere.</p>
                </div>
            </div>
        </div>
    </section>
        <Footer/>
    </div>
  );
};

export default About;
