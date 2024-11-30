import path from "path"

module.exports = {
    webpack: {
        // 配置别名
        alias: {
            // 约定： 使用 @ 表示 src文件所在路径
            '@': path.resolve(__dirname, 'src')
        }
    }
}