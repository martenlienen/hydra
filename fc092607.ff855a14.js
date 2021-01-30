(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{261:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),o=(t(0),t(268)),i={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},c={unversionedId:"tutorials/basic/running_your_app/debugging",id:"version-1.0/tutorials/basic/running_your_app/debugging",isDocsHomePage:!1,title:"Debugging",description:"Hydra provides a few options to improve debuggability.",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/5_debugging.md",slug:"/tutorials/basic/running_your_app/debugging",permalink:"/docs/tutorials/basic/running_your_app/debugging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/5_debugging.md",version:"1.0",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1611966342,sidebar_label:"Debugging",sidebar:"version-1.0/docs",previous:{title:"Logging",permalink:"/docs/tutorials/basic/running_your_app/logging"},next:{title:"Tab completion",permalink:"/docs/tutorials/basic/running_your_app/tab_completion"}},p=[{value:"Printing the configuration",id:"printing-the-configuration",children:[]},{value:"Info",id:"info",children:[]}],u={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra provides a few options to improve debuggability."),Object(o.b)("h3",{id:"printing-the-configuration"},"Printing the configuration"),Object(o.b)("p",null,"Print the config for your app without running your function by adding ",Object(o.b)("inlineCode",{parentName:"p"},"--cfg")," or ",Object(o.b)("inlineCode",{parentName:"p"},"-c")," to the command line."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"--cfg")," option takes one argument indicating which part of the config to print:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"job")," : Your config"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hydra")," : Hydra's config"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"all")," : The full config, which is a union of ",Object(o.b)("inlineCode",{parentName:"li"},"job")," and ",Object(o.b)("inlineCode",{parentName:"li"},"hydra"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# A normal run:\n$ python my_app.py\nMySQL connecting to localhost with user=root and password=1234\n\n# just show the config without running your function:\n$ python my_app.py --cfg job\ndb:\n  host: localhost\n  user: root\n  password: 1234\n")),Object(o.b)("p",null,"The printed config includes any modifications done via the command line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:"{3}","{3}":!0}),"$ python my_app.py db.host=10.0.0.1 --cfg job\ndb:\n  host: 10.0.0.1\n  user: root\n  password: 1234\n")),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"--package")," or ",Object(o.b)("inlineCode",{parentName:"p"},"-p")," to select a a specific config package:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"python my_app.py --cfg hydra --package hydra.job\n# @package hydra.job\nname: my_app\nconfig_name: config\n...\n")),Object(o.b)("h3",{id:"info"},"Info"),Object(o.b)("p",null,"Hydra can print information about your plugins, config search path, composition trace and more using the",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"--info")," flag."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py --info\n")),Object(o.b)("p",null,"Subset of output (Complete ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://paste.ubuntu.com/p/JWh2cKgGtD/"}),"example"),")"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"Config search path\n...\nProfiling information\n...\nComposition trace\n...\nConfig\n...\n")))}l.isMDXComponent=!0},268:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(t),g=r,d=b["".concat(i,".").concat(g)]||b[g]||s[g]||o;return t?a.a.createElement(d,c(c({ref:n},u),{},{components:t})):a.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);