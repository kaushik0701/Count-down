const endDate="07 December 2022 01:59 AM";
//const passed = "We have visted. Please wait for next time.";

document.getElementById("end-date").innerText=endDate;
const inputs = document.querySelectorAll("input");

const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    //milisecond-->sec

    if(diff<0){
        document.getElementById("text-change").innerText = "We have visted. Please wait for next time.";
        return;
    }

    inputs[0].value = Math.floor(diff/(24*60*60));
    inputs[1].value =Math.floor(diff/3600)%24;
    inputs[2].value =Math.floor(diff/60)%60;
    inputs[3].value =Math.floor(diff)%60;
    // convert into days -->1d=24h=24*60min=24*60*60sec

}

setInterval(
    ()=>{
        clock();
    },
    1000
)