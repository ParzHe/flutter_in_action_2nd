(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{696:function(s,t,n){"use strict";n.r(t);var a=n(62),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_15-2-flutter-app代码结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_15-2-flutter-app代码结构"}},[s._v("#")]),s._v(" 15.2 Flutter APP代码结构")]),s._v(" "),n("p",[s._v('我们先来创建一个全新的Flutter工程，命名为"github_client_app"；创建新工程的步骤视读者使用的编辑器而定，都比较简单，在此不再赘述。创建完成后，工程结构如下：')]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("github_client_app\n├── android\n├── ios\n├── lib\n└── "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("由于我们需要使用外部图片和Icon资源，所以我们在项目根目录下分别创建“imgs”和“fonts”文件夹，前者用于保存图片，后者用于保存Icon文件。关于图片和Icon，读者可以参考第三章中相应的内容。")]),s._v(" "),n("p",[s._v("由于在网络数据传输和持久化时，我们需要通过Json来传输、保存数据；但是在应用开发时我们又需要将Json转成Dart Model类，现在我们使用在第十一章中“Json转Model”小节中介绍的方案，所以，我们需要在根目录下再创建一个用于保存Json文件的“jsons”文件夹。")]),s._v(" "),n("p",[s._v("多语言支持我们使用第十三章“国际化”中介绍的方案，所以还需要在根目录下创建一个“l10n”文件夹，用于保存各国语言对应的arb文件。")]),s._v(" "),n("p",[s._v("现在工程目录变为：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("github_client_app\n├── android\n├── fonts\n├── l10n-arb\n├── imgs\n├── ios\n├── jsons\n├── lib\n└── "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("由于我们的Dart代码都在“lib”文件夹下，笔者根据技术选型和经验在lib文件下创建了如下目录：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("lib\n├── common\n├── l10n\n├── models\n├── states\n├── routes\n└── widgets \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("table",[n("thead",[n("tr",[n("th",[s._v("文件夹")]),s._v(" "),n("th",[s._v("作用")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("common")]),s._v(" "),n("td",[s._v("一些工具类，如通用方法类、网络接口类、保存全局变量的静态类等")])]),s._v(" "),n("tr",[n("td",[s._v("l10n")]),s._v(" "),n("td",[s._v("国际化相关的类都在此目录下")])]),s._v(" "),n("tr",[n("td",[s._v("models")]),s._v(" "),n("td",[s._v("Json文件对应的Dart Model类会在此目录下")])]),s._v(" "),n("tr",[n("td",[s._v("states")]),s._v(" "),n("td",[s._v("保存APP中需要跨组件共享的状态类")])]),s._v(" "),n("tr",[n("td",[s._v("routes")]),s._v(" "),n("td",[s._v("存放所有路由页面类")])]),s._v(" "),n("tr",[n("td",[s._v("widgets")]),s._v(" "),n("td",[s._v("APP内封装的一些Widget组件都在该目录下")])])])]),s._v(" "),n("p",[s._v("注意，使用不同的框架或技术选型会对代码有不同的组织方式，因此，本节介绍的代码组织结构并不是固定或者“最佳”的，在实战中，读者可以自己根据情况调整源码结构。但是无论采取何种源码组织结构，清晰和解耦都是一个通用原则，我们应该让自己的代码结构清晰，以便交流和维护。")])])}),[],!1,null,null,null);t.default=e.exports}}]);