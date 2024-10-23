/**
 * 自定义条件分歧
 * Created by 黑暗之神KDS on 2020-09-16 19:47:24.
 */
module CustomCondition {
    /**
     * 场景对象
     * @param trigger 事件触发器
     * @param p 自定义参数
     * @return [boolean] 
     */
    export function f1(trigger: CommandTrigger, p: CustomConditionParams_1): boolean {
        // 获取场景对象
        let so = ProjectClientScene.getSceneObjectBySetting(p.soType, p.soIndex, p.useVar, p.soIndexVarID, trigger);
        if (!so) return;
        // 非自定义属性的话如果不是1号原型则忽略掉其他项属性
        if (p.type != 13 && !(so instanceof ProjectClientSceneObject)) return false;
        // 类别
        if (p.type == 0) return so.inScene;
        if (p.type == 1) return so.fixOri;
        if (p.type == 2) return so.selectEnabled;
        if (p.type == 3) return so.bridge;
        if (p.type == 4) return so.through;
        if (p.type == 5) return so.moveAutoChangeAction;
        if (p.type == 6) return so.ignoreCantMove;
        if (p.type == 7) return so.autoPlayEnable;
        if (p.type == 8) return so.isMoving;
        if (p.type == 9) return so.isJumping;
        if (p.type == 10) return so.repeatedTouchEnabled;
        if (p.type == 11) return so.onlyPlayerTouch;
        if (p.type == 12) return so.waitTouchEvent;
        if (p.type == 13) return so[p.soCustomAttr.varName] ? true : false;
        if (p.type == 14) {
            let soModule = so.getModule(p.soModuleAttr.moduleID);
            if (soModule) {
                debugger
                return soModule[p.soModuleAttr.varName];
            }
            return false;
        }
    }
    /**
     * 界面
     * @param trigger 事件触发器
     * @param p 自定义参数
     * @return [boolean] 
     */
    export function f2(trigger: CommandTrigger, p: CustomConditionParams_2): boolean {
        // 获取界面
        let uiID: number;
        if (p.checkType == 0) {
            if (p.useVarID) {
                uiID = Game.player.variable.getVariable(p.uiIDVarID);
            }
            else {
                uiID = p.uiID;
            }
        }
        else {
            uiID = p.uiComp.uiID;
        }
        // 界面ID
        let ui: GUI_BASE = GameUI.get(uiID) as any;
        if (!ui) {
            if (p.checkType == 0 && p.type == 3) return true;
            return false;
        }
        if (p.checkType == 1) {
            // 根据组件唯一ID找到该组件
            let comp = ui.compsIDInfo[p.uiComp.compID];
            if (!comp) return false;
            let value = comp[p.uiComp.varName];
            return value ? true : false;
        }
        if (p.type == 0) return true;
        if (p.type == 1) return false;
        if (p.type == 2) return ui.stage ? true : false;
        if (p.type == 3) return ui.stage ? false : true;
        if (p.type == 4) {
            let topLayer = Game.layer.uiLayer.numChildren - 1;
            let topUI = Game.layer.uiLayer.getChildAt(topLayer);
            if (!topUI) return false;
            // 虚拟键盘的情况下
            if (topUI == GameUI.get(12)) {
                if (topLayer >= 1) return Game.layer.uiLayer.getChildAt(topLayer - 1) == ui;
                else return false;
            }
            else {
                return topUI == ui;
            }
        }
    }
    /**
     * 系统信息
     */
    export function f3(trigger: CommandTrigger, p: CustomConditionParams_3): boolean {
        if (p.type == 0) return !WorldData.menuEnabled || GameGate.gateState < GameGate.STATE_4_PLAYER_CONTROL_START || Controller.isPlayerTriggerEvent;
        if (p.type == 1) return !Controller.inSceneEnabled;
        if (p.type == 2) return Game.pause;
        if (p.type == 3) return GameDialog.isInDialog;
        if (p.type == 4) return WorldData[p.worldAttrName] ? true : false;
        if (p.type == 5) return Browser.onMobile;
        if (p.type == 6) return os.platform == 3 || os.platform == 0;
        if (p.type == 7) {
            if (!ProjectUtils.keyboardEvent) return false;
            let systemKeyName = GUI_Setting.SYSTEM_KEYS[p.systemKey];
            let systemKeyboardInfo: { index: number, name: string, keys: number[] } = GUI_Setting.KEY_BOARD[systemKeyName];
            return systemKeyboardInfo.keys.indexOf(ProjectUtils.keyboardEvent.keyCode) != -1;
        }
    }
    /**
     * 自定义模块 - 布尔值属性
     */
    export function f4(trigger: CommandTrigger, p: CustomConditionParams_4): boolean {
        let moduleID = p.modelData.moduleID;
        let dataID: number;
        if (p.modelData.dataIsUseVar) {
            dataID = Game.player.variable.getVariable(p.modelData.dataVarID);
        }
        else {
            dataID = p.modelData.dataID;
        }
        let moduleData = GameData.getModuleData(moduleID, dataID);
        return !!moduleData[p.modelData.varName];
    }
    /**
     * 世界属性 - 布尔值属性
     */
    export function f5(trigger: CommandTrigger, p: CustomConditionParams_5): boolean {
        return !!WorldData[p.worldData.varName];
    }
    /**
     * 玩家属性 - 布尔值属性
     */
    export function f6(trigger: CommandTrigger, p: CustomConditionParams_6): boolean {
        return !!Game.player.data[p.playerData.varName];
    }
}