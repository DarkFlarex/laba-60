import {GetProps} from "../../type";
import './GetPostMessageList.css';

interface Props {
  messages:GetProps;
}

const GetPostMessageList:React.FC<Props> = ({messages}) => {
    return (
        <div className="Message">
            <span className="massage-text">Id:{messages._id}</span>
            <span className="massage-text">Message:{messages.message}</span>
            <span className="massage-text">Author:{messages.author}</span>
            <span className="massage-text">Date:{new Date(messages.datetime).toLocaleString()}</span>
        </div>
    );
};

export default GetPostMessageList;