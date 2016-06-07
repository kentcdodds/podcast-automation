const podcastifyAudio = require('../dist/audio').default
const promptAudio = require('../dist/prompt-audio').default

promptAudio({
  url: 'http://kcd.im/3-mins',
  artist: 'Kent C. Dodds',
  number: null,
}).then(podcastifyAudio)
