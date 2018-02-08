/**
 * 配置命令行模块
 * 选项参数：类型、默认值、描述
 * .argv：对输入的命令行以字符串形式解析
 */
import yargs from 'yargs'

const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })

    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv

    export default args