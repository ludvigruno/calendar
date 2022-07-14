import React, { useState, useEffect } from "react";
import { Layout, Row, Button, Modal, Badge, BadgeProps } from "antd";
import { CalendarEvent } from "../components/CalendarEvent";
import { FormEvent } from "../components/FormEvent";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { IEvent } from "../models/IEvent";

const Event = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = (event: IEvent) => {
    createEvent(event);
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  return (
    <Layout>
      <CalendarEvent events={events} />
      <Row justify="center">
        <Button type="primary" onClick={showModal}>
          Добавить событие
        </Button>
      </Row>
      <Modal title="Basic Modal" visible={isModalVisible} footer={null}>
        <FormEvent guests={guests} submit={handleSubmit} />
      </Modal>
    </Layout>
  );
};

export default Event;
