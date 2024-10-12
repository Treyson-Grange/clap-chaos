import React from 'react';
import {
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    SelectChangeEvent,
} from '@mui/material';

interface ClapStyleProps {
    onChange: (clapStyle: string) => void;
    clapStyle: string;
    disabled?: boolean;
}

const ClapStyle: React.FC<ClapStyleProps> = ({
    onChange,
    clapStyle,
    disabled,
}) => {
    const handleChange = (event: SelectChangeEvent<string>) => {
        onChange(event.target.value as string);
    };

    return (
        <FormControl style={{ minWidth: 120 }} disabled={disabled}>
            <InputLabel id="clap-style-label">Clap Style</InputLabel>
            <Select
                labelId="clap-style-label"
                value={clapStyle}
                onChange={handleChange}
                label="Clap Style"
            >
                <MenuItem value="Slight">Slight Deviation</MenuItem>
                <MenuItem value="Major">Major Deviation</MenuItem>
                <MenuItem value="Random">Random</MenuItem>
            </Select>
        </FormControl>
    );
};

export default ClapStyle;
