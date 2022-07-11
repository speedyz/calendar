import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatData} from "../utils/data";
import {Simulate} from "react-dom/test-utils";
import {useTypedSelector} from "../hooks/useTypedSelector";
import auth from '../store/reducer/auth';

interface EventFormProps{
    guests: IUser[]
    submit: (event: IEvent) => void
}



const EventForm: FC<EventFormProps> = (props) => {
    const  selectDate = (date: Moment | null) => {
        if (date){
            setEvent({...event, date: formatData(date.toDate())})
        }
    }
    const {user} = useTypedSelector ( state => state.auth)
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: '',
    } as IEvent)


    const submitForm = () => {
        props.submit({...event, author: user.username})
    }
        return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e=>setEvent({...event, description: e.target.value})}
                    value={event.description}
                    />
            </Form.Item>
            <Form.Item
                label="Choose Event"
                name="date"
                rules={[rules.required(), rules.isDateAfter("Can't create")]}
            >
                <DatePicker
                onChange={(date)=> selectDate(date)}
                />
            </Form.Item>
            <Form.Item>
                <Select onChange={(guest:string) =>setEvent({...event, guest})}>
                    {props.guests.map(guest =>
                    <Select.Option value={guest.username} key={guest.username}>
                        {guest.username}
                    </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;