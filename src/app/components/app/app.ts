import {Component} from '@angular/core';
import {ChatFormComponent} from '../chatForm/chatForm';
import {MessageListComponent} from '../messageList/messageList';
import {APP_SERVICES} from '../../services/services';

@Component({
    selector: 'pairedchatting-app',
    templateUrl: 'app/components/app/app.html',
    directives: [ChatFormComponent, MessageListComponent],
    providers: APP_SERVICES
})
export class AppComponent {
}
