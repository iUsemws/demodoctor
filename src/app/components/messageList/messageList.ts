import {Component} from '@angular/core';
import {ChatService} from '../../services/chatService';

@Component({
    selector: 'pc-message-list',
    templateUrl: 'app/components/messageList/messageList.html'
})
export class MessageListComponent {
    public messages: Array<string> = [];
    
    constructor(private _chatService: ChatService) {
        this.periodicRefresh();

    }
    
    public periodicRefresh() {
        return;
        this._chatService.list() 
            .subscribe(list => {
                this.messages = this.messages.concat(list);
                setTimeout(() => this.periodicRefresh(), 1000);

            }, () => setTimeout(() => this.periodicRefresh(), 1000));
    }
}
