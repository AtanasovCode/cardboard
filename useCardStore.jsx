import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import DiamondsSuit from './src/components/suits/DiamondsSuit';
import HeartsSuit from './src/components/suits/HeartsSuit';
import SpadesSuit from './src/components/suits/SpadesSuit';
import ClubsSuit from './src/components/suits/ClubsSuit';

export const useCardStore = create(
  persist(
    (set, get) => ({

      // predefined colors
      colors: {
        white: "#FFF",
        black: "#000",
        lightGrey: "#bbbaba",
        darkGrey: "#a2a0a0",
        green: "#34f51e",
        red: "#f83f52",
        blue: "#1db6e9",
        orange: "#f19509",
        yellow: "#f8e328",
        purple: "#ff009d",
        orchid: "#da70d6 ",
        pink: "#FF4D80",

        // darker shades
        grey: "#3b3b3b",
        darkGreen: "#129204",
        darkRed: "#810410",
        darkBlue: "#0b3a4a",
      },

      cardColors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "red": "#921515",
        "blue": "#1b3680",
        "green": "#0a7652",
        "yellow": "#9b6811",
        "purple": "#8058df",
        "orange": "#e58638",
        "grey": "#3f4343",
        "pink": "#e52484",
        "brown": "#6D4C41",
        "teal": "#14B8A6"
      },


      gradients: {
        "pool-table": "radial-gradient(ellipse at center, #30D96E, #348338, #123F15)",
        "poker-table": "radial-gradient(ellipse at center, #F75050, #EA0B0B, #750606)",
        "casino-night": "radial-gradient(ellipse at center, #64748b, #1e293b, #0f172a)",
        "luxury-black": "radial-gradient(ellipse at center, #292929, #141414, #000000)",
        "luxury-poker": "radial-gradient(ellipse at center, #a71d2a, #721c24, #4b1c1c)",
        "dark-felt": "radial-gradient(ellipse at center, #4a5568, #2d3748, #1a202c)",
        "green": "radial-gradient(ellipse at center, #216004, #216004)",
        "red": "radial-gradient(ellipse at center, #720808, #720808)",
        "blue": "radial-gradient(ellipse at center, #1c044d, #1c044d)",
        "black": "radial-gradient(ellipse at center, #000000, #000000)",
        "grey": "radial-gradient(ellipse at center, #444444, #444444)"
      },

      ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      suits: [
        {
          type: "simple",
          suits: [
            { name: "hearts", suit: <HeartsSuit /> },
            { name: "spades", suit: <SpadesSuit /> },
            { name: "clubs", suit: <ClubsSuit /> },
            { name: "diamonds", suit: <DiamondsSuit /> },
          ],
        }
      ],

      // customization
      suitType: "simple",
      changeSuitType: (style) => set({ suitStyle: style }),

      getSuit: (suit) => {
        const { suits, suitType } = get();
        const suitGroup = suits.find((item) => item.type === suitType);
        if (!suitGroup) return null; // Handle case where suitStyle doesn't match any type
        const chosenSuit = suitGroup.suits.find((item) => item.name === suit);
        return chosenSuit ? chosenSuit.suit : null; // Return icon or null if not found
      },

      // suit colors
      spadesColor: "#000",
      changeSpadesColor: (color) => set({ SpadesColor: color }),
      heartsColor: "#000",
      changeHeartsColor: (color) => set({ HeartsColor: color }),
      diamondsColor: "#000",
      changeDiamondsColor: (color) => set({ diamondsColor: color }),
      clubsColor: "#000",
      changeClubsColor: (color) => set({ clubsColor: color }),

      setAllSuitColors: (color) =>
        set({
          heartsColor: color,
          diamondsColor: color,
          spadesColor: color,
          clubsColor: color,
        }),

      suitColor: "all-black",
      setSuitColors: (name, colors) => set(() => {
        return {
          suitColor: name,
          clubsColor: colors["clubs"],
          spadesColor: colors["spades"],
          heartsColor: colors["hearts"],
          diamondsColor: colors["diamonds"],
        };
      }),

      // creates a brand new suit color scheme
      createSuit: (name, colors) => {
        const { setSuitColors } = get();

        return {
          name,
          colors,
          handleClick: () => setSuitColors(name, colors),
        };
      },

      suitColors: () => {
        const { createSuit, colors } = get();

        return [
          createSuit("black", { hearts: colors["black"], spades: colors["black"], clubs: colors["black"], diamonds: colors["black"] }),
          createSuit("white", { hearts: colors["white"], spades: colors["white"], clubs: colors["white"], diamonds: colors["white"] }),
          createSuit("night", { hearts: colors["grey"], spades: colors["grey"], clubs: colors["grey"], diamonds: colors["grey"] }),
          createSuit("green", { hearts: colors["green"], spades: colors["green"], clubs: colors["green"], diamonds: colors["green"] }),
          createSuit("red", { hearts: colors["red"], spades: colors["red"], clubs: colors["red"], diamonds: colors["red"] }),
          createSuit("blue", { hearts: colors["blue"], spades: colors["blue"], clubs: colors["blue"], diamonds: colors["blue"] }),
          createSuit("orange", { hearts: colors["orange"], spades: colors["orange"], clubs: colors["orange"], diamonds: colors["orange"] }),
          createSuit("colorful", { hearts: colors["red"], spades: colors["green"], clubs: colors["green"], diamonds: colors["red"] }),
          createSuit("colorful-darker", { hearts: colors["darkRed"], spades: colors["darkGreen"], clubs: colors["darkGreen"], diamonds: colors["darkRed"] }),
          createSuit("black-red", { hearts: colors["red"], spades: colors["black"], clubs: colors["black"], diamonds: colors["red"] }),
          createSuit("white-blue", { hearts: colors["white"], spades: colors["blue"], clubs: colors["blue"], diamonds: colors["white"] }),
          createSuit("different", { hearts: colors["red"], spades: colors["blue"], clubs: colors["green"], diamonds: colors["yellow"] }),
        ];
      },

      getSuitColor: (suit) => {
        const { heartsColor, spadesColor, diamondsColor, clubsColor } = get();

        switch (suit) {
          case "hearts":
            return heartsColor;
          case "spades":
            return spadesColor;
          case "clubs":
            return clubsColor;
          case "diamonds":
            return diamondsColor;
        };
      },



      backgroundStyle: "pool-table-background-style",
      changeBackgroundStyle: (style) => set({ backgroundStyle: style }),

      createBackgroundStyle: (name, color) => {
        const { changeBackgroundStyle } = get();

        return {
          name,
          color,
          handleClick: () => changeBackgroundStyle(name),
        };
      },

      backgroundStyles: () => {
        const { createBackgroundStyle, gradients } = get();

        return [
          createBackgroundStyle("pool-table", gradients["pool-table"]),
          createBackgroundStyle("poker-table", gradients["poker-table"]),
          createBackgroundStyle("casino-night", gradients["casino-night"]),
          createBackgroundStyle("luxury-poker", gradients["luxury-poker"]),
          createBackgroundStyle("luxury-black", gradients["luxury-black"]),
          createBackgroundStyle("dark-felt", gradients["dark-felt"]),
          createBackgroundStyle("pure-green", gradients["green"]),
          createBackgroundStyle("pure-red", gradients["red"]),
          createBackgroundStyle("pure-blue", gradients["blue"]),
          createBackgroundStyle("pure-grey", gradients["grey"]),
          createBackgroundStyle("pure-black", gradients["black"]),
        ];
      },

      getBackgroundStyle: () => {
        const { backgroundStyle, backgroundStyles, } = get();

        const group = backgroundStyles().find((s) => s.name === backgroundStyle);

        return group ? group.color : "";
      },



      cardBackground: "white-card-background",
      changeCardBackground: (style) => set({ cardBackground: style }),

      createCardBackground: (name, color) => {
        const { changeCardBackground } = get();

        return {
          name,
          color,
          handleClick: () => changeCardBackground(name)
        }
      },

      cardBackgrounds: () => {
        const { createCardBackground, cardColors } = get();

        return [
          createCardBackground("white-card", cardColors["white"]),
          createCardBackground("black-card", cardColors["black"]),
          createCardBackground("grey-card", cardColors["grey"]),
          createCardBackground("red-card", cardColors["red"]),
          createCardBackground("blue-card", cardColors["blue"]),
          createCardBackground("green-card", cardColors["green"]),
          createCardBackground("orange-card", cardColors["orange"]),
          createCardBackground("purple-card", cardColors["purple"]),
          createCardBackground("pink-card", cardColors["pink"]),
          createCardBackground("brown-card", cardColors["brown"]),
          createCardBackground("teal-card", cardColors["teal"]),
        ];
      },

      getCardBackground: () => {
        const { cardBackground, cardBackgrounds } = get();

        const group = cardBackgrounds().find((i) => i.name === cardBackground);

        return group ? group.color : "";
      },

      isCardOutlineEnabled: false,
      toggleCardOutline: () => set((state) => ({ isCardOutlineEnabled: !state.isCardOutlineEnabled })),

      cardOutline: "white-card-outline",
      changeCardOutline: (color) => set({ cardOutline: color }),

      createCardOutline: (name, color, outline) => {
        const { changeCardOutline } = get();

        return {
          name,
          color,
          handleClick: () => changeCardOutline(name),
        };
      },

      cardOutlines: () => {
        const { createCardOutline, colors } = get();

        return [
          createCardOutline("white-card-outline", colors["white"]),
          createCardOutline("light-grey-card-outline", colors["lightGrey"]),
          createCardOutline("dark-grey-card-outline", colors["darkGrey"]),
          createCardOutline("black-card-outline", colors["black"]),
          createCardOutline("red-card-outline", colors["red"]),
          createCardOutline("blue-card-outline", colors["blue"]),
          createCardOutline("green-card-outline", colors["green"]),
          createCardOutline("yellow-card-outline", colors["yellow"]),
          createCardOutline("orange-card-outline", colors["orange"]),
          createCardOutline("purple-card-outline", colors["purple"]),
          createCardOutline("orchid-card-outline", colors["orchid"]),
          createCardOutline("pink-card-outline", colors["pink"]),
        ];
      },

      getCardOutline: () => {
        const { cardOutline, cardOutlines } = get();

        const group = cardOutlines().find((i) => i.name === cardOutline);

        return group ? group.color : "";
      },

      mobileMenu: false,
      toggleMobileMenu: () => set((state) => ({ mobileMenu: !state.mobileMenu })),
    }),
    {
      name: 'card-store',
      partialize: (state) => ({
        suitStyle: state.suitStyle,
        cardBackground: state.cardBackground,
        backgroundStyle: state.backgroundStyle,
        cardOutline: state.cardOutline,
        isCardOutlineEnabled: state.isCardOutlineEnabled,
        heartsColor: state.heartsColor,
        spadesColor: state.spadesColor,
        diamondsColor: state.diamondsColor,
        clubsColor: state.clubsColor,
      }),
    }
  )
);