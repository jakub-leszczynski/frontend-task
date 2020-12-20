import { AxiosResponse } from 'axios';

export interface Location {
  geonameId: number,
  capital: string,
  languages: Array<Language>
  countryFlag: string
  countryFlagEmoji: string,
  countryFlagEmojiUnicode: string,
  callingCode: string,
  isEu: boolean
}

export interface Language {
  code: string
  name: string
  native: string
}

export interface TimeZone {
  id: string,
  currentTime: string,
  gmtOffset: number,
  code: string,
  is_daylight_saving: boolean
}

export interface Currency {
  code: string
  name: string
  plural: string
  symbol: string
  symbolNative: string
}

export interface Connection {
  asn: number
  isp: string
}

export interface RequesterData {
  ip?: string
  type?: string
  continentCode?: string
  continentName?: string
  countryCode?: string
  countryName?: string
  regionCode?: string
  regionName?: string
  city?: string
  zip?: string
  latitude?: number
  longitude?: number
  location?: Location,
  timeZone?: TimeZone,
  currency?: Currency,
  connection?: Connection
}

export interface RequesterDataResponse extends AxiosResponse {
  data: RequesterData
}
