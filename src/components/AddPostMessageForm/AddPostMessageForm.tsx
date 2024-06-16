import React, { useState, ChangeEvent } from 'react';

interface PostFormProps{
    onSubmit: (postMessage: { message:string, author:string}) => void;
}

const AddPostMessageForm:React.FC<PostFormProps> = ({onSubmit}) => {

    const[postMessage,setPostMessage]=useState('');
    const[postAuthor,setPostAuthor]=useState('');

    const onMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPostMessage(event.target.value);
    };

    const onAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPostAuthor(event.target.value);
    };

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (postMessage.trim() === '' && postAuthor.trim() === '') return;

        const newPostMessage = {
            message: postMessage,
            author: postAuthor,
        };
        onSubmit(newPostMessage);
        setPostMessage('');
        setPostAuthor('');
    };

    return (
        <form className={"AddMessageForm"} onSubmit={onFormSubmit}>
            <input className={"AddMessageForm-input"} type="text" value={postAuthor} onChange={onAuthorChange} placeholder="Authors"/>
            <input className={"AddMessageForm-input"} type="text" value={postMessage} onChange={onMessageChange} placeholder="Message"/>
            <button className={"AddMessageForm-btn"} type="submit">Add</button>
        </form>
    );
};

export default AddPostMessageForm;