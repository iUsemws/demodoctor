import {Component} from '@angular/core';
import {ChatService} from '../../services/chatService';

@Component({
    selector: 'pc-chat-form',
    templateUrl: 'app/components/chatForm/chatForm.html'
})
export class ChatFormComponent {
    public text:string;

    public hasAsked:boolean;
    public questionAnswered:boolean;
    public answer:string;

    private questionId:string;

    constructor(private _chatService:ChatService) {

        // todo: remove before commit
        localStorage.setItem('questionId', undefined);

        this.questionAnswered = false;
        this.hasAsked = false;

        this.periodicRefresh();
    }

    private handleAnswerResponse(data) {
        this.answer = JSON.parse(data._body).answer;
        this.questionAnswered = true;
    }

    public periodicRefresh() {
        if (this.questionId !== "undefined" && !this.questionAnswered) {
            this._chatService.getAnswer(this.questionId)
                .subscribe(data => this.handleAnswerResponse(data),
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


    private handleData(data) {
        this.answer = "Die Anfrage wird verschickt.";

        var body = JSON.parse(data._body);
        this.questionId = body.questionId;

        // disable another question; todo: replace this multi question behavior
        this.hasAsked = true;
        this.questionAnswered = false;
    }

    private handleErr(err) {
        this.answer = "Es ist ein Fehler aufgetreten :(";
        console.log(err);
    }

    public formSubmitted() {
        if (!this.text) {
            return;
        }

        this._chatService.ask(this.text)
            .subscribe(
                data => this.handleData(data),
                err => this.handleErr(err),
                () => console.log("Request done."));
    }
}
