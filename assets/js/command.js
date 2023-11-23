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

  const type = params.get("type");
  if(type.length > 0&&types[type]){
    const data = await fetch("/assets/command.js")
      .then(res=>res.json())
      .catch(error=>{
        console.log(error);
      });

    const list = data.filter(c=>c.type === type);
    console.log(list);
  }
})