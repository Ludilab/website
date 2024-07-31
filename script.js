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