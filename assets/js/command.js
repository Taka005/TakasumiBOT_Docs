(async function(){
  const types = {
    "info": "情報",
    "server": "サーバー関連",
    "manage": "管理",
    "tool": "ツール",
    "search": "検索",
    "fun": "ネタ",
    "money": "お金",
    "board": "サーバー掲示板",
    "bot": "Bot関連",
    "othor": "その他",
    "contextmenu": "コンテキストメニュー"
  };

  const params = new URLSearchParams(window.location.search);

  const type = params.get("type");
  if(types[type]){
    const commands = await fetch("/assets/commandlist.json")
      .then(res=>res.json())
      .catch(error=>{
        console.log(error);
      });

    const list = commands.filter(c=>c.type === type);

    document.getElementById("name").innerText = types[type];

    document.querySelector(".list").insertAdjacentHTML("afterbegin",
      list.map(c=>{
        return `
          <div class="col-sm-4 command">
            <div class="card text-center h-100">
              <div class="card-body">
                <h5 class="card-title"><strong>${c.name}</strong></h5>
                <p class="card-text">${c.description}</p>
                <p class="card-text"><strong>使用例</strong><br>${c.example}</p>
                <p class="card-text"><strong>ユーザー権限</strong><br>${c.userPermission.join("<br>")}</p>
                <p class="card-text"><strong>BOT権限</strong><br>${c.botPermission.join("<br>")}</p>
                ${c.note !== "なし" ? `<p class="card-text text-muted"><small>${c.note}</small></p>` : ""}
              </div>
            </div>
          </div>
        `;
      }).join("")
    );
  }
})();