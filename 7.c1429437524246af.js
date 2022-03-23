"use strict";(self.webpackChunkhuangular2022=self.webpackChunkhuangular2022||[]).push([[7],{9007:(J,u,n)=>{n.r(u),n.d(u,{CreateProjectModule:()=>b,HttpLoaderFactory:()=>C});var g=n(508),d=n(4107),f=n(7531),A=n(5632),r=n(3075),t=n(5e3),p=n(7232),N=n(1491),Z=n(5215),i=n(7322),s=n(9808),m=n(6856),x=n(1354);function O(e,c){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"required")))}function w(e,c){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Length should be 150 characters"),t.qZA())}function M(e,c){if(1&e&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&e){const o=c.$implicit;t.Q6J("value",o.value),t.xp6(1),t.hij(" ",o.key," ")}}function y(e,c){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"required")))}let q=(()=>{class e{constructor(o,a,l){this.apiService=a,this.router=l,this.owners=[],this.createNewProject=new r.cw({projectName:new r.NI("",[r.kI.required,r.kI.maxLength(150)]),projectOwner:new r.NI("",r.kI.required),projectStartDate:new r.NI("",null),projectEndDate:new r.NI("",null)}),o.setDefaultLang("en"),o.use(localStorage.getItem("lang")||"en")}ngOnInit(){this.apiService.getUsers().subscribe(o=>{o.forEach(a=>{this.owners.push({key:a.name,value:a.id})})})}submitForm(){var o,a;""==(null===(o=this.createNewProject.get("projectStartDate"))||void 0===o?void 0:o.value)&&this.createNewProject.removeControl("projectStartDate"),""==(null===(a=this.createNewProject.get("projectEndDate"))||void 0===a?void 0:a.value)&&this.createNewProject.removeControl("projectEndDate"),this.apiService.createNewProject(this.createNewProject.value).subscribe(l=>{this.router.navigateByUrl("/project-board")},l=>{alert(l),this.createNewProject.addControl("projectEndDate",new r.NI("",null)),this.createNewProject.addControl("projectStartDate",new r.NI("",null))})}resetForm(){this.createNewProject.reset()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.sK),t.Y36(N.s),t.Y36(Z.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-create-project"]],decls:45,vars:29,consts:[[1,"create-project-container"],[1,"heading","global-text--heading-4"],[1,"create-project-form"],[3,"formGroup"],[1,"row"],[1,"column"],["for","summary"],["appearance","fill",1,"summary"],["formControlName","projectName","matInput","","placeholder","Project Name"],[4,"ngIf"],["for","owner"],["formControlName","projectOwner","placeholder","Select"],[3,"value",4,"ngFor","ngForOf"],["for",""],["appearance","fill",1,""],["placeholder","MM/DD/YYYY","formControlName","projectStartDate","matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["placeholder","MM/DD/YYYY","formControlName","projectEndDate","matInput","",3,"matDatepicker"],["picker1",""],[1,"form-actions"],[3,"text","btnType","btnClick"],[3,"disabled","text","btnType","btnClick"],[3,"value"]],template:function(o,a){if(1&o&&(t.TgZ(0,"section",0),t.TgZ(1,"h1",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"section",2),t.TgZ(5,"form",3),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"mat-label",6),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"mat-form-field",7),t._UZ(12,"input",8),t.YNc(13,O,3,3,"mat-error",9),t.YNc(14,w,2,0,"mat-error",9),t.qZA(),t.qZA(),t.TgZ(15,"div",5),t.TgZ(16,"mat-label",10),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"mat-form-field",7),t.TgZ(20,"mat-select",11),t.YNc(21,M,2,2,"mat-option",12),t.qZA(),t.YNc(22,y,3,3,"mat-error",9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",4),t.TgZ(24,"div",5),t.TgZ(25,"mat-label",13),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"mat-form-field",14),t._UZ(29,"input",15),t._UZ(30,"mat-datepicker-toggle",16),t._UZ(31,"mat-datepicker",null,17),t.qZA(),t.qZA(),t.TgZ(33,"div",5),t.TgZ(34,"mat-label",13),t._uU(35),t.ALo(36,"translate"),t.qZA(),t.TgZ(37,"mat-form-field",14),t._UZ(38,"input",18),t._UZ(39,"mat-datepicker-toggle",16),t._UZ(40,"mat-datepicker",null,19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",20),t.TgZ(43,"app-button",21),t.NdJ("btnClick",function(){return a.resetForm()}),t.qZA(),t.TgZ(44,"app-button",22),t.NdJ("btnClick",function(){return a.submitForm()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const l=t.MAs(32),P=t.MAs(41);let h,v,T;t.xp6(2),t.Oqu(t.lcZ(3,19,"Create Project")),t.xp6(3),t.Q6J("formGroup",a.createNewProject),t.xp6(4),t.Oqu(t.lcZ(10,21,"Summary")),t.xp6(4),t.Q6J("ngIf",null==(h=a.createNewProject.get("projectName"))?null:h.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(v=a.createNewProject.get("projectName"))?null:v.hasError("maxlength")),t.xp6(3),t.Oqu(t.lcZ(18,23,"Owner")),t.xp6(4),t.Q6J("ngForOf",a.owners),t.xp6(1),t.Q6J("ngIf",null==(T=a.createNewProject.get("projectOwner"))?null:T.hasError("required")),t.xp6(4),t.Oqu(t.lcZ(27,25,"Project Start Date")),t.xp6(3),t.Q6J("matDatepicker",l),t.xp6(1),t.Q6J("for",l),t.xp6(5),t.Oqu(t.lcZ(36,27,"Project End Date")),t.xp6(3),t.Q6J("matDatepicker",P),t.xp6(1),t.Q6J("for",P),t.xp6(4),t.Q6J("text","RESET")("btnType","secondary"),t.xp6(1),t.Q6J("disabled",!a.createNewProject.valid)("text","CREATE")("btnType","primary")}},directives:[r._Y,r.JL,r.sg,i.hX,i.KE,r.Fj,f.Nt,r.JJ,r.u,s.O5,i.TO,d.gD,s.sg,g.ey,m.hl,m.nW,i.R9,m.Mq,x.r],pipes:[p.X$],styles:[".create-project-container[_ngcontent-%COMP%]{margin:40px}.create-project-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{margin:56px 0 30px}.create-project-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-bottom:30px;display:flex;gap:38px}.create-project-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.create-project-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]     .mat-form-field{width:100%}.create-project-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .story-points[_ngcontent-%COMP%]{width:48.8%}.create-project-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]{margin-top:40px;display:flex;justify-content:center;column-gap:38px}"]}),e})();var j=n(520),D=n(40);function C(e){return new D.w(e)}let b=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,j.JF,A.h,m.FA,r.u5,r.UX,f.c,d.LD,g.XK,Z.Bz.forChild([{path:"",component:q}]),p.aw.forRoot({loader:{provide:p.Zw,useFactory:C,deps:[j.eN]}})]]}),e})()}}]);