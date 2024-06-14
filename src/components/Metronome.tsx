import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import { Stack, Switch } from "@mui/material";
import Card from 'react-bootstrap/Card';
import { ContinuousSlider, PlayButton, ClapStyle, TimeSignature, TapIn } from "./metronome";


const Metronome: React.FC = () => {
    const [bpm, setBpm] = useState<number>(100);
    const [playing, setPlaying] = useState<boolean>(false);
    const [clapping, setClapping] = useState<boolean>(true);
    const [clapStyle, setClapStyle] = useState<string>("Slight");
    const [timeSigNum, setTimeSigNum] = useState<number>(4);
    const [timeSigDen, setTimeSigDen] = useState<number>(4);
    const offBeatClapDelay = .01;
    let playClap = true;
    const oneBeatDurationInMs = (bpm: number, den: number) => (60000 / bpm) * (4 / den);
    const oneBeatInSeconds = oneBeatDurationInMs(bpm, timeSigDen) / 1000;

    const numeratorValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const denominatorValues = [1, 2, 4, 8];

    let ac: AudioContext;
    let engine: NodeJS.Timeout;
    let beat = 1;
    let lastNote = 0;
    let nextNote = 0;
    let osc: OscillatorNode;

    useEffect(() => {
        ac = new AudioContext();

        const sound = (ac: AudioContext, time: number) => {
            osc = ac.createOscillator()
            osc.connect(ac.destination)
            if (beat % timeSigNum === 0) {
                osc.frequency.value = 880
                beat = 1
            }
            else {
                osc.frequency.value = 440
                beat++
            }
            osc.start(time)
            osc.stop(time + 1 / 16)

        };

        const clap = () => {
            const clapSound = new Audio("/clap-1.mp3");
            clapSound.play();
            playClap = false;
        }

        const timer = () => {
            const diff = ac.currentTime - lastNote;
            if (diff >= oneBeatInSeconds / 2) {
                nextNote = lastNote + oneBeatInSeconds;
                lastNote = nextNote;
                sound(ac, nextNote);
                playClap = true;//Generally when its 8notes, they dont clap every beat. 
            }
            if (clapping && playClap && diff >= oneBeatInSeconds / 4 - offBeatClapDelay) {
                clap();
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
            beat = 1;
        }
        return () => clearInterval(engine);
    }, [playing, bpm, timeSigNum, timeSigDen, offBeatClapDelay]);

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Stack justifyContent="center" spacing={2} direction="row" alignItems="center">
                        <h1 style={{ width: '160px', textAlign: 'center' }}>{bpm} bpm</h1>
                        <ContinuousSlider value={bpm} onChange={setBpm} />
                        <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
                        <TapIn setBpm={setBpm} />
                    </Stack>
                    <br />
                    <Stack justifyContent="center" spacing={2} direction="row" alignItems="center">
                        <Switch checked={clapping} onChange={() => setClapping(!clapping)} aria-label="Clapping Switch" aria-labelledby="{clapping}" />
                        <h1>{clapping ? "👏" : "🔇"}</h1>
                        <ClapStyle clapStyle={clapStyle} onChange={(clapStyle: string) => setClapStyle(clapStyle)} disabled={!clapping} />
                    </Stack>
                    <br />
                    <Stack justifyContent="center" spacing={2} direction="row" alignItems="center">
                        <TimeSignature timeSig={timeSigNum} numbers={numeratorValues} onChange={(timeSig: number) => setTimeSigNum(timeSig)} />
                        <TimeSignature timeSig={timeSigDen} numbers={denominatorValues} onChange={(timeSig: number) => setTimeSigDen(timeSig)} />
                        <h1>{timeSigNum} / {timeSigDen}</h1>
                    </Stack>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Metronome;
