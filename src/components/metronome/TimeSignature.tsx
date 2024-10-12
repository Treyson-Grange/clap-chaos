import React from 'react';
import {
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
} from '@mui/material';

interface TimeSignatureProps {
    onChange: (clapStyle: number) => void;
    timeSig: number;
    numbers: Array<Number>;
}

const TimeSignature: React.FC<TimeSignatureProps> = ({
    onChange,
    timeSig,
    numbers,
}) => {
    const handleChange = (event: SelectChangeEvent<number>) => {
        onChange(event.target.value as number);
    };

    return (
        <FormControl style={{ minWidth: 120 }}>
            <Select
                labelId="time-sig-label"
                value={timeSig}
                onChange={handleChange}
            >
                {numbers.map((number) => (
                    <MenuItem key={number.toString()} value={number.toString()}>
                        {number.toString()}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default TimeSignature;
