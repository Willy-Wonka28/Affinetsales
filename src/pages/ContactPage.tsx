
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { AtSign, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground">Get in touch with our support team</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Please provide as much detail as possible..."
                className="min-h-[150px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full sm:w-auto bg-brand-green hover:bg-brand-green/90">Send Message</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Other ways to reach us</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-3">
              <div className="bg-brand-blue/10 p-2.5 rounded-full">
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
              <div className="bg-brand-blue/10 p-2.5 rounded-full">
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
              <div className="bg-brand-blue/10 p-2.5 rounded-full">
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
            
            <div className="border-t pt-6">
              <p className="font-medium mb-2">Connect With Us</p>
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
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">How do I join the affiliate program?</h3>
              <p className="text-sm text-muted-foreground">
                You can join our affiliate program by creating an account and completing the application form in your dashboard.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">When do I receive my affiliate payments?</h3>
              <p className="text-sm text-muted-foreground">
                Payments are processed on the 15th of each month for the previous month's earnings, provided you meet the minimum payout threshold.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">What is the commission structure?</h3>
              <p className="text-sm text-muted-foreground">
                Our standard commission rate is 30%, with higher rates available for top-performing affiliates.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Do you offer promotional materials?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we provide a variety of banners, landing pages, and email templates that you can use in your marketing efforts.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
