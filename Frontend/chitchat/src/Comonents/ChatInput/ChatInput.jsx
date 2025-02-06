import React,{Component} from "react";
import './ChatInput.scss';

class ChatInput extends Component{
    render(){
        return(
            <div className="ChatInput">
                <input type="text" placeholder="Enter a message" onKeyDown={this.props.send} />
            </div>
        );
    };
}
export default ChatInput