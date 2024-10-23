/**
 * 该文件为GameCreator编辑器自动生成的代码
 */
/**
 * 材质数据基类
 */
class MaterialData {
    constructor() {
        this.____timeInfo = {}; // 储存过渡的当前时间/帧信息，若同一个材质数据需要重置时间复用，可修改该属性后再重新添加材质
    }
}
/**
 * 材质1-色调变更
 */
class MaterialData1 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 1;
        this.r = 0; // 红 
        this.g = 0; // 绿 
        this.b = 0; // 蓝 
        this.gray = 0; // 灰度 
        this.mr = 1; // 红曝光 
        this.mg = 1; // 绿曝光 
        this.mb = 1; // 蓝曝光 
        this.useTime = false; // 时间过渡 
        this.time = ""; // 时间设定 
    }
}
/**
 * 材质2-色相
 */
class MaterialData2 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 2;
        this.hue = 0; // 色相 
    }
}
/**
 * 材质3-模糊
 */
class MaterialData3 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 3;
        this.strength = 0; // 强度 
        this.useTime = false; // 时间过渡 
        this.time = ""; // 时间设定 
    }
}
/**
 * 材质4-外发光
 */
class MaterialData4 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 4;
        this.color = "#00FF00"; // 颜色 
        this.blur = 2; // 模糊度 
        this.offsetX = 0; // 水平偏移 
        this.offsetY = 0; // 垂直偏移 
    }
}
/**
 * 材质5-滚筒
 */
class MaterialData5 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 5;
        this.useTrans = false; // 曲率过渡 
        this.sigma = 0.2; // 曲率 
        this.trans = ""; // 曲率过渡 
        this.aspect = 1.7; // 纵横比 
    }
}
/**
 * 材质6-色彩滚筒
 */
class MaterialData6 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 6;
        this.useTrans = false; // 时间过渡 
        this.time = 0; // 时间 
        this.trans = ""; // 时间过渡 
        this.useTrans1 = false; // 曲率过渡 
        this.sigma = 0.2; // 曲率 
        this.trans1 = ""; // 曲率过渡 
        this.useTrans2 = false; // 强度过渡 
        this.strength = 0.02; // 强度 
        this.trans2 = ""; // 强度过渡 
        this.aspect = 1.7; // 纵横比 
    }
}
/**
 * 材质7-正片叠底
 */
class MaterialData7 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 7;
        this.tex2 = ""; // 纹理贴图 
        this.useTrans = false; // 时间过渡 
        this.time = 1; // 时间 
        this.trans = ""; // 时间过渡 
    }
}
/**
 * 材质8-辉光
 */
class MaterialData8 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 8;
        this.useTrans = false; // 时间过渡 
        this.time = 0; // 时间 
        this.trans = ""; // 时间过渡 
        this.zoom = 0.5; // 缩放 
        this.multiplier = 0.5; // 倍数 
        this.centerX = 0.5; // 中心点X 
        this.centerY = 0.5; // 中心点Y 
    }
}
/**
 * 材质9-滤色
 */
class MaterialData9 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 9;
        this.tex2 = ""; // 纹理贴图 
        this.useTrans = false; // 时间过渡 
        this.time = 0; // 时间 
        this.trans = ""; // 时间过渡 
    }
}
/**
 * 材质10-淡入淡出
 */
class MaterialData10 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 10;
        this.mask = ""; // 遮罩贴图 
        this.useTrans = false; // 时间过渡 
        this.time = 0; // 时间 
        this.trans = ""; // 时间过渡 
        this.vagueness = 0.25; // 模糊 
        this.invertMask = 0; // 反转遮罩 
    }
}
/**
 * 材质11-混合添加
 */
class MaterialData11 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 11;
        this.tex2 = ""; // 纹理贴图 
        this.useTrans = false; // 时间过渡 
        this.time = 0; // 时间 
        this.trans = ""; // 时间过渡 
        this.colorMulR = 1; // 色彩倍增r 
        this.colorMulG = 1; // 色彩倍增g 
        this.colorMulB = 1; // 色彩倍增b 
        this.colorMulA = 1; // 色彩倍增a 
        this.colorAddR = 0; // 色彩偏移r 
        this.colorAddG = 0; // 色彩偏移g 
        this.colorAddB = 0; // 色彩偏移b 
        this.colorAddA = 0; // 色彩偏移a 
        this.invertMask = 0; // 反转遮罩 
        this.alphaFactor = 0; // a系数 
    }
}
/**
 * 材质12-马赛克
 */
class MaterialData12 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 12;
        this.trans = "false"; // 时间过渡 
        this.pixelSize = 64; // 像素尺寸 
    }
}
/**
 * 材质13-波浪
 */
class MaterialData13 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 13;
        this.t = ""; // 时间过渡 
        this.amplitude = 0.3; // 振幅 
        this.angularVelocity = 10; // 角速度 
        this.speed = 10; // 速度 速度为5的整数倍即可完成波浪的无缝循环
    }
}
/**
 * 材质14-花屏闪烁
 */
class MaterialData14 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 14;
        this.t = ""; // 时间过渡 
        this.timeScale = 1; // 花屏速度 
    }
}
/**
 * 材质15-热浪扭曲
 */
class MaterialData15 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 15;
        this.tex2 = ""; // 纹理贴图 
        this.uvScale = 1; // UV缩放比 
        this.noiseTimeScale = 1; // 噪间缩放 
        this.t = ""; // 时间过渡 
    }
}
/**
 * 材质16-溶解
 */
class MaterialData16 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 16;
        this.tex2 = ""; // 纹理贴图 
        this.t = ""; // 时间过渡 
        this.dissolveSpeed = 1; // 溶解速度 
        this.edgeWidth = 1; // 边缘宽度 
        this.edgeColorR = 1; // 边缘颜色r 
        this.edgeColorG = 1; // 边缘颜色g 
        this.edgeColorB = 1; // 边缘颜色b 
        this.edgeColorA = 1; // 边缘颜色a 
        this.startTime = 0; // 开始时间 
    }
}
/**
 * 材质17-扫描翻页
 */
class MaterialData17 extends MaterialData {
    constructor() {
        super(...arguments);
        this.id = 17;
        this.lineColorR = 0; // 线条颜色r 
        this.lineColorG = 0; // 线条颜色g 
        this.lineColorB = 0; // 线条颜色b 
        this.lineColorA = 0; // 线条颜色a 
        this.lineWidth = 0.1; // 线条宽度 
        this.rangeX = ""; // X过渡 
    }
}
//# sourceMappingURL=MaterialRuntime.js.map