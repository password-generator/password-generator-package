export type Cases = {
  pronounceable?: false
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
} | { pronounceable: true}

export interface Preferences {
  length: number
  initialText?: string
  cases: Cases
}
