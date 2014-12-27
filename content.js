function subText(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){
    n.data = n.data.replace(/s{3}/g, "ss-s")
    n.data = n.data.replace(/s(?=[ac-eg-jl-z])/g, "ſ")
    n.data = n.data.replace(/fſ/g, "fs")
  }
}

subText(document.body);