
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Participant, PointHistory } from '@/data/participants';
import { CalendarIcon } from 'lucide-react';

interface ParticipantDetailProps {
  participant: Participant | null;
  isOpen: boolean;
  onClose: () => void;
}

const ParticipantDetail: React.FC<ParticipantDetailProps> = ({ 
  participant, 
  isOpen, 
  onClose 
}) => {
  if (!participant) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{participant.name}</DialogTitle>
          <DialogDescription>
            Total Points: <span className="font-bold text-purple-600">{participant.points}</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="max-h-[60vh] overflow-y-auto">
          {participant.history && participant.history.length > 0 ? (
            <div className="space-y-4">
              {participant.history.map((item) => (
                <Card key={item.id} className="border-l-4 border-purple-400">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <span className="font-mono font-bold text-green-600">+{item.points}</span>
                    </div>
                    <p className="text-gray-700">{item.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-gray-500">No point history available</p>
              <p className="text-sm text-gray-400 mt-1">History can be added directly in the data file</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ParticipantDetail;
