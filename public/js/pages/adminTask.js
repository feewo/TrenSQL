(()=>{"use strict";const e=function(e){let t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},t=class{_apiBase="/api/";getResource=async(e,t)=>{const s=await fetch(e,{headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef"},...t});if(!s.ok)throw new Error(`Could not fetch ${e}, status: ${res.status}`);return await s.json()};getTopList=async()=>await this.getResource(`${this._apiBase}user-top5`);getGeneralList=async()=>await this.getResource(`${this._apiBase}user-top`);getLastYearList=async()=>await this.getResource(`${this._apiBase}user-lasttop`);getCurrentYearList=async()=>await this.getResource(`${this._apiBase}user-nowtop`);getTask=async t=>await this.getResource(`${this._apiBase}task/${t}`,{method:"GET",headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef",Authorization:`Bearer ${e("token")}`,"Content-Type":"application/json"}});getLevelsAndTasks=async()=>await this.getResource(`${this._apiBase}levels`,{method:"GET"});getHeaderUser=async()=>await this.getResource(`${this._apiBase}auth/login`,{method:"GET",headers:{"X-API-KEY":"9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef",Authorization:`Bearer ${e("token")}`,"Content-Type":"application/json"}});logout=async()=>await this.getResource(`${this._apiBase}logout`,{method:"GET"});getLkAchievements=async()=>await this.getResource(`${this._apiBase}task-user-count`,{method:"GET"});getUserAmount=async()=>await this.getResource(`${this._apiBase}admin/user-count`,{method:"GET"});getSolvedTasksAmount=async()=>await this.getResource(`${this._apiBase}admin/task-count`,{method:"GET"});getTableList=async e=>await this.getResource(`${this._apiBase}admin/${e}`,{method:"GET"});getTablePage=async(e,t)=>await this.getResource(`${this._apiBase}admin/${t}/${e}`,{method:"GET"});deleteTable=async(e,t)=>await this.getResource(`${this._apiBase}admin/${t}/${e}`,{method:"DELETE"});getSelect=async e=>await this.getResource(`${this._apiBase}admin/${e}`,{method:"GET"})},s=class{constructor({id:e,database:t,name:s,img:a,descr:n,difficulty:i,solution:o}){this.id=e,this.database=t,this.img=a,this.name=s,this.descr=n,this.difficulty=i,this.solution=o}render(){document.querySelector(".table-content").insertAdjacentHTML("beforeend",`\n            <tr class="task-table__item">\n                <td class="task-id">\n                    ${this.id}\n                </td>\n                <td>\n                    ${this.database}\n                </td>\n                <td>\n                    ${this.name}\n                </td>\n                <td>\n                    ${this.img}\n                </td>\n                <td>\n                    ${this.descr}\n                </td>\n                <td>\n                    ${this.difficulty}\n                </td>\n                <td>\n                    ${this.solution}\n                </td>\n                <td class="project-actions text-right">\n                    <a class="btn btn-info btn-sm" href="task/edit/${this.id}">\n                        <i class="fas fa-pencil-alt">\n                        </i>\n                        Редактировать\n                    </a>\n                    <a class="btn btn-danger btn-sm" href="#">\n                        <i class="fas fa-trash">\n                        </i>\n                        Удалить\n                    </a>\n                </td>\n            </tr>\n        `)}},a=class{constructor(e,t="afterend",s="К сожалению, данные отсутствуют."){this.parent=document.querySelector(e),this.position=t,this.message=s}render(){this.parent.insertAdjacentHTML(this.position,`\n            <span class="error">${this.message}</span>\n        `)}};document.addEventListener("DOMContentLoaded",(()=>{(new t).getTableList("task").then((e=>{e?e.forEach((e=>{new s({id:e.id,database:e.dbname,name:e.name,img:e.img,descr:e.task,difficulty:e.lvl,solution:e.ssql}).render()})):new a(".task-tables").render()})).catch((()=>{new a(".task-tables","afterend","Произошла ошибка! Пожалуйста, попробуйте позже.").render()})),function({spinnerSelector:e,messageSuccessSelector:s,messageErrorSelector:a,activeTableItemSelector:n,deleteTable:i}){const o=document.querySelector(".table-content"),c=document.querySelector(e),r="spinner-wrapper_active",l="spinner-wrapper_inactive",d=document.querySelector(s),u=document.querySelector(a),h="form__message_active",m=new t;o.addEventListener("click",(e=>{const t=e.target.closest(".btn-danger"),s=e.target.closest(n);if(e.target&&t){c.classList.remove(l),c.classList.add(r);const e=t.parentElement.parentElement.firstElementChild.textContent;m.deleteTable(e,i).then((()=>{console.log("УСПЕХ"),s.remove(),u&&u.classList.remove(h),d&&d.classList.add(h)})).catch((()=>{console.log("ОШИБКА"),u&&u.classList.add(h)})).finally((()=>{c.classList.remove(r),c.classList.add(l)}))}}))}({spinnerSelector:".task-tables .spinner-wrapper",messageSuccessSelector:".task-tables .form__message_success",messageErrorSelector:".task-tables .form__message_error",activeTableItemSelector:".task-table__item",deleteTable:"task"})}))})();