
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ClassroomPage = () => {
  const courses = [
    {
      id: 1,
      title: 'Affiliate Marketing Fundamentals',
      description: 'Learn the basics of affiliate marketing and start your journey.',
      progress: 85,
      modules: 10,
      completed: 8,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Advanced Traffic Generation',
      description: 'Master the art of driving targeted traffic to your affiliate offers.',
      progress: 40,
      modules: 8,
      completed: 3,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Conversion Optimization',
      description: 'Learn how to maximize your conversion rates and earnings.',
      progress: 20,
      modules: 6,
      completed: 1,
      image: 'https://images.unsplash.com/photo-1607703703674-df96af81dffa?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Email Marketing for Affiliates',
      description: 'Build and monetize an email list as an affiliate marketer.',
      progress: 0,
      modules: 8,
      completed: 0,
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Classroom</h1>
        <p className="text-muted-foreground">Continue your learning journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map(course => (
          <Card key={course.id} className="overflow-hidden">
            <div className="aspect-video w-full bg-gray-100 relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="font-bold text-lg">{course.title}</h3>
                <div className="flex items-center mt-2">
                  <div className="h-1.5 flex-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-green rounded-full" 
                      style={{ width: `${course.progress}%` }} 
                    />
                  </div>
                  <span className="ml-2 text-sm">{course.progress}%</span>
                </div>
              </div>
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
              <p className="text-xs">{course.completed} of {course.modules} modules completed</p>
              <button className="w-full mt-4 py-2 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-md transition-colors">
                {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClassroomPage;
