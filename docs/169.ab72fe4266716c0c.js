"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[169],{5169:(A,_,a)=>{a.r(_),a.d(_,{UpdateTodoComponent:()=>v});var u=a(6814),o=a(95),c=a(6208),f=a(8645),D=a(9773),t=a(5879),p=a(5372),E=a(2939),g=a(2531),T=a(2296),h=a(2032),l=a(9157),O=a(8525),M=a(3680),m=a(8034);function U(n,P){if(1&n&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&n){const r=P.$implicit;t.Q6J("value",r),t.xp6(1),t.Oqu(r)}}let v=(()=>{class n{constructor(r,e,i,d,s){this.router=r,this._snackBar=e,this.formBuilder=i,this.todoService=d,this.activatedRoute=s,this.destroy$=new f.x,this.states=["Todo","InProgress","Done"," Cancelled"]}ngOnInit(){const r=this.activatedRoute.snapshot.paramMap.get("id");null!=r&&(this.todo$=this.todoService.loadTodoById(r),this.todo$.pipe((0,D.R)(this.destroy$)).subscribe(e=>{this.todoForm=this.formBuilder.group({id:[e.id],title:[e.title,o.kI.required],description:[e.description,o.kI.required],state:[e.state,o.kI.required],startDate:[e.startDate,o.kI.required],endDate:[e.endDate,o.kI.required]})}))}updateTodo(){try{this.todoService.updateTodo(this.todoForm.value),this._snackBar.open("Task updated successfully","",{duration:4e3,horizontalPosition:"right",verticalPosition:"top"}),this.router.navigate(["/features/todo/todo-list"])}catch{console.error("error updating todo ")}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(E.ux),t.Y36(o.qu),t.Y36(g.w),t.Y36(p.gz))};static#a=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-update-todo"]],standalone:!0,features:[t.jDz],decls:34,vars:7,consts:[[1,"items-container"],[1,"mb-4","text-accent"],[1,"form",3,"formGroup","ngSubmit"],[1,"d-flex","flex-column"],["appearance","outline",1,"full-width","me-2"],["matInput","","formControlName","title"],["matInput","","formControlName","description"],["formControlName","state"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","startDate",3,"matDatepicker"],["matIconSuffix","",3,"for"],["sdatepicker",""],["matInput","","formControlName","endDate",3,"matDatepicker"],["edatepicker",""],["mat-raised-button","","color","primary","type","submit",1,"w-100","d-flex","justify-content-center","align-items-center","mt-5",3,"disabled"],[3,"value"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Update Task"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return i.updateTodo()}),t.TgZ(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Title"),t.qZA(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"mat-form-field",4)(10,"mat-label"),t._uU(11,"Description"),t.qZA(),t._UZ(12,"input",6),t.qZA(),t.TgZ(13,"mat-form-field",4)(14,"mat-label"),t._uU(15,"State"),t.qZA(),t.TgZ(16,"mat-select",7),t.YNc(17,U,2,2,"mat-option",8),t.qZA()(),t.TgZ(18,"mat-form-field",4)(19,"mat-label"),t._uU(20,"Start Date"),t.qZA(),t._UZ(21,"input",9)(22,"mat-datepicker-toggle",10)(23,"mat-datepicker",null,11),t.qZA(),t.TgZ(25,"mat-form-field",4)(26,"mat-label"),t._uU(27,"End Date"),t.qZA(),t._UZ(28,"input",12)(29,"mat-datepicker-toggle",10)(30,"mat-datepicker",null,13),t.qZA()(),t.TgZ(32,"button",14),t._uU(33,"Save "),t.qZA()()()),2&e){const d=t.MAs(24),s=t.MAs(31);t.xp6(3),t.Q6J("formGroup",i.todoForm),t.xp6(14),t.Q6J("ngForOf",i.states),t.xp6(4),t.Q6J("matDatepicker",d),t.xp6(1),t.Q6J("for",d),t.xp6(6),t.Q6J("matDatepicker",s),t.xp6(1),t.Q6J("for",s),t.xp6(3),t.Q6J("disabled",!i.todoForm.valid)}},dependencies:[u.ez,u.sg,c.m,T.lW,h.Nt,l.KE,l.hX,l.R9,O.gD,M.ey,m.Mq,m.hl,m.nW,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]})}return n})()}}]);