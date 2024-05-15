
import React, { useReducer } from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Header from './header';
import Booking from './booking';
import BookingConfirm from './BookingConfirm';

const Main = () => {

    const seedRandom = function(seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) /m;
        }
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seedRandom(date.getDate());

        for (let i = 16; i <= 21; i++) { // Adjusted for 12-hour clock (5 PM to 11 PM)
            let hour = i > 12 ? i - 12 : i; // Convert to 12-hour format
            if (random() < 0.5) {
                result.push(hour + ':00 ' + (i >= 12 ? 'PM' : 'AM')); // Append AM or PM based on the hour
            }
            if (random() > 0.5) {
                result.push(hour + ':30 ' + (i >= 12 ? 'PM' : 'AM')); // Append AM or PM based on the hour
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))};
    }

    const navigate = useNavigate();
    function submitForm (formData) {
        if(submitAPI(formData)) {
            navigate('/confirmed')
        }
    }

    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Header/> } />
                <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/> } />
                <Route path='/confirmed' element={<BookingConfirm/> } />
            </Routes>
        </main>
    );
};

export default Main;