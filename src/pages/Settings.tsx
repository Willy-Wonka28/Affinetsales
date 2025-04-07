import React, { useContext, useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MoonLoader } from 'react-spinners';
import { supabase } from '@/client/supabase';
import { userContext } from '@/App';
import { toast } from '@/components/ui/use-toast';

const Settings = () => {
  // User profile state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  
  // Account security state
  const [email, setEmail] = useState('');
  const [passwordEmail, setPasswordEmail] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  
  // UI state
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  
  const { userName, setUserName } = useContext(userContext);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Fetch user data on mount
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error getting user:', error);
        return;
      }

      if (!user?.confirmed_at) setAlert(true);

      const { first_name, last_name } = user?.user_metadata || {};
      if (first_name && last_name) {
        setFirstName(first_name);
        setLastName(last_name);
        setEditFirstName(first_name);
        setEditLastName(last_name);
      }
    };

    fetchUser();
  }, []);

  // Profile update handlers
  const handleNameChange = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.updateUser({
        data: { first_name: editFirstName, last_name: editLastName }
      });

      if (error) throw error;

      setFirstName(editFirstName);
      setLastName(editLastName);
      setUserName(editFirstName);
      
      toast({
        title: 'Profile Updated',
        description: 'Your name has been updated successfully',
      });
    } catch (error) {
      toast({
        title: 'Update Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // Account security handlers
  const handleEmailUpdate = async () => {
    if (!emailRegex.test(email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser(
        { email },
        { emailRedirectTo: `${window.location.origin}/settings` }
      );

      if (error) throw error;

      toast({
        title: 'Verification Sent',
        description: 'Please check your new email to confirm the change',
      });
      setShowEmailForm(false);
      setEmail('');
    } catch (error) {
      toast({
        title: 'Email Update Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };


  const initiatePasswordChange = async () => {
    if (!emailRegex.test(passwordEmail)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }
  
    setPasswordLoading(true);
    setPasswordMessage("Sending password reset link...");
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        passwordEmail,
        { redirectTo: `${window.location.origin}/update-password` }
      );
  
      if (error) throw error;
  
      setPasswordMessage("Password reset link sent! Check your email inbox");
      toast({
        title: 'Email Sent',
        description: 'Check your email for the password reset link',
      });
    } catch (error) {
      setPasswordMessage(`Error: ${error.message}`);
      toast({
        title: 'Failed to send reset link',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setTimeout(() => {
        setPasswordLoading(false);
        setShowPasswordForm(false);
      }, 1500);
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      {alert && (
        <Card className="border-[#00D78A]/50">
          <div className="flex items-center justify-between py-6 px-4">
            <div>
              <CardTitle>Email not verified!</CardTitle>
              <CardDescription>Verify your email to activate your account</CardDescription>
            </div>
            <Button 
              onClick={() => navigate("/verify")} 
              className="bg-[#00D78A] hover:bg-[#00D78A]/90"
            >
              Verify Email
            </Button>
          </div>
        </Card>
      )}

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    value={editFirstName} 
                    onChange={(e) => setEditFirstName(e.target.value)} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    value={editLastName} 
                    onChange={(e) => setEditLastName(e.target.value)} 
                    required 
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button 
                  onClick={handleNameChange}
                  disabled={loading || !editFirstName || !editLastName}
                  className="bg-brand-green hover:bg-brand-green/90"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <MoonLoader color="#ffffff" size={20} />
                      <span>Saving...</span>
                    </div>
                  ) : 'Save Changes'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Tab */}
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Security</CardTitle>
              <CardDescription>Manage your login credentials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowEmailForm(!showEmailForm);
                    setShowPasswordForm(false);
                  }}
                >
                  Change Email
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowPasswordForm(!showPasswordForm);
                    setShowEmailForm(false);
                  }}
                >
                  Change Password
                </Button>
              </div>

              {showEmailForm && (
                <div className="space-y-4 p-4 border rounded-lg">
                  <div className="space-y-2">
                    <Label htmlFor="newEmail">New Email</Label>
                    <Input
                      id="newEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your new email"
                    />
                  </div>
                  <Button
                    onClick={handleEmailUpdate}
                    disabled={!emailRegex.test(email) || loading}
                    className="bg-brand-green hover:bg-brand-green/90"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <MoonLoader color="#ffffff" size={20} />
                        <span>Saving...</span>
                      </div>
                    ) : 'Save Changes'}
                  </Button>
                </div>
              )}

{showPasswordForm && (
  <div className="space-y-4 p-4 border rounded-lg">
    {passwordLoading && (
      <div className="fixed inset-0 h-screen flex items-center justify-center bg-black/30 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <MoonLoader color='#00D78A' loading={passwordLoading} size={50} />
          <p className="mt-2 font-semibold">{passwordMessage}</p>
        </div>
      </div>
    )}
    
    <div className="space-y-2">
      <Label htmlFor="passwordEmail">Email Address</Label>
      <div className="relative">
        <Input
          id="passwordEmail"
          type="email"
          value={passwordEmail}
          onChange={(e) => {
            setPasswordEmail(e.target.value);
            setShowError(!emailRegex.test(e.target.value));
          }}
          placeholder="Enter your account email"
        />
        <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
      </div>
      {showError && (
        <p className="text-red-500 text-sm">Please enter a valid email address</p>
      )}
    </div>
    
    <Button
      onClick={initiatePasswordChange}
      disabled={!emailRegex.test(passwordEmail) || passwordLoading}
      className="bg-brand-green hover:bg-brand-green/90"
    >
      Send Reset Link
    </Button>
    
    <p className="text-sm text-muted-foreground">
      We'll send a secure link to your email to update your password
    </p>
  </div>
)}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
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