
export type Participant = {
  id: number;
  name: string;
  points: number;
  avatar?: string;
};

export const participants: Participant[] = [
  { id: 1, name: "Alex Thompson", points: 1250 },
  { id: 2, name: "Jamie Rodriguez", points: 980 },
  { id: 3, name: "Sam Wilson", points: 875 },
  { id: 4, name: "Casey Johnson", points: 760 },
  { id: 5, name: "Jordan Smith", points: 720 },
  { id: 6, name: "Taylor Brown", points: 690 },
  { id: 7, name: "Morgan Lee", points: 650 },
  { id: 8, name: "Riley Davis", points: 610 },
  { id: 9, name: "Quinn Miller", points: 590 },
  { id: 10, name: "Charlie Adams", points: 540 },
];
