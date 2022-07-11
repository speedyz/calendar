import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";
import {createEvent} from "@testing-library/react";
import eventCalendar from "../components/EventCalendar";

const Event: FC = () => {
    const {guests, events} = useTypedSelector(state => state.event)
    const [modalVisibility, setModalVisibility] = useState(false)
    const {fetchGuests, fetchEvents, createEvent} = useActions()
    const {user} = useTypedSelector(state =>state.auth)

    useEffect(()=>{
        fetchGuests()
        fetchEvents(user.username)
    },[])

    const addNewEvent = (event: IEvent) => {
        setModalVisibility(false)
        createEvent(event)
    }

    return (
        <Layout>
            <EventCalendar  events={events}/>
            <Row justify="center">
                <Button
                    onClick={() => setModalVisibility(true)}
                >Add event</Button>
            </Row>
            <Modal
                title="Add Event"
                visible={modalVisibility}
                footer={null}
                onCancel={() => setModalVisibility(false)}
            >
                <EventForm guests={guests}
                submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;