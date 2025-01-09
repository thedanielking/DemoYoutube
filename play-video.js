// watch a video


const videoNumber = Math.floor(Math.random() * 12) + 1;

let videoSource = "./videos/video" + videoNumber + ".mp4";


const video = document.getElementById("video");

video.setAttribute("src", videoSource);



// like and dislike
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
let likeBtn_count = 1;
let dislikeBtn_count = 1;

likeBtn.addEventListener("click", (e)=>{
    let likeCount = document.getElementById("likeCount");

    if(dislikeBtn_count %2 == 0){
        console.log("You cannot dislike and like at the same time")
    }

    else if(dislikeBtn_count %2 !== 0){
        if(likeBtn_count  %2 !== 0){
            likeCount.textContent = Number(likeCount.textContent) + 1;
            likeBtn.setAttribute("src", "./assests/thumbs-up.svg")
        }
        else if(likeBtn_count  %2 == 0){
            likeCount.textContent = Number(likeCount.textContent) - 1;
            likeBtn.setAttribute("src", "./assests/thumbs-up-outline.svg")
        }
    }

  

    likeBtn_count ++;
})


dislikeBtn.addEventListener("click", (e)=>{
    let dislikeCount = document.getElementById("dislikeCount");

    if(likeBtn_count %2 == 0){
        console.log("You cannot Like a post and dislike at the same time")
    }
    else if (likeBtn_count %2 !== 0){
        if(dislikeBtn_count %2 !== 0){
            dislikeCount.textContent = Number(dislikeCount.textContent) + 1;
            dislikeBtn.setAttribute("src", "./assests/thumbs-down.svg")
        }
        else if(dislikeBtn_count %2 == 0){
            dislikeCount.textContent = Number(dislikeCount.textContent) - 1;
            dislikeBtn.setAttribute("src", "./assests/thumbs-down-outline.svg")
        }
    }

    dislikeBtn_count++;
})





// subscribe button
const subscribeBtn = document.getElementById("subscribe-btn");
let click = 1;

subscribeBtn.addEventListener("click", (e)=>{
    
    if(click %2 !== 0){
        e.target.textContent = "Subscribed";
    }
    else if(click %2 == 0){
        e.target.textContent = "Subscribe";
    };

    click++;
})



// get notified
const notification = document.getElementById("notification");
let notification_count = 1;

notification.addEventListener("click", (e)=>{
    if(notification_count % 2 !== 0){
        e.target.setAttribute("src", "./assests/notifications.svg");
    }
    else if(notification_count % 2 == 0){
        e.target.setAttribute("src", "./assests/notifications-outline.svg");
    }
    
    notification_count ++;
})




// go back to the main dashboard
function goBack(){
    window.history.back();
}


// dark theme
const darkBtn = document.getElementsByClassName("nav_avatar");

darkBtn[0].addEventListener("click", (e)=>{
    document.body.classList.toggle("darkTheme");
})





