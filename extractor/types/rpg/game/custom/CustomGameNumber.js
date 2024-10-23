/**
 * 自定义游戏数值
 * Created by 黑暗之神KDS on 2020-09-16 19:47:24.
 */
var CustomGameNumber;
(function (CustomGameNumber) {
    /**
     * 场景数值获取
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f1(trigger, p) {
        // 没有场景的情况下返回0，比如切换场景中的情况
        if (!Game.currentScene)
            return 0;
        let scene = Game.currentScene;
        if (p.type == 0)
            return scene.id;
        if (p.type == 1)
            return p.isGrid ? scene.gridWidth : scene.width;
        if (p.type == 2)
            return p.isGrid ? scene.gridHeight : scene.height;
        if (p.type == 3)
            return scene.sceneObjects.length - 1;
        if (p.type == 4) {
            let xGrid = p.dataGridUseVar ? Game.player.variable.getVariable(p.x2) : p.x;
            let yGrid = p.dataGridUseVar ? Game.player.variable.getVariable(p.y2) : p.y;
            if (p.dataGridIndex == 0) {
                ProjectUtils.pointHelper.x = xGrid;
                ProjectUtils.pointHelper.y = yGrid;
                let soc = ProjectClientScene.getSceneObjectBySetting(p.dataLayerSoType, p.dataLayerSoIndex, p.dataLayerSoUseVar, p.dataLayerSoVarID, trigger);
                return p.dynamicObs ? (scene.sceneUtils.isObstacleGrid(ProjectUtils.pointHelper, soc) ? 1 : 0) : (scene.sceneUtils.isFixedObstacleGrid(ProjectUtils.pointHelper) ? 1 : 0);
            }
            else {
                return scene.getDataGridState(p.dataGridIndex, xGrid, yGrid) == 1 ? 1 : 0;
            }
        }
        if (p.type == 5) {
            if (p.cameraAttr == 0)
                return scene.camera.viewPort.x;
            if (p.cameraAttr == 1)
                return scene.camera.viewPort.y;
            if (p.cameraAttr == 2)
                return scene.camera.scaleX;
            if (p.cameraAttr == 3)
                return scene.camera.scaleY;
            if (p.cameraAttr == 4)
                return scene.camera.rotation;
        }
    }
    CustomGameNumber.f1 = f1;
    /**
     * 场景对象数值
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f2(trigger, p) {
        // 没有场景的情况下返回0，比如切换场景中的情况
        if (!Game.currentScene)
            return 0;
        // 获取对象
        let so = ProjectClientScene.getSceneObjectBySetting(p.soType, p.no, p.useVar, p.varID, trigger);
        if (!(so instanceof ProjectClientSceneObject) && p.type != 13)
            return 0;
        // 属性
        if (p.type == 0)
            return so.index;
        if (p.type == 1)
            return so.modelID;
        if (p.type == 2) {
            if (p.posMode == 0) {
                return so.x;
            }
            else if (p.posMode == 1) {
                return Math.floor(so.x / Config.SCENE_GRID_SIZE);
            }
            else {
                return Game.currentScene.getGlobalPos(so.x, so.y).x;
            }
        }
        if (p.type == 3) {
            if (p.posMode == 0) {
                return so.y;
            }
            else if (p.posMode == 1) {
                return Math.floor(so.y / Config.SCENE_GRID_SIZE);
            }
            else {
                return Game.currentScene.getGlobalPos(so.x, so.y).y;
            }
        }
        if (p.type == 4)
            return so.avatar.id;
        if (p.type == 5)
            return so.scale;
        if (p.type == 6)
            return so.avatarAlpha;
        if (p.type == 7)
            return so.avatarHue;
        if (p.type == 8)
            return so.avatarFPS;
        if (p.type == 9)
            return so.moveSpeed;
        if (p.type == 10)
            return so.avatar.orientation;
        if (p.type == 11)
            return so.avatar.actionID;
        if (p.type == 12)
            return so.avatar.currentFrame;
        if (p.type == 13) {
            //获取设置的名称
            let varName;
            if (p.customAttr.selectMode == 1) {
                let mode = p.customAttr.inputModeInfo.mode;
                let constName = p.customAttr.inputModeInfo.constName;
                let varNameIndex = p.customAttr.inputModeInfo.varNameIndex;
                varName = mode == 0 ? constName : Game.player.variable.getString(varNameIndex);
            }
            else {
                varName = p.customAttr.varName;
            }
            if (so[varName] == undefined)
                return 0;
            //指定界面
            if (p.customAttr.compAttrEnable) {
                // 获取界面
                let ui = so[varName];
                if (!ui || !(ui instanceof GUI_BASE))
                    return 0;
                // 根据组件唯一ID找到该组件
                let comp = ui.compsIDInfo[p.customAttr.compInfo.compID];
                if (!comp)
                    return 0;
                return MathUtils.float(comp[p.customAttr.compInfo.varName]);
            }
            else {
                return MathUtils.float(so[varName]);
            }
        }
        if (p.type == 14) {
            let soModule = so.getModule(p.soModuleAttr.moduleID);
            if (!soModule)
                return 0;
            //获取设置的名称
            let varName;
            if (p.soModuleAttr.selectMode == 1) {
                let mode = p.soModuleAttr.inputModeInfo.mode;
                let constName = p.soModuleAttr.inputModeInfo.constName;
                let varNameIndex = p.soModuleAttr.inputModeInfo.varNameIndex;
                varName = mode == 0 ? constName : Game.player.variable.getString(varNameIndex);
            }
            else {
                varName = p.soModuleAttr.varName;
            }
            if (soModule[varName] == undefined)
                return 0;
            //指定界面
            if (p.soModuleAttr.compAttrEnable) {
                // 获取界面
                let ui = soModule[varName];
                if (!ui || !(ui instanceof GUI_BASE))
                    return 0;
                // 根据组件唯一ID找到该组件
                let comp = ui.compsIDInfo[p.soModuleAttr.compInfo.compID];
                if (!comp)
                    return 0;
                return MathUtils.float(comp[p.soModuleAttr.compInfo.varName]);
            }
            else {
                if (soModule[varName] instanceof GCAnimation)
                    return soModule[varName].id;
                else if (soModule[varName] instanceof UIBase)
                    return soModule[varName].guiID;
                else
                    return MathUtils.float(soModule[varName]);
            }
        }
    }
    CustomGameNumber.f2 = f2;
    /**
     * 场景对象关系
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f3(trigger, p) {
        // 没有场景的情况下返回0，比如切换场景中的情况
        if (!Game.currentScene)
            return 0;
        // 获取对象
        let so1 = ProjectClientScene.getSceneObjectBySetting(p.soType1, p.no1, p.useVar1, p.varID1, trigger);
        if (!so1)
            return 0;
        let so2 = ProjectClientScene.getSceneObjectBySetting(p.soType2, p.no2, p.useVar2, p.varID2, trigger);
        if (!so2)
            return 0;
        // 比较属性
        if (p.type == 0)
            return GameUtils.getOriByAngle(MathUtils.direction360(so1.x, so1.y, so2.x, so2.y));
        if (p.type == 1) {
            let dis = Point.distance2(so1.x, so1.y, so2.x, so2.y);
            return p.isGrid ? Math.floor(dis / Config.SCENE_GRID_SIZE) : dis;
        }
        if (p.type == 2)
            return p.isGrid ? Math.floor((so2.x - so1.x) / Config.SCENE_GRID_SIZE) : so2.x - so1.x;
        if (p.type == 3)
            return p.isGrid ? Math.floor((so2.y - so1.y) / Config.SCENE_GRID_SIZE) : so2.y - so1.y;
        if (p.type == 4)
            return MathUtils.direction360(so1.x, so1.y, so2.x, so2.y);
    }
    CustomGameNumber.f3 = f3;
    /**
     * 玩家
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f4(trigger, p) {
        if (p.type == 0)
            return Game.player.data.gold;
        if (p.type == 1) {
            let itemDS = ProjectPlayer.getItemDS(p.itemID);
            return itemDS ? itemDS.number : 0;
        }
        if (p.type == 2) {
            //获取设置的名称
            let varName;
            if (p.playerData.selectMode == 1) {
                let mode = p.playerData.inputModeInfo.mode;
                let constName = p.playerData.inputModeInfo.constName;
                let varNameIndex = p.playerData.inputModeInfo.varNameIndex;
                varName = mode == 0 ? constName : Game.player.variable.getString(varNameIndex);
            }
            else {
                varName = p.playerData.varName;
            }
            if (Game.player.data[varName] == undefined)
                return 0;
            return MathUtils.float(Game.player.data[varName]);
        }
    }
    CustomGameNumber.f4 = f4;
    /**
     * 界面
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f5(trigger, p) {
        // 界面按钮焦点数
        if (p.type == 2) {
            if (!FocusButtonsManager.focus)
                return -1;
            return FocusButtonsManager.focus.selectedIndex;
        }
        // 获取界面
        let uiID;
        if (p.useVarID) {
            uiID = Game.player.variable.getVariable(p.uiIDVarID);
        }
        else {
            uiID = p.type == 1 ? p.uiComp.uiID : p.uiID;
        }
        // 界面ID
        let ui = GameUI.get(uiID);
        if (!ui)
            return 0;
        // 界面本体属性
        if (p.type == 0) {
            return MathUtils.float(ui[p.uiAttrName]);
        }
        // 界面内组件的属性
        else if (p.type == 1) {
            // 根据组件唯一ID找到该组件
            let comp = ui.compsIDInfo[p.uiComp.compID];
            if (!comp)
                return 0;
            return MathUtils.float(comp[p.uiComp.varName]);
        }
    }
    CustomGameNumber.f5 = f5;
    /**
     * 鼠标
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f6(trigger, p) {
        if (p.type == 0)
            return stage.mouseX;
        else if (p.type == 1)
            return stage.mouseY;
        else if (p.type == 2) {
            let gridX = Game.currentScene ? (p.isGrid ? Math.floor(Game.currentScene.localX / Config.SCENE_GRID_SIZE) : Game.currentScene.localX) : 0;
            let res = Math.min(Math.max(gridX, 0), (p.isGrid ? Game.currentScene.gridWidth : Game.currentScene.width) - 1);
            return res;
        }
        else if (p.type == 3) {
            let gridY = Game.currentScene ? (p.isGrid ? Math.floor(Game.currentScene.localY / Config.SCENE_GRID_SIZE) : Game.currentScene.localY) : 0;
            let res = Math.min(Math.max(gridY, 0), (p.isGrid ? Game.currentScene.gridHeight : Game.currentScene.height) - 1);
            return res;
        }
        else if (p.type == 4)
            return MouseControl.selectSceneObject && MouseControl.selectSceneObject.inScene ? MouseControl.selectSceneObject.index : -1;
        else if (p.type == 5)
            return ProjectUtils.mouseWhileValue;
        else if (p.type == 6)
            return p.pointKeyboard;
        else if (p.type == 7)
            return ProjectUtils.keyboardEvents.length > 0 ? ProjectUtils.keyboardEvents[ProjectUtils.keyboardEvents.length - 1].keyCode : -1;
        else if (p.type == 8) {
            let keyCode = ProjectUtils.keyboardEvents.length > 0 ? ProjectUtils.keyboardEvents[ProjectUtils.keyboardEvents.length - 1].keyCode : -1;
            if (keyCode == -1)
                return -1;
            let resultI = -1;
            let min = Number.MAX_VALUE;
            for (var i = 0; i < GUI_Setting.SYSTEM_KEYS.length; i++) {
                let keys = GUI_Setting.KEY_BOARD[GUI_Setting.SYSTEM_KEYS[i]].keys;
                if (keys) {
                    let idx = keys.indexOf(keyCode);
                    if (idx != -1 && idx < min) {
                        resultI = i;
                        min = idx;
                    }
                }
            }
            return resultI;
        }
    }
    CustomGameNumber.f6 = f6;
    /**
     * 模块 - 数值属性
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f7(trigger, p) {
        let moduleID = p.modelData.moduleID;
        let dataID;
        if (p.modelData.dataIsUseVar) {
            dataID = Game.player.variable.getVariable(p.modelData.dataVarID);
        }
        else {
            dataID = p.modelData.dataID;
        }
        let moduleData = GameData.getModuleData(moduleID, dataID);
        if (!moduleData)
            return 0;
        //获取设置的名称
        let varName;
        if (p.modelData.selectMode == 1) {
            let mode = p.modelData.inputModeInfo.mode;
            let constName = p.modelData.inputModeInfo.constName;
            let varNameIndex = p.modelData.inputModeInfo.varNameIndex;
            varName = mode == 0 ? constName : Game.player.variable.getString(varNameIndex);
        }
        else {
            varName = p.modelData.varName;
        }
        if (moduleData[varName] == undefined)
            return 0;
        return MathUtils.float(moduleData[varName]);
    }
    CustomGameNumber.f7 = f7;
    /**
     * 世界 - 数值属性
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数
     */
    function f8(trigger, p) {
        if (p.type == 0) {
            if (p.presetType == 0)
                return GameAudio.bgmVolume * 100;
            if (p.presetType == 1)
                return GameAudio.bgsVolume * 100;
            if (p.presetType == 2)
                return GameAudio.seVolume * 100;
            if (p.presetType == 3)
                return GameAudio.tsVolume * 100;
        }
        else {
            //获取设置的名称
            let varName;
            if (p.worldData.selectMode == 1) {
                let mode = p.worldData.inputModeInfo.mode;
                let constName = p.worldData.inputModeInfo.constName;
                let varNameIndex = p.worldData.inputModeInfo.varNameIndex;
                varName = mode == 0 ? constName : Game.player.variable.getString(varNameIndex);
            }
            else {
                varName = p.worldData.varName;
            }
            if (WorldData[varName] == undefined)
                return 0;
            return MathUtils.float(WorldData[varName]);
        }
    }
    CustomGameNumber.f8 = f8;
    /**
     * 其他
     */
    function f9(trigger, p) {
        switch (p.normalNumber) {
            case 0:
                return !ProjectGame.gameStartTime ? 0 : (Date.now() - ProjectGame.gameStartTime.getTime());
            case 1:
                return !ProjectGame.gameStartTime ? 0 : (Math.floor((Date.now() - ProjectGame.gameStartTime.getTime()) / 1000));
            case 2:
                return !ProjectGame.gameStartTime ? 0 : (Math.floor((Date.now() - ProjectGame.gameStartTime.getTime()) / 60000));
            case 3:
                return !ProjectGame.gameStartTime ? 0 : (Math.floor((Date.now() - ProjectGame.gameStartTime.getTime()) / 3600000));
            case 4:
                return !ProjectGame.gameStartTime ? 0 : (Math.floor((Date.now() - ProjectGame.gameStartTime.getTime()) / 86400000));
            case 5:
                return new Date().getSeconds();
            case 6:
                return new Date().getMinutes();
            case 7:
                return new Date().getHours();
            case 8:
                return new Date().getDay();
            case 9:
                return new Date().getDate();
            case 10:
                return new Date().getMonth() + 1;
            case 11:
                return new Date().getFullYear();
            case 12:
                return GUI_SaveFileManager.currentSveFileIndexInfo ? GUI_SaveFileManager.currentSveFileIndexInfo.id : 0;
            case 13:
                return MathUtils.float(trigger.inputMessage[0]);
            case 14:
                return MathUtils.float(trigger.inputMessage[1]);
            case 15:
                return MathUtils.float(trigger.inputMessage[2]);
            case 16:
                return MathUtils.float(trigger.inputMessage[3]);
            case 17:
                return MathUtils.float(trigger.inputMessage[4]);
            case 18:
                return __fCount;
            case 19:
                return CommandExecute.countDownNowTime;
        }
    }
    CustomGameNumber.f9 = f9;
})(CustomGameNumber || (CustomGameNumber = {}));
//# sourceMappingURL=CustomGameNumber.js.map