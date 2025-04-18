
import React, {useEffect, useContext} from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/client/supabase';
import {userContext} from '@/App'

const Dashboard = () => {
  const {userName} = useContext(userContext);
  

  return (
    <div className="space-y-6">
      <div className="flex flex-col bg-brand-blue rounded-lg text-white py-4 px-4 md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Good day, {userName}</h1>
          <p className="text-white text-muted-foreground">Welcome to your dashboard!</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </ul>
            </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
