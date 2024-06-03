import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface ContinuousSliderProps {
    value: number;
    onChange: (value: number) => void;
}

const ContinuousSlider: React.FC<ContinuousSliderProps> = ({ value, onChange }) => {
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChange(newValue as number);
    };

    return (
        <Box sx={{ width: 200 }}>
            <Slider
                value={value}
                onChange={handleChange}
                aria-label="BPM Selector"
                aria-valuemin={40}
                aria-valuemax={218}
                aria-valuenow={value}
                aria-valuetext={`${value} BPM`}
                max={218}
                min={40}
            />
        </Box>
    );
}

export default ContinuousSlider;
