import { OnChanges, ElementRef, EventEmitter, AfterViewInit, SimpleChanges } from '@angular/core';
export declare class YAxisTicksComponent implements OnChanges, AfterViewInit {
    scale: any;
    orient: any;
    tickArguments: number[];
    tickValues: any[];
    tickStroke: string;
    trimTicks: boolean;
    maxTickLength: number;
    tickFormatting: any;
    showGridLines: boolean;
    gridLineWidth: any;
    height: any;
    referenceLines: any;
    showRefLabels: boolean;
    showRefLines: boolean;
    dimensionsChanged: EventEmitter<{}>;
    innerTickSize: any;
    tickPadding: any;
    tickSpacing: any;
    verticalSpacing: number;
    textAnchor: any;
    dy: any;
    x1: any;
    x2: any;
    y1: any;
    y2: any;
    adjustedScale: any;
    transform: (o: any) => string;
    tickFormat: (o: any) => string;
    ticks: any;
    width: number;
    outerTickSize: number;
    rotateLabels: boolean;
    refMax: number;
    refMin: number;
    referenceLineLength: number;
    referenceAreaPath: string;
    ticksElement: ElementRef;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    updateDims(): void;
    update(): void;
    setReferencelines(): void;
    getTicks(): any;
    getMaxTicks(tickHeight: number): number;
    tickTransform(tick: any): string;
    gridLineTransform(): string;
    tickTrim(label: string): string;
}
