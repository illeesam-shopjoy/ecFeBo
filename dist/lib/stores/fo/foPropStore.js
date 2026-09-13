window.useFoPropStore=Pinia.defineStore("foProp",{state:()=>({svProps:{}}),actions:{saSetProps(s){this.svProps=s||{}},saClear(){this.svProps={}}}});
