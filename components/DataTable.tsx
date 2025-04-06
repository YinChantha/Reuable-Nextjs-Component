import { Employee } from '@/type';
import React from 'react';

interface DataTableProps {
  data: Employee[];
  columns: string[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  return (
    <div >
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column) => (
              <th
                key={column}
                className="border border-gray-200 px-4 py-2 text-left"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={`${item.id}-${column}`}
                  className="border border-gray-200 px-4 py-2"
                >
                  {item[column as keyof Employee]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;