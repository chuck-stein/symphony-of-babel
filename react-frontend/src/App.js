import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AudioSettingsProvider} from "./AudioSettingsContext";
import axios from "axios";
import './App.css';
import Nav from "./components/Nav";
import About from "./components/About";
import Browse from "./components/Browse";
import Search from "./components/Search";
import Random from "./components/Random";
import Excerpt from "./components/Excerpt";

// The App component is the entry point to the React web page, containing a header (nav bar), footer, and routes to other content.
const App = () => {

    const [audioSettingsContext, setAudioSettingsContext] = useState({
        sampleRate: 24000,
        excerptDuration: 5
    });

    useEffect(() => {
        const getAudioSettings = async () => {
            const response = await axios.get('/audioSettings');
            const data = await response.data;
            setAudioSettingsContext({
                sampleRate: data.sampleRate,
                excerptDuration: data.excerptDuration
            });
        };
        getAudioSettings();
    }, []);

    return (
        <AudioSettingsProvider value={audioSettingsContext}>
            <Router>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={About} />
                        <Route path='/browse' component={Browse} />
                        <Route path='/search' component={Search} />
                        <Route path='/random' component={Random} />
                        <Route path='/excerpt' component={Excerpt} />
                    </Switch>
                    <div className='footer'>
                        <p>
                            This website is a&nbsp;
                            <a href='https://github.com/chuck-stein/symphony-of-babel' target='_blank' rel='noopener noreferrer'>
                                work in progress
                            </a>.
                            Please use the latest version of Chrome. Inspired by Jonathon Basile's&nbsp;
                            <a href='https://libraryofbabel.info' target='_blank' rel='noopener noreferrer'>Library of Babel</a>.
                        </p>
                    </div>
                </div>
            </Router>
        </AudioSettingsProvider>
    );
};

export default App;
