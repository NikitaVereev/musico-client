import {FC, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {sortData} from "@/src/components/screens/catalog/sort/sort.data";



const Sort: FC = () => {
    const [sort, setSort] = useState('')
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    console.log(sort)
    return (
        <div>
            <Box sx={{ maxWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Age"
                        onChange={handleChange}
                    >
                        {sortData.map(item => (
                            <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                        ))}

                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default Sort;