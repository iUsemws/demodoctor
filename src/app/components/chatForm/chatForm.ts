import {Component} from '@angular/core';
import {ChatService} from '../../services/chatService';

@Component({
    selector: 'pc-chat-form',
    templateUrl: 'app/components/chatForm/chatForm.html'
})
export class ChatFormComponent {
    public text: string;

    public hasAsked: boolean;
    public questionAnswered: boolean;
    public answer: string;

    constructor(private _chatService: ChatService) {

        // todo: remove before commit
        localStorage.setItem('questionId', undefined);

        this.questionAnswered = false;
        this.hasAsked = false;

        this.periodicRefresh();
    }

    public periodicRefresh() {

        var questionId = localStorage.getItem('questionId');

        if (questionId !== 'undefined') {

            this._chatService.getAnswer(questionId)
                .subscribe(data => {
                    console.log(data);
                    this.questionAnswered = true;
                },
                err => {
                    // todo: suppress error in console?
                    if (err.status == 400) {
                        this.answer = "Die Anfrage wird bearbeitet.";
                        this.questionAnswered = false;
                    } else {
                        this.answer = "Something bad happened.";
                    }
                });
        }
        setTimeout(() => this.periodicRefresh(), 2000);
    }

    private handleWaitData(data) {
        console.log(data);

        this.questionAnswered = true;
    }

    private handleWaitErr(err) {
        console.log(err);
    }
    
    private handleData(data) {
        this.answer = "Die Anfrage wird verschickt.";

        var body = JSON.parse(data._body);
        var questionId = body.questionId;

        console.log(questionId);

        localStorage.setItem('questionId', questionId);

        // disable another question; todo: replace this multi question behavior
        this.hasAsked = true;
    }
    
    private handleErr(err) {
        this.answer = "Es ist ein Fehler aufgetreten :(";
        console.log(err);
    }
    
    public formSubmitted() {
        if (!this.text) {
            return;
        }

        this.questionAnswered = false;
        this._chatService.ask(this.text)
            .subscribe(
                data => this.handleData(data),
                err => this.handleErr(err),
                () => console.log("Request done."));
    }
}
