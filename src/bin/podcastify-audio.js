import podcastifyAudio from '../audio'
import promptAudio from '../prompt-audio'

promptAudio().then(podcastifyAudio)
