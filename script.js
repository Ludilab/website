/*<!-- <section class = "youtube_sect">
<div class = "youtube_test">
    <iframe width="325" height="195"
        src="https://www.youtube.com/embed?listType=playlist&list=UUxXj9ck-alp2vCeql5OCk2A" frameborder="0">
    </iframe>
</div>
<div class = "youtube_test">
    <iframe width="325" height="195"
        src="https://www.youtube.com/embed?listType=playlist&list=UUxXj9ck-alp2vCeql5OCk2A&index=2" frameborder="0">
    </iframe>
</div>
<div class = "youtube_test">
    <iframe width="325" height="195"
        src="https://www.youtube.com/embed?listType=playlist&list=UUxXj9ck-alp2vCeql5OCk2A&index=3" frameborder="0">
    </iframe>
</div>
<div class = "youtube_test">
    <iframe width="325" height="195"
        src="https://www.youtube.com/embed?listType=playlist&list=UUxXj9ck-alp2vCeql5OCk2A&index=4" frameborder="0">
    </iframe>
</div>
</section> -->
<!-- <section class="section_youtube">

/* .section_youtube {
    width: 80%;
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: row;
    margin: auto;
}

.section_youtube .video_youtube {
    margin: auto;
    width: 240px;
    height: 195px;
}

.section_youtube .video_youtube a img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
} */

<!-- <div class="container-item">
            <div class="item">
                <div class="item-image">
                    <img src="./style/images/istockphoto-1178017061-2048x2048.jpg" alt="">
                </div>
                <h3>Actualité 1</h3>
            </div>
            <div class="item">
                <div class="item-image">
                    <img src="./style/images/Godsunchainedimg.jpg" alt="">
                </div>
                <h3>Actualité 1</h3>
            </div>
            <div class="item">
                <div class="item-image">
                    <img src="./style/images/istockphoto-1178017061-2048x2048.jpg" alt="">
                </div>
                <h3>Actualité 1</h3>
            </div>
            <div class="item">
                <div class="item-image">
                    <img src="./style/images/istockphoto-1178017061-2048x2048.jpg" alt="">
                </div>
                <h3>Actualité 1</h3>
            </div>
        </div>
        <div class="button-voir-plus">
            <a href="">voir plus...</a>
        </div> -->

</section> -->*/


//axios.get("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCxXj9ck-alp2vCeql5OCk2A&maxResults=25&key=AIzaSyBf_DUvHVeeoyxT4UeR8HQjormgszjBFKY%20"), {Headers: {"content-type": "application/json"}}.then((res)=>{console.log(res.data)})

/*let video
const section_youtube=document.getElementsByClassName("section_youtube")[0]
const create_div=(element,classname)=>{
    let div=document.createElement(element)
    div.classList.add(classname)
    return div;
}

const getvideo=async()=>{
    await axios.get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxXj9ck-alp2vCeql5OCk2A&maxResults=10&order=date&type=video&key=AIzaSyBf_DUvHVeeoyxT4UeR8HQjormgszjBFKY"
        ).then((res)=>video=res.data)
    const _slice=video.items.slice(0, 4)
    console.log(_slice)
    const video_youtube=_slice.map(video=>{
        const div=create_div("div", "video_youtube")
        div.innerHTML=` <a href="https://www.youtube.com/watch?v=${video.id.videoId}">
                            <img src="${video.thumbnails.default.url}" alt="">
                        </a>`;
                        return div;
    })
    video_youtube.forEach(video=>section_youtube.appendChild(video))
}
getvideo()*/

let video;
const section_youtube = document.getElementsByClassName("section_youtube")[0];

const create_div = (element, classname) => {
    let div = document.createElement(element);
    div.classList.add(classname);
    return div; // Added return statement
};

const getvideo = async () => {
    const params = {
        part: 'snippet',
        channelId: 'UCxXj9ck-alp2vCeql5OCk2A',
        maxResults: 10,
        order: 'date',
        type: 'video',
        key: 'AIzaSyBf_DUvHVeeoyxT4UeR8HQjormgszjBFKY' // Replace 'YOUR_API_KEY' with your actual API key
    };

    const url = `https://www.googleapis.com/youtube/v3/search?${new URLSearchParams(params)}`;

    await axios.get(url)
        .then((res) => video = res.data);

    const _slice = video.items.slice(0, 4);
    console.log(_slice);
    const video_youtube = _slice.map(video => {
        const div = create_div("div", "video_youtube");
        div.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}">
                <img src="${video.snippet.thumbnails.default.url}" alt="">
            </a>`;
        return div;
    });
    
    video_youtube.forEach(video => section_youtube.appendChild(video));
};

getvideo();