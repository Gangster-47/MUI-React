// import MUITypography from './components/MUITypography'
// import { ToggleButton } from '@mui/material'
import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material"; //Calling createTheme,ThemeProvider and colors(for pallete colors)
// import MuiMasonry from './labcomponents/MuiMasonry'
// import MuiResponsiveness from "./MuiResponsiveness";
// import MuiDialog from './feedbackcomponents/MuiDialog'
// import MuiProgress from './feedbackcomponents/MuiProgress'
// import MuiSkeleton from './feedbackcomponents/MuiSkeleton'
// import MuiLoadingButton from './labcomponents/MuiLoadingButton'
// import MuiTimeline from './labcomponents/MuiTimeline'
// import MuiAlert from './feedbackcomponents/MuiAlert'
// import MuiSnackbar from './feedbackcomponents/MuiSnackbar'
// import MuiTable from './datadisp_components/MuiTable'
// import MuiChip from './datadisp_components/MuiChip'
// import MuiTooltip from './datadisp_components/MuiTooltip'
// import MuiAvatar from './datadisp_components/MuiAvatar'
// import MuiBadge from './datadisp_components/MuiBadge'
// import MuiList from './datadisp_components/MuiList'
import MuiBottomNavigation from "./navcomponents/MuiBottomNavigation";
// import MuiBreadCrumbs from './navcomponents/MuiBreadCrumbs'
import MuiDrawer from "./navcomponents/MuiDrawer";
// import MuiLink from './navcomponents/MuiLink'
import MuiMenu from "./navcomponents/MuiMenu";
import MuiSpeedDial from "./navcomponents/MuiSpeedDial";
// import MuiTabs from './navcomponents/MuiTabs'
// import MUIAccordian from './components2/MUIAccordian'
// import MUIImageList from './components2/MUIImageList'
// import MuiNavbar from './navcomponents/MuiNavbar'
// import MUICard from './components2/MUICard'
// import MUIAutoComplete from './components2/MUIAutoComplete'
// import MUILayout from './components2/MUILayout'
// import MUICheckbox from './components/MUICheckbox'
// import MUISwitch from './components/MUISwitch'
// import MUIRating from './components2/MUIRating'
// import MUIRadio from './components/MUIRadio'
// import MUISelect from './components/MUISelect'
// import MUITextField from './components/MUITextField'
// import MUIButton from './components/MUIButton'
// import MUIToggleButton from './components/MUIToggleButton'

//For Creating Custom Themes For Example Pallete here...
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});
function App() {
  return (
    //Wrapping everything inside Theme Provider and assigning the prop theme as theme to make the customization happen
    <ThemeProvider theme={theme}>
      <MuiMenu/>
      <MuiDrawer/>
      <MuiSpeedDial/>
      <MuiBottomNavigation/>
      {/* <MuiResponsiveness /> */}
    </ThemeProvider>
  );
}

export default App;
