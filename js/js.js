const app = Vue.createApp({
    data: () => ({
        title:'Generador de degradados',
        defaultColor:'#000000',
        colors:[],
        orientation: 0,
        disabled: 0,
        position: 0,
        deg:0,
    }),
    computed: {
        setColor(){
            if(this.disabled == 1) {
                if(this.orientation == 1) {
                    this.position = 'to right';
                }else if(this.orientation == 2) {
                    this.position = 'to left';
                }else if(this.orientation == 3) {
                    this.position = 'to top';
                }else if(this.orientation == 4) {
                    this.position = 'to bottom';
                }
            }else{
                this.position = 0
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
        addDeg() {

        }
    },
});
