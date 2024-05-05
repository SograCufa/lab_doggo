import { GameBundle } from 'gamba-react-ui-v2'
import React from 'react'

export const GAMES: GameBundle[] = [
  // {
  //   id: 'example',
  //   meta: {
  //     background: '#00ffe1',
  //     name: 'Example',
  //     image: '#',
  //     description: '',
  //   },
  //   app: React.lazy(() => import('./ExampleGame')),
  // },
  {
    id: 'dice',
    meta: {
      background: '#131313',
      name: 'Dice',
      image: '/games/dice.png',
      description: `
        Dice challenges players to predict the outcome of a roll with a unique twist. Select a number and aim to roll below it to win. Adjusting your choice affects potential payouts, balancing risk and reward for an engaging experience.
      `,
    },
    app: React.lazy(() => import('./Dice')),
  },
  {
    id: 'slots',
    meta: {
      background: '#131313',
      name: 'Slots',
      image: '/games/slots.png',
      description: `
        Slots is the quintessential game of luck and anticipation. Spin the reels and match symbols to win, with potential rewards displayed upfront. A fair and exciting game, Slots offers a classic casino experience tailored for digital enjoyment.
      `,
    },
    app: React.lazy(() => import('./Slots')),
  },
  {
    id: 'flip',
    meta: {
      name: 'Flip',
      description: `
        Flip offers a straightforward yet thrilling gamble: choose Heads or Tails and double your money or lose it all. This simple, high-stakes game tests your luck and decision-making with every flip of the coin.
      `,
      image: '/games/flip.png',
      background: '#131313',
    },
    app: React.lazy(() => import('./Flip')),
  },
  {
    id: 'hilo',
    meta: {
      name: 'HiLo',
      image: '/games/hilo.png',
      description: `
        HiLo is a game of foresight and luck, challenging players to guess whether the next card will be higher or lower. Make consecutive correct guesses to increase your winnings, and decide when to cash out for maximum rewards.
      `,
      background: '#131313',
    },
    props: { logo: '/logo.png' },
    app: React.lazy(() => import('./HiLo')),
  },
  {
    id: 'mines',
    meta: {
      name: 'Mines',
      description: `
        There's money hidden beneath the squares. The reward will increase the more squares you reveal, but watch out for the 5 hidden mines. Touch one and you'll go broke. You can cash out at any time.
      `,
      image: '/games/mines.png',
      background: '#131313',
    },
    app: React.lazy(() => import('./Mines')),
  },
  {
    id: 'roulette',
    meta: {
      name: 'Roulette',
      image: '/games/roulette.png',
      description: `
        Roulette brings the classic wheel-spinning game to life with a digital twist. Bet on where the ball will land and watch as the wheel decides your fate. With straightforward rules and the chance for big wins, Roulette is a timeless game of chance.
      `,
      background: '#131313',
    },
    app: React.lazy(() => import('./Roulette')),
  },
  {
    id: 'plinko',
    meta: {
      background: '#131313',
      image: '/games/plinko.png',
      name: 'Plinko',
      description: `
        Plinko is played by dropping chips down a pegged board where they randomly fall into slots with varying win amounts. Each drop is a mix of anticipation and strategy, making Plinko an endlessly entertaining game of chance.
        ⚠️ Under development. Results shown might be incorrect. ⚠️
      `,
    },
    app: React.lazy(() => import('./Plinko')),
  },
  {
    id: 'slots',
    meta: {
      background: '/games/luckydoggo.png',
      name: 'Slots',
      image: '/games/luckydoggo.png',
      description: `
        Slots is the quintessential game of luck and anticipation. Spin the reels and match symbols to win, with potential rewards displayed upfront. A fair and exciting game, Slots offers a classic casino experience tailored for digital enjoyment.
      `,
    },
    app: React.lazy(() => import('./Slots')),
  },
  {
    id: "limbo",
    meta: {
      background: "#131313",
      name: "Limbo",
      image: "/games/limbo/limbo.png",
      description: `Limbo challenges players to walk the fine line between ambition and caution, where every decision shapes their destiny. Set a target multiplier and place your bet, daring to defy the odds. As the stakes rise, so does the adrenaline, pushing players to test their strategy and intuition in pursuit of monumental victories, ensuring an immersive and adrenaline-fueled gaming experience.`,
    },
    app: React.lazy(() => import("./Limbo")),
  },
  {
    id: "keno",
    meta: {
      background: "#131313",
      name: "Keno",
      image: "/games/keno/logo.png",
      description: `Keno beckons players into a world of strategic decision-making and anticipation, where every choice holds the potential for untold riches. Select up to 10 blocks and place your bets, eagerly awaiting the draw that will determine your fate. Whether opting for fewer numbers and the allure of substantial wins or more numbers for increased odds of success, Keno promises a riveting experience filled with excitement and possibility.`,
    },
    app: React.lazy(() => import("./Keno")),
  },
]