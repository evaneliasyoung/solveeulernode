/* global pkgInfo, args */

// <region> Require
const fs = require('fs')
const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')
// </region>

// <region> Load Problems
var problems = {}
let problemHundreds = fs.readdirSync('.').filter((e) => e.match(/^Problem\d{3}$/))
for (let dir of problemHundreds) {
  let problemTens = fs.readdirSync(`./${dir}`).filter((e) => e.match(/^Problem\d{2}.js$/))
  for (let pT of problemTens) {
    for (let p of require(`./${dir}/${pT}`)) {
      problems[p.id] = p
    }
  }
}
// </region>

// <region> Constants & Globals
global.pkgInfo = JSON.parse(fs.readFileSync('package.json'))
const options = [
  { name: 'problem', alias: 'p', description: 'Displays the solution of a problem.', type: Number },
  { name: 'stats', alias: 's', description: 'Displays the overall stats.', type: Boolean },
  { name: 'url', alias: 'u', description: 'Displays the url of a problem.', type: Number },
  { name: 'help', alias: 'h', description: 'Displays this help message.', type: Boolean }
]
global.args = commandLineArgs(options)
const usage = commandLineUsage([
  {
    header: pkgInfo.name,
    content: pkgInfo.description
  },
  {
    header: 'Options',
    optionList: options
  }
])
// </region>

if (args.help) {
  console.log(usage)
} else if (args.stats) {
  let solved = Object.values(problems).reduce((acc, e) => acc + (e.solved ? 1 : 0), -1)
  let total = 641
  console.log(`Level: ${Math.floor(solved / 25)}`)
  console.log(`Solved: ${solved}`)
  console.log(`Total: ${total}`)
  console.log(`Percent: ${(solved / total * 100).toFixed(1)}%`)
} else if (args.url) {
  if (Object.keys(problems).includes(args.url.toString())) {
    let prob = problems[args.url]
    prob.printURL()
  }
} else if (args.problem) {
  if (Object.keys(problems).includes(args.problem.toString())) {
    let prob = problems[args.problem]
    prob.printSolution()
  }
} else {
  console.log(usage)
}
