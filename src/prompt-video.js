import getNeededPrompts from './utils/get-needed-prompts'

export default promptVideo

function promptVideo(providedValues) {
  return getNeededPrompts(getAllPrompts(), providedValues)
}

function getAllPrompts() {
  return [
    {
      name: 'youTubeId',
      type: 'input',
      message: `What's the YouTube ID`,
    },
    {
      name: 'title',
      type: 'input',
      message: 'Title?',
    },
    {
      name: 'number',
      type: 'input',
      message: 'Track number?',
    },
    {
      name: 'year',
      type: 'input',
      message: 'Year?',
      default: new Date().getFullYear(),
    },
    {
      name: 'url',
      type: 'input',
      message: 'URL?',
    },
    {
      name: 'artist',
      type: 'input',
      message: 'Artist?',
    },
  ]
}
