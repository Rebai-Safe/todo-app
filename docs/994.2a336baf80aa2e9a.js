"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[994],{5994:(Q,r,a)=>{a.r(r),a.d(r,{TodoListComponent:()=>k});var s=a(6814),u=a(6208),m=a(5372),p=a(3365),d=a(5313),f=a(8645),T=a(9773),t=a(5879),g=a(7700),C=a(2939),h=a(2531),x=a(2296);function D(e,n){1&e&&(t.TgZ(0,"th",19),t._uU(1," Title"),t.qZA())}function v(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.title," ")}}function M(e,n){1&e&&(t.TgZ(0,"th",19),t._uU(1," Description"),t.qZA())}function O(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.description," ")}}function L(e,n){1&e&&(t.TgZ(0,"th",19),t._uU(1," State"),t.qZA())}function Z(e,n){if(1&e&&(t.TgZ(0,"td",20)(1,"div",21),t._uU(2),t.qZA()()),2&e){const o=n.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngClass",i.getClass(o.state)),t.xp6(1),t.hij(" ",o.state," ")}}function E(e,n){1&e&&(t.TgZ(0,"th",19),t._uU(1," Start Date"),t.qZA())}function P(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,o.startDate,"YYYY-MM-dd")," ")}}function A(e,n){1&e&&(t.TgZ(0,"th",19),t._uU(1," End Date"),t.qZA())}function U(e,n){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,o.endDate,"YYYY-MM-dd")," ")}}function Y(e,n){1&e&&(t.TgZ(0,"th",19),t._uU(1," Actions"),t.qZA())}function y(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",20)(1,"i",22),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw(2);return t.KtG(l.deleteToDo(c))}),t.qZA(),t.TgZ(2,"i",23),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw(2);return t.KtG(l.goToUpdateTodo(c))}),t.qZA()()}}function w(e,n){1&e&&t._UZ(0,"tr",24)}function B(e,n){1&e&&t._UZ(0,"tr",25)}const N=function(){return[5,10,20]};function I(e,n){if(1&e&&(t.TgZ(0,"div",6)(1,"table",7),t.ynx(2,8),t.YNc(3,D,2,0,"th",9),t.YNc(4,v,2,1,"td",10),t.BQk(),t.ynx(5,11),t.YNc(6,M,2,0,"th",9),t.YNc(7,O,2,1,"td",10),t.BQk(),t.ynx(8,12),t.YNc(9,L,2,0,"th",9),t.YNc(10,Z,3,2,"td",10),t.BQk(),t.ynx(11,13),t.YNc(12,E,2,0,"th",9),t.YNc(13,P,3,4,"td",10),t.BQk(),t.ynx(14,14),t.YNc(15,A,2,0,"th",9),t.YNc(16,U,3,4,"td",10),t.BQk(),t.ynx(17,15),t.YNc(18,Y,2,0,"th",9),t.YNc(19,y,3,0,"td",10),t.BQk(),t.YNc(20,w,1,0,"tr",16),t.YNc(21,B,1,0,"tr",17),t.qZA(),t._UZ(22,"mat-paginator",18),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("dataSource",o.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,N))}}function R(e,n){1&e&&(t.TgZ(0,"div",26),t._uU(1," You have no tasks. Consider creating a new one! "),t.qZA())}let k=(()=>{class e{constructor(o,i,_,c){this.router=o,this.dialog=i,this._snackBar=_,this.todoService=c,this.destroy$=new f.x,this.displayedColumns=["title","description","startDate","endDate","state","actions"],this.dataSource=new d.by}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.loadData()}loadData(){this.todoService.loadTodos().pipe((0,T.R)(this.destroy$)).subscribe(o=>{this.dataSource.data=o.todos})}goToUpdateTodo(o){this.router.navigate(["/features/todo/update-todo",o.id])}deleteToDo(o){try{this.todoService.deleteToDo(o.id,this.dialog)}catch{console.error("error deleting todo ")}}getClass(o){switch(o){case"Todo":return"todo";case"InProgress":return"in-progress";case"Done":return"done";case"Cancelled":return"cancelled";default:return""}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(m.F0),t.Y36(g.uw),t.Y36(C.ux),t.Y36(h.w))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-todo-list"]],viewQuery:function(i,_){if(1&i&&t.Gf(p.NW,5),2&i){let c;t.iGM(c=t.CRH())&&(_.paginator=c.first)}},standalone:!0,features:[t.jDz],decls:7,vars:3,consts:[[1,"mt-2"],[1,"d-flex","justify-content-end"],["mat-raised-button","","color","primary",3,"routerLink"],[1,"fa-solid","fa-circle-plus","text-white"],["class","mat-elevation-z8 mt-3 table-container",4,"ngIf"],["class","empty-text",4,"ngIf"],[1,"mat-elevation-z8","mt-3","table-container"],["mat-table","",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","state"],["matColumnDef","startDate"],["matColumnDef","endDate"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"state",3,"ngClass"],[1,"fa-solid","fa-trash","text-danger","clickable",3,"click"],[1,"fa-solid","fa-pen","text-accent","ms-4","clickable",3,"click"],["mat-header-row",""],["mat-row",""],[1,"empty-text"]],template:function(i,_){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t._uU(3," New Task "),t._UZ(4,"i",3),t.qZA()(),t.YNc(5,I,23,5,"div",4),t.YNc(6,R,2,0,"div",5),t.qZA()),2&i&&(t.xp6(2),t.Q6J("routerLink","/features/todo/create-todo"),t.xp6(3),t.Q6J("ngIf",_.dataSource.data.length>0),t.xp6(1),t.Q6J("ngIf",0==_.dataSource.data.length))},dependencies:[s.ez,s.mk,s.O5,s.uU,u.m,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,p.NW,x.lW,m.rH],styles:[".table-container[_ngcontent-%COMP%]{display:block;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%}.mat-column-name[_ngcontent-%COMP%], .mat-column-age[_ngcontent-%COMP%]{min-width:150px}.state[_ngcontent-%COMP%]{color:#fff;padding:7.5px;width:89px;text-align:center;border-radius:10.5px}.todo[_ngcontent-%COMP%]{background-color:#757575}.in-progress[_ngcontent-%COMP%]{background-color:#f57c00}.done[_ngcontent-%COMP%]{background-color:#388e3c}.cancelled[_ngcontent-%COMP%]{background-color:#d32f2f}@media (max-width: 600px){.mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%]{padding:8px;font-size:12px}.empty-text[_ngcontent-%COMP%]{width:100%}}"]})}return e})()}}]);