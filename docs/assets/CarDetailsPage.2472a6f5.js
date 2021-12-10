import{a as c,o as n,b as u,d as e,t as r,m as B,h as p,e as v,F as S,u as j,j as k,g as D,c as d,E as I,A as F,B as V}from"./vendor.0842eb63.js";import{_ as P,l,c as f,P as i,a as _}from"./index.e94f905a.js";const m={setup(){const t=j(),o=k();return D(async()=>{l.log("CAR ID",t.params.id);try{await f.getById(t.params.id)}catch(s){l.error(s),i.toast("Could not get that car","error"),o.push({name:"Cars"})}}),{car:d(()=>_.activeCar),carColor:d(()=>_.activeCar.color||"#ffffff"),account:d(()=>_.account),async remove(){try{await i.confirm()&&(await f.remove(),o.push({name:"Cars"}))}catch(s){l.error(s),i.toast("Failed to Delete","error")}}}}},h=()=>{I(t=>({"4e7ca354":t.carColor}))},g=m.setup;m.setup=g?(t,o)=>(h(),g(t,o)):h;const A=m,C=t=>(F("data-v-7ac5b6ed"),t=t(),V(),t),M={class:"car-details container-fluid"},N={class:"row mt-5 justify-content-center"},R={class:"col-10 text-center"},E=["src"],U={class:"row justify-content-center"},q={class:"col-md-8"},z={class:"bg-white rounded-bottom elevation-1 p-3"},G={class:"d-flex align-items-center"},H={class:"m-0"},J=C(()=>e("div",{class:"color-swatch mx-2"},null,-1)),K={key:1,class:"car-controls d-flex justify-content-end"},L=C(()=>e("button",{class:"btn btn-warning","data-bs-toggle":"modal","data-bs-target":"#car-modal"}," edit ",-1));function O(t,o,s,a,Q,T){const b=c("CreatorDetails"),y=c("Bids"),x=c("CarFormModal");return n(),u(S,null,[e("div",M,[e("div",N,[e("div",R,[e("img",{src:a.car.imgUrl,class:"img-fluid rounded elevation-1"},null,8,E)]),e("div",U,[e("div",q,[e("div",z,[e("h4",null,r(a.car.make)+" - "+r(a.car.model)+" - "+r(a.car.year),1),e("div",G,[e("p",H,[e("b",null,"$"+r(a.car.price),1)]),J]),e("p",null,r(a.car.description),1),a.car.creator?(n(),B(b,{key:0,creator:a.car.creator},null,8,["creator"])):p("",!0),a.car.creatorId===a.account.id?(n(),u("div",K,[L,e("button",{class:"btn btn-danger mx-3",onClick:o[0]||(o[0]=(...w)=>a.remove&&a.remove(...w))}," delete ")])):p("",!0)])])]),v(y)])]),v(x,{car:a.car},null,8,["car"])],64)}var Y=P(A,[["render",O],["__scopeId","data-v-7ac5b6ed"]]);export{Y as default};
