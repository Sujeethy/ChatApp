import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { Button } from "react-bootstrap";
const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<button className="w-full bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600" onClick={logout}>
				Logout
			  </button>
				
				
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
