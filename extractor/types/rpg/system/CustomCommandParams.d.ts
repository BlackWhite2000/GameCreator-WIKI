/**
 * 该文件为GameCreator编辑器自动生成的代码，请勿修改
 */
/**
* 自定义指令 1-预加载资源
*/
declare class CustomCommandParams_1 {
    preloadAssets: DataStructure_preloadAsset[];
    isShowLoadingUI: boolean;
    bindingUI: {
        uiID: number;
        compName: string;
        compID: string;
        varName: string;
    };
}
/**
* 自定义指令 2-等待玩家输入文本
*/
declare class CustomCommandParams_2 {
    inputUI: number;
    defText: string;
    useVar: number;
    defTextVarID: number;
}
/**
* 自定义指令 3-按键事件
*/
declare class CustomCommandParams_3 {
    type: number;
    isMulKey: number;
    recordListen: boolean;
    key: number;
    systemKey: number;
    evType: number;
    evType2: number;
    keys: number[];
    systemKeys: number[];
    CTRL: boolean;
    SHIFT: boolean;
    ALT: boolean;
    eventPage: string;
    recordListenVar: number;
}
/**
* 自定义指令 4-鼠标事件
*/
declare class CustomCommandParams_4 {
    type: number;
    mouseType: number;
    eventPage: string;
    onlyInScene: boolean;
    recordListen: boolean;
    recordListenVar: number;
}
/**
* 自定义指令 5-设置界面属性
*/
declare class CustomCommandParams_5 {
    uiID: number;
    useVar: number;
    uiIDvarID: number;
    type: number;
    compName: string;
    compAttrName: string;
    compAttrValue: string;
    compNameUseVar: number;
    compAttrNameUseVar: number;
    compNameVarID: number;
    compAttrNameVarID: number;
    compAttrValueUseVar: number;
    compAttrValueVarID1: number;
    compAttrValueVarID2: number;
    compAttrValueVarID3: number;
    uiAttrName: string;
    uiAttrValue: string;
    uiAttrNameUseVar: number;
    uiAttrValueUseVar: number;
    uiAttrNameVarID: number;
    uiAttrValueVarID1: number;
    uiAttrValueVarID2: number;
    uiAttrValueVarID3: number;
}
/**
* 自定义指令 6-设置按钮焦点
*/
declare class CustomCommandParams_6 {
    uiID: number;
    uiIDVarID: number;
    useVar: number;
    isAutoFocus: boolean;
    isAddButton: boolean;
    isExcludeButton: boolean;
    addButtons: string[];
    excludeButtons: string[];
    selEffectUI: number;
    useFocusAnimation: boolean;
    setSelectedIndex: boolean;
    selectedIndex: number;
    shortcutKeyExit: boolean;
    whenExitBackLastFocus: boolean;
    whenExitEvent: string;
}
/**
* 自定义指令 7-关闭界面焦点
*/
declare class CustomCommandParams_7 {
    focusType: number;
}
/**
* 自定义指令 8-取消按键事件
*/
declare class CustomCommandParams_8 {
    recordListenVar: number;
}
/**
* 自定义指令 9-取消鼠标事件
*/
declare class CustomCommandParams_9 {
    recordListenVar: number;
}
/**
* 自定义指令 10-模拟按键
*/
declare class CustomCommandParams_10 {
    isMulKey: number;
    key: number;
    systemKey: number;
    evType: number;
    interval: number;
    CTRL: boolean;
    SHIFT: boolean;
    ALT: boolean;
}
/**
* 自定义指令 11-提交信息
*/
declare class CustomCommandParams_11 {
    messages: DataStructure_inputMessage[];
}
/**
* 自定义指令 12-设置列表焦点
*/
declare class CustomCommandParams_12 {
    list: {
        uiID: number;
        compName: string;
        compID: string;
        varName: string;
    };
}
/**
* 自定义指令 13-计时器
*/
declare class CustomCommandParams_13 {
    type: number;
    minute: number;
    second: number;
}
/**
* 自定义指令 1001-设置地图网格数据
*/
declare class CustomCommandParams_1001 {
    x: number;
    y: number;
    useVar: number;
    xVarID: number;
    yVarID: number;
    layer: number;
    on: number;
}
/**
* 自定义指令 1002-绘制图块
*/
declare class CustomCommandParams_1002 {
    x: number;
    y: number;
    useVar: number;
    xVarID: number;
    yVarID: number;
    tileID: number;
    sourceX: number;
    sourceY: number;
    layer: number;
    layerVarID: number;
    layerUseVar: number;
}
/**
* 自定义指令 1003-绘制自动元件
*/
declare class CustomCommandParams_1003 {
    x: number;
    y: number;
    useVar: number;
    xVarID: number;
    yVarID: number;
    autoTileID: number;
    layer: number;
    layerVarID: number;
    layerUseVar: number;
}
/**
* 自定义指令 1004-清除图块
*/
declare class CustomCommandParams_1004 {
    type: number;
    layer: number;
    layerVarID: number;
    layerUseVar: number;
    x: number;
    y: number;
    useVar: number;
    xVarID: number;
    yVarID: number;
}
/**
* 自定义指令 1005-设置图层属性
*/
declare class CustomCommandParams_1005 {
    layerID: number;
    layerVarID: number;
    offsetEnabled: boolean;
    scaleEnabled: boolean;
    autoMoveEnabled: boolean;
    alphaEnabled: boolean;
    visibleEnabled: boolean;
    layerUseVar: number;
    dx: number;
    dxVarID: number;
    dy: number;
    dyVarID: number;
    dxUseVar: number;
    dyUseVar: number;
    scaleX: number;
    scaleXVarID: number;
    scaleXUseVar: number;
    scaleY: number;
    scaleYVarID: number;
    scaleYUseVar: number;
    xMove: number;
    xMoveVarID: number;
    yMove: number;
    yMoveVarID: number;
    xMoveUseVar: number;
    yMoveUseVar: number;
    alpha: number;
    alphaVarID: number;
    alphaUseVar: number;
    visible: number;
    visibleVarID: number;
    visibleUseVar: number;
}
/**
* 自定义指令 1006-显示场景动画
*/
declare class CustomCommandParams_1006 {
    useType: number;
    aniID: number;
    aniUseVar: number;
    aniIDVarID: number;
    soType: number;
    useVar: number;
    soIndex: number;
    soIndexVarID: number;
    x: number;
    y: number;
    posUseVar: number;
    isGrid: boolean;
    xVarID: number;
    yVarID: number;
    layer: number;
}
/**
* 自定义指令 1007-缩放场景镜头
*/
declare class CustomCommandParams_1007 {
    useScaleX: boolean;
    useScaleY: boolean;
    scaleX: number;
    scaleY: number;
    scaleXUseVar: number;
    scaleYUseVar: number;
    scaleX2: number;
    scaleY2: number;
    trans: string;
    useTrans: boolean;
    time: number;
}
/**
* 自定义指令 1008-旋转场景镜头
*/
declare class CustomCommandParams_1008 {
    rotation: number;
    rotationVarID: number;
    useVar: number;
    trans: string;
    useTrans: boolean;
    time: number;
}
/**
* 自定义指令 2001-增减金币
*/
declare class CustomCommandParams_2001 {
    symbol: number;
    gold: number;
    useVar: number;
    goldVarID: number;
}
/**
* 自定义指令 2002-增减道具
*/
declare class CustomCommandParams_2002 {
    symbol: number;
    itemID: number;
    useVar1: number;
    itemIDVarID: number;
    useVar2: number;
    num: number;
    numVarID: number;
}
/**
* 自定义指令 2003-克隆对象
*/
declare class CustomCommandParams_2003 {
    sceneID: number;
    useVar: number;
    no: number;
    noVarID: number;
    newSoIndex: number;
    newSoExecuteEvent: string;
    waitEventComplete: boolean;
    x: number;
    y: number;
    posUseVar: number;
    xVarID: number;
    yVarID: number;
    isGrid: boolean;
}
/**
* 自定义指令 2004-销毁克隆的对象
*/
declare class CustomCommandParams_2004 {
    soType: number;
    useVar: number;
    no: number;
    noVarID: number;
}
/**
* 自定义指令 2005-暂时移除对象
*/
declare class CustomCommandParams_2005 {
    useVar: number;
    no: number;
    noVarID: number;
    soType: number;
}
/**
* 自定义指令 2006-停止移动
*/
declare class CustomCommandParams_2006 {
    soType: number;
    useVar: number;
    no: number;
    noVarID: number;
}
/**
* 自定义指令 2007-记录移动路径
*/
declare class CustomCommandParams_2007 {
    soType: number;
    useVar: number;
    no: number;
    noVarID: number;
}
/**
* 自定义指令 2008-恢复移动路径
*/
declare class CustomCommandParams_2008 {
    soType: number;
    useVar: number;
    no: number;
    noVarID: number;
}
/**
* 自定义指令 2009-设置场景对象的属性
*/
declare class CustomCommandParams_2009 {
    attributeData: CustomCompData;
    useVar: number;
    no: number;
    noVarID: number;
    soType: number;
}
/**
* 自定义指令 2010-
*/
declare class CustomCommandParams_2010 {
}
/**
* 自定义指令 2011-修改行走图部件
*/
declare class CustomCommandParams_2011 {
    partID: number;
    useVar: number;
    no: number;
    noVarID: number;
    newPartUseVar: number;
    newPart: number;
    newPartVarID: number;
    soType: number;
}
/**
* 自定义指令 2012-打开商店
*/
declare class CustomCommandParams_2012 {
    goodsList: DataStructure_shopItem[];
    nameWhenInfinite: string;
    enableSell: boolean;
    discount: number;
}
/**
* 自定义指令 2013-清除对象行为
*/
declare class CustomCommandParams_2013 {
    useVar: number;
    no: number;
    noVarID: number;
    soType: number;
}
/**
* 自定义指令 3001-显示图片
*/
declare class CustomCommandParams_3001 {
    passageID: number;
    passageIDVar: number;
    image: string;
    imageVar: number;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpWidth: number;
    dpWidthVar: number;
    dpHeight: number;
    dpHeightVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    flip: boolean;
    pivotType: number;
    blendMode: number;
    refImageEnabled: boolean;
    higher: boolean;
    refImage: string;
    imageUseVar: boolean;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    passageIDUseVar: boolean;
}
/**
* 自定义指令 3002-移动图片
*/
declare class CustomCommandParams_3002 {
    passageID: number;
    passageIDVar: number;
    timeType: number;
    time: number;
    trans: string;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpWidth: number;
    dpWidthVar: number;
    dpHeight: number;
    dpHeightVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    flip: boolean;
    pivotType: number;
    blendMode: number;
    refImageEnabled: boolean;
    higher: boolean;
    refImage: string;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    passageIDUseVar: boolean;
}
/**
* 自定义指令 3003-设置图像层镜头
*/
declare class CustomCommandParams_3003 {
    timeType: number;
    time: number;
    trans: string;
    cameraX: number;
    cameraXVar: number;
    cameraY: number;
    cameraYVar: number;
    cameraZ: number;
    cameraZVar: number;
    cameraRotation: number;
    cameraRotationVar: number;
    higher: boolean;
    xUseVar: boolean;
    yUseVar: boolean;
    zUseVar: boolean;
    roUseVar: boolean;
}
/**
* 自定义指令 3004-显示动画
*/
declare class CustomCommandParams_3004 {
    passageID: number;
    passageIDVar: number;
    animation: number;
    animationVar: number;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpScaleX: number;
    dpScaleXVar: number;
    dpScaleY: number;
    dpScaleYVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    playType: number;
    silentMode: boolean;
    showHitEffect: boolean;
    playFps: number;
    aniFrame: number;
    aniFrameVar: number;
    refObjectEnabled: boolean;
    higher: boolean;
    refObject: number;
    objectUseVar: boolean;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    passageIDUseVar: boolean;
    aniFrameUseVar: boolean;
}
/**
* 自定义指令 3005-移动动画
*/
declare class CustomCommandParams_3005 {
    passageID: number;
    passageIDVar: number;
    timeType: number;
    trans: string;
    time: number;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpScaleX: number;
    dpScaleXVar: number;
    dpScaleY: number;
    dpScaleYVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    changeFrame: boolean;
    aniFrame: number;
    aniFrameVar: number;
    refObjectEnabled: boolean;
    higher: boolean;
    refObject: number;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    frameUseVar: boolean;
    passageIDUseVar: boolean;
}
/**
* 自定义指令 3006-显示立绘
*/
declare class CustomCommandParams_3006 {
    passageID: number;
    passageIDVar: number;
    standAvatar: number;
    standAvatarVar: number;
    expression: number;
    expressionVar: number;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpScaleX: number;
    dpScaleXVar: number;
    dpScaleY: number;
    dpScaleYVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    playType: number;
    avatarFPS: number;
    avatarFrame: number;
    avatarFrameVar: number;
    refObjectEnabled: boolean;
    higher: boolean;
    refObject: number;
    objectUseVar: boolean;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    passageIDUseVar: boolean;
    frameUseVar: boolean;
    expressionUseVar: boolean;
}
/**
* 自定义指令 3007-移动立绘
*/
declare class CustomCommandParams_3007 {
    passageID: number;
    passageIDVar: number;
    timeType: number;
    time: number;
    trans: string;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpScaleX: number;
    dpScaleXVar: number;
    dpScaleY: number;
    dpScaleYVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    changeExpression: boolean;
    expression: number;
    expressionVar: number;
    changeFrame: boolean;
    avatarFrame: number;
    avatarFrameVar: number;
    refObjectEnabled: boolean;
    higher: boolean;
    refObject: number;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    passageIDUseVar: boolean;
    expressionUseVar: boolean;
    frameUseVar: boolean;
}
/**
* 自定义指令 3008-消除图像
*/
declare class CustomCommandParams_3008 {
    passageIDUseVar: boolean;
    passageID: number;
    passageIDVar: number;
}
/**
* 自定义指令 3009-自动旋转
*/
declare class CustomCommandParams_3009 {
    passageIDUseVar: boolean;
    passageID: number;
    passageIDVar: number;
    rotation: number;
}
/**
* 自定义指令 3010-显示界面
*/
declare class CustomCommandParams_3010 {
    showType: number;
    passageID: number;
    passageIDVar: number;
    uiID: number;
    uiVar: number;
    setAttr: boolean;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpScaleX: number;
    dpScaleXVar: number;
    dpScaleY: number;
    dpScaleYVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    refObjectEnabled: boolean;
    higher: boolean;
    refObject: number;
    objectUseVar: boolean;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    passageIDUseVar: boolean;
}
/**
* 自定义指令 3011-移动界面
*/
declare class CustomCommandParams_3011 {
    showType: number;
    passageID: number;
    passageIDVar: number;
    uiID: number;
    uiVar: number;
    timeType: number;
    time: number;
    trans: string;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpScaleX: number;
    dpScaleXVar: number;
    dpScaleY: number;
    dpScaleYVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    refObjectEnabled: boolean;
    higher: boolean;
    refObject: number;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    passageIDUseVar: boolean;
    objectUseVar: boolean;
}
/**
* 自定义指令 3012-关闭界面
*/
declare class CustomCommandParams_3012 {
    showType: number;
    passageID: number;
    passageIDVar: number;
    uiID: number;
    uiVar: number;
    passageIDUseVar: boolean;
    objectUseVar: boolean;
}
/**
* 自定义指令 3013-移动界面内的元件
*/
declare class CustomCommandParams_3013 {
    changeUIAttr: any;
}
/**
* 自定义指令 3014-添加材质
*/
declare class CustomCommandParams_3014 {
    targetType: number;
    passageIDUseVar: boolean;
    passageID: number;
    passageIDVar: number;
    objectUseVar: boolean;
    uiID: number;
    uiVar: number;
    materialData: {
        materials: MaterialData[];
    }[];
}
/**
* 自定义指令 3015-更改材质
*/
declare class CustomCommandParams_3015 {
    targetType: number;
    passageIDUseVar: boolean;
    passageID: number;
    passageIDVar: number;
    objectUseVar: boolean;
    uiID: number;
    uiVar: number;
    materialData: {
        materials: MaterialData[];
    }[];
}
/**
* 自定义指令 3016-删除材质
*/
declare class CustomCommandParams_3016 {
    targetType: number;
    passageIDUseVar: boolean;
    passageID: number;
    passageIDVar: number;
    objectUseVar: boolean;
    uiID: number;
    uiVar: number;
    clearType: number;
    materialID: number;
    materialPassage: number;
}
/**
* 自定义指令 3017-
*/
declare class CustomCommandParams_3017 {
}
/**
* 自定义指令 3018-显示视频
*/
declare class CustomCommandParams_3018 {
    passageID: number;
    passageIDVar: number;
    video: string;
    videoVar: number;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpWidth: number;
    dpWidthVar: number;
    dpHeight: number;
    dpHeightVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    playType: number;
    flip: boolean;
    muted: boolean;
    loop: boolean;
    volume: number;
    currentTime: number;
    currentTimeVar: number;
    playbackRate: number;
    higher: boolean;
    objectUseVar: boolean;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    passageIDUseVar: boolean;
    currentTimeUseVar: boolean;
}
/**
* 自定义指令 3019-移动视频
*/
declare class CustomCommandParams_3019 {
    passageID: number;
    passageIDVar: number;
    timeType: number;
    time: number;
    trans: string;
    dpX: number;
    dpXVar: number;
    dpY: number;
    dpYVar: number;
    dpZ: number;
    dpZVar: number;
    dpWidth: number;
    dpWidthVar: number;
    dpHeight: number;
    dpHeightVar: number;
    rotation: number;
    rotationVar: number;
    opacity: number;
    opacityVar: number;
    flip: boolean;
    higher: boolean;
    posUseVar: boolean;
    sizeUseVar: boolean;
    zUseVar: boolean;
    opacityUseVar: boolean;
    rotationUseVar: boolean;
    passageIDUseVar: boolean;
}
/**
* 自定义指令 3020-等待关闭界面
*/
declare class CustomCommandParams_3020 {
    useVar: number;
    uiID: number;
    uiVar: number;
}
/**
* 自定义指令 4001-允许玩家控制
*/
declare class CustomCommandParams_4001 {
}
/**
* 自定义指令 4002-禁止玩家控制
*/
declare class CustomCommandParams_4002 {
}
/**
* 自定义指令 4003-允许使用菜单
*/
declare class CustomCommandParams_4003 {
}
/**
* 自定义指令 4004-禁止使用菜单
*/
declare class CustomCommandParams_4004 {
}
/**
* 自定义指令 4005-开始游戏
*/
declare class CustomCommandParams_4005 {
}
/**
* 自定义指令 4006-存档
*/
declare class CustomCommandParams_4006 {
    saveType: number;
    saveID: number;
    silenceMode: boolean;
}
/**
* 自定义指令 4007-设置全局音量
*/
declare class CustomCommandParams_4007 {
    type: number;
    volume: number;
    useVar: number;
    volumeVarID: number;
}
/**
* 自定义指令 4008-返回标题界面
*/
declare class CustomCommandParams_4008 {
}
/**
* 自定义指令 4009-暂停游戏
*/
declare class CustomCommandParams_4009 {
}
/**
* 自定义指令 4010-恢复游戏
*/
declare class CustomCommandParams_4010 {
}
/**
* 自定义指令 4011-关闭窗口
*/
declare class CustomCommandParams_4011 {
}
/**
* 自定义指令 4012-设置对话音效
*/
declare class CustomCommandParams_4012 {
    dialogSE: number;
}
/**
* 自定义指令 4013-设置世界属性
*/
declare class CustomCommandParams_4013 {
    worldData: CustomCompData;
}
/**
* 自定义指令 4014-设置玩家属性
*/
declare class CustomCommandParams_4014 {
    playerData: CustomCompData;
}
/**
* 自定义指令 5001-播放背景音乐
*/
declare class CustomCommandParams_5001 {
    bgm: string;
    bgmVarID: number;
    fadeInTime: number;
    fadeInTimeVarID: number;
    advanceSetting: boolean;
    bgmUseVar: boolean;
    fadeInTimeUseVar: boolean;
}
/**
* 自定义指令 5002-停止背景音乐
*/
declare class CustomCommandParams_5002 {
    fadeOutTime: number;
    fadeOutTimeVarID: number;
    fadeOutTimeUseVar: boolean;
}
/**
* 自定义指令 5003-播放环境声效
*/
declare class CustomCommandParams_5003 {
    bgs: string;
    bgsVarID: number;
    fadeInTime: number;
    fadeInTimeVarID: number;
    advanceSetting: boolean;
    bgsUseVar: boolean;
    fadeInTimeUseVar: boolean;
}
/**
* 自定义指令 5004-停止环境声效
*/
declare class CustomCommandParams_5004 {
    fadeOutTime: number;
    fadeOutTimeVarID: number;
    fadeOutTimeUseVar: boolean;
}
/**
* 自定义指令 5005-播放音效
*/
declare class CustomCommandParams_5005 {
    se: string;
    seVarID: number;
    systemSEType: number;
    systemSE: boolean;
    seUseVar: boolean;
    nearBigFarSmall: boolean;
}
/**
* 自定义指令 5006-停止音效
*/
declare class CustomCommandParams_5006 {
}
/**
* 自定义指令 5007-播放语音
*/
declare class CustomCommandParams_5007 {
    ts: string;
    tsVarID: number;
    tsUseVar: boolean;
    nearBigFarSmall: boolean;
}
/**
* 自定义指令 5008-停止语音
*/
declare class CustomCommandParams_5008 {
}
/**
* 自定义指令 8001-增减场景对象的模块
*/
declare class CustomCommandParams_8001 {
    soType: number;
    no: number;
    noVarID: number;
    soUseVar: number;
    symbol: number;
    value: number;
    valueVarID: number;
    valueUseVar: number;
}
/**
* 自定义指令 8002-修改场景对象模块属性
*/
declare class CustomCommandParams_8002 {
    useVar: number;
    no: number;
    noVarID: number;
    soType: number;
    attr: CustomCompData;
}
/**
* 自定义指令 15001-获取日期
*/
declare class CustomCommandParams_15001 {
    setTypeDataList: number;
    setType: boolean;
    setStr: number;
    setNum: number;
    isDataIndex: boolean;
    timeDataTypeList: number;
    timeStampType: number;
    timeStamp: number;
    timeStampVar: number;
}
/**
* 自定义指令 15002-获取时间戳
*/
declare class CustomCommandParams_15002 {
    timeStr: number;
    timeStamp: number;
    isTimeType: boolean;
    timeDataTypeList: number;
    timeNumType_y: number;
    timeNumType_h: number;
    timeNumType_m: number;
    timeNumType_i: number;
    timeNumType_d: number;
    timeNumType_s: number;
    timeNumVar_m: number;
    timeNumVar_h: number;
    timeNumVar_i: number;
    timeNumVar_d: number;
    timeNumVar_s: number;
    timeNumVar_y: number;
    timeNum_y: number;
    timeNum_m: number;
    timeNum_d: number;
    timeNum_h: number;
    timeNum_i: number;
    timeNum_s: number;
}
/**
* 自定义指令 15003-获取时间
*/
declare class CustomCommandParams_15003 {
    setTime: number;
    timeDataTypeList: number;
    timeGetStatus: number;
    setTimeStamp: number;
    timeNumType_y: number;
    timeNumType_h: number;
    timeNumType_m: number;
    timeNumType_i: number;
    timeNumType_d: number;
    timeNumType_s: number;
    timeNumVar_m: number;
    timeNumVar_h: number;
    timeNumVar_i: number;
    timeNumVar_d: number;
    timeNumVar_s: number;
    timeNumVar_y: number;
    timeNum_y: number;
    timeNum_m: number;
    timeNum_d: number;
    timeNum_h: number;
    timeNum_i: number;
    timeNum_s: number;
}
/**
* 自定义指令 15004-获取服务器时间
*/
declare class CustomCommandParams_15004 {
    yy: boolean;
    yyVar: number;
    mm: boolean;
    mmVar: number;
    dd: boolean;
    ddVar: number;
    hh: boolean;
    hhVar: number;
    min: boolean;
    minVar: number;
    ss: boolean;
    ssVar: number;
    retVar: number;
    ret: boolean;
}
/**
* 自定义指令 15005-拖拽界面组件
*/
declare class CustomCommandParams_15005 {
    selectData: {
        uiID: number;
        compName: string;
        compID: string;
        varName: string;
    };
    limit: boolean;
    startx: number;
    starty: number;
    limitW: number;
    limitH: number;
}
/**
* 自定义指令 15006-Steam初始化 Steam Init
*/
declare class CustomCommandParams_15006 {
    validationMode: number;
    validationPrompt: string;
}
/**
* 自定义指令 15007-安装DLC Install DLC
*/
declare class CustomCommandParams_15007 {
    dlc: number;
}
/**
* 自定义指令 15008-卸载DLC Uninstall DLC
*/
declare class CustomCommandParams_15008 {
    dlc: number;
}
/**
* 自定义指令 15009-激活成就 +Achievement
*/
declare class CustomCommandParams_15009 {
    achieveID: string;
    onSuccess: string;
    onFail: string;
}
/**
* 自定义指令 15010-删除成就 -Achievement
*/
declare class CustomCommandParams_15010 {
    achieveID: string;
    onSuccess: string;
    onFail: string;
}
/**
* 自定义指令 15011-光标自定义plus
*/
declare class CustomCommandParams_15011 {
    cursorStyle_Model: number;
}
/**
* 自定义指令 15012-高级数值运算
*/
declare class CustomCommandParams_15012 {
    math: string;
    set: number;
    setGameNumber: boolean;
    label1: boolean;
    label2: boolean;
    gVar: boolean;
    setG: number;
    debug: boolean;
    abs: boolean;
    sqrt: boolean;
    round: boolean;
    decimal: number;
    gameNumber: any[];
}
/**
* 自定义指令 15013-字体切换
*/
declare class CustomCommandParams_15013 {
    fontMap: number;
    restoreOriFont: boolean;
}
//# sourceMappingURL=CustomCommandParams.d.ts.map