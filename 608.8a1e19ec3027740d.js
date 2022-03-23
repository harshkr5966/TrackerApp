"use strict";(self.webpackChunkhuangular2022=self.webpackChunkhuangular2022||[]).push([[608],{8608:(K,Z,i)=>{i.r(Z),i.d(Z,{CreateIssueModule:()=>G,HttpLoaderFactory:()=>A});var u=i(5215),x=i(4834),c=i(8966),e=i(5e3);let _=(()=>{class t{constructor(o){this.data=o}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dialog-component"]],decls:3,vars:0,consts:[["mat-button-content",""]],template:function(o,r){1&o&&(e.TgZ(0,"h3",0),e._uU(1,"A new issue has been created"),e.qZA(),e._uU(2,">\n"))},styles:[""]}),t})();var n=i(3075),f=i(7294),O=i(1491),p=i(7232),g=i(7322),h=i(7531),d=i(9808),T=i(4107),N=i(508),b=i(1354);function F(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"required")))}function U(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Length should be 150 characters"),e.qZA())}function j(t,a){if(1&t&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.key," ")}}function J(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"required")))}function P(t,a){if(1&t&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.key," ")}}function S(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"required")))}function L(t,a){if(1&t&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.key," ")}}function M(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"required")))}function Q(t,a){if(1&t&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.key," ")}}function D(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"required")))}function Y(t,a){if(1&t&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o),e.xp6(1),e.hij(" ",o," ")}}function E(t,a){if(1&t&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o),e.xp6(1),e.hij(" ",o,"")}}function w(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"required")))}const $=function(){return["HU-22","Angular track"]},k=function(){return["Sprint 1","Sprint 2","Sprint 3"]};let B=(()=>{class t{constructor(o,r,s,l,m){this.dialog=o,this.apiService=r,this.router=s,this.route=l,this.project=[],this.assignees=[],this.type=f.nq,this.priority=f.JY,this.createIssueForm=new n.cw({summary:new n.NI("",[n.kI.required,n.kI.maxLength(150)]),type:new n.NI("",n.kI.required),projectID:new n.NI("",n.kI.required),description:new n.NI(""),priority:new n.NI("",n.kI.required),assignee:new n.NI("",n.kI.required),storyPoint:new n.NI("",[n.kI.required]),tags:new n.NI([]),status:new n.NI(1),sprint:new n.NI("",n.kI.required)}),m.setDefaultLang("en"),m.use(localStorage.getItem("lang")||"en")}ngOnInit(){this.route.queryParams.subscribe(o=>{this.id=o.issueId,console.log(this.id)}),this.id&&this.apiService.fetchIssueById(this.id).subscribe(o=>{this.data=o,this.projectId=o.projectID,console.log(this.data),this.apiService.getProjects().subscribe(r=>{for(let s of r)s.projectID==this.projectId&&(this.assigneeTeamName=s.projectOwner.teamName),this.apiService.getTeammembersByTeamName(this.assigneeTeamName).subscribe(l=>{this.asigneeList=l})}),this.createIssueForm.patchValue({summary:this.data.summary,type:this.data.type,projectID:this.data.projectID,description:this.data.description,priority:this.data.priority,assignee:this.data.assignee.id,tags:this.data.tags,sprint:this.data.sprint,storyPoint:this.data.storyPoint})},()=>{alert("Some Error Occured!!!")}),this.apiService.getAllProjects().subscribe(o=>{o.forEach(r=>{this.project.push({key:r.projectName,value:r.projectID})})}),this.apiService.getUsers().subscribe(o=>{o.forEach(r=>{this.assignees.push({key:r.name,value:r.id})})})}submitForm(){this.apiService.createNewIssue(this.createIssueForm.value).subscribe(o=>{this.router.navigateByUrl("/project-board")},o=>{alert(o.err)})}resetForm(){this.createIssueForm.reset()}openDialog(){this.dialog.open(_).afterClosed().subscribe(r=>{console.log(`Dialog result: ${r}`)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.uw),e.Y36(O.s),e.Y36(u.F0),e.Y36(u.gz),e.Y36(p.sK))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-create-issue"]],decls:82,vars:51,consts:[[1,"create-issue-container"],[1,"heading","global-text--heading-4"],[1,"create-issue-form"],[3,"formGroup"],[1,"row"],[1,"column"],["for","summary"],["appearance","fill",1,"summary"],["formControlName","summary","matInput","","placeholder","Add Summary"],[4,"ngIf"],["appearance","fill"],["formControlName","type","placeholder","Select"],[3,"value",4,"ngFor","ngForOf"],["for","Project"],["formControlName","projectID","placeholder","Select"],["for","description"],["appearance","fill",1,"description"],["formControlName","description","placeholder","Write description","matInput","","name","","id","",1,"description-input"],["for","Type"],["placeholder","Select","formControlName","priority"],["placeholder","Select","formControlName","assignee"],["placeholder","Select","formControlName","tags","multiple",""],["placeholder","Select","formControlName","sprint"],["for","Story Points"],["appearance","fill",1,"story-points"],["formControlName","storyPoint","type","number","matInput","","placeholder","0,1,2..."],[1,"form-actions"],[3,"text","btnType","btnClick"],[3,"disabled","text","btnType","btnClick"],[3,"value"]],template:function(o,r){if(1&o&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"section",2),e.TgZ(5,"form",3),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"mat-label",6),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"mat-form-field",7),e._UZ(12,"input",8),e.YNc(13,F,3,3,"mat-error",9),e.YNc(14,U,2,0,"mat-error",9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"div",4),e.TgZ(16,"div",5),e.TgZ(17,"mat-label"),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"mat-form-field",10),e.TgZ(21,"mat-select",11),e.YNc(22,j,2,2,"mat-option",12),e.qZA(),e.YNc(23,J,3,3,"mat-error",9),e.qZA(),e.qZA(),e.TgZ(24,"div",5),e.TgZ(25,"mat-label",13),e._uU(26),e.ALo(27,"translate"),e.qZA(),e.TgZ(28,"mat-form-field",10),e.TgZ(29,"mat-select",14),e.YNc(30,P,2,2,"mat-option",12),e.qZA(),e.YNc(31,S,3,3,"mat-error",9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"div",4),e.TgZ(33,"div",5),e.TgZ(34,"mat-label",15),e._uU(35),e.ALo(36,"translate"),e.qZA(),e.TgZ(37,"mat-form-field",16),e._UZ(38,"textarea",17),e.qZA(),e.qZA(),e.qZA(),e.TgZ(39,"div",4),e.TgZ(40,"div",5),e.TgZ(41,"mat-label",18),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.TgZ(44,"mat-form-field",10),e.TgZ(45,"mat-select",19),e.YNc(46,L,2,2,"mat-option",12),e.qZA(),e.YNc(47,M,3,3,"mat-error",9),e.qZA(),e.qZA(),e.TgZ(48,"div",5),e.TgZ(49,"mat-label",13),e._uU(50),e.ALo(51,"translate"),e.qZA(),e.TgZ(52,"mat-form-field",10),e.TgZ(53,"mat-select",20),e.YNc(54,Q,2,2,"mat-option",12),e.qZA(),e.YNc(55,D,3,3,"mat-error",9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(56,"div",4),e.TgZ(57,"div",5),e.TgZ(58,"mat-label",18),e._uU(59),e.ALo(60,"translate"),e.qZA(),e.TgZ(61,"mat-form-field",10),e.TgZ(62,"mat-select",21),e.YNc(63,Y,2,2,"mat-option",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(64,"div",5),e.TgZ(65,"mat-label",13),e._uU(66),e.ALo(67,"translate"),e.qZA(),e.TgZ(68,"mat-form-field",10),e.TgZ(69,"mat-select",22),e.YNc(70,E,2,2,"mat-option",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(71,"div",4),e.TgZ(72,"div",5),e.TgZ(73,"mat-label",23),e._uU(74),e.ALo(75,"translate"),e.qZA(),e.TgZ(76,"mat-form-field",24),e._UZ(77,"input",25),e.YNc(78,w,3,3,"mat-error",9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(79,"div",26),e.TgZ(80,"app-button",27),e.NdJ("btnClick",function(){return r.resetForm()}),e.qZA(),e.TgZ(81,"app-button",28),e.NdJ("btnClick",function(){return r.submitForm(),r.openDialog()}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){let s,l,m,I,q,y,v;e.xp6(2),e.hij(" ",e.lcZ(3,29,"Create User Stories/Tasks/Bugs")," "),e.xp6(3),e.Q6J("formGroup",r.createIssueForm),e.xp6(4),e.Oqu(e.lcZ(10,31,"Summary")),e.xp6(4),e.Q6J("ngIf",null==(s=r.createIssueForm.get("summary"))?null:s.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(l=r.createIssueForm.get("summary"))?null:l.hasError("maxlength")),e.xp6(4),e.Oqu(e.lcZ(19,33,"Type")),e.xp6(4),e.Q6J("ngForOf",r.type),e.xp6(1),e.Q6J("ngIf",null==(m=r.createIssueForm.get("type"))?null:m.hasError("required")),e.xp6(3),e.Oqu(e.lcZ(27,35,"project")),e.xp6(4),e.Q6J("ngForOf",r.project),e.xp6(1),e.Q6J("ngIf",null==(I=r.createIssueForm.get("projectID"))?null:I.hasError("required")),e.xp6(4),e.Oqu(e.lcZ(36,37,"Description")),e.xp6(7),e.Oqu(e.lcZ(43,39,"Priority")),e.xp6(4),e.Q6J("ngForOf",r.priority),e.xp6(1),e.Q6J("ngIf",null==(q=r.createIssueForm.get("priority"))?null:q.hasError("required")),e.xp6(3),e.Oqu(e.lcZ(51,41,"Assignee")),e.xp6(4),e.Q6J("ngForOf",r.assignees),e.xp6(1),e.Q6J("ngIf",null==(y=r.createIssueForm.get("assignee"))?null:y.hasError("required")),e.xp6(4),e.Oqu(e.lcZ(60,43,"Tags")),e.xp6(4),e.Q6J("ngForOf",e.DdM(49,$)),e.xp6(3),e.Oqu(e.lcZ(67,45,"Sprint")),e.xp6(4),e.Q6J("ngForOf",e.DdM(50,k)),e.xp6(4),e.Oqu(e.lcZ(75,47,"Story Points")),e.xp6(4),e.Q6J("ngIf",null==(v=r.createIssueForm.get("storyPoint"))?null:v.hasError("required")),e.xp6(2),e.Q6J("text","RESET")("btnType","secondary"),e.xp6(1),e.Q6J("disabled",!r.createIssueForm.valid)("text","CREATE")("btnType","primary")}},directives:[n._Y,n.JL,n.sg,g.hX,g.KE,n.Fj,h.Nt,n.JJ,n.u,d.O5,g.TO,T.gD,d.sg,N.ey,n.wV,b.r],pipes:[p.X$],styles:[".create-issue-container[_ngcontent-%COMP%]{margin:40px}.create-issue-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{margin:56px 0 30px}.create-issue-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;gap:38px}.create-issue-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.create-issue-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]     .mat-form-field{width:100%}.create-issue-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .story-points[_ngcontent-%COMP%]{width:48.8%}.create-issue-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:center;column-gap:38px}"]}),t})();var R=i(5632),C=i(520),X=i(6856),z=i(7423),H=i(40);function A(t){return new H.w(t)}let G=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,C.JF,R.h,X.FA,n.u5,n.UX,h.c,T.LD,x.t,c.Is,z.ot,p.aw.forRoot({loader:{provide:p.Zw,useFactory:A,deps:[C.eN]}}),u.Bz.forChild([{path:"",component:B}])]]}),t})()}}]);