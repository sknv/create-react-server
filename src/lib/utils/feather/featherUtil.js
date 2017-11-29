import feather from 'feather-icons'

import unsafeUtil from '../react/unsafeUtil'

const featherUtil = {
  render(icon, props = {}, featherOptions = {}) {
    if (props.className) {
      props.className = props.className + ' i-svg'
    } else {
      props.className = 'i-svg'
    }

    return unsafeUtil.render('i', feather.toSvg(icon, featherOptions), props)
  }
}

export default featherUtil
