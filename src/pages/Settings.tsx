
import React, {useContext, useEffect, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { MoonLoader } from  'react-spinners';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { supabase } from '@/client/supabase';
import { userContext } from '@/App';


const Settings = () => {
  const [firstName, setFirstName] = useState<string | null>('');
  const [lastName, setLastName] = useState<string | null>('');
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [alert, setAlert] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const {userName} = useContext(userContext);

  const navigate = useNavigate();

  function handleFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    setEditFirstName(e.target.value)
  }

  function handleLastName(e: React.ChangeEvent<HTMLInputElement>){
    setEditLastName(e.target.value)
  }

  async function handleNameChange(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);
    
    const { data, error } = await supabase.auth.updateUser({
      data: {
        first_name: editFirstName, 
        last_name: editLastName   
      }
    });
  
    if (!error) {
      setFirstName(editFirstName); 
      setLastName(editLastName);
    }
    
    setLoading(false);
  }

  useEffect(() => {
    async function getUser() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error getting user:', error);
        return;
      }
  
      if (!user) {
        console.error('User not found');
        return;
      }

      if (!user?.confirmed_at) {
        setAlert(true)
      }

      const firstName = user.user_metadata?.first_name;
      const lastName = user.user_metadata?.last_name;
      if (firstName && lastName) {
        setFirstName(firstName);
        setLastName(lastName);
        setEditFirstName(firstName); 
        setEditLastName(lastName);
      }
    }

    getUser();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

    {alert &&
      <Card className="border-[#00D78A]/50">
        <div className="flex items-center justify-between py-6 px-4">
          <div>
              <CardTitle>Email not verified!</CardTitle>
              <CardDescription>Verify your email to activate your account</CardDescription>
            </div> 
                <Button onClick={(e) => {
                  e.preventDefault()
                  navigate("/verify")
                }} className='bg-[#00D78A]'>Verify Email</Button>
          </div>
          </Card>}
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                {/* <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                </div>
                 */}
                <div className="flex-1 grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" onChange={handleFirstName} value={firstName ? firstName : ''} required/>
                      <p className="text-xs text-muted-foreground">This is the name that will be shown to others in the community</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" onChange={handleLastName} value={lastName ? lastName : ''} required/>
                    </div>
                  </div>
{/*                   
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input id="displayName" defaultValue="JohnD" />
                    <p className="text-xs text-muted-foreground">This is the name that will be shown to others in the community</p>
                  </div>
                   */}
                  {/* <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio"      
                      placeholder="Tell us about yourself" 
                      defaultValue="Affiliate marketer with 5+ years of experience specializing in digital products."
                    />
                    <p className="text-xs text-muted-foreground">Brief description for your profile</p>
                  </div> */}
                </div>
              </div>        
              
              <div className="flex justify-end">
                <Button onClick={handleNameChange} className="bg-brand-green hover:bg-brand-green/90" disabled={loading}>{loading && <MoonLoader color="#ffffff" loading={loading} size={5} />}Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          
        </TabsContent>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="md:w-1/2 space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              
              <div className="md:w-1/2 space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-brand-green hover:bg-brand-green/90">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Delete Account</p>
                  <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
                </div>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      
        
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              {/* we mean invoices like courses and withdrawals */}
              <CardDescription>View your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Description</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-right py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Receipt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Jun 01, 2023</td>
                      <td className="py-3 px-4">Premium Plan - Monthly</td>
                      <td className="py-3 px-4">$49.99</td>
                      <td className="py-3 px-4 text-right">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Paid</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">Download</Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">May 01, 2023</td>
                      <td className="py-3 px-4">Premium Plan - Monthly</td>
                      <td className="py-3 px-4">$49.99</td>
                      <td className="py-3 px-4 text-right">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Paid</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">Download</Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Apr 01, 2023</td>
                      <td className="py-3 px-4">Premium Plan - Monthly</td>
                      <td className="py-3 px-4">$49.99</td>
                      <td className="py-3 px-4 text-right">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Paid</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">Download</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
