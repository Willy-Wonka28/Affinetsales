
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/client/supabase';


const Announcements = () => {
  const response = useQuery({
    queryKey: ["ann"],
    queryFn: getAnnouncements,
  });
  
  async function getAnnouncements() {
    const { data, error } = await supabase.from("announcements").select();
    if (error) throw error;
    return data;
  }
  
  let data =  response.data;
  let announcements = data ? [...data].reverse() : [];
  

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Announcements</h1>
        <p className="text-muted-foreground">Stay updated with the latest news and updates</p>
      </div>
      
      <div className="space-y-4">
        {announcements?.map(announcement => (
        <Card key={announcement.id} className={new Date(announcement.date).toDateString() === new Date().toDateString() ? 'border-l-4 border-l-brand-green' : ''}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{announcement.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {new Date(announcement.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {new Date(announcement.date).toDateString() === new Date().toDateString() && (
                    <Badge className="bg-brand-green">New</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{announcement.info}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
