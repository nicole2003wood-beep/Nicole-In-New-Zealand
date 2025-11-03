let images = ["BusAtSite", "FlipFlops", "Golf", "HoldingLamb", "LakeSwimming", "Rabbit", "SheepMountain", "SheepShearing", "Snow", "WigglyCloud"];
for (let i = 0; i < images.length; i++) {
  

    let clickImgCount = 0;
    const img = document.getElementById(images[i])


    document.querySelector('#' + images[i]).addEventListener('click', () => {
        clickImgCount++;

        if (clickImgCount % 2 === 0) {

        

            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.25s ease";
            img.style.zIndex = "1";  // Send back
        }
        else {

        
            img.style.transform = "scale(2)";
            img.style.transition = "transform 0.25s ease";
            img.style.zIndex = "10";  // Bring to front when zoomed
        }

    })
}