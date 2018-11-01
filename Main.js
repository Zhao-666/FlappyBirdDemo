import {ResourceLoader} from "./js/base/ResourceLoader.js";

export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas')
        this.ctx = this.canvas.getContext('2d')
        const loader = ResourceLoader.create()
        loader.onLoaded(map => this.onResourceFirstLoading(map))
    }

    onResourceFirstLoading(map) {
        console.log(map)
    }
}