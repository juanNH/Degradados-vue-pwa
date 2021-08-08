const app = Vue.createApp({
    data: () => ({
        title:'Generador de degradados',
        defaultColor:'#000000',
        colors:[],
        ranges:[],
        orientation: 0,
        disabled: 0,
        position: '',
        deg: 0,
        index: 0,
        range: 50,
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
        rangeColor() {
            //  this.colors[index] 
        },
    },
    methods:{
        addColor() { 
            this.colors.push(this.defaultColor)
            this.ranges.push(50+' %')
        },
        delColor() {
            this.colors.pop()   
            this.ranges.pop()
        },
    },
});
