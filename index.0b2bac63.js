const t=document.querySelector(".contact-div").children,o=document.querySelector(".modal-window"),e=document.querySelector(".modal-window1"),c=document.querySelector(".modal-window2"),d=document.querySelector(".modal-close"),n=document.querySelector(".modal-close1"),l=document.querySelector(".modal-close2"),s=document.querySelector(".contact-button__margin"),i=document.querySelector(".contact-tel"),r=document.querySelector(".contact-mail");console.log(t),console.log(o),console.log(r);for(let d=0;d<t.length;d+=1)0===d&&t[d].addEventListener("click",(function(){o.classList.toggle("card-visible"),document.body.style.top=`-${window.scrollY}px`,document.body.style.right=0,document.body.style.left=0,document.body.style.position="fixed"})),1===d&&t[d].addEventListener("click",(function(){e.classList.toggle("card-visible"),document.body.style.top=`-${window.scrollY}px`,document.body.style.right=0,document.body.style.left=0,document.body.style.position="fixed"})),2===d&&t[d].addEventListener("click",(function(){c.classList.toggle("card-visible"),document.body.style.top=`-${window.scrollY}px`,document.body.style.right=0,document.body.style.left=0,document.body.style.position="fixed"}));d.addEventListener("click",(function(){o.classList.toggle("card-visible");const t=document.body.style.top;document.body.style.position="static",window.scrollTo(0,-1*parseInt(t))})),n.addEventListener("click",(function(){e.classList.toggle("card-visible");const t=document.body.style.top;document.body.style.position="static",window.scrollTo(0,-1*parseInt(t))})),l.addEventListener("click",(function(){c.classList.toggle("card-visible");const t=document.body.style.top;document.body.style.position="static",window.scrollTo(0,-1*parseInt(t))})),s.addEventListener("click",(function(){o.classList.toggle("card-visible"),document.body.style.top=`-${window.scrollY}px`,document.body.style.right=0,document.body.style.left=0,document.body.style.position="fixed"})),i.addEventListener("click",(function(){o.classList.toggle("card-hidden")})),r.addEventListener("click",(function(){o.classList.toggle("card-hidden")}));
//# sourceMappingURL=index.0b2bac63.js.map