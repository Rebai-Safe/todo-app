"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[140],{4140:(q,g,n)=>{n.r(g),n.d(g,{CreateTodoComponent:()=>Q});var v=n(6814),Z=n(6208),i=n(95);const f={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var l,U=new Uint8Array(16);function C(){if(!l&&!(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(U)}for(var r=[],u=0;u<256;++u)r.push((u+256).toString(16).slice(1));const I=function D(e,o,a){if(f.randomUUID&&!o&&!e)return f.randomUUID();var m=(e=e||{}).random||(e.rng||C)();if(m[6]=15&m[6]|64,m[8]=63&m[8]|128,o){a=a||0;for(var d=0;d<16;++d)o[a+d]=m[d];return o}return function h(e,o=0){return(r[e[o+0]]+r[e[o+1]]+r[e[o+2]]+r[e[o+3]]+"-"+r[e[o+4]]+r[e[o+5]]+"-"+r[e[o+6]]+r[e[o+7]]+"-"+r[e[o+8]]+r[e[o+9]]+"-"+r[e[o+10]]+r[e[o+11]]+r[e[o+12]]+r[e[o+13]]+r[e[o+14]]+r[e[o+15]]).toLowerCase()}(m)};var t=n(5879),x=n(5372),A=n(2939),k=n(2531),J=n(2296),S=n(2032),c=n(9157),F=n(8525),N=n(3680),p=n(8034);function b(e,o){if(1&e&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a),t.xp6(1),t.Oqu(a)}}let Q=(()=>{class e{constructor(a,m,d,s){this.router=a,this._snackBar=m,this.formBuilder=d,this.todoService=s,this.tasks=[],this.states=["Todo","InProgress","Done","Cancelled"],this.todoForm=this.formBuilder.group({id:[I()],title:["",i.kI.required],description:["",i.kI.required],state:["",i.kI.required],startDate:[null,i.kI.required],endDate:[null,i.kI.required]})}createTodo(){try{this.todoService.createTodo(this.todoForm.value),this._snackBar.open("Task created successfully","",{duration:4e3,horizontalPosition:"right",verticalPosition:"top"}),this.router.navigate(["features/todo/todo-list"])}catch(a){console.error("error saving todo :",a)}}static#t=this.\u0275fac=function(m){return new(m||e)(t.Y36(x.F0),t.Y36(A.ux),t.Y36(i.qu),t.Y36(k.w))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-create-todo"]],standalone:!0,features:[t.jDz],decls:34,vars:7,consts:[[1,"items-container"],[1,"mb-4","text-accent"],[1,"form",3,"formGroup","ngSubmit"],[1,"d-flex","flex-column"],["appearance","outline",1,"full-width","me-2"],["matInput","","formControlName","title"],["matInput","","formControlName","description"],["formControlName","state"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","startDate",3,"matDatepicker"],["matIconSuffix","",3,"for"],["sdatepicker",""],["matInput","","formControlName","endDate",3,"matDatepicker"],["edatepicker",""],["mat-raised-button","","color","primary","type","submit",1,"w-100","d-flex","justify-content-center","align-items-center","mt-5",3,"disabled"],[3,"value"]],template:function(m,d){if(1&m&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"New Task"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return d.createTodo()}),t.TgZ(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Title"),t.qZA(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"mat-form-field",4)(10,"mat-label"),t._uU(11,"Description"),t.qZA(),t._UZ(12,"input",6),t.qZA(),t.TgZ(13,"mat-form-field",4)(14,"mat-label"),t._uU(15,"State"),t.qZA(),t.TgZ(16,"mat-select",7),t.YNc(17,b,2,2,"mat-option",8),t.qZA()(),t.TgZ(18,"mat-form-field",4)(19,"mat-label"),t._uU(20,"Start Date"),t.qZA(),t._UZ(21,"input",9)(22,"mat-datepicker-toggle",10)(23,"mat-datepicker",null,11),t.qZA(),t.TgZ(25,"mat-form-field",4)(26,"mat-label"),t._uU(27,"End Date"),t.qZA(),t._UZ(28,"input",12)(29,"mat-datepicker-toggle",10)(30,"mat-datepicker",null,13),t.qZA()(),t.TgZ(32,"button",14),t._uU(33,"Create "),t.qZA()()()),2&m){const s=t.MAs(24),T=t.MAs(31);t.xp6(3),t.Q6J("formGroup",d.todoForm),t.xp6(14),t.Q6J("ngForOf",d.states),t.xp6(4),t.Q6J("matDatepicker",s),t.xp6(1),t.Q6J("for",s),t.xp6(6),t.Q6J("matDatepicker",T),t.xp6(1),t.Q6J("for",T),t.xp6(3),t.Q6J("disabled",!d.todoForm.valid)}},dependencies:[v.ez,v.sg,Z.m,J.lW,S.Nt,c.KE,c.hX,c.R9,F.gD,N.ey,p.Mq,p.hl,p.nW,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return e})()}}]);