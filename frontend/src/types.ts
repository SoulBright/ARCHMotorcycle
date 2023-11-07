export type TypeMenu = {
    id: number;
    title: string;
    url: string;
    serial_number: number;
};

export type TypeSocialItems = {
    id: number;
    title: string;
    svg: JSX.Element;
    url: string;
};

export type TypeComponentSliderItems = {
    id: number;
    title: string;
    content: string;
    file_name: string;
};

export type TypeBespokeSliderItems = {
    sl_number: number,
    file_name: string,
    alt: string,
    selectList: TypeDetailSliderItems[],
};

export type TypeDetailSliderItems = {
    sl_number: number,
    file_name: string,
    alt: string,
};