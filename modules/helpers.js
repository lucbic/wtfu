const defaultHash = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'

export const generateUUID = () => {
  let dt = new Date().getTime()

  const hashParser = c => {
    let r = (dt + Math.random()*16)%16 | 0;
    dt = Math.floor(dt/16);
    return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  }

  return defaultHash.replace(/[xy]/g, hashParser)
}