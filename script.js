// Mobile menu
document.addEventListener('DOMContentLoaded',()=>{
  const t=document.querySelector('.menu-toggle');
  const m=document.querySelector('.nav-links');
  if(t&&m)t.addEventListener('click',()=>m.classList.toggle('open'));

  // Active link
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===path)a.classList.add('active');
  });

  // FAQ toggle
  document.querySelectorAll('.faq-item').forEach(it=>{
    it.querySelector('.faq-q').addEventListener('click',()=>it.classList.toggle('open'));
  });

  // Reveal on scroll
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}
  }),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Contact form
  document.querySelectorAll('form.contact-form').forEach(f=>{
    f.addEventListener('submit',e=>{
      e.preventDefault();
      const d=new FormData(f);
      const name=d.get('name'),phone=d.get('phone'),email=d.get('email')||'',msg=d.get('message')||'';
      const text=`Hello Shoknife Steam,%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0A%0AInquiry:%0A${msg}`;
      window.open(`https://wa.me/919510356120?text=${text}`,'_blank');
      f.reset();
      alert('Thank you! Redirecting to WhatsApp to send your inquiry.');
    });
  });
});
