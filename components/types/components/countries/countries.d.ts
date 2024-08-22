interface country {
    name: string;
    img: string;
    capital: string;
}
export declare class Countries {
    element: HTMLElement;
    componentDidLoad(): void;
    componentWillLoad(): void;
    data: country[];
    loading: boolean;
    getData(): void;
    render(): any;
}
export {};
