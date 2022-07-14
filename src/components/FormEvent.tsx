import React, { useState } from "react";
import {
  Form,
  Input,
  Space,
  DatePicker,
  DatePickerProps,
  Button,
  Select,
} from "antd";
import { rules } from "../utils/rules";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";
import { IUser } from "../models/IUser";

interface IFormEvent {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

export const FormEvent = (props: IFormEvent) => {
  const { guests, submit } = props;
  const [event, setEvent] = useState<IEvent>({} as IEvent);
  const { isLoading, user } = useTypedSelector((state) => state.auth);
  const selectDate: DatePickerProps["onChange"] = (data, dateString) => {
    setEvent({ ...event, date: dateString });
  };

  return (
    <Form onFinish={() => submit({ ...event, author: user.username })}>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          value={event?.description}
        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.required("Событие на прошлую дату добавить нельяз")]}
      >
        <Space direction="vertical">
          <DatePicker onChange={selectDate} />
        </Space>
      </Form.Item>
      <Form.Item label="Выбрать гостя" name="guest" rules={[rules.required()]}>
        <Select
          defaultValue="guest"
          style={{ width: 120 }}
          onChange={(guest) => setEvent({ ...event, guest })}
        >
          {guests.map((guest: IUser, i: number) => (
            <Select.Option key={i} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Сохранить событие
        </Button>
      </Form.Item>
    </Form>
  );
};
