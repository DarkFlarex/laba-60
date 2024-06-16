import React, { useState } from 'react';
import AddPostMessageForm from "../../components/AddPostMessageForm/AddPostMessageForm";
import {GetProps} from "../../type";

const url = 'http://146.185.154.90:8000/messages';

const PostMessage = () => {

    const [messages, setMessages] = useState<GetProps[]>([]);

    const createMessage = async  (newMessage:GetProps) => {
        const data = new URLSearchParams();
        data.set('message', newMessage.message);
        data.set('author', newMessage.author);

        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });

        if (response.ok) {
            const newMessages = await response.json() as GetProps;
            setMessages(prevMessages => [...prevMessages, newMessages]);
        }
    };

    return (
        <div>
            <AddPostMessageForm onSubmit={createMessage}/>
        </div>
    );
};

export default PostMessage;