import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";


function MUIAutoComplete() {
  const [value, setValue] = useState<string | null>(null);

  type Skill={
    id:number
    label:string
  }

  const [skill,setSkill]=useState<Skill|null>(null)

  const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"];

  const skillOptions=skills.map((skill,index)=>({
    id:index+1,
    label:skill
  }))

  console.log(value);
  console.log(skill);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(_event:any,newValue:string|null)=>setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(_event:any,newValue:Skill|null)=>setSkill(newValue)}
      />
    </Stack>
  );
}

export default MUIAutoComplete;
