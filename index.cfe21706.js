!function(){var t=document.querySelector(".contact-div").children,o=document.querySelector(".modal-window"),e=document.querySelector(".modal-window1"),c=document.querySelector(".modal-window2"),d=document.querySelector(".modal-close"),n=document.querySelector(".modal-close1"),l=document.querySelector(".modal-close2"),i=document.querySelector(".contact-button__margin"),s=document.querySelector(".contact-tel"),r=document.querySelector(".contact-mail");console.log(t),console.log(o),console.log(r);for(var a=0;a<t.length;a+=1)0===a&&t[a].addEventListener("click",(function(){o.classList.toggle("card-visible"),document.body.style.top="-".concat(window.scrollY,"px"),document.body.style.right=0,document.body.style.left=0,document.body.style.position="fixed"})),1===a&&t[a].addEventListener("click",(function(){e.classList.toggle("card-visible"),document.body.style.top="-".concat(window.scrollY,"px"),document.body.style.right=0,document.body.style.left=0,document.body.style.position="fixed"})),2===a&&t[a].addEventListener("click",(function(){c.classList.toggle("card-visible"),document.body.style.top="-".concat(window.scrollY,"px"),document.body.style.right=0,document.body.style.left=0,document.body.style.position="fixed"}));d.addEventListener("click",(function(){o.classList.toggle("card-visible");var t=document.body.style.top;document.body.style.position="static",window.scrollTo(0,-1*parseInt(t))})),n.addEventListener("click",(function(){e.classList.toggle("card-visible");var t=document.body.style.top;document.body.style.position="static",window.scrollTo(0,-1*parseInt(t))})),l.addEventListener("click",(function(){c.classList.toggle("card-visible");var t=document.body.style.top;document.body.style.position="static",window.scrollTo(0,-1*parseInt(t))})),i.addEventListener("click",(function(){o.classList.toggle("card-visible"),document.body.style.top="-".concat(window.scrollY,"px"),document.body.style.right=0,document.body.style.left=0,document.body.style.position="fixed"})),s.addEventListener("click",(function(){o.classList.toggle("card-hidden")})),r.addEventListener("click",(function(){o.classList.toggle("card-hidden")}))}();
//# sourceMappingURL=index.cfe21706.js.map