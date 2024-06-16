import {GetProps} from "../../type";
import {useEffect, useState} from "react";
import GetPostMessageList from "../../components/GetPostMessageList/GetPostMessageList";
import "./GetPostMessage.css";

const url = 'http://146.185.154.90:8000/messages';

const GetPostMessage = () => {

    const [showMessage, setShowMessage] = useState<GetProps[]>([]);

    useEffect(() => {
        const fetchData = async () =>{
        const response = await fetch(url);
        if (response.ok) {
            const showMessage = await response.json() as GetProps[];
            const newShowMessage = showMessage.map(message =>({
                _id:message._id,
                message:message.message,
                author:message.author,
                datetime:message.datetime,
            }));
            setShowMessage(newShowMessage);
        }
        };
        void fetchData()
    }, []);

    return (
        <div>
            <div className="Message-list">
                {showMessage.map((message) => (
                    <GetPostMessageList
                        key={message._id}
                        messages={message}
                    />
                ))}
            </div>
        </div>
    );
};

export default GetPostMessage;