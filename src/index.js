import "./styles.css";

//未完了リストから要素を削除
const deletFromINcompList = (target) => {
  document.getElementById("inconplete-list").removeChild(target);
};

//未完了リストに追加する関数
const creatIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ
  const li = document.createElement("li");
  li.innerText = text;
  //divタグの下に各子要素を設定
  div.appendChild(li);
  //完了ボタン生成
  const compbutton = document.createElement("button");
  compbutton.innerText = "完了";
  div.appendChild(compbutton);
  compbutton.addEventListener("click", () => {
    const comptarget = compbutton.parentNode;
    const text = comptarget.firstElementChild.innerText;
    deletFromINcompList(comptarget);
    comptarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    comptarget.appendChild(li);
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押されたボタンの親タグを完了リストから削除する。
      const text = backbutton.parentNode.firstElementChild.innerText;
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキスト取得
      console.log(text);
      creatIncompleteList(text);
    });
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
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  creatIncompleteList(inputText);
};
const backbutton = document.createElement("button");
backbutton.innerText = "戻す";
backbutton.addEventListener("click", () => {
  //押されたボタンの親タグを完了リストから削除する。
  const text = backbutton.parentNode.firstElementChild.innerText;
  const deleteTarget = backbutton.parentNode;
  document.getElementById("complete-list").removeChild(deleteTarget);
  //テキスト取得
  console.log(text);
  creatIncompleteList(text);
});

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
