var inputMoney=0;
const itemBox = document.querySelectorAll(".item");
const coinButtons=document.getElementsByClassName("coin");
const returnButton=document.getElementsByClassName("return-button")[0];
const moneyShow=document.getElementsByClassName("money-display")[0];
const itemPrice={
    "juice":120,
    "pc":1000000,
    "bag":38000,
    "ice":100,
    "smartphone":2000000,
    "meat":10000
}

for (let i = 0; i < coinButtons.length; i++) {
    coinButtons[i].addEventListener("click", function() {
      if(inputMoney+Number(coinButtons[i].id)>120){
        alert(`なんだか${coinButtons[i].innerText}円が返却された。`)
        if(inputMoney<0){
            inputMoney=0;
        }
      }else{
        inputMoney+=Number(coinButtons[i].id);
        moneyShow.innerText=inputMoney+"円";
        Object.entries(itemPrice).forEach(([key, value]) => {
            if(inputMoney>=value){
                itemBox.forEach(item => {
                    if(item.id==key){
                        if( item.style.backgroundColor != "white"){
                            item.style.backgroundColor = "white";
                            alert(`${item.querySelector(".item-name").innerHTML}を選ばれるようになった。`);
                        }
                       
                    }
                });
            }
        });
      }
    });
    
  }

for (let i = 0; i < itemBox.length; i++) {
    itemBox[i].addEventListener("click", function() {
        if(itemBox[i].style.backgroundColor=="white"){
            alert(`冷たい${itemBox[i].querySelector(".item-name").innerText}が出た。`)
            inputMoney-=itemPrice[itemBox[i].id];
            itemBox[i].style.backgroundColor="#a9a4a472";
            moneyShow.innerText=inputMoney+"円";
            Object.entries(itemPrice).forEach(([key, value]) => {
                if(inputMoney!=value){
                    itemBox.forEach(item => {
                        if(item.id==key){
                            item.style.backgroundColor = "#a9a4a472";
                        }
                    });
                }
            });
        }else{
            const moremoney = parseInt(itemBox[i].querySelector(".price").innerHTML.replace(/[^0-9]/g, ""), 10)-inputMoney;
            alert(`${itemBox[i].querySelector(".item-name").innerText}を買うためには${moremoney.toLocaleString("ja-JP")}円がもっと必要だ。`)
        }
    })
}

returnButton.addEventListener("click",function(){
    if(inputMoney<=0){
        alert(`何も出なかった。`)
    }else{
        alert(`${inputMoney}円が返却された。`);
        inputMoney=0;
        moneyShow.innerText=0+"円";
        itemBox.forEach(element => {
            element.style.backgroundColor="#a9a4a472";
        });
    }
   
})

window.onload = function() {
    alert("please click coins.");
  };
  