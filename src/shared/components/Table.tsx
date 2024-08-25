import { FC, ReactNode } from "react";

interface ITableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T) => ReactNode;
  emptyMessage: string;
}

const Table = <T,>({
  headers,
  data,
  renderRow,
  emptyMessage,
}: ITableProps<T>) => {
  return (
    <div className="w-full border-collapse text-center">
      {data.length === 0 ? (
        <p className="p-4 text-gray-500">{emptyMessage}</p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="border p-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>{renderRow(item)}</tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
