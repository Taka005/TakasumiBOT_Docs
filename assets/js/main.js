(async function(){
  const status = await fetch("https://api.taka.cf/v1/status")
    .then(res=>res.json())

  const data = status.data.pop();

  document.querySelector(".server").innerText = `${data.guild}以上のサーバーに導入`;
  document.querySelector(".user").innerText = `${data.user}以上のユーザーが利用`;
})();