const app = Vue.createApp({
    data: () => ({
        title:'Generador de degradados',
        defaultColor:'#000000',
        colors:[],
        ranges:[],
        codigo:[],
        type: 2,
        linear:{
            orientation: 0,
            disabled: 0,
            position: '',
            deg: 0,
        },
        radial:{
            width:50,
            height:50,
            posX:50,
            posY:50,
        },
    }),
    computed: {
        colorLineal(){
            if(this.linear.disabled == 1) {
                if(this.linear.orientation == 1) {
                    this.linear.position = 'to right';
                }else if(this.linear.orientation == 2) {
                    this.linear.position = 'to left';
                }else if(this.linear.orientation == 3) {
                    this.linear.position = 'to top';
                }else if(this.linear.orientation == 4) {
                    this.linear.position = 'to bottom';
                }
            }else{
                this.linear.position = this.linear.deg+'deg'
            }
            for (let i = 0; i < this.colors.length; i++){
                this.codigo[i] = this.colors[i] +' '+ this.ranges[i] +'%'
            }
            return `background:linear-gradient(${this.linear.position}, ${this.codigo} );`; 
        },
        colorRadial(){
            for (let i = 0; i < this.colors.length; i++){
                this.codigo[i] = this.colors[i] +' '+ this.ranges[i] +'%'
            }
            return `background:radial-gradient(${this.radial.width}% ${this.radial.height}% at ${this.radial.posX}% ${this.radial.posY}%, ${this.codigo} );`; 

        },
        colorConico(){

        },
        // radial-gradient(50% 50% at 50% 50%)${this.linear.position}
    },
    methods:{
        addColor() { 
            this.colors.push(this.defaultColor)
            this.ranges.push(50)
        },
        delColor() {
            this.colors.pop()   
            this.ranges.pop()
            this.codigo.pop()
        },
    },
});
