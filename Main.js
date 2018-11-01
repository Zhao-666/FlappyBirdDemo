import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";

export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas')
        this.ctx = this.canvas.getContext('2d')
        const loader = ResourceLoader.create()
        loader.onLoaded(map => this.onResourceFirstLoading(map))
    }

    onResourceFirstLoading(map) {
        let background = new BackGround(this.ctx, map.get('background'))
        background.draw()
    }
}