import { Box, FormControlLabel, Checkbox, FormControl, FormLabel,FormGroup } from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function MUICheckbox() {
  const [check, setCheck] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleSkills=(e)=>
  {
    const val=e.target.value;
    const index=skills.indexOf(val);
    if(index==-1)
    {
      setSkills((skills)=>[...skills,e.target.value])
    }
    else
    {
      setSkills((skills)=>skills.filter((skill)=>skill!==e.target.value))
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox checked={check} onChange={() => setCheck(!check)} />
          }
          label="I accept the terms and conditions"
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon/>}
          checkedIcon={<BookmarkIcon/>}
          checked={check}
          onChange={() => setCheck(!check)}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
          <FormControlLabel
          control={
            <Checkbox checked={skills.includes("HTML")} onChange={handleSkills} />
          }
          label="HTML"
          value="HTML"
          />
        <FormControlLabel
          control={
            <Checkbox checked={skills.includes("CSS")} onChange={handleSkills} />
          }
          label="CSS"
          value="CSS"
          />
        <FormControlLabel
          control={
            <Checkbox checked={skills.includes("JavaScript")} onChange={handleSkills} />
          }
          label="JavaScript"
          value="JavaScript"
        />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MUICheckbox;
