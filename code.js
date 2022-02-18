var links = [
               "goog", "https://www.google.com",
               "nujabes", "https://www.youtube.com/watch_videos?video_ids=2sML2bq_WGw,8iP3J8jFYdM,7xZY8VJHqU4",
               "nujabesX", "https://www.youtube.com/watch_videos?video_ids=5yYMicbSf98,PEWZL6VPBiA,lX8QVBl-ZG0,0Jg74p6D2iU"
            ];

let loop = null;
loop = setInterval(() => {
    for(let i=0;i<links.length;i++) 
    {
        if(window.location.href.includes(links[i]))
        {
            document.getElementById("text").innerHTML=":)";
            document.getElementById("text1").innerHTML=document.getElementById("text2").innerHTML=document.getElementById("text3").innerHTML=document.getElementById("text4").innerHTML="";

            if(!window.location.href.includes("?safe"))
                window.location.replace(links[i+1]);
            else
                document.getElementById("text").innerHTML=links[i+1];
          
            clearInterval(loop);
        }
    }
}, 500);
