import inquirer from 'inquirer'
import {differenceBy} from 'lodash'

export default getNeededPrompts

/**
 * The object of this function is to get all the values not already provided
 * @param  {Array} allPrompts - all the necessary prompts
 * @param  {Object} providedValues - the values you already have (and don't need to prompt for)
 * @return {Promise} - The promise which resolves to all the values needed.
 */
function getNeededPrompts(allPrompts = [], providedValues = {}) {
  const promptsToUse = differenceBy(allPrompts, arrayOfNamedObjects(providedValues), 'name')
  if (!promptsToUse.length) {
    return Promise.resolve(providedValues)
  } else {
    return inquirer
      .prompt(promptsToUse)
      .then(data => ({...data, ...providedValues}))
  }
}

function arrayOfNamedObjects(obj) {
  return Object.keys(obj).map((k => ({name: k})))
}
