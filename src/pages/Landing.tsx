import React from 'react';
import { Menu, X, ChevronDown, ArrowRight, BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {TestimonialCard} from  '@/components/TestimonialCard';
import filler_image from '/img/filler_image.webp';


const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Coach",
    bio: "Former fintech executive with 15 years of experience in digital transformation",
    image: filler_image
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
    image: filler_image
  }
];

const features = [
  {
    title: "500K in 30 Days Challenge – Fast & Easy Blueprint",
    description: "Ready to make your first 500K? This comprehensive course dives deep into the world of affiliate marketing, revealing the strategies and secrets that can help you consistently earn up to 500K every month. Whether you're a beginner or have some experience, this challenge equips you with actionable steps and insider tips to transform your affiliate marketing journey on Affinetsales.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
  },
  {
    title: "Start WhatsApp TV Business & Earn 300K+ Monthly",
    description: "Ever wondered how to build a large, engaged audience on WhatsApp? This course unveils the powerful secrets behind growing your WhatsApp TV from scratch to over 5,000 active viewers. Learn the exact strategies that the pros won't tell you, and discover how to monetize your audience for maximum profit. This method is tried, tested, and proven to work!",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
  },
  {
    title: "Instagram Ads Exposed – Secrets the Gurus Don’t Tell You",
    description: "Instagram is a goldmine for marketers, and this course reveals the hidden secrets to running successful ads that convert. Learn how to create compelling ads, target the right audience, and scale your campaigns for explosive growth. By the end of this course, you'll have the tools and knowledge to dominate Instagram ads like a pro.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
  },
  {
    title: "Step-by-Step Facebook Ads That Actually Convert",
    description: "Facebook remains one of the most powerful advertising platforms in the world. This workshop takes you through every step of creating, optimizing, and scaling profitable Facebook ad campaigns. You'll learn how to reach your target audience, craft irresistible ads, and turn clicks into conversions. Whether you're new to Facebook ads or looking to improve your results, this course has you covered.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
  },
  {
    title: "WhatsApp Automation Secrets – Save Time & Close More Sales",
    description: "Automation is key to scaling your business, and this course shows you how to leverage WhatsApp automation to streamline your operations. Learn how to set up automated responses, schedule messages, and manage your contacts efficiently. This course is perfect for anyone looking to save time and increase productivity while still providing excellent customer service.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
  },
  {
    title: "Dominate TikTok Ads – From Beginner to Expert",
    description: "Lead generation is the lifeblood of any business, and this course teaches you how to attract and convert leads without spending a dime on ads. Learn proven strategies for generating organic traffic, building relationships, and nurturing leads until they're ready to buy. This course is ideal for entrepreneurs looking to grow their business sustainably.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
  },
];

