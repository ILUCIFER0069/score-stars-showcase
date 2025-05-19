
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
  { id: 1, name: "Sneha Ramkumar Yadav", points: 200, history: [
    {id: 1, date: "1-04-2025", points: 100, reason: "Day 1 Task Submission."},
    {id: 2, date: "3-04-2025", points: 100, reason: "Day 3 Task Submission."},
  ] },
  
  { id: 2, name: "Shaikh Kausar Mohammad Ali", points: 4575, history: [
    {id: 1, date: "1-04-2025", points: 100, reason: "Day 1 Task Submission & extra structure point."},
    {id: 1, date: "2-04-2025", points: 125, reason: "Day 2 Task Submission."},
    {id: 2, date: "3-04-2025", points: 225, reason: "Day 3 Task Submission and 4th place."},
    {id: 3, date: "4-04-2025", points: 225, reason: "Day 4 Task Submission and 4th place."},
    {id: 4, date: "4-04-2025", points: 200, reason: "CREATOR CHALLENGE Submission."},
    {id: 6, date: "5-04-2025", points: 600, reason: "Day 5 Task Submission and Winner(2)."},
    {id: 6, date: "6-04-2025", points: 600, reason: "Day 6 Task Submission and Winner(2)."},
    {id: 7, date: "7-04-2025", points: 400, reason: "Day 7 Task Submission and Winner(3)."},
    {id: 8, date: "8-04-2025", points: 600, reason: "Day 8 Task Submission and Winner(2)."},
    {id: 9, date: "10-04-2025", points: 900, reason: "Day 10 Task Submission and Winner(3) and bonus point."},
     {id: 10, date: "17-04-2025", points: 600, reason: "Day 17 Task Submission and Winner(2)."},
  ] },
  { id: 3, name: "Muskan Jitendra Yadav", points: 5100, history: [
    {id: 1, date: "1-04-2025", points: 100, reason: "Day 1 Task Submission "},
    {id: 2, date: "2-04-2025", points: 150, reason: "Day 2 Task Submission & extra structure point."},
    {id: 3, date: "3-04-2025", points: 400, reason: "Day 3 Task Submission and Winner(3)."},
    {id: 4, date: "4-04-2025", points: 400, reason: "Day 4 Task Submission and Winner(3)."},
    {id: 5, date: "4-04-2025", points: 200, reason: "CREATOR CHALLENGE Submission."},
    {id: 6, date: "5-04-2025", points: 50, reason: "Day 5 Task Submission but copied Response."},
    {id: 7, date: "6-04-2025", points: 250, reason: "Day 6 Task Submission & extra structure point."},
    {id: 8, date: "7-04-2025", points: 200, reason: "Day 7 Task Submission & extra structure point."},
    {id: 9, date: "8-04-2025", points: 400, reason: "Day 8 Task Submission and Winner(3)."},
    {id: 10, date: "9-04-2025", points: 250, reason: "Day 9 Task Submission & extra structure point."},
    {id: 11, date: "10-04-2025", points: 1100, reason: "Day 10 Task Submission and Winner(2) and bonus point."},
    {id: 12, date: "13-04-2025", points: 400, reason: "Day 13 Task Submission and Winner(3)."},
    {id: 13, date: "14-04-2025", points: 600, reason: "Day 14 Task Submission and Winner(2)."},
     {id: 14, date: "15-04-2025", points: 400, reason: "Day 15 Task Submission and Winner(3)."},
     {id: 15, date: "16-04-2025", points: 400, reason: "Day 16 Task Submission and Winner(3)."},
     {id: 16, date: "17-04-2025", points: 400, reason: "Day 17 Task Submission and Winner(3)."},
  ] },
  { id: 4, name: "Ashish Sahani", points: 0, history: [] },
  
  { id: 5, name: "Disha sharma", points: 725, history: [
    {id: 1, date: "1-04-2025", points: 100, reason: "Day 1 Task Submission."},
    {id: 2, date: "2-04-2025", points: 225, reason: "Day 2 Task Submission & extra structure point."},
    {id: 3, date: "3-04-2025", points: 200, reason: "Day 3 Task Submission & extra structure point."},
    {id: 4, date: "5-04-2025", points: 50, reason: "Day 5 Task Submission but copied Response."},
    {id: 5, date: "6-04-2025", points: 250, reason: "Day 6 Task Submission & extra structure point."},
  ] },
  { id: 6, name: "Vishal Dinesh Prajapati", points: 0, history: [] },
  { id: 7, name: "Izhar khan", points: 0, history: [] },
  { id: 8, name: "Atharva", points: 0, history: [] },
  { id: 9, name: "Simran vishwakarma", points: 0, history: [] },
  
  { id: 10, name: "Esha jain", points: 100, history: [
    {id: 1, date: "1-04-2025", points: 100, reason: "Day 1 Task Submission."},
  ] },
  
  { id: 11, name: "Bhumika Pravin Surve", points: 14700, history: [
     {id: 1, date: "1-04-2025", points: 600, reason: "Day 1 Task Submission and Winner(2)."},
    {id: 2, date: "2-04-2025", points: 600, reason: "Day 2 Task Submission and Winner(2)."},
    {id: 3, date: "3-04-2025", points: 600, reason: "Day 3 Task Submission and Winner(2)."},
    {id: 4, date: "4-04-2025", points: 1100, reason: "Day 4 Task Submission and Winner(1)."},
    {id: 5, date: "4-04-2025", points: 700, reason: "CREATOR CHALLENGE Submission and Winner(1)."},
    {id: 6, date: "5-04-2025", points: 1100, reason: "Day 5 Task Submission and Winner(1)."},
    {id: 7, date: "6-04-2025", points: 1100, reason: "Day 6 Task Submission and Winner(1)."},
    {id: 8, date: "7-04-2025", points: 1100, reason: "Day 7 Task Submission and Winner(1)."},
    {id: 9, date: "8-04-2025", points: 1100, reason: "Day 8 Task Submission and Winner(1)."},
    {id: 10, date: "9-04-2025", points: 1100, reason: "Day 9 Task Submission and Winner(1)."},
    {id: 11, date: "10-04-2025", points: 1100, reason: "Day 10 Task Submission and Winner(2) and bonus point."},
    {id: 12, date: "13-04-2025", points: 600, reason: "Day 13 Task Submission and Winner(2)."},
    {id: 13, date: "14-04-2025", points: 1100, reason: "Day 14 Task Submission and Winner(1)."},
    {id: 14, date: "15-04-2025", points: 1100, reason: "Day 15 Task Submission and Winner(1)."},
    {id: 15, date: "16-04-2025", points: 600, reason: "Day 16 Task Submission and Winner(2)."},
     {id: 16, date: "17-04-2025", points: 1100, reason: "Day 17 Task Submission and Winner(1)."},
  ] },
  { id: 12, name: "Saniya Singh", points: 8000, history: [
    {id: 1, date: "1-04-2025", points: 100, reason: "Day 1 Task Submission."},
    {id: 2, date: "2-04-2025", points: 200, reason: "Day 2 Task Submission & extra structure point."},
    {id: 3, date: "3-04-2025", points: 225, reason: "Day 3 Task Submission and 4th place."},
    {id: 4, date: "4-04-2025", points: 225, reason: "Day 4 Task Submission and 4th place."},
    {id: 5, date: "4-04-2025", points: 700, reason: "CREATOR CHALLENGE Submission and Winner(2)."},
    {id: 6, date: "5-04-2025", points: 600, reason: "Day 5 Task Submission and Winner(2)."},
    {id: 7, date: "6-04-2025", points: 250, reason: "Day 6 Task Submission & extra structure point."},
    {id: 8, date: "7-04-2025", points: 600, reason: "Day 7 Task Submission and Winner(2)."},
    {id: 9, date: "8-04-2025", points: 600, reason: "Day 8 Task Submission and Winner(2)."},
    {id: 10, date: "9-04-2025", points: 400, reason: "Day 9 Task Submission and Winner(3)."},
    {id: 11, date: "10-04-2025", points: 1600, reason: "Day 10 Task Submission and Winner(1) and bonus point."},
    {id: 12, date: "13-04-2025", points: 1100, reason: "Day 13 Task Submission and Winner(1)."},
    {id: 13, date: "14-04-2025", points: 400, reason: "Day 14 Task Submission and Winner(3)."},
    {id: 14, date: "15-04-2025", points: 600, reason: "Day 15 Task Submission and Winner(2)."},
    {id: 15, date: "16-04-2025", points: 400, reason: "Day 16 Task Submission and Winner(3)."},
     {id: 16, date: "17-04-2025", points: 400, reason: "Day 17 Task Submission and Winner(3)."},
  ] },
  { id: 13, name: "Vinay Pradeep Tiwari", points: 8350, history: [
    {id: 1, date: "1-04-2025", points: 400, reason: "Day 1 Task Submission and Winner(3)."},
    {id: 2, date: "2-04-2025", points: 100, reason: "Day 2 Task Submission."},
    {id: 3, date: "3-04-2025", points: 175, reason: "Day 3 Task Submission & extra structure point."},
    {id: 4, date: "4-04-2025", points: 225, reason: "Day 4 Task Submission and 4th place."},
    {id: 5, date: "4-04-2025", points: 200, reason: "CREATOR CHALLENGE Submission."},
    {id: 6, date: "5-04-2025", points: 400, reason: "Day 5 Task Submission and Winner(3)."},
    {id: 7, date: "6-04-2025", points: 400, reason: "Day 6 Task Submission and Winner(3)."},
    {id: 8, date: "7-04-2025", points: 400, reason: "Day 7 Task Submission and Winner(3)."},
    {id: 9, date: "8-04-2025", points: 400, reason: "Day 8 Task Submission and Winner(3)."},
    {id: 9, date: "9-04-2025", points: 250, reason: "Day 9 Task Submission & extra structure point."},
    {id: 10, date: "10-04-2025", points: 900, reason: "Day 10 Task Submission and Winner(3) and bonus point."},
    {id: 11, date: "13-04-2025", points: 600, reason: "Day 13 Task Submission and Winner(2)."},
    {id: 12, date: "14-04-2025", points: 1100, reason: "Day 14 Task Submission and Winner(1)."},
    {id: 13, date: "15-04-2025", points: 600, reason: "Day 15 Task Submission and Winner(2)."},
    {id: 14, date: "16-04-2025", points: 1100, reason: "Day 16 Task Submission and Winner(1)."},
       {id: 15, date: "17-04-2025", points: 1100, reason: "Day 17 Task Submission and Winner(1)."},
  ] },
  { id: 14, name: "Sushma saroj", points: 1350, history: [
    {id: 1, date: "1-04-2025", points: 100, reason: "Day 1 Task Submission."},
    {id: 2, date: "2 -04-2025", points: 175, reason: "Day 2 Task Submission & extra structure point."},
    {id: 3, date: "3-04-2025", points: 50, reason: "Day 3 Task Submission and point deduction for structure."},
    {id: 4, date: "4-04-2025", points: 400, reason: "Day 4 Task Submission and Winner(3)."},
    {id: 5, date: "5-04-2025", points: 225, reason: "Day 5 Task Submission and 4th place."},
    {id: 6, date: "6-04-2025", points: 400, reason: "Day 6 Task Submission and Winner(3)."},
  ] },
  
  { id: 15, name: "Talenson", points: 7300, history: [
    {id: 1, date: "1-04-2025", points: 1100, reason: "Day 1 Task Submission and Winner(1)."},
    {id: 2, date: "2-04-2025", points: 1100, reason: "Day 2 Task Submission and Winner(1)."},
    {id: 3, date: "3-04-2025", points: 1100, reason: "Day 3 Task Submission and Winner(1)."},
    {id: 4, date: "4-04-2025", points: 1100, reason: "Day 4 Task Submission and Winner(1)."},
    {id: 5, date: "5-04-2025", points: 1100, reason: "Day 5 Task Submission and Winner(1)."},
    {id: 6, date: "6-04-2025", points: 200, reason: "Day 6 Task Submission & extra structure point."},
    {id: 7, date: "10-04-2025", points: 1600, reason: "Day 10 Task Submission and Winner(1) and bonus point."},
  ]},
  { id: 16, name: "Sachin prajapati", points: 0, history: [] },
  { id: 17, name: "Kadri Ruksar Fatima Abdul Salim ", points: 0, history: [] },
  
  { id: 18, name: "Aarju singh", points: 275, history: [
    {id: 2, date: "3-04-2025", points: 100, reason: "Day 3 Task Submission and extra point for structure."},
    {id: 3, date: "4-04-2025", points: 175, reason: "Day 4 Task Submission and point deduction for bad structure"},
  ] },
  { id: 19, name: "Sania Shaikh", points: 0, history: [] },
  
  { id: 20, name: "Mandal Jaya", points: 3350, history: [
    {id: 1, date: "2-04-2025", points: 400, reason: "Day 2 Task Submission and Winner(3)."},
    {id: 2, date: "3-04-2025", points: 400, reason: "Day 3 Task Submission and Winner(3)."},
    {id: 3, date: "4-04-2025", points: 1100, reason: "Day 4 Task Submission and Winner(1)."},
    {id: 4, date: "4-04-2025", points: 200, reason: "CREATOR CHALLENGE Submission."},
    {id: 5, date: "5-04-2025", points: 400, reason: "Day 5 Task Submission and Winner(3)."},
    {id: 6, date: "6-04-2025", points: 250, reason: "Day 6 Task Submission & extra structure point."},
    {id: 7, date: "7-04-2025", points: 200, reason: "Day 7 Task Submission & extra structure point."},
    {id: 8, date: "8-04-2025", points: 400, reason: "Day 8 Task Submission and Winner(3)."},
    {id: 9, date: "9-04-2025", points: 250, reason: "Day 9 Task Submission & extra structure point."},
  ] },
  { id: 21, name: "Cathrina Ramkumar", points: 0, history: [] },
  
  { id: 22, name: "Shivam Chaurasia ", points: 3400, history: [
    {id: 1, date: "2-04-2025", points: 225, reason: "Day 2 Task Submission & extra structure point."},
    {id: 2, date: "3-04-2025", points: 225, reason: "Day 3 Task Submission and 4th place."},
    {id: 3, date: "4-04-2025", points: 600, reason: "Day 4 Task Submission and Winner(2)."},
    {id: 4, date: "4-04-2025", points: 700, reason: "CREATOR CHALLENGE Submission and Winner(3)."},
    {id: 5, date: "5-04-2025", points: 400, reason: "Day 5 Task Submission and Winner(3)."},
    {id: 6, date: "6-04-2025", points: 200, reason: "Day 6 Task Submission & extra structure point."},
    {id: 7, date: "7-04-2025", points: 400, reason: "Day 7 Task Submission and Winner(3)."},
    {id: 8, date: "8-04-2025", points: 400, reason: "Day 8 Task Submission and Winner(3)."},
    {id: 9, date: "9-04-2025", points: 250, reason: "Day 9 Task Submission & extra structure point."},
  ] },
  { id: 23, name: "Siddiqui mohd sohail ", points: 0, history: [] },
  { id: 24, name: "Salman", points: 0, history: [] },
  
  { id: 25, name: "Sana Ismail Shaikh ", points: 2900, history: [
    {id: 1, date: "3-04-2025", points: 150, reason: "Day 3 Task Submission & extra structure point."},
    {id: 2, date: "4-04-2025", points: 600, reason: "Day 4 Task Submission and Winner(2)."},
    {id: 3, date: "5-04-2025", points: 600, reason: "Day 5 Task Submission and Winner(2)."},
    {id: 4, date: "6-04-2025", points: 250, reason: "Day 6 Task Submission & extra structure point."},
    {id: 5, date: "8-04-2025", points: 400, reason: "Day 3 Task Submission and Winner(3)."},
    {id: 6, date: "10-04-2025", points: 900, reason: "Day 10 Task Submission and Winner(3) and bonus point."},
    {id: 7, date: "14-04-2025", points: 600, reason: "Day 14 Task Submission and Winner(2)."},
  ] }
];
