const timeGen = max => {
  let output = []

  for (let i = 0; i < max; i++) {
    const stringed = i.toString()
    const key = stringed.length === 1 ? '0' + stringed : stringed

    output.push({ key, value: i})
  }

  return output
}

export const defaultHours = timeGen(24)

export const defaultMinutes = timeGen(60)