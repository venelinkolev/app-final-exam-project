export interface Message {
  message: string;
  type: MessageType;
}

export enum MessageType {
  Error,
  Success,
}
