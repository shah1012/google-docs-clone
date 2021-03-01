import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const textButtons = [
  {
    cName: "boldButton",
    icon: <FaIcons.FaBold />,
    onClicked: (e) => {
      e.preventDefault();
    },
  },
  {
    cName: "underlineButton",
    icon: <AiIcons.AiOutlineUnderline />,
    onClicked: () => {},
  },
  {
    cName: "italicsButton",
    icon: <AiIcons.AiOutlineItalic />,
    onClicked: () => {},
  },
  {
    cName: "fontColorButton",
    icon: <AiIcons.AiOutlineFontColors />,
    onClicked: () => {},
  },
];
