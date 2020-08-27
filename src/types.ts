interface Cases {
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

interface Preferences {
  length: number
  initialText?: string
  cases: Cases
}

export interface CheckErros {
  (preferences: Preferences): void
}

export interface GeneratePassword {
  (preferences: Preferences): string
}
