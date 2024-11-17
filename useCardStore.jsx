import { create } from 'zustand'

//suit icons
import heartsColorful from './src/assets/suits/hearts-colorful.svg';
import spadesColorful from './src/assets/suits/spades-colorful.svg';
import clubsColorful from './src/assets/suits/clubs-colorful.svg';
import diamondsColorful from './src/assets/suits/diamonds-colorful.svg';

import heartsDarker from './src/assets/suits/hearts-darker.svg';
import spadesDarker from './src/assets/suits/spades-darker.svg';
import clubsDarker from './src/assets/suits/clubs-darker.svg';
import diamondsDarker from './src/assets/suits/diamonds-darker.svg';

import heartsBlack from './src/assets/suits/hearts-black.svg';
import spadesBlack from './src/assets/suits/spades-black.svg';
import clubsBlack from './src/assets/suits/clubs-black.svg';
import diamondsBlack from './src/assets/suits/diamonds-black.svg';

import heartsWhite from './src/assets/suits/hearts-white.svg';
import spadesWhite from './src/assets/suits/spades-white.svg';
import clubsWhite from './src/assets/suits/clubs-white.svg';
import diamondsWhite from './src/assets/suits/diamonds-white.svg';

export const useCardStore = create((set, get) => ({
  ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  suits: [
    {
      type: "white",
      data: [
        {
          name: "hearts",
          icon: heartsWhite,
        },
        {
          name: "diamonds",
          icon: diamondsWhite,
        },
        {
          name: "spades",
          icon: spadesWhite,
        },
        {
          name: "clubs",
          icon: clubsWhite,
        },
      ],
    },
    {
      type: "black",
      data: [
        {
          name: "hearts",
          icon: heartsBlack,
        },
        {
          name: "diamonds",
          icon: diamondsBlack,
        },
        {
          name: "spades",
          icon: spadesBlack,
        },
        {
          name: "clubs",
          icon: clubsBlack,
        },
      ],
    },
    {
      type: "darker",
      data: [
        {
          name: "hearts",
          icon: heartsDarker,
        },
        {
          name: "diamonds",
          icon: diamondsDarker,
        },
        {
          name: "spades",
          icon: spadesDarker,
        },
        {
          name: "clubs",
          icon: clubsDarker,
        },
      ],
    },
    {
      type: "colorful",
      data: [
        {
          name: "hearts",
          icon: heartsColorful,
        },
        {
          name: "diamonds",
          icon: diamondsColorful,
        },
        {
          name: "spades",
          icon: spadesColorful,
        },
        {
          name: "clubs",
          icon: clubsColorful,
        },
      ],
    },
  ],

  // customization
  suitStyle: "white",
  changeSuitStyle: (style) => set({ suitStyle: style }),

  backgroundStyle: "Pool Table",
  changeBackgroundStyle: (style) => set({ backgroundStyle: style }),
  backgroundStyles: [
    { name: "Pool Table", background: "bg-pool-table", handleClick: () => get().changeBackgroundStyle("Pool Table") },
    { name: "Poker Table", background: "bg-poker-table", handleClick: () => get().changeBackgroundStyle("Poker Table") },
    { name: "Casino Night", background: "bg-casino-night", handleClick: () => get().changeBackgroundStyle("Casino Night") },
    { name: "Green Gold", background: "bg-green-gold", handleClick: () => get().changeBackgroundStyle("Green Gold") },
    { name: "Luxury Poker", background: "bg-luxury-poker", handleClick: () => get().changeBackgroundStyle("Luxury Poker") },
    { name: "Dark Felt", background: "bg-dark-felt", handleClick: () => get().changeBackgroundStyle("Dark Felt") },
    { name: "Pure Black", background: "bg-slate-900", handleClick: () => get().changeBackgroundStyle("Pure Black") },
    { name: "Pure Red", background: "bg-red-800", handleClick: () => get().changeBackgroundStyle("Pure Red") },
    { name: "Pure Gray", background: "bg-slate-800", handleClick: () => get().changeBackgroundStyle("Pure Gray") },
  ],



  cardBackground: "Black",
  changeCardBackground: (style) => set({ cardBackground: style }),
  cardBackgrounds: [
    { name: "Black", background: "bg-card-black", handleClick: () => get().changeCardBackground("Black") },
    { name: "White", background: "bg-card-white", handleClick: () => get().changeCardBackground("White") },
    { name: "Dark Grey", background: "bg-card-grey", handleClick: () => get().changeCardBackground("Dark Grey") },
    { name: "Red", background: "bg-card-red", handleClick: () => get().changeCardBackground("Red") },
    { name: "Blue", background: "bg-card-blue", handleClick: () => get().changeCardBackground("Blue") },
    { name: "Green", background: "bg-card-green", handleClick: () => get().changeCardBackground("Green") },
    { name: "Orange", background: "bg-card-orange", handleClick: () => get().changeCardBackground("Orange") },
    { name: "Purple", background: "bg-card-purple", handleClick: () => get().changeCardBackground("Purple") },
    { name: "Teal", background: "bg-card-teal", handleClick: () => get().changeCardBackground("Teal") },
  ],


  mobileMenu: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenu: !state.mobileMenu })),

}));