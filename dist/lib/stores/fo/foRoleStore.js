window.useFoRoleStore=Pinia.defineStore("foRole",{state:()=>({svRoles:[]}),actions:{saSetRoles(e){this.svRoles=e||[]},saClear(){this.svRoles=[]}}});
