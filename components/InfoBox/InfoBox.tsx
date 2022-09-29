import Box, { BorderColour, BorderWidth, BoxBackground } from "../base/Box/Box";
import { TextColour } from "../base/Text/Text";

export const ColourThemes = {
  evopack: {
    background: "#1B1B2D",
    icon: "Evopack_GreenLogoWhiteWritingHorizontal",
    fontColour: TextColour.offWhite,
  },
  sustainability: {
    background: "#FFF7EF",
    icon: "leaf--sustain-green",
    fontColour: TextColour.sustainGreen,
  },
  education: {
    background: BoxBackground.lightGrey,
    icon: "Evopack_GreenLogoWhiteWritingHorizontal",
    fontColour: TextColour.primaryBlue,
    border: BorderColour.lightGrey,
    BorderWidth: BorderWidth.small1px,
  },
};

// interface IProps {
//   theme: ColourThemes;
// }

const InfoBox = () => {
  // return <Box></Box>;
};
