(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),s=a(35),i=a.n(s),o=(a(42),a(5)),l=a(3),j={OPEN_ASIDE:"OPEN_ASIDE",CLOSE_ASIDE:"CLOSE_ASIDE",SET_PRODUCTS_DATA:"SET_PRODUCTS_DATA",SET_PRODUCT_DATA:"SET_PRODUCT_DATA",PRODUCT_DETAILS_FAIL:"PRODUCT_DETAILS_FAIL",PRODUCT_DETAILS_REQUEST:"PRODUCT_DETAILS_REQUEST",PRODUCT_DETAILS_SUCCESS:"PRODUCT_DETAILS_SUCCESS",PRODUCT_LIST_FAIL:"PRODUCT_LIST_FAIL",PRODUCT_LIST_REQUEST:"PRODUCT_LIST_REQUEST",PRODUCT_LIST_SUCCESS:"PRODUCT_LIST_SUCCESS",CART_ADD_ITEM:"CART_ADD_ITEM",CART_REMOVE_ITEM:"CART_REMOVE_ITEM",CART_INIT_ITEMS:"CART_INIT_ITEMS",USER_INIT_INFO:"USER_INIT_INFO",USER_SIGNIN_REQUEST:"USER_SIGNIN_REQUEST",USER_SIGNIN_SUCCESS:"USER_SIGNIN_SUCCESS",USER_SIGNIN_FAIL:"USER_SIGNIN_FAIL",USER_LOGOUT:"USER_LOGOUT",USER_REGISTER_REQUEST:"USER_REGISTER_REQUEST",USER_REGISTER_SUCCESS:"USER_REGISTER_SUCCESS",USER_REGISTER_FAIL:"USER_REGISTER_FAIL",USER_UPDATE_PROFILE_REQUEST:"USER_UPDATE_PROFILE_REQUEST",USER_UPDATE_PROFILE_SUCCESS:"USER_UPDATE_PROFILE_SUCCESS",USER_UPDATE_PROFILE_FAIL:"USER_UPDATE_PROFILE_FAIL"},u=function(){return Object(c.jsx)("footer",{className:"footer",children:"All right reserved."})},d=Object(n.createContext)(),b=Object(n.createContext)(),O=function(){var e=Object(n.useContext)(d),t=Object(n.useContext)(b),a=t.cartItems,r=t.userSignin.userInfo;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)("div",{className:"brand",children:[Object(c.jsx)("button",{className:"hideLarge",onClick:function(){return e({type:j.OPEN_ASIDE})},children:"\u2630"}),Object(c.jsx)(l.b,{to:"/",children:"amazona"})]}),Object(c.jsxs)("div",{className:"header-links",children:[Object(c.jsxs)(l.b,{to:"/cart",children:["Cart",a.length>0&&Object(c.jsx)("span",{className:"badge",children:a.length})]})," ",r?Object(c.jsx)(l.b,{to:"/profile",children:r.name}):Object(c.jsx)(l.b,{to:"/signin",children:"Sign In"})]})]})},p=function(){var e=Object(n.useContext)(d),t=Object(n.useContext)(b).aside.open;return Object(c.jsxs)("aside",{className:"".concat(t?"sidebar open":"sidebar"),children:[Object(c.jsx)("h3",{className:"sidebar-header",children:"Shopping Categories"}),Object(c.jsx)("button",{className:"sidebar-close-button hideLarge",onClick:function(){return e({type:j.CLOSE_ASIDE})},children:"x"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"Pants"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"Shirts"})})]})]})},h=a(4),S=a(7),m=a.n(S),x=a(11),f=a(12),E=a.n(f);function g(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"fa fa-spinner fa-spin"})," Loading..."]})}function I(e){return Object(c.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}function _(e){var t=e.rating,a=e.numReviews;return Object(c.jsxs)("div",{className:"rating",children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:t>=1?"fa fa-star":t>=.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:t>=2?"fa fa-star":t>=1.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:t>=3?"fa fa-star":t>=2.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:t>=4?"fa fa-star":t>=3.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:t>=5?"fa fa-star":t>=4.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(c.jsx)("span",{children:a+" reviews"})]})}var v=function(e){var t=e.product;return Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"product",children:[Object(c.jsx)("img",{className:"product-image",src:t.image,alt:"product"}),Object(c.jsx)("div",{className:"product-name",children:Object(c.jsx)(l.b,{to:"/product/"+t._id,children:t.name})}),Object(c.jsx)(_,{rating:t.rating,numReviews:t.numReviews}),Object(c.jsxs)("div",{className:"product-price",children:["$",t.price]})]})})},R=function(){var e=Object(n.useContext)(b).products,t=e.items,a=e.loading,r=e.error,s=Object(n.useContext)(d);return Object(n.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:j.PRODUCT_LIST_REQUEST}),e.next=4,E.a.get("https://powerful-savannah-21373.herokuapp.com/api/products");case 4:t=e.sent,a=t.data,s({type:j.PRODUCT_LIST_SUCCESS,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s({type:j.PRODUCT_LIST_FAIL,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{children:a?Object(c.jsx)(g,{}):r?Object(c.jsx)(I,{variant:"danger",children:r}):Object(c.jsx)("ul",{className:"products",children:t.map((function(e){return Object(c.jsx)(v,{product:e},e._id)}))})})},C=a(16);var T=function(e){var t=Object(n.useState)(1),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(n.useContext)(b).product,u=i.item,O=i.loading,p=i.error,h=Object(n.useContext)(d),S=e.match.params.id;return Object(n.useEffect)((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h({type:j.PRODUCT_DETAILS_REQUEST}),e.next=4,E.a.get("".concat("https://powerful-savannah-21373.herokuapp.com","/api/products/").concat(S));case 4:t=e.sent,a=t.data,h({type:j.PRODUCT_DETAILS_SUCCESS,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h({type:j.PRODUCT_DETAILS_FAIL,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)("div",{children:O?Object(c.jsx)(g,{}):p?Object(c.jsx)(I,{variant:"danger",children:p}):Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"back-to-result",children:Object(c.jsx)(l.b,{to:"/",children:"Back to result"})}),Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)("div",{className:"details-image",children:Object(c.jsx)("img",{src:u.image,alt:"product"})}),Object(c.jsx)("div",{className:"details-info",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("h4",{children:u.name})}),Object(c.jsx)("li",{children:Object(c.jsx)(_,{rating:u.rating,numReviews:u.numReviews})}),Object(c.jsxs)("li",{children:["Price: ",Object(c.jsxs)("b",{children:["$",u.price]})]}),Object(c.jsxs)("li",{children:["Description:",Object(c.jsx)("div",{children:u.description})]})]})}),Object(c.jsx)("div",{className:"details-action",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Price: ",u.price]}),Object(c.jsxs)("li",{children:["Status:"," ",u.countInStock>0?"In Stock":"Unavailable."]}),Object(c.jsxs)("li",{children:["Qty:"," ",Object(c.jsx)("select",{value:r,onChange:function(e){s(e.target.value)},children:Object(C.a)(Array(u.countInStock).keys()).map((function(e){return Object(c.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(c.jsx)("li",{children:u.countInStock>0&&Object(c.jsx)("button",{onClick:function(){e.history.push("/cart/"+e.match.params.id+"?qty="+r)},className:"button primary",children:"Add to Cart"})})]})})]})]})})},U=a(15);var y=function(e){var t=Object(n.useContext)(b).cartItems,a=Object(n.useContext)(d),r=e.match.params.id,s=U.parse(e.location.search).qty,i=function(){var e=Object(x.a)(m.a.mark((function e(t,c){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://powerful-savannah-21373.herokuapp.com/api/products/"+t);case 2:n=e.sent,r=n.data,a({type:j.CART_ADD_ITEM,payload:{product:r._id,name:r.name,image:r.image,price:r.price,countInStock:r.countInStock,qty:c}});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r&&i(r,s)}),[]),Object(n.useEffect)((function(){localStorage.setItem("cartItems",JSON.stringify(t))}),[t]),Object(c.jsxs)("div",{className:"cart",children:[Object(c.jsx)("div",{className:"cart-list",children:Object(c.jsxs)("ul",{className:"cart-list-container",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("h3",{children:"Shopping Cart"}),Object(c.jsx)("div",{children:"Price"})]}),0===t.length?Object(c.jsx)("div",{children:"Cart is empty"}):t.map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsx)("div",{className:"cart-image",children:Object(c.jsx)("img",{src:e.image,alt:"product"})}),Object(c.jsxs)("div",{className:"cart-name",children:[Object(c.jsx)("div",{children:Object(c.jsx)(l.b,{to:"/product/"+e.product,children:e.name})}),Object(c.jsxs)("div",{children:["Qty:",Object(c.jsx)("select",{value:e.qty,onChange:function(t){return i(e.product,t.target.value)},children:Object(C.a)(Array(e.countInStock).keys()).map((function(e){return Object(c.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(c.jsx)("button",{type:"button",className:"button",onClick:function(){return function(e){a({type:j.CART_REMOVE_ITEM,payload:e})}(e.product)},children:"Delete"})]})]}),Object(c.jsxs)("div",{className:"cart-price",children:["$",e.price]})]},e.product)}))]})}),Object(c.jsxs)("div",{className:"cart-action",children:[Object(c.jsxs)("h3",{children:["Subtotal ( ",t.reduce((function(e,t){return e+Number(t.qty)}),0)," items) : $"," ",t.reduce((function(e,t){return e+Number(t.price)*Number(t.qty)}),0)]}),Object(c.jsx)("button",{onClick:function(){e.history.push("/signin?redirect=shipping")},className:"button primary full-width",disabled:0===t.length,children:"Proceed to Checkout"})]})]})};var N=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),O=u[0],p=u[1],h=Object(n.useState)(""),S=Object(o.a)(h,2),f=S[0],g=S[1],I=Object(n.useState)(""),_=Object(o.a)(I,2),v=_[0],R=_[1],C=Object(n.useContext)(b).userRegister,T=C.loading,y=C.userInfo,N=C.error,A=Object(n.useContext)(d),w=U.parse(e.location.search).redirect;Object(n.useEffect)((function(){return y&&e.history.push(w),function(){}}),[y]);var D=function(){var e=Object(x.a)(m.a.mark((function e(t){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f===v){e.next=5;break}alert("Password and confirm password are not match"),e.next=18;break;case 5:return A({type:j.USER_REGISTER_REQUEST,payload:{email:O,password:f}}),e.prev=6,e.next=9,E.a.post("https://powerful-savannah-21373.herokuapp.com/api/users/register",{name:r,email:O,password:f});case 9:a=e.sent,c=a.data,A({type:j.USER_REGISTER_SUCCESS,payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),A({type:j.USER_REGISTER_FAIL,payload:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"form",children:Object(c.jsx)("form",{onSubmit:D,children:Object(c.jsxs)("ul",{className:"form-container",children:[Object(c.jsx)("li",{children:Object(c.jsx)("h2",{children:"Create Account"})}),Object(c.jsxs)("li",{children:[T&&Object(c.jsx)("div",{children:"Loading..."}),N&&Object(c.jsx)("div",{children:N})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{type:"name",name:"name",id:"name",onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return p(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return g(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"rePassword",children:"Re-Enter Password"}),Object(c.jsx)("input",{type:"password",id:"rePassword",name:"rePassword",onChange:function(e){return R(e.target.value)}})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{type:"submit",className:"button primary",children:"Register"})}),Object(c.jsxs)("li",{children:["Already have an account?",Object(c.jsx)(l.b,{to:"/"===w?"signin":"signin?redirect="+w,className:"button secondary text-center",children:"Sign In your amazona account"})]})]})})})};var A=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),O=u[0],p=u[1],h=Object(n.useContext)(b).userSignin,S=h.loading,f=h.userInfo,g=h.error,I=Object(n.useContext)(d),_=U.parse(e.location.search).redirect;Object(n.useEffect)((function(){return f&&e.history.push(_),function(){}}),[f]);var v=function(){var e=Object(x.a)(m.a.mark((function e(t){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),I({type:j.USER_SIGNIN_REQUEST,payload:{email:r,password:O}}),e.prev=2,e.next=5,E.a.post("https://powerful-savannah-21373.herokuapp.com/api/users/signin",{email:r,password:O});case 5:a=e.sent,c=a.data,I({type:j.USER_SIGNIN_SUCCESS,payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),I({type:j.USER_SIGNIN_FAIL,payload:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"form",children:Object(c.jsx)("form",{onSubmit:v,children:Object(c.jsxs)("ul",{className:"form-container",children:[Object(c.jsx)("li",{children:Object(c.jsx)("h2",{children:"Sign-In"})}),Object(c.jsxs)("li",{children:[S&&Object(c.jsx)("div",{children:"Loading..."}),g&&Object(c.jsx)("div",{children:g})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return p(e.target.value)}})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{type:"submit",className:"button primary",children:"Signin"})}),Object(c.jsx)("li",{children:"New to amazona?"}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/"===_?"register":"register?redirect="+_,className:"button secondary text-center",children:"Create your amazona account"})})]})})})};var w=function(e){return Object(c.jsxs)("div",{className:"checkout-steps",children:[Object(c.jsx)("div",{className:e.step1?"active":"",children:"Signin"}),Object(c.jsx)("div",{className:e.step2?"active":"",children:"Shipping"}),Object(c.jsx)("div",{className:e.step3?"active":"",children:"Payment"}),Object(c.jsx)("div",{className:e.step4?"active":"",children:"Place Order"})]})};var D=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=(a[0],a[1]),s=Object(n.useState)(""),i=Object(o.a)(s,2),l=(i[0],i[1]),j=Object(n.useState)(""),u=Object(o.a)(j,2),d=(u[0],u[1]),b=Object(n.useState)(""),O=Object(o.a)(b,2),p=(O[0],O[1]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(w,{step1:!0,step2:!0}),Object(c.jsx)("div",{className:"form",children:Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.history.push("payment")},children:Object(c.jsxs)("ul",{className:"form-container",children:[Object(c.jsx)("li",{children:Object(c.jsx)("h2",{children:"Shipping"})}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"address",children:"Address"}),Object(c.jsx)("input",{type:"text",name:"address",id:"address",onChange:function(e){return r(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"city",children:"City"}),Object(c.jsx)("input",{type:"text",name:"city",id:"city",onChange:function(e){return l(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"postalCode",children:"Postal Code"}),Object(c.jsx)("input",{type:"text",name:"postalCode",id:"postalCode",onChange:function(e){return d(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"country",children:"Country"}),Object(c.jsx)("input",{type:"text",name:"country",id:"country",onChange:function(e){return p(e.target.value)}})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{type:"submit",className:"button primary",children:"Continue"})})]})})})]})};var P=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),u=l[0],O=l[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),S=h[0],f=h[1],g=Object(n.useContext)(d),I=Object(n.useContext)(b).userSignin.userInfo,_=function(){var t=Object(x.a)(m.a.mark((function t(a){var c,n,s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={userId:I._id,name:r,email:S,password:u},g({type:j.USER_UPDATE_PROFILE_REQUEST,payload:c}),t.prev=3,t.next=6,E.a.put("https://powerful-savannah-21373.herokuapp.com/api/users/profile",c,{headers:{Authorization:"Bearer ".concat(I.token)}});case 6:n=t.sent,s=n.data,console.log("data="),console.log(s),g({type:j.USER_UPDATE_PROFILE_SUCCESS,payload:s}),g({type:j.USER_SIGNIN_SUCCESS,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(3),i=t.t0.response.data.message,g({type:j.USER_UPDATE_PROFILE_FAIL,payload:i}),401==t.t0.response.status&&(localStorage.removeItem("userInfo"),localStorage.removeItem("cartItems"),g({type:j.USER_LOGOUT}),e.history.push("/signin"));case 20:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"profile",children:Object(c.jsx)("div",{className:"profile-info",children:Object(c.jsx)("div",{className:"form",children:Object(c.jsx)("form",{onSubmit:_,children:Object(c.jsxs)("ul",{className:"form-container",children:[Object(c.jsx)("li",{children:Object(c.jsx)("h2",{children:"User Profile"})}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{value:r,type:"name",name:"name",id:"name",onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{value:S,type:"email",name:"email",id:"email",onChange:function(e){return f(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{value:u,type:"password",id:"password",name:"password",onChange:function(e){return O(e.target.value)}})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{type:"submit",className:"button primary",children:"Update"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{type:"button",onClick:function(){localStorage.removeItem("userInfo"),localStorage.removeItem("cartItems"),g({type:j.USER_LOGOUT}),e.history.push("/signin")},className:"button secondary full-width",children:"Logout"})})]})})})})})},L=function(){return Object(c.jsx)("main",{className:"main",children:Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/profile",component:P}),Object(c.jsx)(h.a,{path:"/product/:id",component:T}),Object(c.jsx)(h.a,{path:"/cart/:id?",component:y}),Object(c.jsx)(h.a,{path:"/signin",component:A}),Object(c.jsx)(h.a,{path:"/register",component:N}),Object(c.jsx)(h.a,{path:"/shipping",component:D}),Object(c.jsx)(h.a,{path:"/",exact:!0,component:R})]})})})},k=(a(78),a(2)),F={aside:{open:!1},products:{items:[],loading:!1,error:""},product:{item:{},loadingg:!1,error:""},cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],userSignin:{loading:!1,userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,error:""},userRegister:{loading:!1,userInfo:null,error:""}},G={},Q=function(e,t){switch(t.type){case j.OPEN_ASIDE:return Object(k.a)(Object(k.a)({},e),{},{aside:Object(k.a)(Object(k.a)({},e.aside),{},{open:!0})});case j.CLOSE_ASIDE:return Object(k.a)(Object(k.a)({},e),{},{aside:Object(k.a)(Object(k.a)({},e.aside),{},{open:!1})});case j.PRODUCT_LIST_REQUEST:return Object(k.a)(Object(k.a)({},e),{},{products:Object(k.a)(Object(k.a)({},e.products),{},{loading:!0})});case j.PRODUCT_LIST_SUCCESS:return Object(k.a)(Object(k.a)({},e),{},{products:Object(k.a)(Object(k.a)({},e.products),{},{items:t.payload,loading:!1})});case j.PRODUCT_LIST_FAIL:return Object(k.a)(Object(k.a)({},e),{},{products:Object(k.a)(Object(k.a)({},e.products),{},{error:t.payload,loading:!1})});case j.PRODUCT_DETAILS_REQUEST:return Object(k.a)(Object(k.a)({},e),{},{product:Object(k.a)(Object(k.a)({},e.product),{},{loading:!0})});case j.PRODUCT_DETAILS_SUCCESS:return Object(k.a)(Object(k.a)({},e),{},{product:Object(k.a)(Object(k.a)({},e.product),{},{item:t.payload,loading:!1})});case j.PRODUCT_DETAILS_FAIL:return Object(k.a)(Object(k.a)({},e),{},{product:Object(k.a)(Object(k.a)({},e.product),{},{error:t.payload,loading:!1})});case j.CART_INIT_ITEMS:return G=t.payload||[],Object(k.a)(Object(k.a)({},e),{},{cartItems:G});case j.CART_ADD_ITEM:var a=t.payload,c=e.cartItems.find((function(e){return e.product===a.product}));return c?(G=e.cartItems.map((function(e){return e.product===c.product?a:e})),Object(k.a)(Object(k.a)({},e),{},{cartItems:G})):(G=[].concat(Object(C.a)(e.cartItems),[a]),Object(k.a)(Object(k.a)({},e),{},{cartItems:G}));case j.CART_REMOVE_ITEM:return G=e.cartItems.filter((function(e){return e.product!==t.payload})),Object(k.a)(Object(k.a)({},e),{},{cartItems:G});case j.USER_INIT_INFO:return Object(k.a)(Object(k.a)({},e),{},{userSignin:Object(k.a)(Object(k.a)({},e.userSignin),{},{userInfo:t.payload})});case j.USER_SIGNIN_REQUEST:return Object(k.a)(Object(k.a)({},e),{},{userSignin:Object(k.a)(Object(k.a)({},e.userSignin),{},{loading:!0})});case j.USER_SIGNIN_SUCCESS:return Object(k.a)(Object(k.a)({},e),{},{userSignin:Object(k.a)(Object(k.a)({},e.userSignin),{},{loading:!1,userInfo:t.payload})});case j.USER_SIGNIN_FAIL:return Object(k.a)(Object(k.a)({},e),{},{userSignin:Object(k.a)(Object(k.a)({},e.userSignin),{},{loading:!1,error:t.payload})});case j.USER_UPDATE_PROFILE_REQUEST:return Object(k.a)(Object(k.a)({},e),{},{userSignin:Object(k.a)(Object(k.a)({},e.userSignin),{},{loading:!0})});case j.USER_UPDATE_PROFILE_SUCCESS:return Object(k.a)(Object(k.a)({},e),{},{userSignin:Object(k.a)(Object(k.a)({},e.userSignin),{},{loading:!1})});case j.USER_UPDATE_PROFILE_FAIL:return Object(k.a)(Object(k.a)({},e),{},{userSignin:Object(k.a)(Object(k.a)({},e.userSignin),{},{loading:!1,error:t.payload})});case j.USER_LOGOUT:return G=[],Object(k.a)(Object(k.a)({},e),{},{cartItems:G,userSignin:Object(k.a)(Object(k.a)({},e.userSignin),{},{userInfo:null})});case j.USER_REGISTER_REQUEST:return Object(k.a)(Object(k.a)({},e),{},{userRegister:Object(k.a)(Object(k.a)({},e.userRegister),{},{loading:!0})});case j.USER_REGISTER_SUCCESS:return Object(k.a)(Object(k.a)({},e),{},{userSignin:Object(k.a)(Object(k.a)({},e.userSignin),{},{userInfo:t.payload}),userRegister:Object(k.a)(Object(k.a)({},e.userRegister),{},{loading:!1,userInfo:t.payload})});case j.USER_REGISTER_FAIL:return Object(k.a)(Object(k.a)({},e),{},{userRegister:Object(k.a)(Object(k.a)({},e.userRegister),{},{loading:!1,error:t.payload})});default:return e}};var M=function(){var e=Object(n.useReducer)(Q,F),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(c.jsx)(d.Provider,{value:r,children:Object(c.jsx)(b.Provider,{value:a,children:Object(c.jsx)(l.a,{children:Object(c.jsxs)("div",{className:"grid-container",children:[Object(c.jsx)(O,{}),Object(c.jsx)(p,{}),Object(c.jsx)(L,{}),Object(c.jsx)(u,{})]})})})})},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var c=a.headers.get("content-type");404===a.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(t,e)}))}}()}},[[79,1,2]]]);
//# sourceMappingURL=main.c84530a0.chunk.js.map