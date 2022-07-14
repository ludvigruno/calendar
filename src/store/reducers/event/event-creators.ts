import axios from "axios";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";
import { EventActionsEnum, SetEventsAction, SetGuestsAction } from "./types";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
  //синхронные
  setGuests: (guests: IUser[]): SetGuestsAction => ({
    type: EventActionsEnum.SET_GUESTS,
    payload: guests,
  }),
  setEvents: (events: IEvent[]): SetEventsAction => ({
    type: EventActionsEnum.SET_EVENTS,
    payload: events,
  }),
  //асинхронные
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      //имитация обращения к серверу
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (error) {
      console.log(error);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      //имитация обращения к серверу
      let events = localStorage.getItem("events") || "[]";
      let json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (error) {
      console.log(error);
    }
  },
  fetchEvents: (userName: string) => async (dispatch: AppDispatch) => {
    try {
      //имитация обращения к серверу
      let events = localStorage.getItem("events") as "[]";
      var json = JSON.parse(events);
      const currentUserEvents = json.filter(
        (ev: IUser) => ev.guest === userName
      );
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (error) {
      console.log(error);
    }
  },
};
