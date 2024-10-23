/**
 * Created by 黑暗之神KDS on 2021-03-11 10:24:08.
 */
var CustomGameString;
(function (CustomGameString) {
    /**
     * 场景
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f1(trigger, p) {
        switch (p.type) {
            case 0:
                return Game.currentScene.name;
        }
        return "";
    }
    CustomGameString.f1 = f1;
    /**
     * 场景对象
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f2(trigger, p) {
        // 没有场景的情况下返回0，比如切换场景中的情况
        if (!Game.currentScene)
            return "";
        // 获取对象
        let so = ProjectClientScene.getSceneObjectBySetting(p.soType, p.no, p.useVar, p.varID, trigger);
        if (!(so instanceof ProjectClientSceneObject) && p.type != 1)
            return "";
        // 属性
        if (p.type == 0)
            return so.name;
        if (p.type == 1) {
            let attrValue = so[p.customAttr.varName];
            return attrValue == null ? "" : attrValue.toString();
        }
        if (p.type == 2) {
            let soModule = so.getModule(p.soModuleAttr.moduleID);
            if (soModule)
                return soModule[p.soModuleAttr.varName];
            return "";
        }
    }
    CustomGameString.f2 = f2;
    /**
     * 玩家
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f3(trigger, p) {
        return Game.player.data[p.playerData.varName];
    }
    CustomGameString.f3 = f3;
    /**
     * 界面
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f4(trigger, p) {
        // 获取界面
        let uiID = p.uiComp.uiID;
        // 界面ID
        let ui = GameUI.get(uiID);
        if (!ui)
            return "";
        // 根据组件唯一ID找到该组件
        let comp = ui.compsIDInfo[p.uiComp.compID];
        if (!comp)
            return "";
        let value = comp[p.uiComp.varName];
        return value == null ? "" : value.toString();
    }
    CustomGameString.f4 = f4;
    /**
     * 模块 - 字符串
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f5(trigger, p) {
        let moduleID = p.modelData.moduleID;
        let dataID;
        if (p.modelData.dataIsUseVar) {
            dataID = Game.player.variable.getVariable(p.modelData.dataVarID);
        }
        else {
            dataID = p.modelData.dataID;
        }
        let moduleData = GameData.getModuleData(moduleID, dataID);
        let value = moduleData[p.modelData.varName];
        return value == null ? "" : value.toString();
    }
    CustomGameString.f5 = f5;
    /**
     * 世界 - 字符串
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f6(trigger, p) {
        let value = WorldData[p.worldData.varName];
        return value == null ? "" : value.toString();
    }
    CustomGameString.f6 = f6;
    /**
     * 系统
     */
    function f7(trigger, p) {
        switch (p.type) {
            case 0:
                return GUI_Setting.getSystemKeyDesc(GUI_Setting.SYSTEM_KEYS[p.systemKeys]);
            case 1:
                return `${GameAudio.lastBgmURL},${GameAudio.lastBGMVolume},${GameAudio.lastBGMPitch}`;
            case 2:
                return `${GameAudio.lastBgsURL},${GameAudio.lastBGSVolume},${GameAudio.lastBGSPitch}`;
        }
    }
    CustomGameString.f7 = f7;
})(CustomGameString || (CustomGameString = {}));
//# sourceMappingURL=CustomGameString.js.map