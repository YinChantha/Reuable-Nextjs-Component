import { Employee } from "@/type";
import DataTable from "./components/DataTable";

const dummyData: Employee[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Developer'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Designer'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Manager'
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'Developer'
  },
  {
    id: 5,
    name: 'Mike Wilson',
    email: 'mike.wilson@example.com',
    role: 'QA Engineer'
  },
  {
    id: 6,
    name: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    role: 'Product Manager'
  },
  {
    id: 7,
    name: 'Tom Anderson',
    email: 'tom.anderson@example.com',
    role: 'DevOps'
  },
  {
    id: 8,
    name: 'Emily Clark',
    email: 'emily.clark@example.com',
    role: 'UX Designer'
  },
  {
    id: 9,
    name: 'David Lee',
    email: 'david.lee@example.com',
    role: 'Senior Developer'
  },
  {
    id: 10,
    name: 'Lisa Martinez',
    email: 'lisa.martinez@example.com',
    role: 'HR Manager'
  },
  {
    id: 11,
    name: 'Peter Thompson',
    email: 'peter.thompson@example.com',
    role: 'System Analyst'
  },
  {
    id: 12,
    name: 'Rachel Green',
    email: 'rachel.green@example.com',
    role: 'Marketing Specialist'
  }
];

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen ">
      <DataTable
        data={dummyData}
        columns={['id', 'name', 'email']}
      />
    </div>
  );
}
