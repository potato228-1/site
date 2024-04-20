// Advantages

let b = 1;
let advantagesList = document.querySelector('.advantages_list');
let advantagesImg = document.querySelector('.advantages_img_container');

advantagesList.addEventListener('mouseover', (event) => {
    if(event.target.closest('.advantages_item')){
        if(event.target.closest('.advantages_item').classList.contains('item1')){
            b = 1;
            document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
            event.target.closest('.advantages_item').classList.add('currentAdvantage');
            advantagesImg.style.backgroundImage = `url('Pictures/Advantages/pic${b}.jpg')`;
        }
        if(event.target.closest('.advantages_item').classList.contains('item2')){
            b = 2;
            document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
            event.target.closest('.advantages_item').classList.add('currentAdvantage');
            advantagesImg.style.backgroundImage = `url('Pictures/Advantages/pic${b}.jpg')`;
        }
        if(event.target.closest('.advantages_item').classList.contains('item3')){
            b = 3;
            document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
            event.target.closest('.advantages_item').classList.add('currentAdvantage');
            advantagesImg.style.backgroundImage = `url('Pictures/Advantages/pic${b}.jpg')`;
        }
        if(event.target.closest('.advantages_item').classList.contains('item4')){
            b = 4;
            document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
            event.target.closest('.advantages_item').classList.add('currentAdvantage');
            advantagesImg.style.backgroundImage = `url('Pictures/Advantages/pic${b}.jpg')`;
        }
        else{
            document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
            event.target.closest('.advantages_item').classList.add('currentAdvantage');
        }
    } else return;
})

setInterval(() => {
    if(b > 6){
        b = 1;
    }
    if(b == 1){
        document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
        document.querySelector('.item1').classList.add('currentAdvantage');
        advantagesImg.style.backgroundImage = `url('Pictures/Advantages/pic${b}.jpg')`;
    }
    if(b == 2){
        document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
        document.querySelector('.item2').classList.add('currentAdvantage');
        advantagesImg.style.backgroundImage = `url('Pictures/Advantages/pic${b}.jpg')`;
    }
    if(b == 3){
        document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
        document.querySelector('.item3').classList.add('currentAdvantage');
        advantagesImg.style.backgroundImage = `url('Pictures/Advantages/pic${b}.jpg')`;
    }
    if(b == 4){
        document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
        document.querySelector('.item4').classList.add('currentAdvantage');
        advantagesImg.style.backgroundImage = `url('Pictures/Advantages/pic${b}.jpg')`;
    }
    if(b == 5){
        document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
        document.querySelector('.item5').classList.add('currentAdvantage');
    }
    if(b == 6){
        document.querySelector('.currentAdvantage').classList.remove('currentAdvantage');
        document.querySelector('.item6').classList.add('currentAdvantage');
    }
    b += 1;
}, 2000)



// Products 

let pictureContainer = document.querySelector('.products_picture_container');
let optionsList = document.querySelector('.products_options');
let i = 2;


setInterval(() => {
    if(i > 3){
        i = 1;
        return;
    } else{
        pictureContainer.style.background = `url('Pictures/Products/pic${i}.jpg') no-repeat`;
        pictureContainer.style.backgroundSize = 'cover';
        pictureContainer.style.backgroundPosition =' 50% center';
        if(i == 1){
            document.querySelector('.currentDescription').classList.remove('currentDescription');
            document.querySelector('.description1').classList.add('currentDescription');
            document.querySelector('.currentOption').classList.remove('currentOption');
            document.querySelector('.option1').classList.add('currentOption');
        }
        if(i == 2){
            document.querySelector('.currentDescription').classList.remove('currentDescription');
            document.querySelector('.description2').classList.add('currentDescription');
            document.querySelector('.currentOption').classList.remove('currentOption');
            document.querySelector('.option2').classList.add('currentOption');
        }
        if(i == 3){
            document.querySelector('.currentOption').classList.remove('currentOption');
            document.querySelector('.option3').classList.add('currentOption');
        }
        i += 1;
        return;
    }
}, 2000);

optionsList.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('products_option')){
        if(event.target.classList.contains('option1')){
            i = 1;
            pictureContainer.style.background = `url('Pictures/Products/pic${i}.jpg') no-repeat`;
            pictureContainer.style.backgroundSize = 'cover';
            pictureContainer.style.backgroundPosition =' 50% center';
            document.querySelector('.currentOption').classList.remove('currentOption');
            event.target.classList.add('currentOption');
            document.querySelector('.currentDescription').classList.remove('currentDescription');
            document.querySelector('.description1').classList.add('currentDescription');
        }
        else if(event.target.classList.contains('option2')){
            i = 2;
            pictureContainer.style.background = `url('Pictures/Products/pic${i}.jpg') no-repeat`;
            pictureContainer.style.backgroundSize = 'cover';
            pictureContainer.style.backgroundPosition =' 50% center';
            document.querySelector('.currentOption').classList.remove('currentOption');
            event.target.classList.add('currentOption');
            document.querySelector('.currentDescription').classList.remove('currentDescription');
            document.querySelector('.description2').classList.add('currentDescription');
        }
        else if(event.target.classList.contains('option3')){
            i = 3;
            pictureContainer.style.background = `url('Pictures/Products/pic${i}.jpg') no-repeat`;
            pictureContainer.style.backgroundSize = 'cover';
            pictureContainer.style.backgroundPosition =' 50% center';
            document.querySelector('.currentOption').classList.remove('currentOption');
            event.target.classList.add('currentOption');
        }
        else{
            document.querySelector('.currentOption').classList.remove('currentOption');
            event.target.classList.add('currentOption');
        }
    } else return;
});