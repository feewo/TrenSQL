(()=>{"use strict";const e=function(e){return window.location.pathname.split("/").slice(2)[e]},t=function(e){let t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},a=class{_apiBase="/api/";getResource=async(e,t)=>{const a=await fetch(e,{headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef"},...t});if(!a.ok)throw new Error(`Could not fetch ${e}, status: ${res.status}`);return await a.json()};getTopList=async()=>await this.getResource(`${this._apiBase}user-top5`);getGeneralList=async()=>await this.getResource(`${this._apiBase}user-top`);getLastYearList=async()=>await this.getResource(`${this._apiBase}user-lasttop`);getCurrentYearList=async()=>await this.getResource(`${this._apiBase}user-nowtop`);getTask=async e=>await this.getResource(`${this._apiBase}task/${e}`,{method:"GET",headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef",Authorization:`Bearer ${t("token")}`,"Content-Type":"application/json"}});getLevelsAndTasks=async()=>await this.getResource(`${this._apiBase}levels`,{method:"GET"});getHeaderUser=async()=>await this.getResource(`${this._apiBase}auth/login`,{method:"GET",headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef",Authorization:`Bearer ${t("token")}`,"Content-Type":"application/json"}});logout=async()=>await this.getResource(`${this._apiBase}logout`,{method:"GET"});getLkAchievements=async()=>await this.getResource(`${this._apiBase}task-user-count`,{method:"GET"});getUserAmount=async()=>await this.getResource(`${this._apiBase}admin/user-count`,{method:"GET"});getSolvedTasksAmount=async()=>await this.getResource(`${this._apiBase}admin/task-count`,{method:"GET"});getTableList=async e=>await this.getResource(`${this._apiBase}admin/${e}`,{method:"GET"});getTablePage=async(e,t)=>await this.getResource(`${this._apiBase}admin/${t}/${e}`,{method:"GET"});deleteTable=async(e,t)=>await this.getResource(`${this._apiBase}admin/${t}/${e}`,{method:"DELETE"});getSelect=async e=>await this.getResource(`${this._apiBase}admin/${e}`,{method:"GET"})},s=class{constructor(e,t="afterend",a="К сожалению, данные отсутствуют."){this.parent=document.querySelector(e),this.position=t,this.message=a}render(){this.parent.insertAdjacentHTML(this.position,`\n            <span class="error">${this.message}</span>\n        `)}},o=function(e,t,a={}){(a={path:"/",...a}).expires instanceof Date&&(a.expires=a.expires.toUTCString());let s=encodeURIComponent(e)+"="+encodeURIComponent(t);for(let e in a){s+="; "+e;let t=a[e];!0!==t&&(s+="="+t)}document.cookie=s};function n({modalSelector:e,modalActiveClass:t,overflow:a="hidden",hasScroll:s=!0}){const o=document.querySelector(e);let n;s&&(n=function(){let e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t}()),o.classList.add(t),document.body.style.overflow=a,document.body.style.marginRight=`${n}px`}function i({modalSelector:e,modalActiveClass:t,closeOnClickOnBg:a=!0,automatically:s=!1}){const o=document.querySelector(e);function n(){o.classList.remove(t),document.body.style.overflow="",document.body.style.marginRight=0}document.addEventListener("keydown",(e=>{"Escape"===e.code&&o.classList.contains(t)&&n()})),o.addEventListener("click",(e=>{e.target.closest(".modal__close")&&n()})),a&&document.addEventListener("click",(e=>{e.target===o&&n()})),s&&n()}const r=function({formSelector:e,url:a,modifyURL:s=!1,requestMethod:r="POST",messageSuccessSelector:c,messageErrorSelector:l,messageLoginUsedSelector:d,messageWrongDataSelector:m,modalSuccessSelector:u,modalWrongSelector:g,modalErrorSelector:h,spinnerSelector:p,hideForm:f=!0,redirect:y,cookie:S,update:w,withToken:L=!1}){const v=document.querySelector(e),_=document.querySelector(c),$=document.querySelector(l),E=document.querySelector(d),T=document.querySelector(m),b=document.querySelector(u),q=document.querySelector(g),B=document.querySelector(h),R=document.querySelector(".modal__total-result"),C="form__message_active",k=document.querySelector(p),Y="spinner-wrapper_active",A="spinner-wrapper_inactive",O=L?`Bearer ${t("token")}`:"Bearer Error";async function X(e,t){const a=await fetch(`${e}${function(){if(s){const e=document.querySelectorAll("[data-input]");let t="?";return e.forEach(((e,a)=>{a>0&&(t+="&"),t+=`${e.name}=${e.value.trim()}`})),t}return""}()}`,{headers:{Authorization:O,"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef"},method:r,body:t});if(console.log(a),!a.ok){const e=await a.json();if(console.log("СКАЗАНО, ЧТО:",e),400===a.status&&"The login has already been taken."===e.message)throw new Error("Логин занят");if(401===a.status&&("The selected login is invalid."===e.message||"Credentials mismatch"===e.message))throw new Error("Неверные данные");if(500===a.status)throw new Error("Ошибка сервера");throw new Error(`Произошла ошибка в запросе. Статус сервера: ${a.status}`)}const n=await a.json();if(console.log("СКАЗАНО, ЧТО:",n),!1===n.message)throw new Error("Ответ неверный");return S&&function(e){o("token",`${e.token.access_token}`,{"max-age":86400,samesite:"strict"}),o("login",`${e.data[0].login}`,{"max-age":86400,samesite:"strict"}),o("fname",`${e.data[0].fname}`,{"max-age":86400,samesite:"strict"}),o("nname",`${e.data[0].nname}`,{"max-age":86400,samesite:"strict"}),o("oname",`${e.data[0].oname}`,{"max-age":86400,samesite:"strict"}),o("group",`${e.data[0].group}`,{"max-age":86400,samesite:"strict"}),o("score",`${e.data[0].score}`,{"max-age":86400,samesite:"strict"})}(n),w&&function(e){o("fname",`${e.data.fname}`,{"max-age":86400,samesite:"strict"}),o("nname",`${e.data.nname}`,{"max-age":86400,samesite:"strict"}),o("oname",`${e.data.oname}`,{"max-age":86400,samesite:"strict"}),o("group",`${e.data.group}`,{"max-age":86400,samesite:"strict"})}(n),n}v.addEventListener("submit",(function(e){e.preventDefault(),k.classList.remove(A),k.classList.add(Y);const t=new FormData(v);X(a,t).then((e=>{console.log("УСПЕХ"),y&&(document.location.href="/"),f&&v.classList.add("form_inactive"),E&&E.classList.remove(C),$&&$.classList.remove(C),T&&T.classList.remove(C),_&&_.classList.add(C),b&&(console.log("ОТКРЫВАЕМ МОДАЛОЧКИ"),n({modalSelector:u,modalActiveClass:"modal_active"}),i({modalSelector:u,modalActiveClass:"modal_active"}),R.textContent=e.score,o("score",`${e.score}`))})).catch((e=>{console.log("ОШИБКА"),console.log(e.message),"Логин занят"===e.message&&E?E.classList.add(C):"Неверные данные"===e.message&&T?T.classList.add(C):"Ответ неверный"===e.message&&q?(n({modalSelector:g,modalActiveClass:"modal_active"}),i({modalSelector:g,modalActiveClass:"modal_active"})):"Ошибка сервера"===e.message&&B?(console.log("ЭТО ОШИБКА СЕРВЕРА"),n({modalSelector:h,modalActiveClass:"modal_active"}),i({modalSelector:h,modalActiveClass:"modal_active"})):$&&$.classList.add(C)})).finally((()=>{k.classList.remove(Y),k.classList.add(A)}))}))};document.addEventListener("DOMContentLoaded",(()=>{(function(){const t=new a,o=e(4),n=document.querySelector(".database__name"),i=document.querySelector(".form__input_name");t.getTablePage(o,"base").then((e=>{e?i.value=n.textContent=e.data.dbname:new s(".database__name").render()})).catch((()=>{new s(".database__name","afterend","Произошла ошибка! Пожалуйста, попробуйте позже.").render()}))})(),r({formSelector:".edit__form",url:`../../../api/admin/base/${e(4)}`,modifyURL:!0,requestMethod:"PUT",messageSuccessSelector:".card-primary .form__message_success",messageErrorSelector:".card-primary .form__message_error",spinnerSelector:".card-primary .spinner-wrapper"})}))})();