import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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
                aria-label="Volume"
                max={218}
                min={40}
            />
        </Box>
    );
}

export default ContinuousSlider;
