export type item = {
        id: string;
        name: string;
        shortName: string;
        wikiLink: string;
        iconLink: string;
        url: string;
        updated: string;


}
export type Query = {
    allitems: item[];
}