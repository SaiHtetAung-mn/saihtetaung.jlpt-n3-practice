/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rulesPath = require.resolve('myanmar-tools/resources/Z2U.js');
const rulesSource = fs.readFileSync(rulesPath, 'utf8');
const sandbox = {};

vm.createContext(sandbox);
vm.runInContext(`${rulesSource}; this.getAllRulesZ2U = getAllRulesZ2U;`, sandbox, {
  filename: path.relative(process.cwd(), rulesPath),
});

function runPhase(rules, input) {
  let output = '';
  let remaining = input;
  let startOfString = true;

  while (remaining.length > 0) {
    let foundRule = false;

    for (const rule of rules) {
      if (rule.matchOnStart == null || startOfString) {
        const match = remaining.match(rule.p);

        if (match != null) {
          foundRule = true;
          const rightPartSize = remaining.length - match[0].length;
          remaining = remaining.replace(rule.p, rule.s);
          const newStart = remaining.length - rightPartSize;

          if (rule.revisit == null) {
            output += remaining.substring(0, newStart);
            remaining = remaining.substring(newStart);
          }
        }
      }
    }

    if (!foundRule) {
      output += remaining[0];
      remaining = remaining.substring(1);
    }

    startOfString = false;
  }

  return output;
}

function zawgyiToUnicode(input) {
  return sandbox.getAllRulesZ2U().reduce((output, rules) => runPhase(rules, output), input);
}

module.exports = { zawgyiToUnicode };
