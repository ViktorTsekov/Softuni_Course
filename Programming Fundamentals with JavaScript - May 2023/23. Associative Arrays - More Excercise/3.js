function comments(input) {
  let users = {}
  let articles = {}

  for(el of input) {
    if(el.includes('user')) {
      let user = el.split("user ")[1]

      if(users[user] === undefined) {
        users[user] = {}
      }
    } else if(el.includes('article')){
      let article = el.split("article ")[1]

      if(articles[article] === undefined) {
        articles[article] = []
      }
    } else if(el.includes('posts')) {
      let user = el.split(" posts on ")[0]
      let article = el.split(" posts on ")[1].split(": ")[0]
      let commentTitle = el.split(" posts on ")[1].split(": ")[1].split(", ")[0]
      let comment = el.split(" posts on ")[1].split(": ")[1].split(", ")[1]

      if(users[user] !== undefined && articles[article] !== undefined) {
        users[user][commentTitle] = comment
        articles[article].push(`${user}:${commentTitle}`)
      }
    }
  }

  let sortedArticles = Object.entries(articles).sort((a, b) => {
    let aComments = a[1].length
    let bComments = b[1].length

    return bComments - aComments
  }).reduce((prev, cur) => {
    let newObj = {...prev}
    let sortedComments = cur[1].sort((a, b) => a.split(":")[0].localeCompare(b.split(":")[0]))

    newObj[cur[0]] = sortedComments

    return newObj
  }, {})

  for(article in sortedArticles) {
    console.log(`Comments on ${article}`)

    articles[article].forEach(el => {
      let user = el.split(":")[0]
      let commentTitle = el.split(":")[1]

      console.log(`--- From user ${user}: ${commentTitle} - ${users[user][commentTitle]}`)
    })
  }
}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])
