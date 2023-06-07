
let config = {
    status: false,
    channel: 7,
    volume: 3,
    mute: false
}
let auxVolume = 0;

console.log(config);

const turnTV = () => {
    if(!config.status) {
        config.status = !config.status;
        console.log(`TV encendida - status: ${config.status}`);
    } else {
        config = {
            status: !config.status,
            channel: 7,
            volume: 3,
            mute: false
        } 
        console.log(`TV apagada - status: ${config.status}`);
    }
    console.log(config);
}

const volumeUp = () => {
    if(config.status) {
        if(!config.mute) {
            if(config.volume < 10) {
                config.volume += 1;
                console.log(`Volúmen: ${config.volume}`);
            } else {
                console.log(`El volúmen está al máximo - status: ${config.volume}`);
            }
        } else {
            console.log(`La TV está muteada - mute: ${config.mute}`);
        }
    } else {
        console.log(`La TV está apagada - status: ${config.status}`);
    }
    console.log(config);
}

const volumeDown = () => {
    if(config.status) {
        if(!config.mute) {
            if(config.volume > 0) {
                config.volume -= 1;
                console.log(`Volúmen: ${config.volume}`);
            } else {
                console.log(`El volúmen está al mínimo - status: ${config.volume}`);
            }   
        } else {
            console.log(`La TV está muteada - mute: ${config.mute}`);
        }
    } else {
        console.log(`La TV está apagada - status: ${config.status}`);
    }
    console.log(config);
}

const channelUp = () => {
    if(config.status) {
        if(config.channel < 100) {
            config.channel += 1;
            console.log(`Canal: ${config.channel}`);
        } else {
            console.log(`El canal está al máximo - status: ${config.channel}`);
        }
    } else {
        console.log(`La TV está apagada - status: ${config.status}`);
    }
    console.log(config);
}

const channelDown = () => {
    if(config.status) {
        if(config.channel > 0) {
            config.channel -= 1;
            console.log(`Canal: ${config.channel}`);
        } else {
            console.log(`El canal está al mínimo - status: ${config.channel}`);
        }
    } else {
        console.log(`La TV está apagada - status: ${config.status}`);
    }
    console.log(config);
}

const mute = () => {
    if(config.status) {
        if(!config.mute) {
            config.mute = !config.mute;
            auxVolume = config.volume;
            config.volume = 0;
            console.log(`TV muteada - volume: ${config.volume}`);
        } else {
            config.mute = !config.mute;
            config.volume = auxVolume;
            console.log(`TV con sonido - volume: ${config.volume}`);
        }
    } else {
        console.log(`La TV está apagada - status: ${config.status}`);
    }
    console.log(config);
}
