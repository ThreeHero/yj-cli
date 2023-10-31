const { name, version } = require('../../package.json')

const owner = 'ThreeHero'

const templates = ['vue', 'react', 'springboot', 'express']

const gitRepoNames = {
  vue: 'yj-template-vue',
  react: 'yj-template',
  springboot: 'yj-template-springboot',
  express: 'yj-template-express'
}

module.exports = {
  name,
  version,
  owner,
  templates,
  gitRepoNames
}
