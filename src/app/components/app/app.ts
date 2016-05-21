import {Component} from '@angular/core';
import {ChatFormComponent} from '../chatForm/chatForm';
import {APP_SERVICES} from '../../services/services';

@Component({
    selector: 'pairedchatting-app',
    templateUrl: 'app/components/app/app.html',
    directives: [ChatFormComponent],
    providers: APP_SERVICES
})
export class AppComponent {
}
