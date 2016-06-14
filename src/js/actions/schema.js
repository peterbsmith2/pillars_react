import { Schema, arrayOf } from 'normalizr'

export const entry = new Schema('entries')
export const arrayOfEntries = arrayOf(entry)
