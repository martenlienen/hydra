(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{195:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return p}));var t=r(3),a=r(8),o=(r(0),r(268)),c={id:"flow-launcher",title:"Flow Launcher"},l={unversionedId:"fb/flow-launcher",id:"version-1.0/fb/flow-launcher",isDocsHomePage:!1,title:"Flow Launcher",description:"The Flow Launcher plugin provides a way to launch application via flow.",source:"@site/versioned_docs/version-1.0/fb/flow-launcher.md",slug:"/fb/flow-launcher",permalink:"/docs/fb/flow-launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/fb/flow-launcher.md",version:"1.0",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1611966342},i=[{value:"Dependency",id:"dependency",children:[]},{value:"Usage",id:"usage",children:[]}],u={toc:i};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Flow Launcher plugin provides a way to launch application via ",Object(o.b)("inlineCode",{parentName:"p"},"flow"),"."),Object(o.b)("h2",{id:"dependency"},"Dependency"),Object(o.b)("p",null,"To use the Flow Launcher, add the following to your ",Object(o.b)("inlineCode",{parentName:"p"},"TARGETS")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"//github/facebookresearch/hydra/plugins/hydra_flow_launcher:hydra_flow_launcher\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Add hydra/launcher=flow to your command line. Alternatively, override hydra/launcher in your config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"defaults:\n  - hydra/launcher: flow\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Discover Flow Launcher's config"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ buck run @mode/opt  //path:my_app -- --cfg hydra -p hydra.launcher"',title:'"$',buck:!0,run:!0,"@mode/opt":!0,"":!0,"//path:my_app":!0,"--":!0,"--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0}),"\n# @package hydra.launcher\n_target_: hydra_plugins.flow_launcher_plugin.flow_launcher.FlowLauncher\nmode: flow\nowner: ${env:USER}\nentitlement: gpu_pnb_fair\npkg_version: fblearner.flow.canary:19e63cbf9945467281cf681bc8902c50\ndriver_path: ''\nresource_requirements:\n  gpu: 0\n  cpu: 1\n  memory: 10g\n  region: null\n  capabilities: []\n  percent_cpu: null\nrun_as_secure_group: fair_research_and_engineering\nretries: 2\ntags: []\n"))),Object(o.b)("p",null,"The Launcher currently support both ",Object(o.b)("inlineCode",{parentName:"p"},"par")," and ",Object(o.b)("inlineCode",{parentName:"p"},"xar")," style. You can override ",Object(o.b)("inlineCode",{parentName:"p"},"resource_requirements")," just like how you would via ",Object(o.b)("inlineCode",{parentName:"p"},"flow-cli"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"NOTE")),Object(o.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Flow launcher only supports ",Object(o.b)("inlineCode",{parentName:"p"},"@mode/opt"),"."))),Object(o.b)("p",null,"To run the example application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"buck run @mode/opt  //github/facebookresearch/hydra/plugins/hydra_flow_launcher/example:my_app -- --multirun\n")))}p.isMDXComponent=!0},268:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},b=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(r),s=t,m=b["".concat(c,".").concat(s)]||b[s]||d[s]||o;return r?a.a.createElement(m,l(l({ref:n},u),{},{components:r})):a.a.createElement(m,l({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);