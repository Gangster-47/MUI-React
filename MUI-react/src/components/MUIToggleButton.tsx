import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from "react";

function MUIToggleButton() {
  const [formats, setFormats] = useState<string>();

  const [thememode,setThememode]=useState("light");

  const changeTheme=()=>
  {
    if(thememode=="light") setThememode("dark");
    else setThememode("light");
  }
  console.log({thememode});

  console.log({formats});
  const handleFormatChange=(_event:React.MouseEvent<HTMLElement>, updatedFormats:string)=>
  {
    setFormats(updatedFormats);
  }
  return (
    <>
    <Stack spacing={5}>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          exclusive
          >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction="row" spacing={5}>
        <ToggleButtonGroup value={thememode}>
        <ToggleButton value="dark" aria-label="dark" onChange={changeTheme}><DarkModeIcon/></ToggleButton>
        </ToggleButtonGroup>

      </Stack>
        <div style={{width:"100px",
          height:"50px",
          fontWeight:formats=="bold"?"bold":"",
          fontStyle:formats=="italic"?"italic":"",
          textDecoration:formats=="underlined"?"underline":"",
          background:thememode=="light"?"white":"black",
          color:thememode=="light"?"black":"white",
          paddingLeft:"10px",
          paddingTop:"28px",
          border:"2px solid gray",
        }}>Hello</div>
    </Stack>
    </>
  );
}

export default MUIToggleButton;
