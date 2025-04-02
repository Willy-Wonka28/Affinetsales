
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your dashboard!</p>
        </div>
        <Button className="bg-brand-green hover:bg-brand-green/90">
          Get Access
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Course Progress</CardTitle>
            <CardDescription>Your current learning progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">67%</span>
              <div className="h-2 flex-1 mx-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-brand-green rounded-full" style={{ width: '67%' }} />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">8 of 12 modules completed</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Earnings</CardTitle>
            <CardDescription>Your earnings this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">$1,245</span>
              <span className="text-sm text-green-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                12% from last month
              </span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
            <CardDescription>Your scheduled live sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Advanced Marketing</p>
                  <p className="text-sm text-muted-foreground">Today, 3:00 PM</p>
                </div>
                <Button variant="outline" size="sm">Join</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Q&A Session</p>
                  <p className="text-sm text-muted-foreground">Tomorrow, 1:00 PM</p>
                </div>
                <Button variant="outline" size="sm">Join</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Bonuses Included</CardTitle>
          <CardDescription>Exclusive bonuses available to you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-blue rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">BONUSES INCLUDES</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">–</span>
                  <span>Free Movie App</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">–</span>
                  <span>WhatsApp Spy</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">–</span>
                  <span>DSTV Hack</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">–</span>
                  <span>Canva Pro</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">–</span>
                  <span>How to Unban Any Banned WhatsApp Account</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">–</span>
                  <span>and many more!</span>
                </li>
              </ul>
              <Button className="mt-6 bg-brand-green hover:bg-brand-green/90">
                Get Access
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Latest Announcements</h3>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <p className="font-medium">New Course Released</p>
                  <p className="text-sm text-muted-foreground">We've just released a new course on advanced affiliate marketing strategies.</p>
                  <p className="text-xs text-muted-foreground mt-2">2 days ago</p>
                </div>
                <div className="border rounded-md p-4">
                  <p className="font-medium">Platform Maintenance</p>
                  <p className="text-sm text-muted-foreground">The platform will be undergoing maintenance this weekend. Please plan accordingly.</p>
                  <p className="text-xs text-muted-foreground mt-2">5 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
