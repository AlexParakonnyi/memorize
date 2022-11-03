import SchoolIcon from "@mui/icons-material/School";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";

const dataSideMenu = [
  {
    id: 1,
    icon: <SchoolIcon />,
    title: "Learn",
  },
  {
    id: 2,
    icon: <AddCircleOutlineIcon />,
    title: "Create new",
  },
  {
    id: 3,
    icon: <ListAltIcon />,
    title: "List of questions",
  },
  {
    id: 4,
    icon: <PendingActionsIcon />,
    title: "Timetable of repeats",
  },
  {
    id: 6,
    icon: <EmojiObjectsIcon />,
    title: "Subjects",
  },
  {
    id: 7,
    title: "divider",
  },
  {
    id: 8,
    icon: <HelpIcon />,
    title: "Help",
  },
  {
    id: 9,
    title: "divider",
  },
  {
    id: 10,
    icon: <LoginIcon />,
    title: "Login",
  },
];

export default dataSideMenu;
