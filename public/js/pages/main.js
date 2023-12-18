(()=>{"use strict";const e=function(e){document.querySelector(e).classList.add("spinner-wrapper_inactive")},s=function(e){let s=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return s?decodeURIComponent(s[1]):void 0},t=class{constructor({fname:e,nname:s,score:t,isLoggedIn:a}){this.fname=e,this.nname=s,this.score=t,this.user=a?`\n                <span class="header__user-fname">${this.fname}</span>\n                <span class="header__user-nname">${this.nname},</span>\n                <span class="header__user-number">${this.score}</span>\n                <span class="header__user-score">баллов</span>`:'<span class="header__user-text">Войдите в личный кабинет</span>'}render(){document.querySelector(".header__user").insertAdjacentHTML("afterbegin",`\n            ${this.user}\n        `)}},a=class{_apiBase="/api/";getResource=async(e,s)=>{const t=await fetch(e,{headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef"},...s});if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${res.status}`);return await t.json()};getTopList=async()=>await this.getResource(`${this._apiBase}user-top5`);getGeneralList=async()=>await this.getResource(`${this._apiBase}user-top`);getLastYearList=async()=>await this.getResource(`${this._apiBase}user-lasttop`);getCurrentYearList=async()=>await this.getResource(`${this._apiBase}user-nowtop`);getTask=async e=>await this.getResource(`${this._apiBase}task/${e}`,{method:"GET",headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef",Authorization:`Bearer ${s("token")}`,"Content-Type":"application/json"}});getLevelsAndTasks=async()=>await this.getResource(`${this._apiBase}levels`,{method:"GET"});getHeaderUser=async()=>await this.getResource(`${this._apiBase}auth/login`,{method:"GET",headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef",Authorization:`Bearer ${s("token")}`,"Content-Type":"application/json"}});logout=async()=>await this.getResource(`${this._apiBase}logout`,{method:"GET"});getLkAchievements=async()=>await this.getResource(`${this._apiBase}task-user-count`,{method:"GET"});getUserAmount=async()=>await this.getResource(`${this._apiBase}admin/user-count`,{method:"GET"});getSolvedTasksAmount=async()=>await this.getResource(`${this._apiBase}admin/task-count`,{method:"GET"});getTableList=async e=>await this.getResource(`${this._apiBase}admin/${e}`,{method:"GET"});getTablePage=async(e,s)=>await this.getResource(`${this._apiBase}admin/${s}/${e}`,{method:"GET"});deleteTable=async(e,s)=>await this.getResource(`${this._apiBase}admin/${s}/${e}`,{method:"DELETE"});getSelect=async e=>await this.getResource(`${this._apiBase}admin/${e}`,{method:"GET"})},n=class{constructor({parentSelector:e,liClass:s,nameClass:t,name:a,scoreClass:n,score:r,hasImg:i,index:c,hasComma:l}){this.parent=document.querySelector(e),this.liClass=s,this.nameClass=t,this.name=a,this.scoreClass=n,this.score=r,this.img=i?`<img src="img/rating-${c+1}.svg" alt="${c+1} место" class="rating__img">`:"",this.comma=l?",&nbsp;":""}render(){this.parent.insertAdjacentHTML("beforeend",`\n            <li class="${this.liClass}">\n                ${this.img}\n                <span class="${this.nameClass}">${this.name}${this.comma}</span>\n                <span class="${this.scoreClass}">${this.score} баллов</span> \n            </li>\n        `)}},r=class{constructor(e,s="afterend",t="К сожалению, данные отсутствуют."){this.parent=document.querySelector(e),this.position=s,this.message=t}render(){this.parent.insertAdjacentHTML(this.position,`\n            <span class="error">${this.message}</span>\n        `)}},i=class{constructor({parentSelector:e,lvl:s,name:t}){this.parent=document.querySelector(e),this.lvl=s,this.name=t}render(){this.parent.insertAdjacentHTML("beforeend",`\n            <li class="tasks__item">\n                <button class="tasks__btn">Cложность <span class="tasks__lvl">${this.lvl}</span> баллов</button>\n                <ul class="tasks__sublist"></ul>\n            </li>\n        `)}renderInHeader(){this.parent.insertAdjacentHTML("beforeend",`\n            <li class="header__tasks-item">\n                <span class="header__tasks-text">${this.name}</span>\n                <ul class="header__sublist"></ul>\n            </li>\n        `)}},c=class{constructor({parentSelector:e,link:s,name:t}){this.parent=document.querySelector(e),this.link=s,this.name=t}render(){this.parent.insertAdjacentHTML("beforeend",`\n            <li class="tasks__subitem">\n                <a href="${this.link}" class="tasks__subitem-link">${this.name}</a>   \n            </li>\n        `)}renderInHeader(){this.parent.insertAdjacentHTML("beforeend",`\n            <li class="header__sublist-item">\n                <a href="${this.link}" class="header__sublist-link">${this.name}</a>\n            </li>\n        `)}renderError(){this.parent.insertAdjacentHTML("beforeend",'\n            <li class="tasks__subitem tasks__subitem_error">\n                <span class="error error_task">К сожалению, данные отсутствуют.</span>  \n            </li>\n        ')}renderErrorInHeader(){this.parent.insertAdjacentHTML("beforeend",'\n            <li class="header__sublist-item">\n                <span class="error error_header">К сожалению, данные отсутствуют.</span>  \n            </li>\n        ')}},l=function(s){(new a).getLevelsAndTasks().then((e=>{e.data&&e.data.length>0?(e.data.forEach(((e,t)=>{new i({parentSelector:".header__tasks-list",name:e.lvl}).renderInHeader(),e.task.forEach((e=>{new c({parentSelector:`.header__tasks-item:nth-child(${t+1}) .header__sublist`,link:`/task/${e.id}`,name:e.name}).renderInHeader()})),s&&(new i({parentSelector:".tasks__list",lvl:e.score}).render(),e.task.forEach((e=>{new c({parentSelector:`.tasks__item:nth-child(${t+1}) .tasks__sublist`,link:`/task/${e.id}`,name:e.name}).render()})))})),function(){const e=document.querySelector(".header__btn"),s="header__btn_active",t=document.querySelector(".header__tasks-list"),a="header__tasks-list_active";e.addEventListener("click",(()=>{e.classList.toggle(s),t.classList.toggle(a),document.addEventListener("click",(n=>{n.target&&!n.target.closest(".header__tasks-wrapper")&&(e.classList.remove(s),t.classList.remove(a))}))}))}(),function(){const e=document.querySelectorAll(".tasks__btn"),s=document.querySelectorAll(".tasks__sublist");s.forEach((e=>{e.style.maxHeight="0px"})),e.forEach(((t,a)=>{t.addEventListener("click",(()=>{s[a].classList.toggle("tasks__sublist_active"),e[a].classList.toggle("tasks__btn_active"),""===s[a].style.maxHeight||"0px"===s[a].style.maxHeight?(s[a].style.maxHeight=s[a].scrollHeight+"px",s[a].style.transitionDuration=function(e){return+s[e].style.maxHeight.slice(0,-2)/300*.1+.3+"s"}(a)):s[a].style.maxHeight=0}))}))}()):(new c({parentSelector:".header__sublist"}).renderErrorInHeader(),s&&new c({parentSelector:".tasks__list"}).renderError())})).catch((()=>{new c({parentSelector:".header__sublist"}).renderErrorInHeader(),s&&new c({parentSelector:".tasks__list"}).renderError()})).finally((()=>{s&&e(".tasks .spinner-wrapper")}))};document.addEventListener("DOMContentLoaded",(()=>{e(".header .spinner-wrapper"),s("token")?new t({fname:`${s("fname")}`,nname:`${s("nname")}`,score:`${s("score")}`,isLoggedIn:!0}).render():new t({isLoggedIn:!1}).render(),(new a).getTopList().then((s=>{e(".rating .spinner-wrapper"),s&&s.length>0&&null!==s[0].user&&null!==s[0].score?s.forEach(((e,s)=>{new n({parentSelector:".rating__list",liClass:"rating__item",nameClass:"rating__name",name:e.user,scoreClass:"rating__score",score:e.score,hasImg:!0,index:s,hasComma:!0}).render()})):new r(".rating__list").render()})).catch((()=>{e(".rating .spinner-wrapper"),new r(".rating__list","afterend","Произошла ошибка! Пожалуйста, попробуйте позже.").render()})),l(!0)}))})();