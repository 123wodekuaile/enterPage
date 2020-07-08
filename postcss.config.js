module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-px2rem')({
            remUnit: 37.5  //这不是设置布局的宽度，而是设置除法的基数
        })
    ]
}