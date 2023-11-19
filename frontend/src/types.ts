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

export type TypeSocialImgItems = {
    file_name: string,
    alt: string,
};

export type TypePreviewSliderItems = {
    file_name: string,
    alt: string,
};

export type TypeFeaturesItems = {
    file_name: string,
    alt: string,
};

export type TypeSpecificationItems = {
    value: string,
    descriptyon: string,
}

export type TypeDetailItems = {
    parameter: string,
    description: string,
};