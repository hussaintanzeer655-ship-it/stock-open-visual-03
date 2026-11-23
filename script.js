function rand(min,max){return Math.random()*(max-min)+min}
function draw(){ const c=document.getElementById('spark'); const ctx=c.getContext('2d'); ctx.clearRect(0,0,c.width,c.height); ctx.strokeStyle='#4cc9f0'; ctx.lineWidth=2; ctx.beginPath(); const w=c.width, h=c.height; for(let x=0;x<w;x++){ const y=(h/2)+(Math.sin(x/20+Date.now()/2000)*h/4)*Math.sin(x/40); if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);} ctx.stroke();}
function nextOpen(){ const now=new Date(); const ny=new Date(now.toLocaleString('en-US',{timeZone:'America/New_York'})); ny.setHours(9,30,0,0); if(ny<=now){ ny.setDate(ny.getDate()+1); if(ny.getDay()==0||ny.getDay()==6) ny.setDate(ny.getDate()+ (1+(1-ny.getDay())%7)); ny.setHours(9,30,0,0); } return ny; }
function update(){ const nt=nextOpen(); document.getElementById('next').textContent= nt.toLocaleDateString(undefined,{weekday:'short',month:'short', day:'numeric'})+' at '+ new Intl.DateTimeFormat(undefined,{hour:'numeric',minute:'2-digit',hour12:true,timeZone:'America/New_York'}).format(nt);
 document.getElementById('ind').textContent= 'Live'; draw(); requestAnimationFrame(()=>{});
}
setInterval(update,1000); update();