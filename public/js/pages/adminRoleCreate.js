(()=>{"use strict";const e=function(e,t,o={}){(o={path:"/",...o}).expires instanceof Date&&(o.expires=o.expires.toUTCString());let a=encodeURIComponent(e)+"="+encodeURIComponent(t);for(let e in o){a+="; "+e;let t=o[e];!0!==t&&(a+="="+t)}document.cookie=a};function t({modalSelector:e,modalActiveClass:t,overflow:o="hidden",hasScroll:a=!0}){const s=document.querySelector(e);let r;a&&(r=function(){let e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t}()),s.classList.add(t),document.body.style.overflow=o,document.body.style.marginRight=`${r}px`}function o({modalSelector:e,modalActiveClass:t,closeOnClickOnBg:o=!0,automatically:a=!1}){const s=document.querySelector(e);function r(){s.classList.remove(t),document.body.style.overflow="",document.body.style.marginRight=0}document.addEventListener("keydown",(e=>{"Escape"===e.code&&s.classList.contains(t)&&r()})),s.addEventListener("click",(e=>{e.target.closest(".modal__close")&&r()})),o&&document.addEventListener("click",(e=>{e.target===s&&r()})),a&&r()}const a=function({formSelector:a,url:s,modifyURL:r=!1,requestMethod:c="POST",messageSuccessSelector:n,messageErrorSelector:l,messageLoginUsedSelector:i,messageWrongDataSelector:m,modalSuccessSelector:d,modalWrongSelector:u,modalErrorSelector:g,spinnerSelector:f,hideForm:S=!0,redirect:p,cookie:v,update:y,withToken:h=!1}){const L=document.querySelector(a),w=document.querySelector(n),_=document.querySelector(l),E=document.querySelector(i),$=document.querySelector(m),x=document.querySelector(d),C=document.querySelector(u),q=document.querySelector(g),k=document.querySelector(".modal__total-result"),b="form__message_active",A=document.querySelector(f),O="spinner-wrapper_active",R="spinner-wrapper_inactive",D=h?`Bearer ${function(e){let t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}("token")}`:"Bearer Error";async function T(t,o){const a=await fetch(`${t}${function(){if(r){const e=document.querySelectorAll("[data-input]");let t="?";return e.forEach(((e,o)=>{o>0&&(t+="&"),t+=`${e.name}=${e.value.trim()}`})),t}return""}()}`,{headers:{Authorization:D,"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef"},method:c,body:o});if(console.log(a),!a.ok){const e=await a.json();if(console.log("СКАЗАНО, ЧТО:",e),400===a.status&&"The login has already been taken."===e.message)throw new Error("Логин занят");if(401===a.status&&("The selected login is invalid."===e.message||"Credentials mismatch"===e.message))throw new Error("Неверные данные");if(500===a.status)throw new Error("Ошибка сервера");throw new Error(`Произошла ошибка в запросе. Статус сервера: ${a.status}`)}const s=await a.json();if(console.log("СКАЗАНО, ЧТО:",s),!1===s.message)throw new Error("Ответ неверный");return v&&function(t){e("token",`${t.token.access_token}`,{"max-age":86400,samesite:"strict"}),e("login",`${t.data[0].login}`,{"max-age":86400,samesite:"strict"}),e("fname",`${t.data[0].fname}`,{"max-age":86400,samesite:"strict"}),e("nname",`${t.data[0].nname}`,{"max-age":86400,samesite:"strict"}),e("oname",`${t.data[0].oname}`,{"max-age":86400,samesite:"strict"}),e("group",`${t.data[0].group}`,{"max-age":86400,samesite:"strict"}),e("score",`${t.data[0].score}`,{"max-age":86400,samesite:"strict"})}(s),y&&function(t){e("fname",`${t.data.fname}`,{"max-age":86400,samesite:"strict"}),e("nname",`${t.data.nname}`,{"max-age":86400,samesite:"strict"}),e("oname",`${t.data.oname}`,{"max-age":86400,samesite:"strict"}),e("group",`${t.data.group}`,{"max-age":86400,samesite:"strict"})}(s),s}L.addEventListener("submit",(function(a){a.preventDefault(),A.classList.remove(R),A.classList.add(O);const r=new FormData(L);T(s,r).then((a=>{console.log("УСПЕХ"),p&&(document.location.href="/"),S&&L.classList.add("form_inactive"),E&&E.classList.remove(b),_&&_.classList.remove(b),$&&$.classList.remove(b),w&&w.classList.add(b),x&&(console.log("ОТКРЫВАЕМ МОДАЛОЧКИ"),t({modalSelector:d,modalActiveClass:"modal_active"}),o({modalSelector:d,modalActiveClass:"modal_active"}),k.textContent=a.score,e("score",`${a.score}`))})).catch((e=>{console.log("ОШИБКА"),console.log(e.message),"Логин занят"===e.message&&E?E.classList.add(b):"Неверные данные"===e.message&&$?$.classList.add(b):"Ответ неверный"===e.message&&C?(t({modalSelector:u,modalActiveClass:"modal_active"}),o({modalSelector:u,modalActiveClass:"modal_active"})):"Ошибка сервера"===e.message&&q?(console.log("ЭТО ОШИБКА СЕРВЕРА"),t({modalSelector:g,modalActiveClass:"modal_active"}),o({modalSelector:g,modalActiveClass:"modal_active"})):_&&_.classList.add(b)})).finally((()=>{A.classList.remove(O),A.classList.add(R)}))}))};document.addEventListener("DOMContentLoaded",(()=>{a({formSelector:".create__form",url:"../../api/admin/role",messageSuccessSelector:".card-primary .form__message_success",messageErrorSelector:".card-primary .form__message_error",spinnerSelector:".card-primary .spinner-wrapper"})}))})();