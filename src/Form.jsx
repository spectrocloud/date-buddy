import React from 'react';
import { DatePicker, Button, Form } from 'antd';
import {data} from './dataset'
import SuggestComponent from './SuggestionArea';


const DateForm = ({setSuggestion}) => {
    const onFinish = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        };
        const date = new Date(values['date-picker']).getMonth()
        let result= ""
        switch(date) {
            case 0:
                result = data[date]['date-suggestions'][(Math.floor(Math.random() * data[date]['date-suggestions'].length))] 
                break

            default:
                result = data[0]['date-suggestions'][(Math.floor(Math.random() * data[0]['date-suggestions'].length))] 
                break
        }
    setSuggestion(result);
    return result
};

return (
    <div className='date-form'>
        <section>
        <text className='greeting-text'>Hello you 👋!</text>
        <p className='greeting-description'>Let me help you plan your date with your partner(s) </p>
        </section>
        <Form 
            onFinish={onFinish}
            >
            <Form.Item name="date-picker" id='date-picker' required label = {
                <p className='select-date-text'>What date is your date 😉?</p>
            }> 
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{'background-color': 'rgb(9, 9, 57)'}} >
                Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
)
}

export default DateForm