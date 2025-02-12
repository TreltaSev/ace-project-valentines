import { base } from '$app/paths';

export function form_url(path: string) {
	return `${base}${path}`;
}

export function form_image(alt: string, src: string, title: string) {
	return {
		alt,
		src,
		title
	};
}

export const images = [
	form_image(
        'Me and my Brother', 
        form_url('/images/brother-1.JPG'), 
        'Brother Image One'
    ),

    form_image(
        'Brother Jumpscare', 
        form_url('/images/brother-2.JPG'), 
        'Brother Image Two'
    ),

    form_image(
        'Disney Trip', 
        form_url('/images/disney-1.JPG'), 
        'Disney Trip Posing'
    ), 
    
    form_image(
        'Disney Trip But on Steroids', 
        form_url('/images/disney-2.jpeg'), 
        'Disney Trip Roller Coaster'
    ),

    form_image(
        'Family Photo', 
        form_url('/images/family-1.JPG'), 
        'Family Photo, Cousins'
    ),

    form_image(
        'Father Photo', 
        form_url('/images/father-1.JPG'), 
        'Picture with Dad 1'
    ),
    form_image(
        'Father Photo', 
        form_url('/images/father-2.JPG'), 
        'Picture with Dad 2'
    ),
];
