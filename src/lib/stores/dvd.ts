import { get, writable, type Writable } from "svelte/store";

class DvdManager {

    mode$: Writable<boolean> = writable(false);

    constructor() {
        if (typeof window === 'undefined') return;        
        const local_mode: string | null = localStorage.getItem("dvd")
        this.mode$.set(local_mode == null ? false : true)
    }   

    get mode() {
        return get(this.mode$)
    }

    toggle() {        
        if (this.mode) {
            this.mode$.set(false);
            localStorage.removeItem("dvd")
        } else {
            this.mode$.set(true)
            localStorage.setItem("dvd", "active")
        }
    }
}

export const global_dvd$ = new DvdManager();