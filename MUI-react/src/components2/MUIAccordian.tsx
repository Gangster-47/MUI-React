import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

// function MUIAccordian() {
//   const [expanded,setExpanded]=useState<string | false>(false)
//   const handleChange=(isExpanded:boolean,panel:string)=>
//   {
//     setExpanded(isExpanded?panel:false)
//   }
//   return (
//     <>
//       <Accordion expanded={expanded==="panel1"} onChange={(_event,isExpanded)=>handleChange(isExpanded,"panel1")}>
//         <AccordionSummary
//           id="panel1-header"
//           aria-controls="panel-content"
//           expandIcon={<ExpandMoreIcon />}
//         >
//           <Typography>Accordian 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
//             officia temporibus quo voluptas excepturi, fuga beatae corporis
//             quae, id numquam blanditiis! Facilis, repellendus labore odio
//             dolorum ut reiciendis suscipit a.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion expanded={expanded==="panel2"} onChange={(_event,isExpanded)=>handleChange(isExpanded,"panel2")}>
//         <AccordionSummary
//           id="panel2-header"
//           aria-controls="panel-content"
//           expandIcon={<ExpandMoreIcon />}
//         >
//           <Typography>Accordian 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
//             officia temporibus quo voluptas excepturi, fuga beatae corporis
//             quae, id numquam blanditiis! Facilis, repellendus labore odio
//             dolorum ut reiciendis suscipit a.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion expanded={expanded==="panel3"} onChange={(_event,isExpanded)=>handleChange(isExpanded,"panel3")}>
//         <AccordionSummary
//           id="panel3-header"
//           aria-controls="panel-content"
//           expandIcon={<ExpandMoreIcon />}
//         >
//           <Typography>Accordian 3</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
//             officia temporibus quo voluptas excepturi, fuga beatae corporis
//             quae, id numquam blanditiis! Facilis, repellendus labore odio
//             dolorum ut reiciendis suscipit a.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </>
//   );
// }

function MUIAccordian() {
  const [expanded,setExpanded]=useState<string | false>(false)
  const handleChange=(panel:string)=>
  {
    setExpanded(panel)
  }
  return (
    <>
      <Accordion expanded={expanded==="panel1"} onChange={()=>handleChange("panel1")}>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            officia temporibus quo voluptas excepturi, fuga beatae corporis
            quae, id numquam blanditiis! Facilis, repellendus labore odio
            dolorum ut reiciendis suscipit a.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded==="panel2"} onChange={()=>handleChange("panel2")}>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            officia temporibus quo voluptas excepturi, fuga beatae corporis
            quae, id numquam blanditiis! Facilis, repellendus labore odio
            dolorum ut reiciendis suscipit a.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded==="panel3"} onChange={()=>handleChange("panel3")}>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            officia temporibus quo voluptas excepturi, fuga beatae corporis
            quae, id numquam blanditiis! Facilis, repellendus labore odio
            dolorum ut reiciendis suscipit a.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default MUIAccordian;
