function browserHistory(browser, actions) {
  let browserObj = browser
  let commands = actions

  for(command of commands) {
    if(command === "Clear History and Cache") {
      browserObj["Open Tabs"] = []
      browserObj["Recently Closed"] = []
      browserObj["Browser Logs"] = []
    } else {
      let action = command.split(" ")[0]
      let tab = command.split(" ").slice(1).join(" ")

      if(action === "Open") {
        if(browserObj["Open Tabs"].indexOf(tab) === -1) {
          browserObj["Open Tabs"].push(tab)
          browserObj["Browser Logs"].push(command)
        }
      } else {
        if(browserObj["Open Tabs"].indexOf(tab) !== -1) {
          let tabIndex = browserObj["Open Tabs"].indexOf(tab)

          browserObj["Open Tabs"].splice(tabIndex, 1)
          browserObj["Recently Closed"].push(tab)
          browserObj["Browser Logs"].push(command)
        }
      }
    }
  }

  console.log(browserObj["Browser Name"])
  console.log("Open Tabs:", browserObj["Open Tabs"].join(", "))
  console.log("Recently Closed:", browserObj["Recently Closed"].join(", "))
  console.log("Browser Logs:", browserObj["Browser Logs"].join(", "))
}

browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"], "Recently Closed":["Yahoo","Gmail"], "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]}, ["Close Facebook", "Open StackOverFlow", "Open Google"])
