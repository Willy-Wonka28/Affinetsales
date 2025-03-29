import React from 'react';
import { Menu, X, ChevronDown, ArrowRight, BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';


const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Coach",
    bio: "Former fintech executive with 15 years of experience in digital transformation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Ogbeide Oluwatobi",
    role: "CEO",
    bio: "Tech veteran with background in AI and blockchain technologies",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Coach",
    bio: "Award-winning UX designer passionate about creating intuitive experiences",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  }
];

const features = [
  {
    title: "Revolutionary Technology",
    description: "Our AI-powered platform analyzes millions of data points in real-time to provide you with actionable insights.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing tools and workflows without any hassle. We support all major platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and security measures to keep your data safe and compliant with regulations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop"
  }
];

const faqs = [
  {
    question: "How does the platform work?",
    answer: "Our platform uses advanced AI algorithms to process and analyze data in real-time, providing instant insights and recommendations."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support through multiple channels including live chat, email, and phone."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use enterprise-grade encryption and follow strict security protocols to protect your data."
  },
  {
    question: "Can I integrate with other tools?",
    answer: "Absolutely! We offer seamless integration with most popular business tools and platforms."
  }
];

function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full py-4 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
          <div className="flex justify-center items-center">
          <img
            className="w-20 md:w-30 lg:w-40 xl:w-50 max-w-full h-auto"
            src="/img/logo.png"
            alt="Logo"
          />
        </div>

            
            <div className="hidden md:flex items-center space-x-4">
              <a href="#team" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Our Team</a>
              <NavLink to="" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Contact</NavLink>
              <NavLink to="/Login"className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">
                Login
             </NavLink>
              <NavLink to="/SignUp" className="px-4 py-2 bg-[#00D78A] text-white rounded-lg hover:bg-opacity-90 transition-colors">
                Sign Up
              </NavLink>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#team" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Our Team</a>
              <NavLink to="" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Contact</NavLink>
              <button className="block w-full px-4 py-2 text-[#170C32] hover:text-[#00D78A]">
                Login
              </button>
              <button className="block w-full px-4 py-2 bg-[#00D78A] text-white rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-35 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl mt-4 md:text-6xl font-bold text-[#170C32] mb-6 animate-fade-in">
          Tired Of Financial Struggles?
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Master Profitable Online Businesses with{" "}
          <span className="text-[#00D78A] font-bold">Affinetsales</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">

          <div className="flex justify-evenly items-center">
            <BadgeCheck className="w-7 h-7 sm:w-10 sm:h-10 mx-2 text-[#00D78A]" />
            <p className="text-lg font-medium text-gray-700 mt-2">
              Zero Coding Skills Required
            </p>
          </div>

          <div className="flex justify-evenly items-center text-center">
            <BadgeCheck className="w-7 h-7 sm:w-10 sm:h-10 mx-2 text-[#00D78A]" />
            <p className="text-lg font-medium text-gray-700 mt-2">
              Personalized Learning
            </p>
          </div>

          <div className="flex items-center text-center">
            <BadgeCheck className="w-7 h-7 sm:w-10 sm:h-10 mx-2 text-[#00D78A]" />
            <p className="text-lg font-medium text-gray-700 mt-2">
              Proven Business Strategies
            </p>
          </div>
        </div>

        <Link to="/signup"><button className="px-8 py-4 bg-[#00D78A] text-white rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
          Get Started Now
        </button></Link>
      </div>
    </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#170C32] mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-4 relative w-48 h-48 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#170C32] mb-2 text-center">{member.name}</h3>
                <p className="text-[#00D78A] font-medium mb-3 text-center">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#170C32] mb-16">How It Works</h2>
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="md:w-1/2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-[#170C32] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#170C32] mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-medium text-[#170C32]">{faq.question}</span>
                  <ChevronDown
                    className={`transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-15 bg-[#170C32]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already transforming their operations with our platform
          </p>
          <Link to="/SignUp"><button className="px-8 py-4 bg-[#00D78A] text-white rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center mx-auto">
            Sign Up Now
            <ArrowRight className="ml-2" />
          </button></Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-3">
          <div className="py-3 text-center">
            <p className="text-gray-600">© 2025 Affinetsales. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}

export default Landing