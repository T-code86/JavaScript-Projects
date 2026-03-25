const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const redValuespan = document.getElementById("redValue");
const greenValuespan = document.getElementById("greenValue");
const blueValuespan = document.getElementById("blueValue");

const colorBox = document.getElementById("color-box");
const copyButton = document.getElementById("copyButton");
const inputTypeRGBValue = document.getElementById("inputType");

redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyButton.addEventListener('click',copyRGBValue);

function updateColor() {

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    //console.log(redValue,greenValue,blueValue);

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    //console.log(rgbColor);

    colorBox.style.backgroundColor = rgbColor;

    redValuespan.textContent = redValue;
    greenValuespan.textContent = greenValue;
    blueValuespan.textContent = blueValue;

    inputTypeRGBValue.textContent = rgbColor;
}

updateColor();




function copyRGBValue(){

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    navigator.clipboard.writeText(rgbColor)
        .then(()=>{
            alert("RGB Value copied to Clipboard: " + rgbColor);
        })
        .catch((error)=>{
            console.error("Failed to copy RGB values",error);
        });

}