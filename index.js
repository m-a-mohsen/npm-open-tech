function helloOpenTechCamp() {
    console.log("OpenTechCamp")
    return helloOpenTechCamp()
  }
  helloOpenTechCamp()
  module.exports = helloOpenTechCamp