const faqs = [
  {
    question: "How soon can I start earning money?",
    answer: "You can begin earning as soon as you start applying the skills you learn. The more you practice, the faster you'll see results."
  },
  {
    question: "Why is the price so affordable if the program offers so much?",
    answer: "Over the years, we've realized that many people are passionate about learning and eager to change their financial status, but the registration fee can be a significant barrier. That’s why we’ve made the program available at this affordable price—to ensure that more people can access it. Our goal is to equip you with profitable skills that, when applied correctly, can consistently earn you between 300k-500k+ every month, even as a newbie."
  },
{
  question: "Is there any guarantee of success?",
  answer: "We don't offer guarantees because your results will depend on your commitment to applying what you learn. The knowledge we provide is powerful, but its effectiveness is up to you. However, if you can follow our step-by-step guide, there’s a strong chance that making money online will simply be a matter of applying the secrets we’ll expose you to on our platform."
},
{
  question: "What if I need help during the training?",
  answer: "We provide ongoing support to help you through any challenges. If you have questions or need clarification, our team is here to guide you every step of the way."
},
{
  question: "How do I know this is legitimate?",
  answer: "We are registered with the Corporate Affairs Commission (CAC) and the Economic and Financial Crimes Commission (EFCC). We're also committed to teaching you practical skills that you can immediately apply. This isn't about quick fixes or false promises; your success depends on your effort and application of what you learn."
},
{
  question: "Where will the training take place?",
  answer: "The training sessions are hosted in the classroom section on our platform. You'll need your smartphone and an internet connection to access the classes and materials. We also offer extra classes on WhatsApp, YouTube live sessions, and you will have access to Free Mentorship all through as a registered member."
},
{
  question: "Do I need a laptop or computer for the training?",
  answer: "A smartphone is sufficient for most of the tasks you'll be learning. Our courses are designed to be accessible, regardless of your device."
},
{
  question: "How long will the training take?",
  answer: "The training is delivered through pre-recorded videos that you can watch at your convenience. This allows you to learn at your own pace, whenever you have the time."
},
{
  question: "What makes this course different from others?",
  answer: "We've designed our program to be as beginner-friendly as possible. Many of our trainers started from scratch themselves, so they understand the challenges you'll face and how to overcome them."
},
{
  question: "After the registration fee, will I need to pay any additional fees",
  answer: "No, you won't be required to pay any additional fees. The registration fee is a one-time payment that grants you access to all the courses and lifetime online training with us, as long as you remain a registered member of Affinetsales."
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

            
            <div className="hidden md:flex items-center">
            <a href="#about" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">About Us</a>
              <a href="#team" className="px-6 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Our Team</a>
              <a href="#courses" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Our Courses</a>
              <NavLink to="/connect" className="px-6 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Contact</NavLink>
              <NavLink to="/Login"className="px-6 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">
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
              <a href="https://affinetsales.vercel.app/#about" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">About Us</a>
              <a href="https://affinetsales.vercel.app/#team" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Our Team</a>
              <a href="https://affinetsales.vercel.app/#courses" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Our Courses</a>
              <NavLink to="/connect" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">Contact</NavLink>
              <NavLink to="/Login"className="px-6 py-2 text-[#170C32] hover:text-[#00D78A] transition-colors">
                Login
             </NavLink>
              <NavLink to="/SignUp" className="px-4 py-2 bg-[#00D78A] text-white rounded-lg hover:bg-opacity-90 transition-colors">
                Sign Up
              </NavLink>
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

    {/* About Section */}
    <section id="about" className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#170C32] mb-14">About Us</h2>
        <div>
          <p className='text-lg text-center px-16 text-gray-600'>
            In a world where the cost of living keeps rising, it can feel impossible to stay ahead.
            But with Affinetsales, you can turn this challenge into an opportunity. We’re here to
            help you not only keep up but excel.
            At Affinetsales, we believe that financial independence is within everyone's reach.
            Our platform is designed to provide you with the skills and strategies needed to
            generate significant income online. From learning digital skills to reaching out to
            customers who are ready to pay well, and even mastering the secrets of closing sales
            as an affiliate marketer—we cover it all.</p>
        </div>
        </div>
    </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#170C32] mb-14">Meet Our Team</h2>
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
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#170C32] mb-16">Course Catalog</h2>
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

      <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-[#170C32] mb-14">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6 px-8">
      <TestimonialCard
        name="Favour"
        position="Student"
        quote="I had the privilege of Oluwatobi(Brains TV) three years ago, and it was a turning point in my life. Through his guidance, I acquired a range of valuable skills and discovered the world of affiliate marketing. I also started earning a steady income alongside him. His mentorship and expertise in affiliate marketing have been instrumental."
      />
                
      <TestimonialCard
        name="Ayo"
        position="Founder, Ayomzzy Tech/Media"
        quote="I made 1 million in 3 months after learning affiliate marketing from Oluwatobi. One key thing I learned from him turned me into the millionaire I am today."
      />
                
      <TestimonialCard
        name="Jennifer"
        position="Student"
        quote="I've always wanted to make money online but was scared of getting scammed until I met Brains TV. At first, I had my doubts, but he proved them wrong. I made my first 30k within a few days of working with him, and I've never regretted it since."
      />
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
      
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 flex justify-center items-center">
            <div>
            <img
              className="w-20 md:w-30 lg:w-40 xl:w-50 max-w-full h-auto"
              src="/img/logo.png"
              alt="Logo"
              />
              </div>
            <p className="mt-4 md:mt-0 text-sm text-gray-600">
              Your trusted partner for affiliate marketing and sales growth.
            </p>
          </div>  
          
          <div id="contact" className="flex justify-center items-center ">
            <h3  className="font-medium mr-6">Connect</h3>
            <div className="flex gap-4">
                <a href="#" className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue/20 transition-colors">
                  <svg className="h-5 w-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue/20 transition-colors">
                  <svg className="h-5 w-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue/20 transition-colors">
                  <svg className="h-5 w-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} AffinetSales. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Landing