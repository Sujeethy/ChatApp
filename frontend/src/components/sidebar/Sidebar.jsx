import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='flex flex-col h-full bg-gray-100 p-4 shadow-lg rounded-lg'>
			<div className='flex-1 overflow-y-auto'>
				<SearchInput />
				<div className='divider px-3 my-4'></div>
				<Conversations />
			</div>
			<div className='mt-4'>
				<LogoutButton />
			</div>
		</div>
	);
};
export default Sidebar;
