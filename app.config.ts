export default defineAppConfig({
  docus: {
    title: 'Weird Ghosts Learn',
    description: 'Resources for indie game devs building sustainable studios.',
    image: 'https://learn.weirdghosts.com/img/weird_explosion.png',
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
