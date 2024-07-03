import React from 'react';
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-3 items-center p-3 rounded-lg cursor-pointer transition ${isSelected ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-200"}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className='w-10 h-10 rounded-full'>
            <img src={conversation.profilePic} alt='user avatar' />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between'>
            <p className={`font-bold ${isSelected ? "text-white" : "text-gray-700"}`}>
              {conversation.fullName}
            </p>
            
          </div>
        </div>
      </div>
      {!lastIdx && <div className='divider my-2'></div>}
    </>
  );
};

export default Conversation;
