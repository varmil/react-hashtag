const rule = /([#＃][Ａ-Ｚａ-ｚA-Za-z一-鿆0-9０-９ぁ-ヶｦ-ﾟー]+)/g

export const parse = (value, renderer, action) => {
  return value.split(rule).map(chunk => {
    if (chunk.match(rule)) {
      return renderer(chunk, action)
    }

    return chunk
  })
}
