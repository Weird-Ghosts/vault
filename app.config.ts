export default defineAppConfig({
  docus: {
    title: 'Weird Ghosts Vault',
    description: 'Resources for the Weird Ghosts community.',
    image: 'https://vault.weirdghosts.com/img/weird_explosion.png',
    socials: {
      twitter: 'weird_ghosts',
      tiktok: 'weird__ghosts',
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: 'twemoji:ghost',
        text: 'Made with <3 by Weird Ghosts',
        href: 'https://weirdghosts.ca',
      },
    },
    github: {
      dir: 'content',
      owner: 'Weird-Ghosts',
      repo: 'vault',
      edit: true,
      contributors: false,
      branch: 'main',
    },
  }
})
