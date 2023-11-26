document.addEventListener("scroll",()=>{
  document.querySelectorAll(".fadein").forEach(ele=>{
    const pos = ele.offsetTop - window.innerHeight;

    console.log(pos)
    console.log(window.scrollY)
    if(-window.scrollY > pos + 200){
      ele.classList.add("scrollin");
    }
  });
});