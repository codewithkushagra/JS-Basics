class stopwatch{
    constructor()
    {
        let duration=0,startTime,endTime,flag=0;
        this.start=function(){
            if (flag==0){
                startTime=new Date();
                flag=1;
            }
            else{
                console.log('Clock has already started');
            }
        }
        this.stop=function(){
            if(flag==1)
            {   
                endTime=new Date();
                const second=(endTime.getTime()-startTime.getTime())/1000;
                duration+=second;
                flag=0;
            }
            else{
                console.log('You have not started the watch');
            }
        }
        this.reset=function(){
            endTime=null
            startTime=null
            flag=0;
            duration=0;
        }
        Object.defineProperty(this,'duration',{
            get:function(){
                return duration;
            }
        });

            
    };   

}