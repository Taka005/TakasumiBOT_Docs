(async function(){
  const status = await fetch("https://api.taka.cf/v1/status")
    .then(res=>res.json())

  const data = status.data.pop();

  document.querySelector(".server").innerText = `${trim(data.guild)}以上のサーバーに導入`;
  document.querySelector(".user").innerText = `${trim(data.user)}以上のユーザーが利用`;
})();

function trim(number){
  const length = 10**(number.toString().length - 2);
  console.log(length)
  return Math.round(number/length)*length;
}