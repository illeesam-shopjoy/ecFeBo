window.useBoPropStore=Pinia.defineStore("boProp",{state:()=>({svProps:{}}),actions:{saSetProps(s){this.svProps=s||{}},saClear(){this.svProps={}}}});
