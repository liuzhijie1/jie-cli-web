# record some thing

## init Project

1. @builtin typescript and javascript language features disable
2. add .eslintrc.cjs rules 'vue/multi-word-component-names': 0  让eslint可以允许单字母单词的SFC
3. disable vetur 插件，使用 volar插件 这是vue3，如果vue2那就是相反
4. tsconfig.app.json中新增 "moduleResolution": "node" 配置让文件能够正确解析, 这个是错的，其实直接在tsconfig.node.json中的moduleResolution设置成为Node便可以了
5. 对于@types文件没能够正确解析的在 env.d.ts 中新增  /// <reference types="lodash-es" />
6. 增加对ant-design-vue的组件库支持，新增ant-design-vue-helper VsExtension
7. 对Vue3默认语法的支持，vue3-snippets-for-vscode VsExtension
8. VueJsx对在vue项目中支持jsx和tsx文件的插件  
