import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../types/message';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  private _message$ = new Subject<Message | undefined>();

  newMessage$ = this._message$.asObservable();

  constructor() {}

  getErrorMessage(message: Message) {
    this._message$.next(message);
  }

  remove() {
    this._message$.next(undefined);
  }
}
