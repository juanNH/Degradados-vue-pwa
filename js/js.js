const app = Vue.createApp({
    data: () => ({
        title:'Generador de degradados',
        defaultColor3:'#000000',
        defaultColor2:'#ff0000',
        defaultColor:'#000000',
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
            return `background:linear-gradient(${this.position}, ${this.defaultColor}, ${this.defaultColor2});`;
        },
    },
    methods:{
        addColor() {
                this.colors.push('#000000')
        },
        delColor() {
                 this.colors.pop()     
        },
    },
});
