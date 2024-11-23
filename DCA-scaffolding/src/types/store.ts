export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	products: any[];
	currentProduct: {  
        id: string | null;
        title: string;
        date: string;
        location: number;
        image: string;
        attendees: number;
    } | null;
	
	
	
};

export enum Screens {
	'ADMIN' = 'ADMIN',
	'USER' = 'USER',
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'GETPRODUCTS' = 'GETPRODUCTS',
}