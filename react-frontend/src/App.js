import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Nav from "./components/Nav";
import About from "./components/About";
import Browse from "./components/Browse";
import Search from "./components/Search";
import Random from "./components/Random";
import axios from "axios";
import ExcerptFetch from "./components/ExcerptFetch";
import {AudioProvider} from "./AudioContext";

function App() {

    // TODO: check to make sure I'm using Context API right
    const [audioContext, setAudioContext] = useState({
        sampleRate: 24000,
        excerptDuration: 5
    });

    useEffect(() => {
        async function getAudioSettings() {
            const response = await axios.get('/audioSettings');
            const data = await response.data;

            // TODO: is this the best way to save sample rate and excerpt duration as global constants?
            setAudioContext({
                sampleRate: data.sampleRate,
                excerptDuration: data.excerptDuration
            });
        }
        getAudioSettings();
    }, []);

    return (
        <AudioProvider value={audioContext}>
           <Router>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={About} />
                        <Route path='/browse' component={Browse} />
                        <Route path='/search' component={Search} />
                        <Route path='/random' component={Random} />
                        <Route path='/excerpt/:id' component={ExcerptFetch} />
                    </Switch>
                </div>
            </Router>
        </AudioProvider>
    );
}

export default App;
