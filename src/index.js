import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ
  const li = document.createElement("li");
  li.innerText = inputText;
  //divタグの下に各子要素を設定
  div.appendChild(li);
  //完了ボタン生成
  const compbutton = document.createElement("button");
  compbutton.innerText = "完了";
  li.appendChild(compbutton);
  //削除ボタン生成
  const delbutton = document.createElement("button");
  delbutton.innerText = "削除";
  li.appendChild(delbutton);
  //未完了リストに追加
  console.log(div);
  document.getElementById("inconplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
