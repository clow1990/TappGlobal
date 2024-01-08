const colors = {
  positive: "#28B3F1",
  negative: "#16B7B1",
  primary: "#6595DE",
  grayButton: "#dcdcdc",
  bannerColor: "#F7F7F7",
  bgcolor: "#f7f7f7",

  border: "#E4E6ED",
  borderColor1: "#e6e4e4",
  borderColor2: "#f6f5f5",
  borderColor3: "#E6E6E6",
  borderPrimary: "#E1F3F9",
  promoBorder: "#D9E0E8",

  text: "#354660",
  textColor1: "#333333",
  textColor2: "#444444",
  textColor3: "#888888",
  textColor4: "#1c1c1c",
  textColor5: "#354660",
  textColor6: "#3546601a",

  placeholder: "#9F9F9F",

  backgroundLg1:
    "linear-gradient(287deg, #6595de 0%, #99b8e7 80%, #dfe8f3 100%)",
  backgroundLg2: "linear-gradient(287deg, #fefefe, #f8f9fd)",

  gray: "#888888",
  gray2: "#B4B4B4",
  gray3: "#646464",
  gray4: "#F4F4F4",
  gray5: "#CFD2DE",
  gray6: "#C7C7CD",
  gray7: "#8f8f8f",
  gray8: "#35466017",

  gainsBoro: "#dcdcdc",
  lightGray: "#d3d3d3",

  green: "#42b72a",

  blue: "#6897DF",
  blue2: "#167ddecc",
  blue3: "#167DDE",
  blue4: "#0795F317",

  white: "#FFFFFF",
  light: "#F8F9FD",
  white80: "#FFFFFF80",
  black80: "#22222280",
  trueblack: "#000000",
  black: "#222222",
  line: "#E6E6E6",

  transparent: "transparent",

  red: "#D51000",
  coralRed: "#FA3E3E",
  lightREd: "#FFCCCB",

  green2: "#29B200",
  green3: "#008000",

  headerColor1: "#128CE7",
  headerColor2: "#1164C3",
  headerColor3: "#1164C3",
  gamesText: "rgba(0, 0, 0, 0.54)",

  /** Dragon/Missing */
  clRed: "#d10000",
  clBlue: "#006cd8",
  missingGreen: "#00be6d",

  /** follow plan detail*/
  win: "#D50000",
  loss: "#00A83D",
  pending: "#E4E6ED",
  followPlanButton1: "#59CC74",
  followPlanButton2: "#16B7B1",
  followPlanButton3: "#51A1DB",

  /** Report */
  reportPositive: "#2E69A9",
  reportNegative: "#FF1F1F",

  /** Lottery Menu Color */
  lotteryMenuBackground: "#ecedef",

  /* Foreground colors for static text and related elements.
   */
  label: "#59789B",
  secondaryLabel: "#59789B",

  /* Foreground color for standard system links.
   */
  link: "#",

  /* Foreground color for placeholder text in controls or text fields or text views.
   */
  placeholderText: "#",

  /* Foreground colors for separators (thin border or divider lines).
   * `separatorColor` may be partially transparent, so it can go on top of any content.
   * `opaqueSeparatorColor` is intended to look similar, but is guaranteed to be opaque, so it will
   * completely cover anything behind it. Depending on the situation, you may need one or the other.
   */
  separator: "#00000014",

  opaqueSeparator: "#E4E6ED",

  /* We provide two design systems (also known as "stacks") for structuring an iOS app's backgrounds.
   *
   * Each stack has three "levels" of background colors. The first color is intended to be the
   * main background, farthest back. Secondary and tertiary colors are layered on top
   * of the main background, when appropriate.
   *
   * Inside of a discrete piece of UI, choose a stack, then use colors from that stack.
   * We do not recommend mixing and matching background colors between stacks.
   * The foreground colors above are designed to work in both stacks.
   *
   * 1. systemBackground
   *    Use this stack for views with standard table views, and designs which have a white
   *    primary background in light mode.
   */
  systemBackground: "white",

  secondarySystemBackground: "#FEFEFE",

  tertiarySystemBackground: "#e9eaec",

  /* 2. systemGroupedBackground
   *    Use this stack for views with grouped content, such as grouped tables and
   *    platter-based designs. These are like grouped table views, but you may use these
   *    colors in places where a table view wouldn't make sense.
   */

  systemGroupedBackground: "#",

  secondarySystemGroupedBackground: "#",

  tertiarySystemGroupedBackground: "#",

  /* Fill colors for UI elements.
   * These are meant to be used over the background colors, since their alpha component is less than 1.
   *
   * systemFillColor is appropriate for filling thin and small shapes.
   * Example: The track of a slider.
   */
  systemFill: "#",

  /* secondarySystemFillColor is appropriate for filling medium-size shapes.
   * Example: The background of a switch.
   */
  secondarySystemFill: "#",

  /* tertiarySystemFillColor is appropriate for filling large shapes.
   * Examples: Input fields, search bars, buttons.
   */
  tertiarySystemFill: "#",

  /* quaternarySystemFillColor is appropriate for filling large areas containing complex content.
   * Example: Expanded table cells.
   */
  quaternarySystemFill: "#",

  /* lightTextColor is always light, and darkTextColor is always dark, regardless of the current UIUserInterfaceStyle.
   * When possible, we recommend using `labelColor` and its variants, instead.
   */
  lightText: "#", // for a dark backgroun
  darkText: "#", // for a light background

  avatarTextBackground: "rgba(91, 133, 172, 0.8)",

  whiteE6: "#ffffffe6",
  error: "#d34e4e",
};

export default colors;
