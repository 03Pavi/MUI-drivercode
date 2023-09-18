// import total from ".././assets/icons/total.svg"
interface Datatype {
  id: number;
  number: number;
  title: string;
  src?:string;
}


export const data: Datatype[] = [
  { id: 1, number: 20, title: "Total Staff" },
  { id: 2, number: 1, title: "Approved Leave" },
  { id: 3, number: 14, title: "Pending Leave" },
  { id: 4, number: 2, title: "Rejected Leave" },
];
