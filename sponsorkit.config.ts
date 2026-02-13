import { defineConfig, tierPresets } from 'sponsorkit';

export default defineConfig({
  github: {
    type: 'organization',
    login: 'papra-hq',
  },

  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: {
        avatar: {
          size: 20,
        },
        boxWidth: 22,
        boxHeight: 22,
        container: {
          sidePadding: 35,
        },
      },
    },
    {
      title: 'Backers',
      preset: tierPresets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: tierPresets.xl,
    },
  ],

  sponsorsAutoMerge: true,

  outputDir: './assets',
  formats: ['svg'],

  renders: [
    {
      name: 'sponsors',
      width: 800,
      filter: (sponsor) => sponsor.sponsor?.login !== 'vercel',
    },
  ],
});
