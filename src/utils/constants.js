const { name, version } = require('../../package.json')

const owner = 'ThreeHero'

const gitRepoNames = {
  vue: 'yj-template-vue',
  react: 'yj-template'
}
const reactRepo = {
  owner: 'ThreeHero',
  name: 'yj-template',
  address: 'https://github.com/ThreeHero/yj-template.git'
}

const vueRepo = {
  owner: 'ThreeHero',
  name: 'yj-template-vue',
  address: 'https://github.com/ThreeHero/yj-template-vue.git'
}

module.exports = {
  name,
  version,
  owner,
  gitRepoNames
}
