import React from 'react';
import messageHoc from './HOC';

/*interface UserMessage {
    name: string;
    message: string;
}

const Message = (props: UserMessage): any => {
    return (
        <p>{props.name}, {props.message}</p>
    )
}

export default Message;*/

const example = (props: any): any => <p>{props.name}, {props.message}</p>

const Message = messageHoc(example);

export default Message;