interface Cases {
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

interface Preferences {
  passwordLength: number
  initialText?: string
  cases: Cases
}

export interface Result {
  success: boolean
  errorMessage?: string
  password: string
}

export interface ErrorToGenerate {
  exists: boolean
  message?: string
}

export interface CheckErros {
  (preferences: Preferences): ErrorToGenerate
}

export interface GeneratePassword {
  (preferences: Preferences): Result
}
