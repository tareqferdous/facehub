import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={logout}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
};

export default Logout;
