
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const topEarners = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    earnings: 12750,
    growth: '+15%',
    product: 'Digital Marketing Course',
    rank: 1
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'MC',
    earnings: 9830,
    growth: '+8%',
    product: 'Software Tools Bundle',
    rank: 2
  },
  {
    id: 3,
    name: 'Emma Williams',
    avatar: 'EW',
    earnings: 8450,
    growth: '+12%',
    product: 'Financial Freedom Program',
    rank: 3
  },
  {
    id: 4,
    name: 'James Rodriguez',
    avatar: 'JR',
    earnings: 7200,
    growth: '+5%',
    product: 'Health & Fitness Package',
    rank: 4
  },
  {
    id: 5,
    name: 'Aisha Patel',
    avatar: 'AP',
    earnings: 6750,
    growth: '+10%',
    product: 'Photography Masterclass',
    rank: 5
  },
  {
    id: 6,
    name: 'David Kim',
    avatar: 'DK',
    earnings: 6200,
    growth: '+7%',
    product: 'Language Learning Bundle',
    rank: 6
  },
  {
    id: 7,
    name: 'Linda Stewart',
    avatar: 'LS',
    earnings: 5800,
    growth: '+9%',
    product: 'Mobile App Development',
    rank: 7
  },
  {
    id: 8,
    name: 'Robert Garcia',
    avatar: 'RG',
    earnings: 5300,
    growth: '+6%',
    product: 'Personal Development',
    rank: 8
  }
];

const TopEarners = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Top Earners</h1>
        <p className="text-muted-foreground">See who's leading in affiliate sales this month</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Monthly Leaderboard</CardTitle>
            <CardDescription>Top affiliate marketers ranked by earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Rank</th>
                    <th className="text-left py-3 px-4">Affiliate</th>
                    <th className="text-left py-3 px-4">Top Product</th>
                    <th className="text-right py-3 px-4">Earnings</th>
                    <th className="text-right py-3 px-4">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topEarners.map((earner) => (
                    <tr key={earner.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">
                        <Badge variant={earner.rank <= 3 ? "default" : "outline"} className={earner.rank <= 3 ? "bg-brand-green" : ""}>
                          #{earner.rank}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${earner.id}`} />
                            <AvatarFallback>{earner.avatar}</AvatarFallback>
                          </Avatar>
                          <span>{earner.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{earner.product}</td>
                      <td className="py-3 px-4 text-right font-medium">${earner.earnings.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right text-green-500">{earner.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        {/* Top 3 Earner Cards */}
        {topEarners.slice(0, 3).map((earner) => (
          <Card key={earner.id} className={earner.rank === 1 ? "border-brand-green" : ""}>
            <CardHeader className={earner.rank === 1 ? "bg-brand-green text-white" : ""}>
              <div className="flex justify-between items-center">
                <CardTitle>#{earner.rank}</CardTitle>
                <Badge variant={earner.rank === 1 ? "outline" : "default"} className={earner.rank === 1 ? "border-white text-white" : ""}>
                  {earner.growth}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${earner.id}`} />
                  <AvatarFallback className="text-xl">{earner.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-lg">{earner.name}</h3>
                  <p className="text-sm text-muted-foreground">{earner.product}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-bold">${earner.earnings.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopEarners;
