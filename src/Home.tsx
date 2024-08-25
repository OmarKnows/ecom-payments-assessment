import Button from "@components/Button";
import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-[100vh] gap-5">
      <Button variant="blue" onClick={() => navigate(ROUTES.TASK_ONE)}>
        Task One
      </Button>
      <Button variant="green" onClick={() => navigate(ROUTES.TASK_TWO)}>
        Task Two
      </Button>
      <Button variant="orange" onClick={() => navigate(ROUTES.TASK_THREE)}>
        Task Three
      </Button>
      <Button variant="red" onClick={() => navigate(ROUTES.TASK_FOUR)}>
        Task Four
      </Button>
      <Button variant="yellow" onClick={() => navigate(ROUTES.TASK_FIVE)}>
        Task Five
      </Button>
    </div>
  );
};

export default Home;
