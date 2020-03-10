import channelsData from '../data/channels.json'
import {
  getString,
  setString
} from "tns-core-modules/application-settings";

const STORAGE_KEY = 'moixonet-channels'

/**
 * LOCAL STORAGE NOT WORKING ON NATIVESCRIPT: https://www.nativescript.org/blog/client-side-storage-in-nativescript-applications
 */
export default class SettingsChannelsService {
  fetch () {
    return JSON.parse(getString(STORAGE_KEY) || '[]')
  }

  save (channels) {
    setString(STORAGE_KEY, JSON.stringify(channels))
  }

  clear () {
    this.save([])
  }

  add (channel) {
    const channels = this.fetch()
    channels.push(channel)
    this.save(channels)
  }

  remove (channel) {
    const channels = this.fetch()
    channels.splice(channels.indexOf(channel), 1)
    this.save(channels)
  }

  sample () {
    this.save(channelsData)
  }
}

// EXEMPLE US

// import SettingsChannelsService from './services/SettingsChannelsService'
// const service = new SettingsChannelsService()
// service.remove(channel)
