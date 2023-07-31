function extractFile(str) {
  let pathSegments = str.split('\\')

  let fileInfo = pathSegments[pathSegments.length - 1].split('.')
  let fileName = fileInfo.slice(0, fileInfo.length - 1).join('.')
  let fileExtension = fileInfo[fileInfo.length - 1]

  console.log(`File name: ${fileName}`)
  console.log(`File extension: ${fileExtension}`)
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')
