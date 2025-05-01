import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Participant } from '@/data/participants';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { LogIn, User } from 'lucide-react';

// Admin password
const ADMIN_PASSWORD = "ScoreStars@4231";

interface AdminControlsProps {
  participants: Participant[];
  onUpdateParticipants: (participants: Participant[]) => void;
}

const AdminControls: React.FC<AdminControlsProps> = ({ participants, onUpdateParticipants }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const [newPoints, setNewPoints] = useState<string>('');
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newInitialPoints, setNewInitialPoints] = useState('0');
  const [localParticipants, setLocalParticipants] = useState<Participant[]>(participants);

  // Keep local state synced with props
  useEffect(() => {
    setLocalParticipants(participants);
  }, [participants]);

  // Check if admin is already logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsAdmin(loggedIn);
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem('adminLoggedIn', 'true');
      setIsLoginOpen(false);
      setPassword('');
      toast.success('Admin login successful');
    } else {
      toast.error('Incorrect password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('adminLoggedIn');
    toast.success('Admin logged out');
  };

  const handleUpdatePoints = () => {
    if (!selectedParticipant || !newPoints || isNaN(Number(newPoints))) {
      toast.error('Please select a participant and enter valid points');
      return;
    }

    const updatedParticipants = localParticipants.map(p => {
      if (p.id === selectedParticipant.id) {
        return { ...p, points: Number(newPoints) };
      }
      return p;
    });

    // Update both local state and parent state
    setLocalParticipants(updatedParticipants);
    onUpdateParticipants(updatedParticipants);
    
    setSelectedParticipant(null);
    setNewPoints('');
    setIsUpdatePopupOpen(false);
    
    toast.success(`${selectedParticipant.name}'s points updated to ${newPoints}`);
  };

  const handleAddParticipant = () => {
    if (!newName.trim()) {
      toast.error('Please enter a participant name');
      return;
    }
    
    if (isNaN(Number(newInitialPoints))) {
      toast.error('Please enter valid initial points');
      return;
    }
    
    // Generate new ID
    const maxId = localParticipants.reduce((max, p) => Math.max(max, p.id), 0);
    const newId = maxId + 1;
    
    // Create new participant
    const newParticipant = {
      id: newId,
      name: newName.trim(),
      points: Number(newInitialPoints)
    };
    
    // Add new participant
    const updatedParticipants = [...localParticipants, newParticipant];
    
    // Update both local state and parent state
    setLocalParticipants(updatedParticipants);
    onUpdateParticipants(updatedParticipants);
    
    setIsAddPopupOpen(false);
    setNewName('');
    setNewInitialPoints('0');
    
    toast.success(`${newName} added to the leaderboard`);
  };

  const handleDeleteParticipant = (id: number) => {
    const participantToDelete = localParticipants.find(p => p.id === id);
    if (!participantToDelete) return;
    
    if (confirm(`Are you sure you want to delete ${participantToDelete.name}?`)) {
      const updatedParticipants = localParticipants.filter(p => p.id !== id);
      
      // Update both local state and parent state
      setLocalParticipants(updatedParticipants);
      onUpdateParticipants(updatedParticipants);
      
      toast.success(`${participantToDelete.name} has been removed from the leaderboard`);
    }
  };

  // If not admin, only show login button
  if (!isAdmin) {
    return (
      <div className="flex justify-end mb-6">
        <Popover open={isLoginOpen} onOpenChange={setIsLoginOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <LogIn size={16} />
              Admin Login
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4 p-2">
              <h3 className="font-medium">Admin Login</h3>
              <Input 
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleLogin();
                }}
              />
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsLoginOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleLogin}>
                  Login
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  return (
    <>
      <Card className="w-full max-w-4xl mx-auto mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">Admin Controls</CardTitle>
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Popover open={isUpdatePopupOpen} onOpenChange={setIsUpdatePopupOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  Update Participant Points
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h3 className="font-medium">Update Points</h3>
                  <div className="space-y-2">
                    <select 
                      className="w-full border rounded-md p-2"
                      value={selectedParticipant?.id || ""}
                      onChange={(e) => {
                        const selected = participants.find(p => p.id === Number(e.target.value));
                        setSelectedParticipant(selected || null);
                        if (selected) {
                          setNewPoints(selected.points.toString());
                        }
                      }}
                    >
                      <option value="">Select Participant</option>
                      {participants.map(participant => (
                        <option key={participant.id} value={participant.id}>
                          {participant.name}
                        </option>
                      ))}
                    </select>
                    
                    <Input
                      type="number"
                      placeholder="Enter new points"
                      value={newPoints}
                      onChange={(e) => setNewPoints(e.target.value)}
                    />
                    
                    <Button className="w-full" onClick={handleUpdatePoints}>
                      Update
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <Popover open={isAddPopupOpen} onOpenChange={setIsAddPopupOpen}>
              <PopoverTrigger asChild>
                <Button variant="default" className="w-full sm:w-auto">
                  Add New Participant
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h3 className="font-medium">Add New Participant</h3>
                  <div className="space-y-2">
                    <Input
                      placeholder="Enter participant name"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                    
                    <Input
                      type="number"
                      placeholder="Enter initial points"
                      value={newInitialPoints}
                      onChange={(e) => setNewInitialPoints(e.target.value)}
                    />
                    
                    <Button className="w-full" onClick={handleAddParticipant}>
                      Add
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminControls;
