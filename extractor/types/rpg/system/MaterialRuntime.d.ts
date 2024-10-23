/**
 * 该文件为GameCreator编辑器自动生成的代码
 */
/**
 * 材质数据基类
 */
declare class MaterialData {
    id: number;
    enable: boolean;
    ____timeInfo: {
        [varName: string]: number;
    };
}
/**
 * 材质1-色调变更
 */
declare class MaterialData1 extends MaterialData {
    id: number;
    r: number;
    g: number;
    b: number;
    gray: number;
    mr: number;
    mg: number;
    mb: number;
    useTime: boolean;
    time: string;
}
/**
 * 材质2-色相
 */
declare class MaterialData2 extends MaterialData {
    id: number;
    hue: number;
}
/**
 * 材质3-模糊
 */
declare class MaterialData3 extends MaterialData {
    id: number;
    strength: number;
    useTime: boolean;
    time: string;
}
/**
 * 材质4-外发光
 */
declare class MaterialData4 extends MaterialData {
    id: number;
    color: string;
    blur: number;
    offsetX: number;
    offsetY: number;
}
/**
 * 材质5-滚筒
 */
declare class MaterialData5 extends MaterialData {
    id: number;
    useTrans: boolean;
    sigma: number;
    trans: string;
    aspect: number;
}
/**
 * 材质6-色彩滚筒
 */
declare class MaterialData6 extends MaterialData {
    id: number;
    useTrans: boolean;
    time: number;
    trans: string;
    useTrans1: boolean;
    sigma: number;
    trans1: string;
    useTrans2: boolean;
    strength: number;
    trans2: string;
    aspect: number;
}
/**
 * 材质7-正片叠底
 */
declare class MaterialData7 extends MaterialData {
    id: number;
    tex2: string;
    useTrans: boolean;
    time: number;
    trans: string;
}
/**
 * 材质8-辉光
 */
declare class MaterialData8 extends MaterialData {
    id: number;
    useTrans: boolean;
    time: number;
    trans: string;
    zoom: number;
    multiplier: number;
    centerX: number;
    centerY: number;
}
/**
 * 材质9-滤色
 */
declare class MaterialData9 extends MaterialData {
    id: number;
    tex2: string;
    useTrans: boolean;
    time: number;
    trans: string;
}
/**
 * 材质10-淡入淡出
 */
declare class MaterialData10 extends MaterialData {
    id: number;
    mask: string;
    useTrans: boolean;
    time: number;
    trans: string;
    vagueness: number;
    invertMask: number;
}
/**
 * 材质11-混合添加
 */
declare class MaterialData11 extends MaterialData {
    id: number;
    tex2: string;
    useTrans: boolean;
    time: number;
    trans: string;
    colorMulR: number;
    colorMulG: number;
    colorMulB: number;
    colorMulA: number;
    colorAddR: number;
    colorAddG: number;
    colorAddB: number;
    colorAddA: number;
    invertMask: number;
    alphaFactor: number;
}
/**
 * 材质12-马赛克
 */
declare class MaterialData12 extends MaterialData {
    id: number;
    useTrans: boolean;
    trans: string;
    pixelSize: number;
}
/**
 * 材质13-波浪
 */
declare class MaterialData13 extends MaterialData {
    id: number;
    t: string;
    amplitude: number;
    angularVelocity: number;
    speed: number;
}
/**
 * 材质14-花屏闪烁
 */
declare class MaterialData14 extends MaterialData {
    id: number;
    t: string;
    timeScale: number;
}
/**
 * 材质15-热浪扭曲
 */
declare class MaterialData15 extends MaterialData {
    id: number;
    tex2: string;
    uvScale: number;
    noiseTimeScale: number;
    t: string;
}
/**
 * 材质16-溶解
 */
declare class MaterialData16 extends MaterialData {
    id: number;
    tex2: string;
    t: string;
    dissolveSpeed: number;
    edgeWidth: number;
    edgeColorR: number;
    edgeColorG: number;
    edgeColorB: number;
    edgeColorA: number;
    startTime: number;
}
/**
 * 材质17-扫描翻页
 */
declare class MaterialData17 extends MaterialData {
    id: number;
    lineColorR: number;
    lineColorG: number;
    lineColorB: number;
    lineColorA: number;
    lineWidth: number;
    rangeX: string;
}
//# sourceMappingURL=MaterialRuntime.d.ts.map