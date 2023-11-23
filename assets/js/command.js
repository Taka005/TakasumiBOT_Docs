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
  console.log(type)
  if(types[type]){
    const command = await fetch("/assets/commands.json")
      .then(res=>res.json())
      .catch(error=>{
        console.log(error);
      });

    const list = command.filter(c=>c.type === type);
    console.log(list);
  }
})