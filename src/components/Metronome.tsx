import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import ContinuousSlider from "./metronome/Slider";
import PlayButton from "./metronome/PlayButton";
import { Stack, Switch } from "@mui/material";
import Card from 'react-bootstrap/Card';
import ClapStyle from "./metronome/ClapStyle";

const Metronome: React.FC = () => {
    const [bpm, setBpm] = useState<number>(100);
    const [playing, setPlaying] = useState<boolean>(false);
    const [clapping, setClapping] = useState<boolean>(true);
    const [clapStyle, setClapStyle] = useState<string>("Slight");

    const oneBeatDurationInMs = (bpm: number) => 60000 / bpm;
    const oneBeatInSeconds = oneBeatDurationInMs(bpm) / 1000;

    let ac: AudioContext;
    let engine: NodeJS.Timeout;
    let lastNote = 0;
    let nextNote = 0;

    useEffect(() => {
        ac = new AudioContext();

        const sound = (ac: AudioContext, time: number) => {
            let osc = ac.createOscillator()
            osc.connect(ac.destination)
            osc.start(time)
            osc.stop(time + 1 / 16)
        };

        const timer = () => {
            const diff = ac.currentTime - lastNote;
            if (diff >= oneBeatInSeconds / 2) {
                nextNote = lastNote + oneBeatInSeconds;
                lastNote = nextNote;
                sound(ac, nextNote);
            }
        };

        if (playing) {
            ac.resume();
            clearInterval(engine);
            engine = setInterval(timer, oneBeatInSeconds / 25.0);
        } else {
            ac.suspend();
            clearInterval(engine);
            lastNote = 0;
            nextNote = 0;
        }

        return () => clearInterval(engine);
    }, [playing, bpm]);

    const togglePlay = () => {
        setPlaying(!playing);
    };
    const toggleClap = () => {
        setClapping(!clapping);
    };
    const changeClapStyle = (clapStyle: string) => {
        setClapStyle(clapStyle);
    }

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Stack justifyContent="center" spacing={2} direction="row" alignItems="center">
                        <h1 style={{ width: '160px', textAlign: 'center' }}>{bpm} bpm</h1>
                        <ContinuousSlider value={bpm} onChange={setBpm} />
                        <PlayButton playing={playing} onClick={togglePlay} />
                    </Stack>
                    <Stack justifyContent="center" spacing={2} direction="row" alignItems="center">
                        <Switch checked={clapping} onChange={toggleClap} />
                        <h1>{clapping ? "👏" : "🔇"}</h1>
                        <ClapStyle clapStyle={clapStyle} onChange={changeClapStyle} disabled={!clapping} />
                    </Stack>
                </Card.Body>
            </Card>
            <h1>{clapStyle}</h1>
        </Container>
    );
}

export default Metronome;