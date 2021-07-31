const app = Vue.createApp({
    data(){
        return{
            title:'Contador App - Vue',
            count: 0,
        };
    },
    methods:{
        modCount(value, limit = 1){
            if(value === 'add'){
                this.count += limit;
            }
            else if(value === 'dis'){
                this.count -= limit;
            }
            else{
                console.log('Por favor no modifique el codigo');
            }
        },


    }
});
