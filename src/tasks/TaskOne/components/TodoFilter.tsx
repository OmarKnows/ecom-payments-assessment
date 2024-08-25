import { EFilter } from "@/shared/types/Todo";
import { FC } from "react";

interface TodoFilterProps {
  setFilter: (filter: EFilter) => void;
}

const TodoFilter: FC<TodoFilterProps> = ({ setFilter }) => {
  return (
    <div className="flex items-center justify-center my-6">
      <label htmlFor="filter" className="mr-4 text-gray-700 font-medium">
        Filter:
      </label>
      <select
        id="filter"
        onChange={(e) => setFilter(e.target.value as EFilter)}
        className="border border-gray-300 rounded-md py-2 px-4 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        <option value={EFilter.ALL}>All</option>
        <option value={EFilter.COMPLETE}>Completed</option>
        <option value={EFilter.INCOMPLETE}>Incomplete</option>
      </select>
    </div>
  );
};

export default TodoFilter;
