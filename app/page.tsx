"use client";
import DataTable from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Employee } from "@/type";
import { toast } from "sonner";

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
  const fetchData = () => new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="grid items-center justify-items-center min-h-screen ">

      <DataTable
        data={dummyData}
        columns={['id', 'name', 'email']}
      />
      {/* <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button> */}
      {/* <Button
          variant="outline"
          onClick={() => toast.warning("Please be careful!")}
        >
          Warning Toast
        </Button> */}
      {/* JSX in toast */}
      {/* <Button
        variant="outline"
        onClick={() =>
          toast(
            <div className="flex items-center gap-2">
              <a
                href="https://www.youtube.com/@iansbrash"
                className="bg-amber-300 px-1 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Custom JSX Toast!
              </a>
            </div>,
            {
              description: (
                <>
                  You can also use <span className="font-bold">JSX</span> in{" "}
                  <span className="font-bold">descriptions</span>
                </>
              ),
            },
          )
        }
      >
        JSX Toast
      </Button> */}

      {/* Basic promise toast */}
      {/* <Button
        variant="outline"
        onClick={() =>
          toast.promise(fetchData(), {
            loading: "Loading your data...",
            success: "Data loaded successfully!",
            error: "Failed to load data",
          })
        }
      >
        Basic Promise Toast
      </Button> */}

      {/* Promise toast with custom styling */}
      {/* <Button
        variant="outline"
        onClick={() =>
          toast.promise(fetchData(), {
            loading: "Processing...",
            success: () => (
              <div className="text-white px-2 rounded bg-emerald-600">
                Success! Your data has been loaded
              </div>
            ),
            error: () => (
              <div
                style={{
                  background: "#ef4444",
                  color: "white",
                  padding: "1rem",
                }}
              >
                Error: Something went wrong
              </div>
            ),
          })
        }
      >
        Styled Promise Toast
      </Button> */}
    </div>
  );
}


