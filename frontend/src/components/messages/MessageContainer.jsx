import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
  
	useEffect(() => {
	  // cleanup function (unmounts)
	  return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
  
	return (
	  <div className='flex-1 flex flex-col h-full bg-blue-50 p-4 rounded-lg shadow-lg'>
		{!selectedConversation ? (
		  <NoChatSelected />
		) : (
		  <>
			{/* Header */}
			<div className='bg-gray-200 px-4 py-2 mb-4 rounded-lg'>
			  <span className='label-text'>To:</span>{" "}
			  <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
			</div>
			<div className='flex-1 overflow-y-auto mb-4'>
			  <Messages />
			</div>
			<MessageInput />
		  </>
		)}
	  </div>
	);
  };


  
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
	  <div className='flex items-center justify-center w-full h-full'>
		<div className='px-4 text-center sm:text-lg md:text-xl text-gray-700 font-semibold flex flex-col items-center gap-2'>
		<p>Hello {authUser.fullName}, welcome back! </p>
		<p>Choose a chat to begin your conversation.</p>
		  <TiMessages className='text-3xl md:text-6xl text-center' />
		</div>
	  </div>
	);
  };