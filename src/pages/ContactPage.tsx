
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
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Other ways to reach us</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col lg:flex-row items-center lg:justify-center gap-4">
            <div className="flex gap-3">
              <div className=" p-2.5">
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
              <div className=" p-2.5 ">
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
    </div>
  );
};

export default ContactPage;
