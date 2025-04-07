import React, { useContext, useEffect, useState } from 'react';
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
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
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

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: 'Passwords Mismatch',
        description: 'New password and confirmation do not match',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });

      if (error) throw error;

      toast({
        title: 'Password Updated',
        description: 'Your password has been changed successfully',
      });
      setShowPasswordForm(false);
      setNewPassword('');
      setConfirmPassword('');
      setCurrentPassword('');
    } catch (error) {
      toast({
        title: 'Password Update Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
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
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter your current password"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handlePasswordUpdate}
                    disabled={!currentPassword || !newPassword || newPassword !== confirmPassword || loading}
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
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>View your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Billing content remains unchanged */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;