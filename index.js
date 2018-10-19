/* global pkgInfo, args */

// <region> Require
const fs = require('fs')
const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')
const problems = [
  ...require('./Problem000/index.js')
]
// </region>

// <region> Constants & Globals
global.pkgInfo = JSON.parse(fs.readFileSync('package.json'))
const options = [
  { name: 'problem', alias: 'p', description: 'Displays the solution of a problem.', type: Number },
  { name: 'stats', alias: 's', description: 'Displays the overall stats.', type: Boolean },
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

if (Object.keys(args).length === 0 || args.help) {
  console.log(usage)
}

if (args.stats) {
  let solved = problems.reduce((acc, e) => acc + (e.solved ? 1 : 0), -1)
  let total = 638
  console.log(`Solved: ${solved}`)
  console.log(`Total: ${total}`)
  console.log(`Percent: ${(solved / total * 100).toFixed(2)}%`)
}

if (args.problem) {
  if (args.problem >= 1 && args.problem <= problems.length) {
    let prob = problems[args.problem]
    prob.printProblem()
  }
}
