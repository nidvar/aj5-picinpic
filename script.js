console.log('pic in pic')
const video = document.getElementById('video')

const the_app = async ()=>{
    try{
        const x = await navigator.mediaDevices.getDisplayMedia();

        video.srcObject = x;

        video.onloadedmetadata = ()=>{
            video.play()
        }

    } catch(error){
        console.log(error)
    }   
}

document.querySelector('button').addEventListener('click',async ()=>{
    document.querySelector('button').disabled = true;

    await video.requestPictureInPicture();

    document.querySelector('button').disabled = false;
})

the_app();