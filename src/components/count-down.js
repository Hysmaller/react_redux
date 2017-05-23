/**
 * Created by huangyu on 2017/5/23.
 */

class CountDown extends React.Component{
    constructor(...args){
        super(...args) ;
        this.state = {
            timeStr:'00:00:00',
            timer:0,
            time:this.props.time,
            isShow:this.props.isShow
        };
    }
    componentDidMount(){
        this.getTime();
        this.state.timer = setInterval(()=>{
            this.getTime()
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.state.timer );
    }
    getTime(){
        let timestamp = (Date.parse(new Date(this.state.time)) - Date.parse(new Date()))/ 1000 ;
        let day = Math.floor(timestamp/(60*60*24)) ;
        let hour = this.checkTime(Math.floor((timestamp - (day*60*60*24))/3600)) ;
        let minute = this.checkTime(Math.floor((timestamp - (day*60*60*24) - (hour*3600))/60)) ;
        let second = this.checkTime(Math.floor(timestamp - (day*60*60*24) - (hour*3600) - (minute*60)))
        if(timestamp <= 0 ){

            clearInterval(this.state.timer );
            this.setState({
                timeStr : '00:00:00',
                isShow : false
            });
            this.props.callbackParent(this.state.isShow)
            return;

        }
        this.setState({
            timeStr : hour +':'+minute+':'+second ,
            isShow:true
        });
    }
    checkTime(time){
        if(time < 10){
            time = '0'+time;
        }else {
            time = time ;
        }
        return time ;
    }
    render(){
        return (
            <div >
                {this.state.timeStr}
            </div>
        )
    }
};
export default CountDown ;