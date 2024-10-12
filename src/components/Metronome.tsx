import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Stack, Switch } from '@mui/material';
import Card from 'react-bootstrap/Card';
import {
    ContinuousSlider,
    PlayButton,
    ClapStyle,
    TimeSignature,
    TapIn,
} from './metronome';
import siteConfig from '@/config/clap-chaos';

const Metronome: React.FC = () => {
    const [bpm, setBpm] = useState<number>(100);
    const [playing, setPlaying] = useState<boolean>(false);
    const [cheerPlayed, setCheerPlayed] = useState<boolean>(true);
    const [clapping, setClapping] = useState<boolean>(true);
    const [clapStyle, setClapStyle] = useState<string>('Slight');
    const [timeSigNum, setTimeSigNum] = useState<number>(4);
    const [timeSigDen, setTimeSigDen] = useState<number>(4);

    const offBeatClapDelay = 0.01;
    const oneBeatDurationInMs = (bpm: number, den: number) =>
        (60000 / bpm) * (4 / den);
    const oneBeatInSeconds = oneBeatDurationInMs(bpm, timeSigDen) / 1000;

    const acRef = useRef<AudioContext | null>(null);
    const engineRef = useRef<NodeJS.Timeout | null>(null);

    let beat = 1;
    let lastNote = 0;
    let nextNote = 0;

    const numeratorValues = Array.from({ length: 16 }, (_, i) => i + 1);
    const denominatorValues = [1, 2, 4, 8];

    const sound = (ac: AudioContext, time: number) => {
        const osc = ac.createOscillator();
        osc.connect(ac.destination);

        if (beat % timeSigNum === 0) {
            osc.frequency.value = 880;
            beat = 1;
        } else {
            osc.frequency.value = 440;
            beat++;
        }

        osc.start(time);
        osc.stop(time + 1 / 16);
    };

    const randomClap = () => {
        const randomNumber = Math.floor(
            Math.random() * siteConfig.NUM_CLAP_MP3 + 1,
        );
        return `/claps/${randomNumber}.mp3`;
    };

    const clap = () => {
        const clapSound = new Audio(randomClap());
        clapSound.play();
    };

    const timer = () => {
        if (!acRef.current) return;
        const ac = acRef.current;
        const diff = ac.currentTime - lastNote;

        if (diff >= oneBeatInSeconds / 2) {
            const randomOffset = (Math.random() - 0.5) * (oneBeatInSeconds / 4);
            nextNote = lastNote + oneBeatInSeconds + randomOffset;
            lastNote = nextNote;
            sound(ac, nextNote);

            if (Math.random() > 0.3) {
                if (clapping) clap();
            }
        }
    };

    useEffect(() => {
        if (!acRef.current) {
            acRef.current = new AudioContext();
        }

        if (playing) {
            acRef.current.resume();
            engineRef.current = setInterval(timer, oneBeatInSeconds / 25.0);
        } else {
            //play cheering noise, then stop, only play once`
            if (acRef.current && !cheerPlayed) {
                setCheerPlayed(true);
                const cheering = new Audio('/cheer/cheer.mp3');
                cheering.play();
            }
            acRef.current.suspend();
            if (engineRef.current) clearInterval(engineRef.current);
        }

        return () => {
            if (engineRef.current) clearInterval(engineRef.current);
        };
    }, [playing, bpm, timeSigNum, timeSigDen, clapping]);

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Stack
                        justifyContent="center"
                        spacing={2}
                        direction="row"
                        alignItems="center"
                    >
                        <h1 style={{ width: '160px', textAlign: 'center' }}>
                            {bpm} bpm
                        </h1>
                        <ContinuousSlider
                            value={bpm}
                            onChange={(value: number) => {
                                setBpm(value);
                                setPlaying(false);
                            }}
                        />
                        <PlayButton
                            playing={playing}
                            onClick={() => {
                                setPlaying(!playing);
                                setCheerPlayed(false);
                            }}
                        />
                        <TapIn setBpm={setBpm} />
                    </Stack>
                    <br />
                    <Stack
                        justifyContent="center"
                        spacing={2}
                        direction="row"
                        alignItems="center"
                    >
                        <Switch
                            checked={clapping}
                            onChange={() => setClapping(!clapping)}
                            aria-label="Clapping Switch"
                        />
                        <h1>{clapping ? '👏' : '🔇'}</h1>
                        <ClapStyle
                            clapStyle={clapStyle}
                            onChange={(style: string) => setClapStyle(style)}
                            disabled={!clapping}
                        />
                    </Stack>
                    <br />
                    <Stack
                        justifyContent="center"
                        spacing={2}
                        direction="row"
                        alignItems="center"
                    >
                        <TimeSignature
                            timeSig={timeSigNum}
                            numbers={numeratorValues}
                            onChange={(num: number) => setTimeSigNum(num)}
                        />
                        <TimeSignature
                            timeSig={timeSigDen}
                            numbers={denominatorValues}
                            onChange={(den: number) => setTimeSigDen(den)}
                        />
                        <h1>
                            {timeSigNum} / {timeSigDen}
                        </h1>
                    </Stack>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Metronome;
