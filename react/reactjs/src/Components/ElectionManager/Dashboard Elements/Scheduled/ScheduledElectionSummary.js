/* for election manager */

import React from 'react';
import Header from '../../Header';
//import EditElectionSidebar from '../EditElectionSidebar';
import { useNavigate } from 'react-router-dom';

function ScheduledElectionSummary() {    
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/scheduled-election-summary2')
    }
       return (
        <>
            <Header />        
            <div className='container'>
                <div className="election-details-page">
                    <main className="form-content">
                    <h1>Scheduled Election - Summary</h1>
                    <div className="election-details-summary">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" disabled/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" name="description" disabled/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="start-date">Start Date</label>
                            <input type="datetime-local" id="start-date" name="start-date" disabled/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="end-date">End Date</label>
                            <input type="datetime-local" id="end-date" name="end-date" disabled />
                        </div>

                        <div className="form-group">
                            <label htmlFor="timezone">Timezone</label>
                            <select id="timezone" name="timezone" disabled>
                                <option value="GMT8">Singapore GMT+8 (Greenwich Meantime)</option>
                                <option value="GMT-4">New York GMT-4 (Greenwich Meantime)</option>
                                <option value="GMT1">London GMT+1 (Greenwich Meantime)</option>
                                <option value="GMT10">Sydney GMT+10 (Greenwich Meantime)</option>
                                <option value="GMT9">Tokyo GMT+9 (Greenwich Meantime)</option>
                            </select>
                        </div>

                        
                        <button type="submit" className='next-button' onClick={()=>handleNavigate()}>Next</button>
                    </div>
                    </main>
                </div>
            </div>
        </>
);}

export default ScheduledElectionSummary;
