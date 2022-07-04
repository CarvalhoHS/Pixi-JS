    // Create the application helper and add its render target to the page
    let app = new PIXI.Application({ width: 800, height: 600 , backgroundColor: 0x1099bb , resolution: window.devicePixelRatio || 1,});
    document.body.appendChild(app.view);

    const container = new PIXI.Container();

    app.stage.addChild(container);

    // Create a new texture
    const Mage = PIXI.Texture.from('PICKS/MAGO.png');
    const Warlock = PIXI.Texture.from('PICKS/BRUXO.png');
    const Hunter = PIXI.Texture.from('PICKS/CAÇADOR.png');
    const DH = PIXI.Texture.from('PICKS/DEMONHUNTER.png');
    const Druid = PIXI.Texture.from('PICKS/DRUIDA.png');
    const Warrior = PIXI.Texture.from('PICKS/GUERREIRO.png');
    const Rogue = PIXI.Texture.from('PICKS/Ladino.png');
    const Priest = PIXI.Texture.from('PICKS/PADRRE.png');
    const Paladin = PIXI.Texture.from('PICKS/PALA.png');
    const Shaman = PIXI.Texture.from('PICKS/SHAMAN.png');

    // Create a 5x5 grid of bunnies
    const Mago = new PIXI.Sprite(Mage);
    container.addChild(Mago);
    Mago.width = 100
    Mago.height = 50


// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;