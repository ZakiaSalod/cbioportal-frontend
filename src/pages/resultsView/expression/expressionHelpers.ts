import * as _ from 'lodash';

export type ExpressionStyle = {
    typeName: string;
    symbol: string;
    fill: string;
    stroke: string;
    legendText: string;
};


export const ExpressionStyleSheet: { [mutationType:string]:ExpressionStyle } = {
    frameshift: {
        typeName: "Frameshift",
        symbol: "triangle-down",
        fill: "#1C1C1C",
        stroke: "#B40404",
        legendText: "Frameshift"
    },
    nonsense: {
        typeName: "Nonsense",
        symbol: "diamond",
        fill: "#1C1C1C",
        stroke: "#B40404",
        legendText: "Nonsense"
    },
    splice_site: {
        typeName: "Splice",
        symbol: "triangle-up",
        fill: "#A4A4A4",
        stroke: "#B40404",
        legendText: "Splice"
    },
    inframe: {
        typeName: "In_frame",
        symbol: "square",
        fill: "#DF7401",
        stroke: "#B40404",
        legendText: "In_frame"
    },
    nonstart: {
        typeName: "Nonstart",
        symbol: "cross",
        fill: "#DF7401",
        stroke: "#B40404",
        legendText: "Nonstart"
    },
    nonstop: {
        typeName: "Nonstop",
        symbol: "triangle-up",
        fill: "#1C1C1C",
        stroke: "#B40404",
        legendText: "Nonstop"
    },
    missense: {
        typeName: "Missense",
        symbol: "circle",
        fill: "#DF7401",
        stroke: "#B40404",
        legendText: "Missense"
    },
    other: {
        typeName: "Other",
        symbol: "square",
        fill: "#1C1C1C",
        stroke: "#B40404",
        legendText: "Other"
    },
    one_mut: {
        typeName: "one_mut",
        symbol: "circle",
        fill: "#DBA901",
        stroke: "#886A08",
        legendText: "One Gene mutated"
    },
    both_mut: {
        typeName: "both_mut",
        symbol: "circle",
        fill: "#FF0000",
        stroke: "#B40404",
        legendText: "Both mutated"
    },
    non_mut: {
        typeName: "non_mut",
        symbol: "circle",
        fill: "#00AAF8",
        stroke: "#0089C6",
        legendText: "No Mutation"
    },
    non_sequenced: {
        typeName: "non_sequenced",
        symbol: "circle",
        fill: "white",
        stroke: "gray",
        legendText: "Not sequenced"
    }

};

export function isTCGAPubStudy(studyId:string){
    return /tcga_pub$/.test(studyId);
}

export function isTCGAProvStudy(studyId:string){
    return /tcga$/.test(studyId);
}

export function isPanCanStudy(studyId:string){
    return /tcga_pan_can_atlas/.test(studyId);
}