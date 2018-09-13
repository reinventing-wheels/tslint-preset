const jsRules = {
  'arrow-parens': { options: 'ban-single-arg-parens' },
  'eofline': {},
  'indent': { options: ['spaces', 2] },
  'linebreak-style': { options: 'LF' },
  'no-irregular-whitespace': {},
  'no-var-keyword': {},
  'only-arrow-functions': {},
  'prefer-const': {},
  'quotemark': { options: 'single' },
  'semicolon': { options: 'never' },
  'trailing-comma': { options: { multiline: 'never', singleline: 'never' } },
  'triple-equals': { options: 'allow-null-check' },
  'whitespace': { options: ['check-branch', 'check-decl', 'check-module', 'check-separator', 'check-rest-spread'] }
}

const rules = Object.assign({}, jsRules, {
  'array-type': { options: 'array' },
  'member-access': { options: 'no-public' },
  'prefer-readonly': {}
})

module.exports = { rules, jsRules }
