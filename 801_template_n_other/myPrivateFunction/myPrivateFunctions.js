// 自己寫的function
// 適用ES6

/*
    (一)點選上方tab自動切換下方內容
    para1 = 上方tab陣列,
    para2 = 下方內容陣列,
    para3 = 切換顯示時用block還是inlineblock,
    para4 = 切換時想新增的class名稱(一個)
    
*/

function ClickAndSwitchContent(clickItem, changeItem,  bOrInb=1, switchClass) {
    if ( bOrInb === 1 ) {
        showInBlockOrInlineBlock = 'block';
    } else {
        showInBlockOrInlineBlock = 'inline-block';
    }
    
    for ( let i = 0 ; i < clickItem.length ; i++ ) {
        clickItem[i].addEventListener('click', changeSubItem);
    }
    
    function changeSubItem() {
        for ( let i = 0 ; i < clickItem.length ; i++ ) {
            if( this === clickItem[i]) {
                changeItem[i].style.display = showInBlockOrInlineBlock;
                clickItem[i].classList.add(switchClass);
            } else {
                changeItem[i].style.display = 'none';
                clickItem[i].classList.remove(switchClass);                
            }
        }   
    }
}