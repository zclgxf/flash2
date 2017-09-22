/*-------------------------------工具方法---------------------------*/
/**
 id: 元素ID；
 tag:标签
*/
function getTag(id, tag){
	if(!tag){
		return document.getElementById(id);
	}else{
		return document.getElementById(id).getElementsByTagName(tag);
	}
}
/**删除class
   obj: DOM对象；
   cls: class名称
*/
function delCls(obj, cls){
	if(obj.className == '')  return;
	var arr = obj.className.split(' ');
	for(var i=0; i<arr.length; i++){
		if(arr[i] == cls){
			arr.splice(i,1);
		}
	}
	obj.className = arr.join(' ');
}
/**增加class
   obj: DOM对象；
   cls: class名称
*/
function addCls(obj, cls){
	var arr = obj.className.split(' ');
	for(var i=0;i<arr.length; i++){
		if(arr[i] == cls) return;
	}
	obj.className += ' '+cls;
}