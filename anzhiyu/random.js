var posts=["2023/10/13/Hexo/Hexo搭建博客/","2023/08/24/css基础/css基础/","2023/08/24/html基础/html基础2/","2023/08/24/html基础/html基础/","2023/08/24/html基础/html基础3/","2023/10/25/js-BOM/js-BOM/","2023/08/29/css进阶/元素的显示和隐藏/","2023/08/31/css进阶/flex/","2023/08/30/css进阶/BFC(面试重点)/","2023/09/07/css进阶/动画/","2023/08/30/css进阶/定位/","2023/08/24/css进阶/字体样式/","2023/09/06/css进阶/形变/","2023/08/29/css进阶/浮动/","2023/08/29/css进阶/盒子模型/","2023/08/25/css进阶/背景/","2023/08/24/css进阶/选择器/","2023/09/04/css进阶/预处理器/","2023/09/18/js入门-ECMA/js入门/","2023/09/22/js入门-ECMA/js函数/","2023/10/13/js-DOM/DOM的基本操作/","2023/10/11/js入门-ECMA/js堆和栈/","2023/10/08/js入门-ECMA/js字符串/","2023/10/09/js入门-ECMA/js对象/","2023/09/21/js入门-ECMA/js流程控制/","2023/09/19/js入门-ECMA/js的类型判断和转换/","2023/10/10/js入门-ECMA/js系统对象/","2023/09/26/js入门-ECMA/js数组/","2023/09/26/js入门-ECMA/js预编译/","2023/09/20/js入门-ECMA/变量/","2023/09/20/js入门-ECMA/运算符/","2023/09/18/js入门-ECMA/数据类型/","2023/09/12/移动端/移动端知识/","2023/08/24/markdown语法/md语法/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};