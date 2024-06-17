import {GetProps} from "../../type";
import {useEffect, useState} from "react";
import GetMessageList from "../../components/GetMessageList/GetMessageList";
import "./GetMessage.css";

const url = 'http://146.185.154.90:8000/messages';

const GetMessage = () => {

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

        void fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 3000);

        return () =>{
            clearInterval(interval)
        };
    }, []);

    return (
        <>
            <div className="Message-list">
                {showMessage.map((message) => (
                    <GetMessageList
                        key={message._id}
                        messages={message}
                    />
                ))}
            </div>
        </>
    );
};

export default GetMessage;