/**
 * Created by 黑暗之神KDS on 2021-03-11 10:24:08.
 */
module CustomGameString {
    /**
     * 场景
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数 
     */
    export function f1(trigger: CommandTrigger, p: CustomGameStringParams_1): string {
        switch (p.type) {
            case 0:
                return Game.currentScene.name;
        }
        return "";
    }
    /**
     * 场景对象
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数 
     */
    export function f2(trigger: CommandTrigger, p: CustomGameStringParams_2): string {
        // 没有场景的情况下返回0，比如切换场景中的情况
        if (!Game.currentScene) return "";
        // 获取对象
        let so: ProjectClientSceneObject = ProjectClientScene.getSceneObjectBySetting(p.soType, p.no, p.useVar, p.varID, trigger);
        if (!(so instanceof ProjectClientSceneObject) && p.type != 1) return "";
        // 属性
        if (p.type == 0) return so.name;
        if (p.type == 1) {
            let attrValue = so[p.customAttr.varName];
            return attrValue == null ? "" : attrValue.toString();
        }
        if (p.type == 2) {
            let soModule = so.getModule(p.soModuleAttr.moduleID);
            if (soModule) return soModule[p.soModuleAttr.varName];
            return "";
        }
    }
    /**
     * 玩家
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数 
     */
    export function f3(trigger: CommandTrigger, p: CustomGameStringParams_3): string {
        return Game.player.data[p.playerData.varName];
    }
    /**
     * 界面
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数 
     */
    export function f4(trigger: CommandTrigger, p: CustomGameStringParams_4): string {
        // 获取界面
        let uiID = p.uiComp.uiID;
        // 界面ID
        let ui: GUI_BASE = GameUI.get(uiID) as any;
        if (!ui) return "";
        // 根据组件唯一ID找到该组件
        let comp = ui.compsIDInfo[p.uiComp.compID];
        if (!comp) return "";
        let value = comp[p.uiComp.varName];
        return value == null ? "" : value.toString();
    }
    /**
     * 模块 - 字符串
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数 
     */
    export function f5(trigger: CommandTrigger, p: CustomGameStringParams_5): string {
        let moduleID = p.modelData.moduleID;
        let dataID: number;
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
    /**
     * 世界 - 字符串
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数 
     */
    export function f6(trigger: CommandTrigger, p: CustomGameStringParams_6): string {
        let value = WorldData[p.worldData.varName];
        return value == null ? "" : value.toString();
    }
    /**
     * 系统
     */
    export function f7(trigger: CommandTrigger, p: CustomGameStringParams_7): string {
        switch (p.type) {
            case 0:
                return GUI_Setting.getSystemKeyDesc(GUI_Setting.SYSTEM_KEYS[p.systemKeys]);
            case 1:
                return `${GameAudio.lastBgmURL},${GameAudio.lastBGMVolume},${GameAudio.lastBGMPitch}`
            case 2:
                return `${GameAudio.lastBgsURL},${GameAudio.lastBGSVolume},${GameAudio.lastBGSPitch}`
        }
    }
}