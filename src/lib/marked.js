exports.getCodeBlock = (code) => {
  let rows = code.split('\n')

  let result = '<pre class="theme-blog-code-background"><code><table><tbody><tr>'

  let middle = ''

  //  line
  middle += '<td class="theme-blog-code-number">'
  middle += '<pre>'
  for (let i = 0, len = rows.length; i < len; i++) {
    middle += '<span class="theme-blog-code-line">'
    middle += i
    middle += '</span>'
    middle += '<br>'
  }

  middle += '</pre>'
  middle += '</td>'

  //  code
  middle += '<td class="theme-blog-code-chars">'
  middle += '<pre>'
  for (let i = 0, len = rows.length; i < len; i++) {
    middle += '<span class="theme-blog-code-line">'
    middle += rows[i]
    middle += '</span>'
    middle += '<br>'
  }
  middle += '</pre>'
  middle += '</td>'

  result += middle

  result += '</tr></tbody></table></code></pre>'

  return result
}
