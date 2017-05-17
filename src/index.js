/**
 * 3x3 Grid coordinate system
 * Defination:
 *   Horizontal coords: L(eft), R(ight), HC(horizontal center)
 *   Vertical coords: T(op), B(ottom), VC(vertical center)
 * 
 * The `parse` function take in a string contains coord chars (case-insensitive), and
 * returns a valid array of H-coords & V-coords. The second parameter indicates strict
 * or loose (default) mode, when in strict, it yeilds error when meets dirty string
 * 
 * Example: 
 *  'lt' or 'tl' or 'ascst^&*l' => ['L', 'T']
 */
export class JiuGongGe {

  static parse(str, { strict, valueMap } = { strict: false }) {
    let result = [,,]
    for (let i = 0; i < str.length; i++) {
      if (result.findIndex(_ => _ === undefined) === -1) {
        if (!strict) {
          return valueMap ? result.map(_ => valueMap[_]) : result
        } else {
          throw Error('Extra tailing chars: ' + str.substr(i))
        }
      }
      let char = str[i].toUpperCase()
      switch (char) {
        case 'V':
        case 'H':
          let next = str[i + 1].toUpperCase()
          if (next !== 'C') {
            if (strict) throw Error('Invalid char after V/H: ', next)
          } else {
            result[char === 'V' ? 1 : 0] = char + 'C'
            i++
          }
          break
        case 'L':
        case 'R':
          result[0] = char
          break
        case 'T':
        case 'B':
          result[1] = char
          break
        default:
          if (strict) throw Error('Invalid char: ' + char)
      }
    }
    return valueMap ? result.map(_ => valueMap[_]) : result
  }
  
}