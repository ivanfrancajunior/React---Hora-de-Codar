// const plugins = require("tailwindcss/plugin");

// const animationDelay = plugins(function ({ matchUtilities, theme }) {
//   matchUtilities(
//     {
//       "animation-delay": (value) => {
//         return {
//           "animation-delay": value,
//         };
//       },
//     },
//     {
//       values: theme("animationDelay"),
//     }
//   ),
//     {
//       theme: {
//         animationDelay: {
//           0: "0ms",
//           50: "50ms",
//           100: "100ms",
//           150: "150ms",
//           200: "200ms",
//           250: "250ms",
//           300: "300ms",
//           350: "350ms",
//           400: "400ms",
//           450: "450ms",
//           500: "500ms",
//           550: "550ms",
//           600: "600ms",
//           650: "650ms",
//           700: "700ms",
//           750: "750ms",
//           800: "800ms",
//           850: "850ms",
//           900: "900ms",
//           950: "950ms",
//           1000: "1000ms",
//         },
//       },
//     };
// });

// module.exports = animationDelay;

// ./src/utils/plugins/animationDelay.js

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'animation-delay': (value) => {
        return {
          'animation-delay': value,
        };
      },
    },
    {
      values: theme('animationDelay'),
    }
  );
}, {
  theme: {
    animationDelay: {
      0: '0ms',
      50: '50ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      250: '250ms',
      300: '300ms',
      350: '350ms',
      400: '400ms',
      450: '450ms',
      500: '500ms',
      550: '550ms',
      600: '600ms',
      650: '650ms',
      700: '700ms',
      750: '750ms',
      800: '800ms',
      850: '850ms',
      900: '900ms',
      950: '950ms',
      1000: '1000ms',
    },
  },
});
