import { DiariesEntry } from '../types'
import dataDiaries from './diaries.json'



const   diaries : Array<DiariesEntry> = dataDiaries as  Array<DiariesEntry> 

export const getEntries  = () => diaries
export const addEntries = () => null