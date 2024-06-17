import { useState } from 'react';
import AddPostMessageForm from "../../components/AddPostMessageForm/AddPostMessageForm";
import {GetProps} from "../../type";

interface PostMessageProps {
    message: string;
    author: string;
}

const url = 'http://146.185.154.90:8000/messages';

const PostMessage = () => {

    const [messages, setMessages] = useState<GetProps[]>([]);

    const createMessage = async  (newMessage:PostMessageProps) => {
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
        <>
            <AddPostMessageForm onSubmit={createMessage}/>
        </>
    );
};

export default PostMessage;