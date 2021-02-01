function isIsogram(str){
  set_str = new Set(str.toLowerCase())
  return set_str.size === str.length
}
