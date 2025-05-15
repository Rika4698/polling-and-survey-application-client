/* eslint-disable react/no-unescaped-entities */




import  { useState, useEffect } from "react";

// Testimonial data
const testimonials = [
  {
    quote:
      "Survey SWift is a godsend! Surveys are easy to make. It's seamless for respondents, and reports are easy to generate. Thank you Survey Swift!",
    name: "Gregory Brock",
    position: "EMERITUS LECTURER, UNIVERSITY OF KENTUCKY",
    image: "https://i.ibb.co/NmQpMC3/wepik-export-20231109102749h-Uhr.png/50",
  },
  {
    quote: "Survey Swift had great functions that made it easy to organize my information and conduct statistical analysis smoothly and efficiently.",
    name: "David Johnson",
    position: "FORMER UNDERGRADUATE - NYU",
    image: "https://i.ibb.co/0n6HfWq/wepik-export-20231109102824kuu-C.png/50",
  },
  {
    quote:
      "We are very pleased with the Survey product from Survey Swift. Simple to use with excellent support.",
    name: "Jane Smith",
    position: "CO-FOUNDER - MARKET DOJO",
    image: "https://i.ibb.co/sF3x7dX/wepik-export-20231109102936x-Mh8.jpg/50",
  },
  {
    quote:
      "I'm impressed with the quality of survey and their attention to detail. Highly recommended! 10/10",
    name: "Jarin Smith",
    position: "Marketing Manager",
    image: "https://i.ibb.co/j3x4d3R/wepik-export-20231109103145-I7-Pj.png/50",
  },
];

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const totalTestimonials = testimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, [totalTestimonials]);

    const fadeInUp = {
        animation: 'fadeInUp 0.8s ease-out'
    };

    return (
        <div className="py-16 bg-white dark:bg-zinc-700  ">
            <div className="flex flex-col items-center justify-center">
                <h2 className="font-semibold w-full text-center text-3xl md:text-3xl lg:text-5xl text-blue-600 dark:text-blue-500 font-serif">
                    Client <span className="text-purple-700 dark:text-purple-400">Testimonials</span>
                </h2>
                <p className="text-sm flex mt-3 text-center text-slate-800 dark:text-slate-300 font-serif">
                    Discover What Our Clients Say
                </p>
            </div>

            <div className="testimonial-carousel flex overflow-x-hidden relative mt-10 ">
                {testimonials.map((testimonial, index) => {
                    const isVisible = index === currentTestimonial;
                    return (
                        <div
                            key={index}
                            className="testimonial-card w-full flex-shrink-0 snap-start px-4"
                            style={{ display: isVisible ? 'block' : 'none' }}
                        >
                            <div className="bg-purple-100 p-8 rounded-lg shadow-md mx-auto max-w-xl  border">
                                <p
                                    className="text-gray-600 text-lg mb-4"
                                    style={isVisible ? fadeInUp : {}}
                                >
                                   <span className="text-xl  font-semibold ">"</span> <span className="font-bold text-blue-600">{testimonial.quote}</span> <span className="text-xl  font-semibold ">"</span> 
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={`Client ${index + 1}`}
                                        className="rounded-full w-12 h-12 mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-gray-500 font-medium text-sm">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Testimonial;
