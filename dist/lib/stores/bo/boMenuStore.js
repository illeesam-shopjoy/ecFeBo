window.useBoMenuStore=Pinia.defineStore("boMenu",{state:()=>({svMenus:[]}),actions:{saSetMenus(e){this.svMenus=e||[]},saClear(){this.svMenus=[]}}});
