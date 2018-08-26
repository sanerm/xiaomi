window.onload=function(){

	let shop=document.getElementsByClassName("shopping")[0];
	let shopone=document.getElementsByClassName("shopbox")[0];
	/*console.log(shop,shopone);*/


	function abc(car,cat){
		car.onmouseenter=function(){
			cat.style.height="100px";
			cat.style.boxShadow="0px 3px 3px 3px rgba(0, 0, 0, 0.3)";
		}
		car.onmouseleave=function(){
			cat.style.height="0px";
			cat.style.boxShadow="none";
		}
	}
	abc(shop,shopone);




	let li1s=document.getElementsByClassName("li1s");
	let li2s=document.getElementsByClassName("asideBox");
	/*console.log(li1s,li2s);*/
	function abd(box1,box2){
		for(let i=0;i<box1.length;i++){
			box1[i].onmouseenter=function(){
				
				box2[i].style.display="block";
			}
			box1[i].onmouseleave=function(){
				
				box2[i].style.display="none";
			}
		}
	}
	abd(li1s,li2s);


	let top_right=document.getElementsByClassName("top_right")[0];
	let h2s=top_right.getElementsByClassName("li3s");
	let mBox_right=document.getElementsByClassName("mBox_right")[0];
	let jd2s=mBox_right.getElementsByClassName("active");
	console.log(mBox_right,jd2s);
	function fn(section,code){
		for(let i=0;i<section.length;i++){
		section[i].onmouseenter=function(){
			for(let j=0;j<code.length;j++){
				code[j].style.zIndex="0";
				}
			code[i].style.zIndex="10";
			}
		}
	}
	fn(h2s,jd2s);







	let img1s=document.getElementsByClassName("img1");
	/*console.log(img1s);*/
	let li4s=document.getElementsByClassName("li4");
	/*console.log(li4s[1]);*/
	let luobo1=document.getElementsByClassName("banner")[0];
	/*console.log(luobo1);*/
	let lbleft=document.getElementsByClassName("prev_box")[0];
	let lbright=document.getElementsByClassName("next_box")[0];

	function xiaomi(img,li,luobo,left,right){

		let num=0;
		let num1=img.length-1;
		function move(){
			for(let i=0;i<img.length;i++){
				img[i].style.zIndex="0";
				li[i].className="li4";

			}
			img[num].style.zIndex="10";
			li[num].className="li4 active";

			num++;
			if(num==img.length){
				num=0;
			}
		}
		
		function movel(){
			for(let i=img.length-1;i>=0;i--){
				img[i].style.zIndex="0";
				li[i].className="li4";

			}
			img[num1].style.zIndex="10";
			li[num1].className="li4 active";

			num1--;
			if(num1==-1){
				num1=img.length-1;
			}
		}
		let t=setInterval(move,1000);
		luobo.onmouseenter=function(){
			clearInterval(t);
		}
		luobo.onmouseleave=function(){
			t=setInterval(move,1000);
		}


		right.onclick=function(){
			move();
		}
		left.onclick=function(){
			movel();
		}
		for(let j=0;j<li.length;j++){
			li[j].onclick=function(){
			for(let i=0;i<li.length;i++){
				li[i].className="li4";
				img[i].style.zIndex="0";
				
				}
				li[j].className="li4 active";
				img[j].style.zIndex="10";

			}
		}


	}
	xiaomi(img1s,li4s,luobo1,lbleft,lbright);








	let img2s=document.querySelectorAll(".smilebox1");
	
	
	let luobo2=document.querySelector(".combox1");
	let li5s=document.querySelectorAll(".li5");
	let lbleft1=document.querySelector(".listprev1");
	let lbright1=document.querySelector(".listnext1");
	console.log(luobo2);
	xiaoai(img2s,luobo2,li5s,lbleft1,lbright1);

	function xiaoai(img1,luobo1,li1,left1,right1){
		let now=0;
		let next=0;
		let flag=true;
		function run(){
			next++;

			if(next>=img1.length){
				next=0;
				}
			img1[next].style.left="992px";
			animate(img1[now],{left:-992});
			
			animate(img1[next],{left:0},function(){
				flag=true;
			});
			
			
			li1[now].className="li5";
			li1[next].className="li5 active";


			now=next;


			
			

		}
		
		function run1(){
			next--;
			if(next<0){
				next=img1.length-1;
			}
			img1[next].style.left="-992px";
			
			animate(img1[now],{left:992});
			animate(img1[next],{left:0},function(){
				flag=true;
			});
			
			
			li1[now].className="li5";
			li1[next].className="li5 active";
			now=next;

		}
		/*let x=setInterval(run,2500);
		luobo1.onmouseenter=function(){
			clearInterval(x);
		}
		luobo1.onmouseleave=function(){
			x=setInterval(run,2500);
		}*/
		right1.onclick=function(){
			if(flag==false){
				return;
			}
			if(next==img1.length-1){
				return;
			}
			run();
			flag=false;
		}
		left1.onclick=function(){
			if(flag==false){
				return;
			}
			if(next==0){
				return;
			}
			run1();
			flag=false;
		}
		for(let j=0;j<li1.length;j++){
			li1[j].onclick=function(){
				
				if(now==j){
					return;
				}else if(now>j){
					if(flag==false){
						return;
					}
					img1[j].style.left="-992px";
					animate(img1[now],{left:992});
					
					animate(img1[j],{left:0},function(){
						flag=true;
					});
					
					li1[now].className="li5";
					li1[j].className="li5 active";
					flag=false;


					
				}else{
					if(flag==false){
						return;
					}
					img1[j].style.left="992px";
					animate(img1[now],{left:-992});
					
					animate(img1[j],{left:0},function(){
						flag=true;
					});
					
					li1[now].className="li5";
					li1[j].className="li5 active";
					flag=false;
				}
				next=now=j;
			}
		}



	}
	let img3s=document.querySelectorAll(".smilebox2");
	
	
	let luobo3=document.querySelector(".combox2");
	let li6s=document.querySelectorAll(".li6");
	let lbleft2=document.querySelector(".listprev2");
	let lbright2=document.querySelector(".listnext2");
	
	xiaoai(img3s,luobo3,li6s,lbleft2,lbright2);






	let img4s=document.querySelectorAll(".smilebox3");
	
	
	let luobo4=document.querySelector(".combox3");
	let li7s=document.querySelectorAll(".li7");
	let lbleft3=document.querySelector(".listprev3");
	let lbright3=document.querySelector(".listnext3");
	
	xiaoai(img4s,luobo4,li7s,lbleft3,lbright3);



	let img5s=document.querySelectorAll(".smilebox4");
	
	
	let luobo5=document.querySelector(".combox4");
	let li8s=document.querySelectorAll(".li8");
	let lbleft4=document.querySelector(".listprev4");
	let lbright4=document.querySelector(".listnext4");
	console.log(luobo2);
	xiaoai(img5s,luobo5,li8s,lbleft4,lbright4);
	
	
}


