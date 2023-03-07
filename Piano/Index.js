const volumeSlider=document.querySelector('#volume')

const whiteKeys=document.querySelectorAll('.keys-white')
const blackKeys=document.querySelectorAll('.keys-black')

const whiteKeysArray=Array.from(whiteKeys)
const blackKeysArray=Array.from(blackKeys)

whiteKeysArray.forEach((element)=>{
    const audio=new Audio(`tunes/${element.id}.wav`)

    element.addEventListener('click',()=>{
        audio.volume=volumeSlider.value/100
           audio.play()
    })
})

blackKeysArray.forEach((element)=>{
    const audio=new Audio(`tunes/${element.id}.wav`)

    element.addEventListener('click',()=>{
        audio.volume=volumeSlider.value/100
           audio.play()
    })
})


document.addEventListener('keydown',(e)=>{
    console.log(e.key)

    whiteKeysArray.forEach((element)=>{
        if(element.id==e.key){
            element.click()
        }
    })
    blackKeysArray.forEach((element)=>{
        if(element.id==e.key){
            element.click()
        }
    })

})