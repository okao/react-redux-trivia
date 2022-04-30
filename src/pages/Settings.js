import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComponent from '../components/TextFieldComponent'
import useAxios from '../hoooks/useAxios'

const Settings = () => {

  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  console.log(response);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Whoops! Something went wrong.
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" }, { id: "medium", name: "Medium" }, { id: "hard", name: "Hard" }
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" }, { id: "boolean", name: "True/False" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label={"Category"} />
      <SelectField options={difficultyOptions} label={"Difficulty"} />
      <SelectField options={typeOptions} label={"Type"} />
      <TextFieldComponent label={"Amount of Questions"} type={"number"} size={"small"} formSize={"small"} />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  )
}

export default Settings
