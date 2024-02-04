import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventFilter.css';

function EventFilter() {
    const [Country, setCountry] = useState('All');
    const [CivilianTargeting, setCivilianTargeting] = useState(false);
    const [Actor, setActor] = useState('Choose...');
    const [Event, setEvent] = useState('Choose...');
    const [Fatalities, setFatalities] = useState('All');

    const handleCountryChange = (value) => {
        setCountry(value);
    }
    
    const handleAivilianTargetingChange = () => {
        setCivilianTargeting(!CivilianTargeting);
    }

    const handleActorChange = (event) => {
        setActor(event.target.value);
    }

    const handleEventChange = (event) => {
        setEvent(event.target.value);
        console.log(event.target.value);
    }

    const handleFatalitiesChange = (value) => {
        setFatalities(value);
    }

    const sendData = () => {
        console.log(Country);
        console.log(CivilianTargeting);
        console.log(Actor);
        console.log(Event);
        console.log(Fatalities);
    }
    
    const groups = ['Al Aqsa Martyrs Brigade',
    'Al Nasser Salah al Deen Brigades',
    'Civilians (International)',
    'Civilians (Israel)',
    'Civilians (Jordan)',
    'Civilians (Nepal)',
    'Civilians (Pakistan)',
    'Civilians (Palestine)',
    'Civilians (Thailand)',
    'DFLP: Democratic Front for the Liberation of Palestine',
    'Fatah Movement',
    'Government of Israel (2022-)',
    'Government of Palestine (1994-) Palestinian National Authority',
    'Government of Palestine (2007-) Hamas Government in Gaza',
    'Hamas Movement',
    'Hezbollah',
    'Kataib Al Ayyash',
    'Katibat Al Fajr',
    'Katibat Bayt Ummar',
    'Katibat Hebron',
    'Katibat Jaba',
    'Katibat Jenin',
    'Katibat Jericho',
    'Katibat Maythalun',
    'Katibat Nablus',
    'Katibat Nur ash Shams',
    'Katibat Qabatiyah',
    'Katibat Qalqilya - Quick Response',
    'Katibat Ramallah - Jund Allah',
    'Katibat Tubas',
    'Katibat Tulkarm',
    'Katibat Tulkarm - Quick Response',
    'Lions of Glory',
    "Lions' Den",
    'Military Forces of Israel (2022-)',
    'Military Forces of Israel (2022-) Special Forces',
    'Military Forces of Lebanon (2021-)',
    'Military Forces of Palestine (1994-)',
    'Military Forces of Yemen (2017-) Houthi',
    'Military Forces of the United States (2021-)',
    'Mujahideen Brigades',
    'National Resistance Brigades',
    'PFLP: Popular Front for the Liberation of Palestine',
    'PIJ: Palestinian Islamic Jihad',
    'Police Forces of Israel (2022-)',
    'Police Forces of Israel (2022-) Border Police',
    'Police Forces of Israel (2022-) Prison Guards',
    'Police Forces of Israel (2022-) Yamam',
    'Police Forces of Palestine (1994-) West Bank',
    'Police Forces of Palestine (2007-) Gaza Strip',
    'Private Security Forces (Israel)',
    'Protesters (Israel)',
    'Protesters (Palestine)',
    'Rioters (Israel)',
    'Rioters (Lebanon)',
    'Rioters (Palestine)',
    'SWAT Arabian Island',
    'Settlers (Israel)',
    'Tubas Youth of Revenge and Liberation',
    'Tulkarm Youth of Revenge and Liberation',
    'Unidentified Armed Group (International)',
    'Unidentified Armed Group (Israel)',
    'Unidentified Armed Group (Lebanon)',
    'Unidentified Armed Group (Palestine)',
    'Unidentified Armed Group (Syria)']

    const events = ['Battles',
    'Explosions/Remote violence',
    'Protests',
    'Riots',
    'Strategic developments',
    'Violence against civilians']

    return (
        <div className='position-fixed bg-black bg-opacity-25 rounded-4' style={{bottom: "15%", left: '1%'}}>
            <ul class="list-group">
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-4 bg-transparent border-0 text-light">Country</li>
                    <li class="list-group-item bg-transparent border-0">
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" defaultChecked/>
                            <label class="btn text-light" for="btnradio1" onClick={() => handleCountryChange('All')}>All</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                            <label class="btn text-light" for="btnradio2" onClick={() => handleCountryChange('Israel')}>Israel</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                            <label class="btn text-light" for="btnradio3" onClick={() => handleCountryChange('Palestine')}>Palestine</label>
                        </div>
                    </li>
                </ul>

                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-4 bg-transparent border-0 text-light">Civilian Targeting</li>
                    <li class="list-group-item bg-transparent border-0">
                        <button type="button" class="btn text-light border-0" data-bs-toggle="button" onClick={handleAivilianTargetingChange}>{CivilianTargeting ? 'Yes' : 'No'}</button>
                    </li>
                </ul>

                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-2 bg-transparent border-0 text-light">Actor</li>
                    <li class="list-group-item bg-transparent border-0">
                        <select class="form-select bg-transparent text-light" onChange={handleActorChange}>
                            <option selected>Choose...</option>
                            {groups.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </li>
                </ul>
                
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-2 bg-transparent border-0 text-light">Event</li>
                    <li class="list-group-item col-6 bg-transparent border-0">
                        <select class="form-select bg-transparent text-light" onChange={handleEventChange}>
                            <option selected>Choose...</option>
                            {events.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </li>
                </ul>
                
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col-2 bg-transparent border-0 text-light">Fatalities</li>
                    <li class="list-group-item col-6 bg-transparent border-0 text-light">
                        <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary btn-outline-light">All</button>
                            <button type="button" class="btn btn-outline-primary btn-outline-green" onClick={() => handleFatalitiesChange(0)}>&nbsp;0&nbsp;</button>
                            <button type="button" class="btn btn-outline-primary btn-outline-warning" onClick={() => handleFatalitiesChange(1)}>1-10</button>
                            <button type="button" class="btn btn-outline-primary btn-outline-orange" onClick={() => handleFatalitiesChange(10)}>10-50</button>
                            <button type="button" class="btn btn-outline-primary btn-outline-danger" onClick={() => handleFatalitiesChange(50)}>50+</button>
                        </div>
                    </li>
                    <button type="button" class="btn float-right text-light" style={{marginLeft: "20%"}} onClick={sendData}>Search</button>
                </ul>

            </ul>
        </div>
    )
}

export default EventFilter