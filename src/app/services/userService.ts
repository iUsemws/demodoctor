import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    private _id: number;

    public get id(): number {
        return 5;

        if (!this._id) {
            this.loadUserId();
        }

        return this._id;
    }

    private loadUserId() {
        let userId = localStorage.getItem('userId');

        if (userId === null) {
            userId = this.generateUserId();
            localStorage.setItem('userId', userId);
        }

        this._id = parseInt(userId);
    }

    private generateUserId(): number {
        return Math.floor(Math.random() * 1000000) + 1;
    }
}
