(function(){
  function showOverlay(){
    if(document.getElementById("kh-early-overlay"))return;
    const div=document.createElement("div");
    div.id="kh-early-overlay";
    div.style.cssText="position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,0.85);";
    (document.body||document.documentElement).appendChild(div);
    setTimeout(()=>{const el=document.getElementById("kh-early-overlay");if(el)el.remove()},4000);
  }
  try{
    if(sessionStorage.getItem("kintaiJobActive")==="1")showOverlay();
  }catch(e){}
  try{
    chrome.storage.local.get("kintaiJob",(data)=>{
      const job=data&&data.kintaiJob;
      if(!job||!job.active)return;
      showOverlay();
    });
  }catch(e){}
})();
