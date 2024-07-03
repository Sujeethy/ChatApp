import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    const shakeClass = message.shouldShake ? "shake" : "";
    
    const [messageContent, setMessageContent] = useState(message.message);
    const [translatedContent, setTranslatedContent] = useState("");

    const ask = async (v) => {
        try {
            
            const res = await fetch('http://localhost:5000/api/ask', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: v=="translate"?JSON.stringify({ question:"translate the given text and give only output as english translated text only, the input of text in {} brackets .. text is { "+messageContent +"}" }):JSON.stringify({ question:"make summary the given text and give only output as english summary text .. text is { "+messageContent +"}" }) ,
            });
            const data = await res.json();
            setMessageContent(data.answer); // Set translated content from response
        } catch (error) {
            console.error('Error fetching translation:', error);
        }
    };

    const toggleTranslation = () => {
        // Toggle between original and translated content
        setMessageContent(translatedContent ? message.message : translatedContent);
    };

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Profile' src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
                {messageContent}
            </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
                <Button onClick={()=>ask("translate")}>Translate</Button>
                
                <Button onClick={ask}>Summary</Button>
                {formattedTime}
            </div>
        </div>
    );
};

export default Message;
