const app = Vue.createApp({
    data: () => ({
        title:'Generador de degradados',
        defaultColor:'#000000',
        color1:'#ff0000',
        color2:'#000000',
        colors:[],
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
            return `background:linear-gradient(${this.position}, ${this.colors});`;
        },
    },
    methods:{
        addColor() {
                this.colors.push(this.defaultColor)
        },
        delColor() {
                 this.colors.pop()     
        },
        coloresCant() {
            for(let i=0; i<colors.length;i++) {

            }
        }
    },
});
