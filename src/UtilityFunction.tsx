const UtilityFunction = (numberOfSecond: number): Array<number | string> =>{
    
    let hours: number = Math.floor(numberOfSecond / 3600);
    let minutes: number = Math.floor((numberOfSecond - (hours * 3600)) / 60);
    let seconds:number = numberOfSecond - (hours * 3600) - (minutes * 60)

    let formatedHour = hours < 10 ? `0${hours}`: hours;
    let formatedMinute = minutes < 10 ? `0${minutes}`: minutes;
    let formatedSecond = seconds < 10 ? `0${seconds}`: seconds;
    

    return [formatedHour,formatedMinute,formatedSecond];
}


export default UtilityFunction;