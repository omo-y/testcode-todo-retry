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
  div.appendChild(compbutton);
  compbutton.addEventListener("click", () => {
    const comptarget = compbutton.parentNode;
    const text = comptarget.firstElementChild.innerText;
    console.log(text);
    deletFromINcompList(comptarget);
    comptarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    comptarget.appendChild(li);
    comptarget.appendChild(backbutton);
    document.getElementById("complete-list").appendChild(comptarget);
  });
  //削除ボタン生成
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  //divタグの下に各子要素を設定
  div.appendChild(delButton);
  delButton.addEventListener("click", () => {
    const delettaret = delButton.parentNode;
    console.log(delettaret);
    deletFromINcompList(delettaret);
    //document.getElementById("inconplete-list").removeChild(delettaret);
  });
  div.appendChild(delButton);
  //未完了のtodoリストに追加
  //console.log(div);
  document.getElementById("inconplete-list").appendChild(div);
};
//未完了リストから要素を削除
const deletFromINcompList = (target) => {
  document.getElementById("inconplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
