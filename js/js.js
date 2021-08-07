const app = Vue.createApp({
    data: () => ({
        title:'Generador de degradados',
        color1:'#000000',
        color2:'#000000',
    }),
    computed: {
        setColor(){
            return `background:linear-gradient(to right, ${this.color1}, ${this.color2});width:100%;height:300px;`;
        },
    },
});
