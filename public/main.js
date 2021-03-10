const form = document.getElementById('vote-form');

form.addEventListener('submit', e=>{

    const choice = document.querySelector('input[name=os]:checked').value;
    const data = {os : choice};

    fetch('http://localhost:3000/poll',{
        method : 'post',
        body : JSON.stringify(data),
        headers : new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res =>res.json())
    .then(Data =>{
        console.log(`User Made a Choice : ${data.os} !`);
        console.log(Data);
    })
    .catch(err =>{
        console.log(`Error Occurred : ${err}`);
    })

    // e.preventDefault();
});

fetch('http://localhost:3000/poll')
.then(res => res.json())
.then(data =>{
    const votes = data.votes;
    const totalVotes = votes.length;
    
    // To Count the vote points : 
   const voteCounts = votes.reduce((acc, vote) => (
            (acc[vote.os] = (acc[vote.os] || 0) + parseInt(vote.points)), acc),
            {});

    let dataPoints = [
    {
        label : 'Windows', y : voteCounts.Windows
    },
    {
        label : 'Macos', y : voteCounts.Macos
    },
    {
        label : 'Linux', y : voteCounts.Linux
    },
    {
        label : 'Others', y : voteCounts.Others
    }
];

const chartContainer =  document.querySelector('#chartContainer');
if(chartContainer){
    const chart = new CanvasJS.Chart('chartContainer', {
        animationEnable : true,
        theme : 'theme2',
        title : {
            text : `Live Poll Results (Total Vote : ${totalVotes})`
        },
        data : [
            {
                type : 'column',
                dataPoints : dataPoints
            }
        ]  
    });
    chart.render();
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('c0d567a8dd6b88cd244d', {
      cluster: 'ap2',
      encrypted : true
    });

    var channel = pusher.subscribe('get-poll');
    channel.bind('get-vote', function(data) {
    //   alert(JSON.stringify(data));
        dataPoints = dataPoints.map(x=>{
            if(x.label ==  data.os){
                x.y += data.points;
                return x;
            }else{
                return x;
            }
        });
        chart.render();
    });

}
});

