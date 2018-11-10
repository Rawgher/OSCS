import React from 'react';

const Message = (props) => {
    let myUsername = "username";
    let myMessage = "data";
    if (props.myMessage) {
        myMessage += " my-messages";
        myUsername += " my-messages";
    }

    return (
        <div className="message">
            <div className={myUsername}>
                <b>{props.message.username}</b>
            </div>

            <div className={myMessage}>
                {props.message.message.type === 'message' ? (
                    <div className="text">
                        {props.message.message.text}
                    </div>
                ) : (
                    <div className="image">
                        <img src={props.message.message.url} alt=""/>
                    </div>
                )}
            </div>

        </div>
    )
};

export default Message;