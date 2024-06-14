import React, { useState } from 'react';

interface TapInProps {
    setBpm: (bpm: number) => void;
}

const TapIn: React.FC<TapInProps> = ({ setBpm }) => {
    const [taps, setTaps] = useState<number[]>([]);
    const MIN_BPM = 40;
    const MAX_BPM = 218;

    const handleTap = () => {
        const now = Date.now();
        setTaps((prevTaps) => {
            const newTaps = [...prevTaps, now];

            if (newTaps.length > 4) newTaps.shift();

            if (newTaps.length > 1) {
                const intervals = newTaps.slice(1).map((tap, index) => tap - newTaps[index]);
                const averageInterval = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;
                let newBpm = 60000 / averageInterval;
                newBpm = Math.max(MIN_BPM, Math.min(MAX_BPM, newBpm));
                setBpm(Math.round(newBpm));
            }

            return newTaps;
        });
    };

    return (
        <>
            <h2>Tap In!</h2>
            <h1 onClick={handleTap} style={{ cursor: 'pointer' }}>🙏</h1>
        </>
    );
};

export default TapIn;