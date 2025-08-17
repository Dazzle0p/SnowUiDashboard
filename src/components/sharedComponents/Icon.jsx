import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  PiBell,
  PiBroadcast,
  PiBugBeetle,
  PiChartPieSliceFill,
  PiChatsTeardrop,
  PiClockCounterClockwise,
  PiDotsThreeOutlineFill,
  PiDownloadSimple,
  PiFileJpg,
  PiFilePdf,
  PiFileXls,
  PiFolder,
  PiIdentificationBadge,
  PiIdentificationCard,
  PiMagnifyingGlass,
  PiMoonStarsLight,
  PiNotebook,
  PiPlus,
  PiShoppingBagOpen,
  PiSidebar,
  PiStar,
  PiSunDim,
  PiUser,
  PiUsersThree,
  PiXBold,
} from "react-icons/pi";

const iconMap = {
  "chartpie-slice": PiChartPieSliceFill,
  "shopping-bag-open": PiShoppingBagOpen,
  folder: PiFolder,
  "identification-badge": PiIdentificationBadge,
  "identification-card": PiIdentificationCard,
  "users-three": PiUsersThree,
  notebook: PiNotebook,
  "chats-teardrop": PiChatsTeardrop,
  "chevron-right": FiChevronRight,
  "chevron-left": FiChevronLeft,
  star: PiStar,
  sidebar: PiSidebar,
  "magnifying-glass": PiMagnifyingGlass,
  sun: PiSunDim,
  moon: PiMoonStarsLight,
  bell: PiBell,
  "clock-counter-clockwise": PiClockCounterClockwise,
  plus: PiPlus,
  "three-dots": PiDotsThreeOutlineFill,
  download: PiDownloadSimple,
  "pdf-file": PiFilePdf,
  "jpg-file": PiFileJpg,
  "xls-file": PiFileXls,
  bug: PiBugBeetle,
  user: PiUser,
  broadcast: PiBroadcast,
  x: PiXBold,
};

function Icon({
  name,
  size = 24,
  className = "text-dark-primary dark:text-light-primary",
}) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(
      `Icon ${name} is not defined in iconMap, check your name prop or iconMap.`
    );
    return null;
  }

  return <IconComponent size={size} className={className} />;
}

export default Icon; 