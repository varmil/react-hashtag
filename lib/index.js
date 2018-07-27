const hashtagRegex = require('hashtag-regex')
const rule = hashtagRegex()

export const parse = (value, renderer, action) => {
  let components = []
  let match
  while ((match = rule.exec(value))) {
    const hashtag = match[0]
    components.push(renderer(hashtag, action))
  }
  return components
}
