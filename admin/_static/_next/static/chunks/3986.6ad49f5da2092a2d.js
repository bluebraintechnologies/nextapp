"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3986],{63986:function(e,n,t){t.r(n);var r=t(85893),u=t(41464),o=t(96720),i=t(97085);n.default=function(){var e=(0,i.VR)(),n=e.mutate,t=e.isLoading,a=(0,o.X9)().data,c=(0,o.SO)().closeModal;return(0,r.jsx)(u.Z,{onCancel:c,onDelete:function(){n({id:null===a||void 0===a?void 0:a.id}),c()},deleteBtnLoading:t})}},97085:function(e,n,t){t.d(n,{VR:function(){return O},Pb:function(){return y},bD:function(){return v}});var r=t(88767),u=t(66889),o=t(17785),i=t(40782),a=t(70300),c=t(14511),s=t(14141);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}function d(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var p=f({},(0,c.h)(o.P.QUESTIONS),{get:function(e){var n=e.id;return s.eN.get("".concat(o.P.QUESTIONS,"/").concat(n))},paginated:function(e){var n=e.type,t=e.shop_id,r=d(e,["type","shop_id"]);return s.eN.get(o.P.QUESTIONS,f({searchJoin:"and",with:"product;user"},r,{search:s.eN.formatSearchParams({type:n,shop_id:t})}))}}),y=function(e){var n,t=(0,r.useQuery)([o.P.QUESTIONS,e],(function(e){var n=e.queryKey,t=e.pageParam;return p.paginated(Object.assign({},n[1],t))}),{keepPreviousData:!0}),i=t.data,a=t.error,c=t.isLoading;return{questions:null!==(n=null===i||void 0===i?void 0:i.data)&&void 0!==n?n:[],paginatorInfo:(0,u.Q)(i),error:a,loading:c}},v=function(){var e=(0,a.$G)().t,n=(0,r.useQueryClient)();return(0,r.useMutation)(p.update,{onSuccess:function(){i.Am.success(e("common:successfully-updated"))},onSettled:function(){n.invalidateQueries(o.P.QUESTIONS)}})},O=function(){var e=(0,r.useQueryClient)(),n=(0,a.$G)().t;return(0,r.useMutation)(p.delete,{onSuccess:function(){i.Am.success(n("common:successfully-deleted"))},onSettled:function(){e.invalidateQueries(o.P.QUESTIONS)}})}}}]);