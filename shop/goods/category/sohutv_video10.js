var json =[{
	"index": 1,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 5000
},{
	"index": 2,
	"method": "callJSmethodOld",
	"params": "playCardVideo",
	"clickRate": 100,
	"delay": 5000
}, {
	"index": 3,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 10000
},{
	"index": 4,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 50000
},{
	"index": 5,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 50000
},{
	"index": 6,
	"method": "callJSmethodOld",
	"params": "playCardVideo2",
	"clickRate": 100,
	"delay": 5000
},{
	"index": 7,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 30000
},{
	"index": 8,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 30000
},{
	"index": 9,
	"method": "slide",
	"params": "50,130",
	"clickRate": 100,
	"delay": 5000
},{
	"index": 9,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 15000
},{
	"index": 10,
	"method": "callJSmethodOld",
	"params": "playCardVideo",
	"clickRate": 100,
	"delay": 8000
},{
	"index": 11,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 30000
},{
	"index": 12,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 80000
},{
	"index": 13,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 80000
},{
	"index": 14,
	"method": "callJSmethodOld",
	"params": "playOther",
	"clickRate": 100,
	"delay": 10000
},{
	"index": 15,
	"method": "callJSmethodOld",
	"params": "playAd",
	"clickRate": 100,
	"delay": 10000
},{
	"index": 16,
	"method": "slide",
	"params": "50,130",
	"clickRate": 100,
	"delay": 55000
},{
	"index": 17,
	"method": "slide",
	"params": "50,230",
	"clickRate": 100,
	"delay": 55000
},{
	"index": 18,
	"method": "slide",
	"params": "50,330",
	"clickRate": 100,
	"delay": 15000
},{
	"index": 19,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 10000
},{
	"index": 20,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 55000
},{
	"index": 21,
	"method": "onPageClick",
	"params": "60,420,1",
	"clickRate": 100,
	"delay": 10000
},{
	"index": 22,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 55000
},{
	"index": 23,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 55000
},{
	"index": 24,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 55000
},{
	"index": 25,
	"method": "delayExecute",
	"params": "",
	"clickRate": 100,
	"delay": 55000
},{
	"index": 26,
	"method": "onPageClick",
	"params": "60,420,2",
	"clickRate": 100,
	"delay": 10000
}
]
 var str = JSON.stringify(json);
 WebSdk.print(str); 
 WebSdk.execute();
 
 function playCardVideo(){
	 console.log("----start--palyCardVideo---------");
	 var poster=document.querySelector(".x-play-btn");
	 if(poster!=null){
		 poster.click();
		 
		//10 second checked ad  
		setTimeout(function () {
			playAd();
		},10000); 
	 }
	 console.log("----end--palyCardVideo---------");
 }
 
 function playCardVideo2(){
	 console.log("----start--palyCardVideo2---------");
	 var poster=document.querySelectorAll(".center_control")[0];
	 if(poster!=null){
		 poster.click();
		 poster.children[0].click();
		 console.log("----end--palyCardVideo2---------");
	 }
 }
 
 function playOther(){
	 console.log("----start--playOther---------");
	 var poster=document.querySelectorAll(".website_operators")[0];
	 if(poster!=null){
		 poster.click();
		 poster.children[0].click();
		 console.log("----end--playOther---------");
	 }
 }
 
 
 function playAd(){
	 console.log("----start--x-ad-link---------");
	 var poster=document.querySelectorAll(".x-ad-link")[0];
	 if(poster!=null){
		 poster.click();
		 console.log("----end--x-ad-link---------");
	 } 
 }
 
 function playAd2(){
	 console.log("----start-playAd2---------");
	 var poster=document.querySelector("#banner_15068");
	 if(poster!=null){
		 poster.children[0].click();
		 console.log("----end--playAd2--------");
	 } 
 }
