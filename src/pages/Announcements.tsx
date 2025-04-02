
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const announcements = [
  {
    id: 1,
    title: 'New Course Released: Advanced SEO for Affiliate Marketers',
    content: 'We are excited to announce the release of our latest course on advanced SEO techniques specifically tailored for affiliate marketers. This course covers keyword research, on-page optimization, link building strategies, and much more.',
    date: '2023-06-15',
    isNew: true,
    type: 'Course'
  },
  {
    id: 2,
    title: 'Platform Maintenance Scheduled',
    content: 'We will be performing scheduled maintenance on June 20th from 2:00 AM to 6:00 AM UTC. During this time, the platform may be unavailable. We apologize for any inconvenience this may cause.',
    date: '2023-06-12',
    isNew: true,
    type: 'Maintenance'
  },
  {
    id: 3,
    title: 'New Affiliate Program Partnership',
    content: 'We have established a new partnership with XYZ Company, offering exclusive commission rates for our members. This partnership includes digital products with commission rates up to 70%.',
    date: '2023-06-10',
    isNew: false,
    type: 'Partnership'
  },
  {
    id: 4,
    title: 'Upcoming Webinar: Maximizing Your Affiliate Revenue',
    content: 'Join us for a live webinar on June 25th at 3:00 PM UTC. Our expert panel will discuss proven strategies for increasing your affiliate revenue and answer your questions live.',
    date: '2023-06-05',
    isNew: false,
    type: 'Event'
  },
  {
    id: 5,
    title: 'Important Policy Update',
    content: 'We have updated our affiliate policies. Please review the new guidelines to ensure compliance. The changes primarily affect promotional methods and disclosure requirements.',
    date: '2023-05-28',
    isNew: false,
    type: 'Policy'
  }
];

const Announcements = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Announcements</h1>
        <p className="text-muted-foreground">Stay updated with the latest news and updates</p>
      </div>
      
      <div className="space-y-4">
        {announcements.map(announcement => (
          <Card key={announcement.id} className={announcement.isNew ? 'border-l-4 border-l-brand-green' : ''}>
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
                  {announcement.isNew && (
                    <Badge className="bg-brand-green">New</Badge>
                  )}
                  <Badge variant="outline">{announcement.type}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
