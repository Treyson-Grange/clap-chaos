import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import ContinuousSlider from "./metronome/Slider";
import PlayButton from "./metronome/PlayButton";
import { Stack, Switch } from "@mui/material";


const Metronome: React.FC = () => {
    const [bpm, setBpm] = useState<number>(100);
    const [playing, setPlaying] = useState<boolean>(false);
    const [clapping, setClapping] = useState<boolean>(false);

    const oneBeatDurationInMs = (bpm: number) => 60000 / bpm;
    const oneBeatInSeconds = oneBeatDurationInMs(bpm) / 1000;

    let ac: AudioContext;
    let engine: NodeJS.Timeout;
    let lastNote = 0;
    let nextNote = 0;
    let beatIndex = 0;

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
            beatIndex = 0;
        }

        return () => clearInterval(engine);
    }, [playing, bpm]);

    const togglePlay = () => {
        setPlaying(!playing);
    };
    const toggleClap = () => {
        setClapping(!clapping);
    };

    return (
        <Container>
            <Stack spacing={2} direction="row" alignItems="center">
                <h1>{bpm}</h1><p>bpm</p>
                <h1>{clapping ? "👏" : "🔇"}</h1>
                <ContinuousSlider value={bpm} onChange={setBpm} />
                <PlayButton playing={playing} onClick={togglePlay} />
                <Switch checked={clapping} onChange={toggleClap} />
            </Stack>
        </Container>
    );
}

export default Metronome;
