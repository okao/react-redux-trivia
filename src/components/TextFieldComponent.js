import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TextFieldComponent = ({ label, type, size, formSize }) => {
  const handleChange = () => {
  }

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size={formSize}>
        <TextField
          onChange={handleChange}
          variant='outlined' label={label} type={type} size={size}
        />
      </FormControl>
    </Box>
  )
}

export default TextFieldComponent
