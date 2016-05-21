import {Component} from '@angular/core';
import {ChatService} from '../../services/chatService';

@Component({
    selector: 'pc-chat-form',
    templateUrl: 'app/components/chatForm/chatForm.html'
})
export class ChatFormComponent {
    public text: string;

    constructor(private _chatService: ChatService) {

    }
    
    public formSubmitted() {
        if (!this.text) {
            return;
        }
        
        this._chatService.post(this.text)
            .subscribe(() => this.text = '');
    }
}
