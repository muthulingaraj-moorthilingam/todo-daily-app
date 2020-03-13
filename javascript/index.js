//in this window onload function an javscript file add with in a head tag for avoiding error in "addEveyntlistener" of null error

window.onload=function(){
	
let list;
if(localStorage.getItem("data") != null){
	list=localStorage.getItem("data");
	list = list.split(",");
}
else{
	list=[];
}
document.getElementById('toto-ip').addEventListener("keypress",function(event){

	if(event.code === "Enter"){
	var ip=event.target.value;
	var parent_id=document.getElementById('item');
		if(parent_id.childElementCount === 0){
			renderList(event);
		}
		else{
			 for (var i = 0; i < parent_id.childElementCount; i++) {
			 	var parent_node=parent_id.children[i];
				var child_node=parent_node.children[0];
				var child_node_value=child_node.innerText;
				if(child_node_value === event.target.value){
					alert("Alredy Exsist");
					break;
				}
				else if(i !== parent_id.childElementCount-1){
					continue;
				}
				else{
					renderList(event);
					break;
				}
			 }
		}
    }
});

document.getElementById('item').addEventListener("click",function(event) {
//debugger;
		var evtarget=event.target;
		if(evtarget.innerText === "DELETE"){
			deleteNode(evtarget);
		}
		else if (evtarget.innerText === "EDIT"){
			editNode(evtarget);
		}
		else if(evtarget.innerText === "CONFIRM"){
			confirmField(evtarget);
		}
		else if(evtarget.innerText === "CANCEL"){
			cancelField(evtarget);
		}
});

function deleteNode(target){
		document.getElementById('item').removeChild(target.parentNode);
		var p=target.parentNode;
		var c=p.children[0];
		var data=c.innerText;
		deleteList(data);
}


function editNode(etarget){
		var val=etarget.parentNode.children[0].innerText;
		etarget.parentNode.children[1].style.display="inline";
		etarget.parentNode.children[0].style.display="none";
		etarget.parentNode.children[1].value=val;
		etarget.parentNode.children[3].style.display="none";
		etarget.parentNode.children[2].style.display="none";
		etarget.parentNode.children[4].style.display="inline";
		etarget.parentNode.children[5].style.display="inline";	
}

function confirmField(conevent){
		var old=conevent.parentNode.children[0].innerText;
		var ipval=conevent.parentNode.children[1].value;
		conevent.parentNode.children[0].innerText=ipval;
		conevent.parentNode.children[4].style.display="none";
		conevent.parentNode.children[5].style.display="none";
		conevent.parentNode.children[1].style.display="none";
		conevent.parentNode.children[0].style.display="inline";
		conevent.parentNode.children[2].style.display="inline";
		conevent.parentNode.children[3].style.display="inline";

	add_list(ipval,old);
}

function cancelField(canevent){
		canevent.parentNode.children[4].style.display="none";
		canevent.parentNode.children[5].style.display="none";
		canevent.parentNode.children[1].style.display="none";
		canevent.parentNode.children[0].style.display="inline";
		canevent.parentNode.children[2].style.display="inline";
		canevent.parentNode.children[3].style.display="inline";
}
function renderList(event){

		var chars="abcdefghijklmnopqrstuvwxyzzyxwvutsrponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrponmlkjihgfedcba";
		let name=Math.floor(Math.random()*55)+1;
		var sub='';
		var spn='';
		var db='';
		var eb='';
		sub=chars.substring(name,name+5);
		spn=chars.substring(name,name+4);
		db=chars.substring(name+1,name+4);
		db=chars.substring(name+2,name+5);

		var div=document.createElement('div');
		div.setAttribute('id',sub);
		document.getElementById('item').appendChild(div);
	
		var span=document.createElement('span');
		span.setAttribute('id',spn);
		span.innerHTML=event.target.value;
		div.appendChild(span);

		var input=document.createElement('input');
		div.appendChild(input);
		input.style.display="none";
		input.type="text";
		input.value="";

		//document.getElementById('item').appendChild(div);
		document.getElementById('toto-ip').value='';


		var edit=document.createElement("button");
		edit.setAttribute('id',eb);
		edit.innerHTML="EDIT";
		div.appendChild(edit);
		

		var b=document.createElement("button");
		b.setAttribute('id',db);
		b.innerHTML="DELETE";
		div.appendChild(b);

		var confirm=document.createElement("button");
		confirm.innerHTML="CONFIRM";
		confirm.style.display="none";
		div.appendChild(confirm);

		var cancel=document.createElement("button");
		cancel.innerHTML="CANCEL";
		cancel.style.display="none";
		div.appendChild(cancel);
		
		list.push(span.innerHTML);
		localStorage.setItem("data",list);
	
}
function add_list(data,old_data){

	var index=list.indexOf(old_data);
	list[index]=data;
	localStorage.setItem("data",list);
}

function deleteList(data){
	var index=list.indexOf(data);
	list.splice(index,1);
	if(list.length === 0){
		localStorage.clear();
	}
	else{
		localStorage.setItem("data",list);
	}
}


for (var i = 0; i < list.length; i++) {

		var div=document.createElement('div');
		document.getElementById('item').appendChild(div);
	
		var span=document.createElement('span'); 
		//span.innerHTML=event.target.value;
		span.innerHTML=list[i];
		div.appendChild(span);

		var input=document.createElement('input');
		div.appendChild(input);
		input.style.display="none";
		input.type="text";
		input.value="";

		var edit=document.createElement("button");
		edit.innerHTML="EDIT";
		div.appendChild(edit);
		

		var b=document.createElement("button");
		b.innerHTML="DELETE";
		div.appendChild(b);

		var confirm=document.createElement("button");
		confirm.innerHTML="CONFIRM";
		confirm.style.display="none";
		div.appendChild(confirm);

		var cancel=document.createElement("button");
		cancel.innerHTML="CANCEL";
		cancel.style.display="none";
		div.appendChild(cancel);

		var clear=document.createElement("button");
		clear.innerHTML="Clear";
		clear.style.display="none";
		div.appendChild(clear);

		

	}
}
