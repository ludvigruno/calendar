import moment, { Moment } from "moment";

export const rules = {
  required: (message: string = "Обязательное поле для заполнения!") => ({
    required: true,
    message,
  }),
  //для работы с датой что бы события на прошлые даты создавать нельзя было
  //функция которая возвращает обьект в нуткри которого есть метод валидации, _ - говорит о том что аргумент не обязателен
  isDataAfter: (message: string) => ({
    validator: (_: any, value: Moment) => {
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
