const app = Vue.createApp({
    data: () => ({
        title:'Generador de degradados',
        color1:'#000000',
        color2:'#000000',
        orientation: 4,
        position: 'to right',
    }),
    computed: {
        setColor(){
            if(this.orientation == 1) {
                this.position = 'to right';
            }else if(this.orientation == 2) {
                this.position = 'to left';
            }else if(this.orientation == 3) {
                this.position = 'to top';
            }else {
                this.position = 'to bottom';
            }
            return `background:linear-gradient(${this.position}, ${this.color2}, ${this.color1});`;
        },
    },
});
