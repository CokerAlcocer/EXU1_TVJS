
let config = {
    status: false,
    channel: 7,
    volume: 3,
    mute: false
}
let auxVolume = 0;

const turnTV = () => {
    if(!config.status) {
        config.status = !config.status;
    } else {
        config = {
            status: !config.status,
            channel: 7,
            volume: 3,
            mute: false
        } 
    }

    printData();
}

const volumeUp = () => {
    if(config.status) {
        if(!config.mute) {
            if(config.volume < 10) {
                config.volume += 1;
            } else {
                console.log(`El volúmen está al máximo`);
            }
        } else {
            config.mute = !config.mute;
            config.volume = auxVolume;
        }
    } else {
        console.log(`La TV está apagada`);
    }

    printData();
}

const volumeDown = () => {
    if(config.status) {
        if(!config.mute) {
            if(config.volume > 0) {
                config.volume -= 1;
            } else {
                console.log(`El volúmen está al mínimo`);
            }   
        } else {
            config.mute = !config.mute;
            config.volume = auxVolume;
        }
    } else {
        console.log(`La TV está apagada`);
    }

    printData();
}

const channelUp = () => {
    if(config.status) {
        if(config.channel < 100) {
            config.channel += 1;
        } else {
            console.log(`El canal está al máximo`);
        }
    } else {
        console.log(`La TV está apagada`);
    }

    printData();
}

const channelDown = () => {
    if(config.status) {
        if(config.channel > 0) {
            config.channel -= 1;
        } else {
            console.log(`El canal está al mínimo`);
        }
    } else {
        console.log(`La TV está apagada`);
    }

    printData();
}

const mute = () => {
    if(config.status) {
        if(!config.mute) {
            config.mute = !config.mute;
            auxVolume = config.volume;
            config.volume = 0;
            console.log(`TV muteada`);
        } else {
            config.mute = !config.mute;
            config.volume = auxVolume;
            console.log(`TV con sonido`);
        }
    } else {
        console.log(`La TV está apagada`);
    }

    printData();
}

const printData = () => {
    console.log(`estado: ${config.status ? "Encendida" : "Apagada"}\ncanal: ${config.channel}\nvolúmen: ${config.volume}\nmute: ${config.mute ? "Muteada" : "Con volumen"}`);
}

printData();
