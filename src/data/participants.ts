
export type PointHistory = {
  id: number;
  date: string;
  points: number;
  reason: string;
};

export type Participant = {
  id: number;
  name: string;
  points: number;
  avatar?: string;
  history?: PointHistory[];
};

export const participants: Participant[] = [
  { id: 1, name: "Sneha Ramkumar Yadav", points: 200, history: [] },
  { id: 2, name: "Shaikh Kausar Mohammad Ali", points: 675, history: [] },
  { id: 3, name: "Muskan Jitendra Yadav", points: 1050, history: [] },
  { id: 4, name: "Ashish Sahani", points: 0, history: [] },
  { id: 5, name: "Disha sharma", points: 425, history: [] },
  { id: 6, name: "Vishal Dinesh Prajapati", points: 0, history: [] },
  { id: 7, name: "Izhar khan", points: 0, history: [] },
  { id: 8, name: "Atharva", points: 0, history: [] },
  { id: 9, name: "Simran vishwakarma", points: 0, history: [] },
  { id: 10, name: "Esha jain", points: 100, history: [] },
  { id: 11, name: "Bhumika Pravin Surve", points: 2900, history: [] },
  { id: 12, name: "Saniya Singh", points: 750, history: [] },
  { id: 13, name: "Vinay Pradeep Tiwari", points: 900, history: [] },
  { id: 14, name: "Sushma saroj", points: 725, history: [] },
  { id: 15, name: "Talenson", points: 4400, history: [] = [{id:1, date:"1-04-2025", points:1100, reason:"Day 1 Task Submission and Winner(1)."}], },
  { id: 16, name: "Sachin prajapati", points: 0, history: [] },
  { id: 17, name: "Kadri Ruksar Fatima Abdul Salim ", points: 0, history: [] },
  { id: 18, name: "Aarju singh", points: 275, history: [] },
  { id: 19, name: "Sania Shaikh", points: 0, history: [] },
  { id: 20, name: "Mandal Jaya", points: 1900, history: [] },
  { id: 21, name: "Cathrina Ramkumar", points: 0, history: [] },
  { id: 22, name: "Shivam Chaurasia ", points: 1050, history: [] },
  { id: 23, name: "Siddiqui mohd sohail ", points: 0, history: [] },
  { id: 24, name: "Salman", points: 0, history: [] },
  { id: 25, name: "Sana Ismail Shaikh ", points: 750, history: [] },
];
