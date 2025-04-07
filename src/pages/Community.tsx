
// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

// const discussionPosts = [
//   {
//     id: 1,
//     author: {
//       name: 'Alex Johnson',
//       avatar: 'AJ',
//       role: 'Affiliate Expert'
//     },
//     title: 'Best strategies for promoting digital products?',
//     content: "I've been having trouble converting visitors when promoting digital products. What strategies have worked well for you?",
//     likes: 24,
//     comments: 8,
//     date: '2023-06-10',
//     isPopular: true
//   },
//   {
//     id: 2,
//     author: {
//       name: 'Maria Rodriguez',
//       avatar: 'MR',
//       role: 'New Member'
//     },
//     title: 'Introducing myself to the community',
//     content: "Hi everyone! I'm Maria and I'm new to affiliate marketing. I'm excited to learn and grow with this community.",
//     likes: 15,
//     comments: 12,
//     date: '2023-06-12',
//     isPopular: false
//   },
//   {
//     id: 3,
//     author: {
//       name: 'Tyrone Williams',
//       avatar: 'TW',
//       role: 'Affiliate Partner'
//     },
//     title: 'My success with email marketing funnels',
//     content: "I wanted to share my recent success with email marketing funnels. I've managed to increase my conversion rate by 15% using segmentation.",
//     likes: 32,
//     comments: 14,
//     date: '2023-06-08',
//     isPopular: true
//   }
// ];

// const meetupEvents = [
//   {
//     id: 1,
//     title: 'AffinetSales Virtual Conference',
//     date: '2023-07-15',
//     time: '10:00 AM - 4:00 PM UTC',
//     description: 'Join us for our annual virtual conference featuring top industry speakers, networking opportunities, and exclusive insights.',
//     attendees: 245,
//     isVirtual: true
//   },
//   {
//     id: 2,
//     title: 'New York City Affiliate Meetup',
//     date: '2023-07-22',
//     time: '6:30 PM - 9:00 PM EST',
//     description: 'Connect with fellow affiliate marketers in the NYC area for networking and knowledge sharing.',
//     attendees: 58,
//     location: 'TechHub NYC, Manhattan',
//     isVirtual: false
//   },
//   {
//     id: 3,
//     title: 'Affiliate Marketing Q&A Session',
//     date: '2023-07-05',
//     time: '1:00 PM - 2:30 PM UTC',
//     description: 'Get your questions answered by our panel of experienced affiliate marketers in this interactive session.',
//     attendees: 130,
//     isVirtual: true
//   }
// ];

// const Community = () => {
//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-3xl font-bold">Community</h1>
//         <p className="text-muted-foreground">Connect with other affiliate marketers</p>
//       </div>
      
//       <Tabs defaultValue="discussions" className="w-full">
//         <TabsList className="mb-4">
//           <TabsTrigger value="discussions">Discussions</TabsTrigger>
//           <TabsTrigger value="events">Events & Meetups</TabsTrigger>
//           <TabsTrigger value="resources">Shared Resources</TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="discussions" className="space-y-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-medium">Recent Discussions</h2>
//             <Button>New Post</Button>
//           </div>
          
//           {discussionPosts.map((post) => (
//             <Card key={post.id}>
//               <CardHeader className="pb-2">
//                 <div className="flex justify-between items-start">
//                   <div className="flex items-center gap-3">
//                     <Avatar>
//                       <AvatarImage src={`https://i.pravatar.cc/150?u=${post.id}`} />
//                       <AvatarFallback>{post.author.avatar}</AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <span className="font-medium">{post.author.name}</span>
//                         <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">{post.author.role}</span>
//                       </div>
//                       <p className="text-xs text-muted-foreground">
//                         {new Date(post.date).toLocaleDateString('en-US', { 
//                           year: 'numeric', 
//                           month: 'short', 
//                           day: 'numeric' 
//                         })}
//                       </p>
//                     </div>
//                   </div>
//                   {post.isPopular && (
//                     <div className="text-xs bg-brand-green text-white rounded-full px-2 py-1">
//                       Popular
//                     </div>
//                   )}
//                 </div>
//                 <CardTitle className="text-lg mt-2">{post.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="mb-4">{post.content}</p>
//                 <div className="flex items-center gap-4 mt-4 pt-2 border-t">
//                   <Button variant="ghost" size="sm" className="flex items-center gap-1">
//                     <ThumbsUp className="h-4 w-4" />
//                     <span>{post.likes}</span>
//                   </Button>
//                   <Button variant="ghost" size="sm" className="flex items-center gap-1">
//                     <MessageSquare className="h-4 w-4" />
//                     <span>{post.comments}</span>
//                   </Button>
//                   <Button variant="ghost" size="sm" className="flex items-center gap-1">
//                     <Share2 className="h-4 w-4" />
//                     <span>Share</span>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </TabsContent>
        
//         <TabsContent value="events" className="space-y-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-medium">Upcoming Events</h2>
//             <Button>View Calendar</Button>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {meetupEvents.map((event) => (
//               <Card key={event.id} className="h-full flex flex-col">
//                 <CardHeader>
//                   <div className="flex justify-between items-start">
//                     <CardTitle className="text-lg">{event.title}</CardTitle>
//                     {event.isVirtual ? (
//                       <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1">Virtual</span>
//                     ) : (
//                       <span className="text-xs bg-orange-100 text-orange-800 rounded-full px-2 py-1">In Person</span>
//                     )}
//                   </div>
//                 </CardHeader>
//                 <CardContent className="flex-1 flex flex-col">
//                   <div className="mb-4">
//                     <div className="flex items-center gap-2 text-sm mb-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                       <span>{new Date(event.date).toLocaleDateString('en-US', { 
//                         year: 'numeric', 
//                         month: 'long', 
//                         day: 'numeric' 
//                       })}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm mb-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       <span>{event.time}</span>
//                     </div>
//                     {event.location && (
//                       <div className="flex items-center gap-2 text-sm">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                         <span>{event.location}</span>
//                       </div>
//                     )}
//                   </div>
                  
//                   <p className="text-sm mb-4">{event.description}</p>
                  
//                   <div className="mt-auto flex items-center justify-between">
//                     <span className="text-xs text-muted-foreground">{event.attendees} attendees</span>
//                     <Button variant="outline" size="sm">RSVP</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>
        
//         <TabsContent value="resources" className="space-y-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-medium">Community Resources</h2>
//             <Button>Add Resource</Button>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Card>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-lg">Marketing Templates</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm mb-4">A collection of ready-to-use marketing templates shared by community members.</p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center justify-between">
//                     <span>Email Sequence Template</span>
//                     <Button variant="ghost" size="sm">Download</Button>
//                   </li>
//                   <li className="flex items-center justify-between">
//                     <span>Social Media Calendar</span>
//                     <Button variant="ghost" size="sm">Download</Button>
//                   </li>
//                   <li className="flex items-center justify-between">
//                     <span>Landing Page Templates</span>
//                     <Button variant="ghost" size="sm">Download</Button>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>
            
//             <Card>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-lg">Recommended Tools</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm mb-4">Tools recommended by our community members to boost your affiliate marketing.</p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center justify-between">
//                     <span>Link Tracking Software</span>
//                     <Button variant="ghost" size="sm">View</Button>
//                   </li>
//                   <li className="flex items-center justify-between">
//                     <span>Email Marketing Platforms</span>
//                     <Button variant="ghost" size="sm">View</Button>
//                   </li>
//                   <li className="flex items-center justify-between">
//                     <span>Content Creation Tools</span>
//                     <Button variant="ghost" size="sm">View</Button>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Community;
