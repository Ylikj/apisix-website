(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(118)),i={id:"2fa",title:"2FA"},c={unversionedId:"2fa",id:"2fa",isDocsHomePage:!1,title:"2FA",description:"Two-factor authentication(2FA)",source:"@site/docs/2fa.md",slug:"/2fa",permalink:"/2fa",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/2fa.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1613718515,sidebar:"docs",previous:{title:"Committer Guide",permalink:"/committer-guide"},next:{title:"Release Guide",permalink:"/release-guide"}},u=[{value:"Two-factor authentication(2FA)",id:"two-factor-authentication2fa",children:[]},{value:"Enable 2FA on GitHub",id:"enable-2fa-on-github",children:[]},{value:"How to Submit Codes",id:"how-to-submit-codes",children:[]}],s={toc:u};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"two-factor-authentication2fa"},"Two-factor authentication(2FA)"),Object(a.b)("p",null,"Two factor authentication (2FA) refers to the authentication method that combines both passport and an object (credit card, SMS phone, token or biomarkers as fingerprint) to identify a user. To ensure the security of the committer\u2019s account, we need you to enable 2FA to sign in and contribute codes on GitHub. More details, please refer to 2FA."),Object(a.b)("p",null,"Note:If you do not enable 2FA, you will be removed from the project and unable to access our repositories and the fork from our private repository."),Object(a.b)("h2",{id:"enable-2fa-on-github"},"Enable 2FA on GitHub"),Object(a.b)("p",null,"For detailed operations, please refer to Enable Two Factor Authentication with TOTP."),Object(a.b)("p",null,"After enabling 2FA, you need to sign in GitHub with the way of username/password + mobile phone authentication code."),Object(a.b)("p",null,"Tips: If you cannot download the APP through the page link, you can search and download the Google Authenticator in APP Store."),Object(a.b)("h2",{id:"how-to-submit-codes"},"How to Submit Codes"),Object(a.b)("p",null,"After enabling 2FA, you need to generate a private access Token to perform operations such as git submit and so on. At this time, you will use username + private access Token in replace of username + password to submit codes."),Object(a.b)("p",null,"For detailed operations, please refer to Create a Private Token."))}l.isMDXComponent=!0}}]);