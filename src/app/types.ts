export type item = {
        id: string;
        name: string;
        shortName: string;
        wikiLink: string;
        iconLink: string;
        url: string;
        updated: string;
        basePrice: any;
        agv24hPrice: any;



}
export type Query = {
    allitems: item[];
}