import useFetch from "@/hooks/useFetch";
import Container from "@components/Container";
import Table from "@components/Table";
import { TailSpin } from "react-loader-spinner";

interface IUser {
  id: number;
  name: string;
  email: string;
}

const TaskTwo = () => {
  const { data, loading, error } = useFetch<IUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <Container title="Task Two: Implement a Custom Hook">
      {loading ? (
        <TailSpin wrapperClass="w-full flex justify-center items-center" />
      ) : error ? (
        <p className="p-4 text-red-500 text-xl font-semibold">{error}</p>
      ) : (
        <div className="w-[500px]">
          <Table<IUser>
            headers={["ID", "Name", "Email"]}
            data={data || []}
            renderRow={(user) => (
              <>
                <td className="border p-2">{user?.id}</td>
                <td className="border p-2">{user?.name}</td>
                <td className="border p-2">{user?.email}</td>
              </>
            )}
            emptyMessage="No users available"
          />
        </div>
      )}
    </Container>
  );
};

export default TaskTwo;
