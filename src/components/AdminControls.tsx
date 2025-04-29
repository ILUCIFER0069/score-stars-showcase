
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Participant } from '@/data/participants';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';

interface AdminControlsProps {
  participants: Participant[];
  onUpdateParticipants: (participants: Participant[]) => void;
}

const AdminControls: React.FC<AdminControlsProps> = ({ participants, onUpdateParticipants }) => {
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const [newPoints, setNewPoints] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  
  const handlePointsUpdate = () => {
    if (!selectedParticipant || !newPoints || isNaN(Number(newPoints))) {
      toast({
        title: "Invalid input",
        description: "Please select a participant and enter a valid number of points.",
        variant: "destructive"
      });
      return;
    }

    const updatedParticipants = participants.map(p => {
      if (p.id === selectedParticipant.id) {
        return { ...p, points: Number(newPoints) };
      }
      return p;
    });

    onUpdateParticipants(updatedParticipants);
    setSelectedParticipant(null);
    setNewPoints('');
    setIsOpen(false);
    
    toast({
      title: "Points Updated",
      description: `${selectedParticipant.name}'s points updated to ${newPoints}`,
    });
  };

  const addRandomPoints = () => {
    const updatedParticipants = participants.map(p => {
      const randomPoints = Math.floor(Math.random() * 100) + 1;
      return { ...p, points: p.points + randomPoints };
    });

    onUpdateParticipants(updatedParticipants);
    
    toast({
      title: "Points Added",
      description: "Random points added to all participants",
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mb-8">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Admin Controls</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
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
                  
                  <Button className="w-full" onClick={handlePointsUpdate}>
                    Update
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <Button variant="default" className="w-full sm:w-auto" onClick={addRandomPoints}>
            Add Random Points to All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminControls;
