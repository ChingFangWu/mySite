//指定DOM
var intext=document.querySelector('#inputtext');
var sendtext=document.querySelector('#btn');
var list=document.querySelector('.showlist');
var updatetext=JSON.parse(localStorage.getItem('todolist')) || [];

//監聽動作
sendtext.addEventListener('click',addtext);
list.addEventListener('click',toggleDone);
updateList(updatetext);
//新增資料
function addtext(e){
  e.preventDefault();
  var txt=document.querySelector('#inputtext').value;
  var todo={
    content:txt
  };
  updatetext.push(todo);
  updateList(updatetext);
  localStorage.setItem('todolist',JSON.stringify(updatetext)); 
  intext.focus();
  
}
//取得資料

//畫面更新資料
function updateList(item){
  var day= new Date();
  var thismonth=day.getMonth()+1;
  var today=day.getDate();
  
  var str="";
  var num=item.length;
  for(var i=0;i<num;i++){
  str+="<li><a href='#' data-index=" + i + '/>X</a><span>'+item[i].content+"</span>-"+thismonth+"月"+today+"日</li>";
  }
  
  
  list.innerHTML=str;
  
  }

//刪除資料
function toggleDone(e){
  e.preventDefault();
  if (e.target.nodeName !="A"){return}
  var index=e.target.dataset.index;
  updatetext.splice(index,1);
  localStorage.setItem('todolist',JSON.stringify(updatetext)); 
  updateList(updatetext);
}

//contact 驗證
var send=document.querySelector('#submit');
var name_str=document.querySelector('#name');
var mail_str=document.querySelector('#email');
var msg_str=document.querySelector('#msg');
send.addEventListener('click',checkdata);

function checkdata(e){
  var msg="";
    
  if(name_str.value==""){
    msg+="姓名不可為空!請輸入姓名\n";
      name_str.focus();
  }

   if(mail_str.value==""){
    msg+="信箱不可為空!請輸入信箱\n";
      mail_str.focus();
   }

    if(msg!=="")
      {  
       alert(msg);
        return false;
      }


   else{
    alert("非常感謝您寶貴意見，但其實還沒有做收信後台...(跪)");
    return true;}
}

//contact 重整

var resetdata=document.querySelector('#contact_form');
reset.addEventListener('click',clear);

function clear(){
  resetdata.reset();
}