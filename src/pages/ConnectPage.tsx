import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, AtSign, Phone, MapPin } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

const ConnectPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full py-4 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img
                className="w-20 md:w-30 lg:w-40 xl:w-50 max-w-full h-auto"
                src="/img/logo.png"
                alt="Logo"
              />
            </div>

            <div className="hidden md:flex items-center">
              <NavLink to="/#about" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A]">About Us</NavLink>
              <NavLink to="/#team" className="px-6 py-2 text-[#170C32] hover:text-[#00D78A]">Our Team</NavLink>
              <NavLink to="/#courses" className="px-4 py-2 text-[#170C32] hover:text-[#00D78A]">Our Courses</NavLink>
              <NavLink to="/connect" className="px-6 py-2 text-[#170C32] hover:text-[#00D78A]">Contact</NavLink>
              <NavLink to="/Login" className="px-6 py-2 text-[#170C32] hover:text-[#00D78A]">Login</NavLink>
              <NavLink to="/SignUp" className="px-4 py-2 bg-[#00D78A] text-white rounded-lg hover:bg-opacity-90">Sign Up</NavLink>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for Navbar */}
      <div className="h-20 py-20" />

      {/* Contact Content */}
      <main className="px-4 max-w-4xl mx-auto w-full space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground">Get in touch with our support team</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Other ways to reach us</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex gap-3">
                <div className="p-2.5">
                  <AtSign className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <a href="mailto:support@affinetsales.com" className="text-sm text-blue-600 hover:underline">
                    support@affinetsales.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5">
                  <Phone className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <a href="tel:+11234567890" className="text-sm text-blue-600 hover:underline">
                    +1 (123) 456-7890
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    Monday-Friday, 9am-5pm EST
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-sm">
                    123 Marketing Street<br />
                    Suite 456<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 flex flex-col items-start">
              <img
                className="w-20 md:w-30 lg:w-40 xl:w-50 max-w-full h-auto"
                src="/img/logo.png"
                alt="Logo"
              />
              <p className="mt-4 text-sm text-gray-600">
                Your trusted partner for affiliate marketing and sales growth.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h3 className="font-medium mb-2">Connect</h3>
              <div className="flex gap-4">
                {/* Social Media Icons */}
                {/* Facebook */}
                <a href="#" className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue/20 transition-colors">
                  <svg className="h-5 w-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* Twitter */}
                <a href="#" className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue/20 transition-colors">
                  <svg className="h-5 w-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="bg-brand-blue/10 p-2 rounded-full hover:bg-brand-blue/20 transition-colors">
                  <svg className="h-5 w-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="..." clipRule="evenodd" />
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
};

export default ConnectPage;
