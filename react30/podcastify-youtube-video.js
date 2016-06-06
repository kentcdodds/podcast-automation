const podcastifyVideo = require('../dist/video').default
const promptVideo = require('../dist/prompt-video').default

promptVideo({
  url: 'https://react30.com',
  artist: 'React30',
}).then(podcastifyVideo)
