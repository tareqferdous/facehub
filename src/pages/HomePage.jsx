import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  return (
    <div>
      HomePage
      <Link to="/me">Go to Profile</Link>
    </div>
  );
};

export default HomePage;
