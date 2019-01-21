const $element = $('.butterfly-animation');
const imagePath = '/assets/butterfly';
const totalFrames = 5;
const animationDuration = 10000;
const timePerFrame = animationDuration/totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 0;

function step(startTime){
    if(timeWhenLastUpdate===undefined){timeFromLastUpdate = startTime};
    timeFromLastUpdate = startTime-timeWhenLastUpdate;
    console.log(timeWhenLastUpdate);
    if(timeFromLastUpdate > timePerFrame){
        $element.attr('src', imagePath + `/fly00${frameNumber}.png`);
        timeWhenLastUpdate = startTime;
        
        if(frameNumber >= totalFrames){
            frameNumber = 1;
        }else{
            frameNumber = frameNumber+1;
        }
        console.log(frameNumber);
    }

    requestAnimationFrame(step);
}

