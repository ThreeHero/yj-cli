const { owner, gitRepoNames } = require('./utils/constants')
const download = require('download-git-repo')
const inquirer = require('inquirer')
const ora = require('ora')
const chalk = require('chalk')
const logSymbols = require('log-symbols')

module.exports = async projectName => {
  // 目前只支持react模板
  const { framework } = await inquirer.prompt([
    {
      name: 'framework',
      type: 'list',
      choices: ['vue', 'react', 'springboot'],
      message: '请选择框架：'
    }
  ])

  // 下载模板 选择
  download(`github:${owner}/${gitRepoNames[framework]}`, projectName, null, err => {
    const spinner = ora('正在创建...')
    // 下载成功
    spinner.start()
    if (err) {
      // 下载失败
      console.log(logSymbols.error, chalk.red(`创建失败${err}`))
      spinner.fail()
    } else {
      console.log(logSymbols.success, chalk.green('项目初始化完成'))
      spinner.succeed()
    }
  })
}
