import { get, writable, type Writable } from "svelte/store";

class heartsManager {

    mode$: Writable<boolean> = writable(false);

    constructor() {
        if (typeof window === 'undefined') return;        
        const local_mode: string | null = localStorage.getItem("hearts")
        this.mode$.set(local_mode == null ? false : true)
    }   

    get mode() {
        return get(this.mode$)
    }

    toggle() {        
        if (this.mode) {
            this.mode$.set(false);
            localStorage.removeItem("hearts")
        } else {
            this.mode$.set(true)
            localStorage.setItem("hearts", "active")
        }
    }
}

export const global_hearts$ = new heartsManager();