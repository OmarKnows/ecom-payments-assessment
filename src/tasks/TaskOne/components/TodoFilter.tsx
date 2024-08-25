import { EFilter } from "@/shared/types/Todo";
import { FC } from "react";

interface TodoFilterProps {
  setFilter: (filter: EFilter) => void;
}

const TodoFilter: FC<TodoFilterProps> = ({ setFilter }) => {
  return (
    <select onChange={(e) => setFilter(e.target.value as EFilter)}>
      <option value={EFilter.ALL}>All</option>
      <option value={EFilter.COMPLETE}>Completed</option>
      <option value={EFilter.INCOMPLETE}>Incomplete</option>
    </select>
  );
};

export default TodoFilter;
