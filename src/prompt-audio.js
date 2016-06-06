import getNeededPrompts from './utils/get-needed-prompts'

export default promptAudio

function promptAudio(providedValues) {
  return getNeededPrompts(getAllPrompts(), providedValues)
}

function getAllPrompts() {
  return [
    {
      name: 'file',
      type: 'input',
      message: 'Where is the input file?',
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
