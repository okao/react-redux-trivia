import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const SelectField = ({ label, options }) => {
  const [value, setValue] = useState("");
  const handleChange = () => {}

  return (
    <Box mt={3} width="100%">
      <FormControl size='small' fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChan ge={handleChange}>
          {options.map(({id, name}) => (
            <MenuItem value={id} key={id}>{ name }</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectField
