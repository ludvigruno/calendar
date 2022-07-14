export interface IEvent {
  author: string;
  guest: string;
  //тип сттрока что бы привести к нужному фрмату через moment и отправлять на бэк
  date: string;
  description: string;
}
