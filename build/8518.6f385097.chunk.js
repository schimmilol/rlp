"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8518],{18518:(Z,m,e)=>{e.r(m),e.d(m,{default:()=>U});var s=e(92132),k=e(21272),D=e(11273),_=e(38413),u=e(55356),E=e(4198),y=e(85963),A=e(94061),x=e(83997),L=e(30893),T=e(90151),p=e(68074),j=e(43739),R=e(95336),i=e(55506),C=e(54514),I=e(61535),S=e(54894),r=e(74930),t=e(88724),q=e(77965),o=e(12083);const W=[{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,t.g)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,t.g)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}],M=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),B=o.Ik().shape({email_confirmation_redirection:o.gl().when("email_confirmation",{is:!0,then:o.Yj().matches(M).required(),otherwise:o.Yj().nullable()}),email_reset_password:o.Yj(i.iW.string).matches(M,i.iW.regex).nullable()}),U=()=>(0,s.jsx)(i.kz,{permissions:t.P.readAdvancedSettings,children:(0,s.jsx)(K,{})}),K=()=>{const{formatMessage:d}=(0,S.A)(),l=(0,i.hN)(),{lockApp:F,unlockApp:f}=(0,i.MA)(),{notifyStatus:b}=(0,D.W)(),z=(0,r.useQueryClient)(),{get:N,put:w}=(0,i.ry)(),{formatAPIError:Q}=(0,i.wq)();(0,i.L4)();const{isLoading:H,allowedActions:{canUpdate:h}}=(0,i.ec)({update:t.P.updateAdvancedSettings}),{isLoading:Y,data:v}=(0,r.useQuery)(["users-permissions","advanced"],async()=>{const{data:n}=await N("/users-permissions/advanced");return n},{onSuccess(){b(d({id:(0,t.g)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){l({type:"warning",message:{id:(0,t.g)("notification.error"),defaultMessage:"An error occured"}})}}),V=H||Y,P=(0,r.useMutation)(n=>w("/users-permissions/advanced",n),{async onSuccess(){await z.invalidateQueries(["users-permissions","advanced"]),l({type:"success",message:{id:(0,t.g)("notification.success.saved"),defaultMessage:"Saved"}}),f()},onError(n){l({type:"warning",message:Q(n)}),f()},refetchActive:!0}),{isLoading:$}=P,G=async n=>{F(),P.mutate({...n,email_confirmation_redirection:n.email_confirmation?n.email_confirmation_redirection:""})};return V?(0,s.jsxs)(_.g,{"aria-busy":"true",children:[(0,s.jsx)(i.x7,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(u.Q,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(E.s,{children:(0,s.jsx)(i.Bl,{})})]}):(0,s.jsxs)(_.g,{"aria-busy":$,children:[(0,s.jsx)(i.x7,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(I.l1,{onSubmit:G,initialValues:v.settings,validateOnChange:!1,validationSchema:B,enableReinitialize:!0,children:({errors:n,values:g,handleChange:O,isSubmitting:X,dirty:J})=>(0,s.jsxs)(i.lV,{children:[(0,s.jsx)(u.Q,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:(0,s.jsx)(y.$,{loading:X,type:"submit",disabled:h?!J:!h,startIcon:(0,s.jsx)(C.A,{}),size:"S",children:d({id:"global.save",defaultMessage:"Save"})})}),(0,s.jsx)(E.s,{children:(0,s.jsx)(A.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(x.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(L.o,{variant:"delta",as:"h2",children:d({id:"global.settings",defaultMessage:"Settings"})}),(0,s.jsxs)(T.x,{gap:6,children:[(0,s.jsx)(p.E,{col:6,s:12,children:(0,s.jsx)(j.l,{label:d({id:(0,t.g)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:g.default_role,hint:d({id:(0,t.g)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:a=>O({target:{name:"default_role",value:a}}),children:v.roles.map(a=>(0,s.jsx)(R.c,{value:a.type,children:a.name},a.type))})}),W.map(a=>{let c=g[a.name];return c||(c=a.type==="bool"?!1:""),(0,s.jsx)(p.E,{...a.size,children:(0,s.jsx)(i.ah,{...a,value:c,error:n[a.name],disabled:a.name==="email_confirmation_redirection"&&g.email_confirmation===!1,onChange:O})},a.name)})]})]})})})]})})]})}}}]);
