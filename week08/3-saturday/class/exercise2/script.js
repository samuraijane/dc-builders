$(()=> {
    console.log("Ready")

    $('form').on("submit", function(e){
        e.preventDefault(); 
        //Pul names
        let heroNamePull = $('#heroName').val();
        console.log(heroNamePull)
        let villianNamePull = $('#villianName').val();
        console.log(villianNamePull);
        //Pass through classes
        h = new Hero(heroNamePull);
        h.heroIntro();
        // v = new Villian(villianNamePull);
        // v.villianIntro();
        //Pass thorugh wepaon class
        let weaponH = $('#weaponChoiceH option:selected').text();
        console.log(weaponH);
        w1 = new Weapon(weaponH);
        let weaponV = $('#weaponChoiceV option:selected').text();
        console.log(weaponV);
        w2 = new Weapon(weaponV);
        });

});
    function ButtonClicked() {
        $('#formsubmitbutton').hide();
        $('#formElem').hide();
        $('#buttonreplacement').show(); 
        $('#buttonreplacement').append(
            `<h2>YOUR HERO</h2>
            <img src="img/sVen.jpg" alt="loading...">
            <p>Weapon Choice: ${$('#weaponChoiceH option:selected').text()}</p>
            <h1>VS.</h1>
            <h2>YOUR VILLIAN</h2>
            <img src="img/dragon-legendary-creature-sea-serpent-art-creatures-png-clip-art.png" alt="loading...">
            <p>Weapon Choice: ${$('#weaponChoiceV option:selected').text()}</p>`)

    };


