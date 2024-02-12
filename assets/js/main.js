(async function(){
  const status = await fetch("https://api.takasumibot.com/v1/status")
    .then(res=>res.json())

  const data = status.data.pop();

  document.querySelector(".server").innerText = `${data.guild}サーバーに導入`;
  document.querySelector(".user").innerText = `${data.user}ユーザーが利用`;
})();