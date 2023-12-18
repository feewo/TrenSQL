(()=>{"use strict";const e=function(e){document.querySelector(e).classList.add("spinner-wrapper_inactive")},t=function(e){let t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},s=class{constructor({fname:e,nname:t,score:s,isLoggedIn:a}){this.fname=e,this.nname=t,this.score=s,this.user=a?`\n                <span class="header__user-fname">${this.fname}</span>\n                <span class="header__user-nname">${this.nname},</span>\n                <span class="header__user-number">${this.score}</span>\n                <span class="header__user-score">баллов</span>`:'<span class="header__user-text">Войдите в личный кабинет</span>'}render(){document.querySelector(".header__user").insertAdjacentHTML("afterbegin",`\n            ${this.user}\n        `)}},a=class{constructor({fname:e,nname:t,oname:s,group:a,score:n,isLoggedIn:r}){this.fname=e,this.nname=t,this.oname=s,this.group=a,this.score=n,this.user=r?`\n                <ul class="lk__info">\n                    <li class="lk__info-item">\n                        <span class="lk__info-title">Фамилия</span>\n                        <span class="lk__info-value lk__info-value_nname">${this.fname}</span>\n                    </li>\n                    <li class="lk__info-item">\n                        <span class="lk__info-title">Имя</span>\n                        <span class="lk__info-value lk__info-value_fname">${this.nname}</span>\n                    </li>\n                    <li class="lk__info-item">\n                        <span class="lk__info-title">Отчество</span>\n                        <span class="lk__info-value lk__info-value_oname">${this.oname}</span>\n                    </li>\n                    <li class="lk__info-item">\n                        <span class="lk__info-title">Группа</span>\n                        <span class="lk__info-value lk__info-value_group">${this.group}</span>\n                    </li>\n                    <li class="lk__info-item">\n                        <span class="lk__info-title">Количество баллов</span>\n                        <span class="lk__info-value lk__info-value_score">${this.score}</span>\n                    </li>\n                </ul>`:'<span class="lk__error">Возникла ошибка!</span>'}render(){document.querySelector(".lk__personal").insertAdjacentHTML("afterbegin",`\n            ${this.user}\n        `)}},n=class{_apiBase="/api/";getResource=async(e,t)=>{const s=await fetch(e,{headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef"},...t});if(!s.ok)throw new Error(`Could not fetch ${e}, status: ${res.status}`);return await s.json()};getTopList=async()=>await this.getResource(`${this._apiBase}user-top5`);getGeneralList=async()=>await this.getResource(`${this._apiBase}user-top`);getLastYearList=async()=>await this.getResource(`${this._apiBase}user-lasttop`);getCurrentYearList=async()=>await this.getResource(`${this._apiBase}user-nowtop`);getTask=async e=>await this.getResource(`${this._apiBase}task/${e}`,{method:"GET",headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef",Authorization:`Bearer ${t("token")}`,"Content-Type":"application/json"}});getLevelsAndTasks=async()=>await this.getResource(`${this._apiBase}levels`,{method:"GET"});getHeaderUser=async()=>await this.getResource(`${this._apiBase}auth/login`,{method:"GET",headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef",Authorization:`Bearer ${t("token")}`,"Content-Type":"application/json"}});logout=async()=>await this.getResource(`${this._apiBase}logout`,{method:"GET"});getLkAchievements=async()=>await this.getResource(`${this._apiBase}task-user-count`,{method:"GET"});getUserAmount=async()=>await this.getResource(`${this._apiBase}admin/user-count`,{method:"GET"});getSolvedTasksAmount=async()=>await this.getResource(`${this._apiBase}admin/task-count`,{method:"GET"});getTableList=async e=>await this.getResource(`${this._apiBase}admin/${e}`,{method:"GET"});getTablePage=async(e,t)=>await this.getResource(`${this._apiBase}admin/${t}/${e}`,{method:"GET"});deleteTable=async(e,t)=>await this.getResource(`${this._apiBase}admin/${t}/${e}`,{method:"DELETE"});getSelect=async e=>await this.getResource(`${this._apiBase}admin/${e}`,{method:"GET"})},r=class{constructor(e,t="afterend",s="К сожалению, данные отсутствуют."){this.parent=document.querySelector(e),this.position=t,this.message=s}render(){this.parent.insertAdjacentHTML(this.position,`\n            <span class="error">${this.message}</span>\n        `)}},o=class{constructor({parentSelector:e,lvl:t,name:s}){this.parent=document.querySelector(e),this.lvl=t,this.name=s}render(){this.parent.insertAdjacentHTML("beforeend",`\n            <li class="tasks__item">\n                <button class="tasks__btn">Cложность <span class="tasks__lvl">${this.lvl}</span> баллов</button>\n                <ul class="tasks__sublist"></ul>\n            </li>\n        `)}renderInHeader(){this.parent.insertAdjacentHTML("beforeend",`\n            <li class="header__tasks-item">\n                <span class="header__tasks-text">${this.name}</span>\n                <ul class="header__sublist"></ul>\n            </li>\n        `)}},i=class{constructor({parentSelector:e,link:t,name:s}){this.parent=document.querySelector(e),this.link=t,this.name=s}render(){this.parent.insertAdjacentHTML("beforeend",`\n            <li class="tasks__subitem">\n                <a href="${this.link}" class="tasks__subitem-link">${this.name}</a>   \n            </li>\n        `)}renderInHeader(){this.parent.insertAdjacentHTML("beforeend",`\n            <li class="header__sublist-item">\n                <a href="${this.link}" class="header__sublist-link">${this.name}</a>\n            </li>\n        `)}renderError(){this.parent.insertAdjacentHTML("beforeend",'\n            <li class="tasks__subitem tasks__subitem_error">\n                <span class="error error_task">К сожалению, данные отсутствуют.</span>  \n            </li>\n        ')}renderErrorInHeader(){this.parent.insertAdjacentHTML("beforeend",'\n            <li class="header__sublist-item">\n                <span class="error error_header">К сожалению, данные отсутствуют.</span>  \n            </li>\n        ')}},c=function(t){(new n).getLevelsAndTasks().then((e=>{e.data&&e.data.length>0?(e.data.forEach(((e,s)=>{new o({parentSelector:".header__tasks-list",name:e.lvl}).renderInHeader(),e.task.forEach((e=>{new i({parentSelector:`.header__tasks-item:nth-child(${s+1}) .header__sublist`,link:`/task/${e.id}`,name:e.name}).renderInHeader()})),t&&(new o({parentSelector:".tasks__list",lvl:e.score}).render(),e.task.forEach((e=>{new i({parentSelector:`.tasks__item:nth-child(${s+1}) .tasks__sublist`,link:`/task/${e.id}`,name:e.name}).render()})))})),function(){const e=document.querySelector(".header__btn"),t="header__btn_active",s=document.querySelector(".header__tasks-list"),a="header__tasks-list_active";e.addEventListener("click",(()=>{e.classList.toggle(t),s.classList.toggle(a),document.addEventListener("click",(n=>{n.target&&!n.target.closest(".header__tasks-wrapper")&&(e.classList.remove(t),s.classList.remove(a))}))}))}(),function(){const e=document.querySelectorAll(".tasks__btn"),t=document.querySelectorAll(".tasks__sublist");t.forEach((e=>{e.style.maxHeight="0px"})),e.forEach(((s,a)=>{s.addEventListener("click",(()=>{t[a].classList.toggle("tasks__sublist_active"),e[a].classList.toggle("tasks__btn_active"),""===t[a].style.maxHeight||"0px"===t[a].style.maxHeight?(t[a].style.maxHeight=t[a].scrollHeight+"px",t[a].style.transitionDuration=function(e){return+t[e].style.maxHeight.slice(0,-2)/300*.1+.3+"s"}(a)):t[a].style.maxHeight=0}))}))}()):(new i({parentSelector:".header__sublist"}).renderErrorInHeader(),t&&new i({parentSelector:".tasks__list"}).renderError())})).catch((()=>{new i({parentSelector:".header__sublist"}).renderErrorInHeader(),t&&new i({parentSelector:".tasks__list"}).renderError()})).finally((()=>{t&&e(".tasks .spinner-wrapper")}))},l=function(e,t,s={}){(s={path:"/",...s}).expires instanceof Date&&(s.expires=s.expires.toUTCString());let a=encodeURIComponent(e)+"="+encodeURIComponent(t);for(let e in s){a+="; "+e;let t=s[e];!0!==t&&(a+="="+t)}document.cookie=a};function d({modalSelector:e,modalActiveClass:t,overflow:s="hidden",hasScroll:a=!0}){const n=document.querySelector(e);let r;a&&(r=function(){let e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t}()),n.classList.add(t),document.body.style.overflow=s,document.body.style.marginRight=`${r}px`}function u({modalSelector:e,modalActiveClass:t,closeOnClickOnBg:s=!0,automatically:a=!1}){const n=document.querySelector(e);function r(){n.classList.remove(t),document.body.style.overflow="",document.body.style.marginRight=0}document.addEventListener("keydown",(e=>{"Escape"===e.code&&n.classList.contains(t)&&r()})),n.addEventListener("click",(e=>{e.target.closest(".modal__close")&&r()})),s&&document.addEventListener("click",(e=>{e.target===n&&r()})),a&&r()}const m=function({formSelector:e,url:s,modifyURL:a=!1,requestMethod:n="POST",messageSuccessSelector:r,messageErrorSelector:o,messageLoginUsedSelector:i,messageWrongDataSelector:c,modalSuccessSelector:m,modalWrongSelector:_,modalErrorSelector:h,spinnerSelector:p,hideForm:g=!0,redirect:f,cookie:k,update:y,withToken:v=!1}){const S=document.querySelector(e),L=document.querySelector(r),$=document.querySelector(o),b=document.querySelector(i),w=document.querySelector(c),q=document.querySelector(m),E=document.querySelector(_),T=document.querySelector(h),A=document.querySelector(".modal__total-result"),B="form__message_active",I=document.querySelector(p),x="spinner-wrapper_active",R="spinner-wrapper_inactive",C=v?`Bearer ${t("token")}`:"Bearer Error";async function H(e,t){const s=await fetch(`${e}${function(){if(a){const e=document.querySelectorAll("[data-input]");let t="?";return e.forEach(((e,s)=>{s>0&&(t+="&"),t+=`${e.name}=${e.value.trim()}`})),t}return""}()}`,{headers:{Authorization:C,"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef"},method:n,body:t});if(console.log(s),!s.ok){const e=await s.json();if(console.log("СКАЗАНО, ЧТО:",e),400===s.status&&"The login has already been taken."===e.message)throw new Error("Логин занят");if(401===s.status&&("The selected login is invalid."===e.message||"Credentials mismatch"===e.message))throw new Error("Неверные данные");if(500===s.status)throw new Error("Ошибка сервера");throw new Error(`Произошла ошибка в запросе. Статус сервера: ${s.status}`)}const r=await s.json();if(console.log("СКАЗАНО, ЧТО:",r),!1===r.message)throw new Error("Ответ неверный");return k&&function(e){l("token",`${e.token.access_token}`,{"max-age":86400,samesite:"strict"}),l("login",`${e.data[0].login}`,{"max-age":86400,samesite:"strict"}),l("fname",`${e.data[0].fname}`,{"max-age":86400,samesite:"strict"}),l("nname",`${e.data[0].nname}`,{"max-age":86400,samesite:"strict"}),l("oname",`${e.data[0].oname}`,{"max-age":86400,samesite:"strict"}),l("group",`${e.data[0].group}`,{"max-age":86400,samesite:"strict"}),l("score",`${e.data[0].score}`,{"max-age":86400,samesite:"strict"})}(r),y&&function(e){l("fname",`${e.data.fname}`,{"max-age":86400,samesite:"strict"}),l("nname",`${e.data.nname}`,{"max-age":86400,samesite:"strict"}),l("oname",`${e.data.oname}`,{"max-age":86400,samesite:"strict"}),l("group",`${e.data.group}`,{"max-age":86400,samesite:"strict"})}(r),r}S.addEventListener("submit",(function(e){e.preventDefault(),I.classList.remove(R),I.classList.add(x);const t=new FormData(S);H(s,t).then((e=>{console.log("УСПЕХ"),f&&(document.location.href="/"),g&&S.classList.add("form_inactive"),b&&b.classList.remove(B),$&&$.classList.remove(B),w&&w.classList.remove(B),L&&L.classList.add(B),q&&(console.log("ОТКРЫВАЕМ МОДАЛОЧКИ"),d({modalSelector:m,modalActiveClass:"modal_active"}),u({modalSelector:m,modalActiveClass:"modal_active"}),A.textContent=e.score,l("score",`${e.score}`))})).catch((e=>{console.log("ОШИБКА"),console.log(e.message),"Логин занят"===e.message&&b?b.classList.add(B):"Неверные данные"===e.message&&w?w.classList.add(B):"Ответ неверный"===e.message&&E?(d({modalSelector:_,modalActiveClass:"modal_active"}),u({modalSelector:_,modalActiveClass:"modal_active"})):"Ошибка сервера"===e.message&&T?(console.log("ЭТО ОШИБКА СЕРВЕРА"),d({modalSelector:h,modalActiveClass:"modal_active"}),u({modalSelector:h,modalActiveClass:"modal_active"})):$&&$.classList.add(B)})).finally((()=>{I.classList.remove(x),I.classList.add(R)}))}))},_=function(e){l(e,"",{"max-age":-1})},h=function(){const e=document.querySelector(".lk__logout"),t=new n;e.addEventListener("click",(()=>{t.logout().then((e=>{"User Logged Out"===e.data&&(_("token"),_("login"),_("fname"),_("nname"),_("oname"),_("group"),_("score"),window.location.href="/")})).catch((()=>{new r(".lk__personal","afterend","Произошла ошибка! Пожалуйста, попробуйте позже.").render()}))}))};document.addEventListener("DOMContentLoaded",(()=>{e(".header .spinner-wrapper"),t("token")?new s({fname:`${t("fname")}`,nname:`${t("nname")}`,score:`${t("score")}`,isLoggedIn:!0}).render():new s({isLoggedIn:!1}).render(),function(){if(e(".lk__personal .spinner-wrapper"),t("token")){new a({fname:`${t("fname")}`,nname:`${t("nname")}`,oname:`${t("oname")}`,group:`${t("group")}`,score:`${t("score")}`,isLoggedIn:!0}).render();const e=document.querySelector(".form__input_fname"),s=document.querySelector(".form__input_nname"),n=document.querySelector(".form__input_oname"),r=document.querySelector(".form__input_group");e.value=t("fname"),s.value=t("nname"),n.value=t("oname"),r.value=t("group")}else new a({isLoggedIn:!1}).render()}(),function(){const e=new n,s=document.querySelector(".lk__badges-img_task-1"),a=document.querySelector(".lk__badges-img_task-10"),o=document.querySelector(".lk__badges-img_task-50"),i=document.querySelector(".lk__badges-img_task-100"),c=document.querySelector(".lk__badges-img_score-10"),l=document.querySelector(".lk__badges-img_score-50"),d=document.querySelector(".lk__badges-img_score-100"),u=document.querySelector(".lk__badges-img_score-500"),m="/img/badge-active.svg",_=t("score");let h;e.getLkAchievements().then((e=>{h=e.task_count,h>=1&&(s.src=m),h>=10&&(a.src=m),h>=50&&(o.src=m),h>=100&&(i.src=m)})).catch((()=>{new r(".lk__main","afterend","Произошла ошибка! Пожалуйста, попробуйте позже.").render()})),_>=10&&(c.src=m),_>=50&&(l.src=m),_>=100&&(d.src=m),_>=500&&(u.src=m)}(),c(),function(){const e=document.querySelector(".lk__change"),t=document.querySelector(".lk__back"),s=document.querySelector(".lk__personal"),a="lk__personal_active",n=document.querySelector(".form"),r="form_active";e.addEventListener("click",(()=>{s.classList.remove(a),n.classList.add(r)})),t.addEventListener("click",(e=>{e.preventDefault(),s.classList.add(a),n.classList.remove(r)}))}(),m({formSelector:".lk .form",url:"api/user-update",messageSuccessSelector:".lk .form__message_success",messageErrorSelector:".lk .form__message_error",spinnerSelector:".lk .spinner-wrapper",update:!0}),h()}))})();