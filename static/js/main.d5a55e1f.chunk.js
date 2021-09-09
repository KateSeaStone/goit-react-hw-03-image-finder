(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(17),n(3)),s=n(4),l=n(6),u=n(5),h=n(8),d=(n(18),n(19),n(20),n(1)),m=function(e){var t=e.children;return Object(d.jsx)("div",{className:"Container",children:t})},g=(n(22),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?e.props.onSubmit(e.state.query):h.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441!")},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component)),j=n(10),p=n.n(j),b=n(11),f=function(){var e=Object(b.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=").concat("22003167-822d2c3fa2b59190c92d4d864","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=(n(24),n(25),function(e){var t=e.id,n=e.original,a=e.preview,r=e.showModal;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:a,alt:a,className:"ImageGalleryItem-image",onClick:function(){return r(n)}})},t)}),y=(n(26),document.querySelector("#modal-root")),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e.clickOnImage=function(){return e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:this.props.largeImageURL,alt:this.props.largeImageURL,onClick:this.clickOnImage})})}),y)}}]),n}(a.Component),w=(n(27),function(e){var t=e.handleClick;return Object(d.jsx)("button",{className:"loadMoreBtn",type:"button",onClick:t,children:"Load more"})}),x=n(12),C=n.n(x),k=(n(48),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)(C.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),n}(r.a.Component)),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,largeImageURL:""},e.openModal=function(t){e.setState({showModal:!0,largeImageURL:t})},e.closeModal=function(){e.setState({showModal:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.images,a=t.isLoading;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"ImageGallery",children:n.map((function(t){return Object(d.jsx)(O,{id:t.id,preview:t.webformatURL,original:t.largeImageURL,showModal:e.openModal},t.id)}))}),a&&Object(d.jsx)(k,{}),!a&&Object(d.jsx)(w,{handleClick:this.props.handleButtonClick}),this.state.showModal&&Object(d.jsx)(v,{largeImageURL:this.state.largeImageURL,onClose:this.closeModal})]})}}]),n}(a.Component),L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,currentPage:1,query:"",isLoading:!1},e.handleFormSubmit=function(t){t===e.state.query&&1===e.state.currentPage||e.setState({images:[],error:null,currentPage:1,query:t,isLoading:!0})},e.handleButtonClick=function(){e.setState({currentPage:e.state.currentPage+1,isLoading:!0})},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;""!==this.state.query&&(t.query===this.state.query&&t.currentPage===this.state.currentPage||f(this.state.query,this.state.currentPage).then((function(e){n.setState({images:n.state.images.concat(e.hits),isLoading:!1})})).catch((function(e){return n.setState({error:e})})),t.images.length<this.state.images.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}},{key:"render",value:function(){var e=this.state,t=e.images,n=e.isLoading,a=e.error;return Object(d.jsxs)(m,{children:[a&&Object(d.jsx)("h2",{children:"Opps! Something went wrong!"}),Object(d.jsx)(g,{onSubmit:this.handleFormSubmit}),t.length>0&&Object(d.jsx)(S,{images:t,handleButtonClick:this.handleButtonClick,isLoading:n}),Object(d.jsx)(h.a,{position:"top-center",autoClose:4e3})]})}}]),n}(a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),I()}},[[49,1,2]]]);
//# sourceMappingURL=main.d5a55e1f.chunk.js.map