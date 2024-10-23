/**
 * 系统设置
 * Created by 黑暗之神KDS on 2020-03-12 13:55:53.
 */
class GUI_Setting extends GUI_6 {
    //------------------------------------------------------------------------------------------------------
    // 初始化
    //------------------------------------------------------------------------------------------------------
    constructor() {
        super();
        // 标准化TAB
        GUI_Manager.standardTab(this.typeTab);
        // 标准化LIST
        GUI_Manager.standardList(this.keyboardList);
        GUI_Manager.standardList(this.gamepadList);
        // 初始化按键设定
        this.initKeyboardSetting();
        // 初始化手柄设定
        this.initGamepadSetting();
        // 监听标签改变
        this.typeTab.on(EventObject.CHANGE, this, this.refreshFocus);
        // 刷新
        this.on(EventObject.DISPLAY, this, this.onDisplay);
    }
    /**
     * 界面显示时
     */
    onDisplay() {
        this.refreshFocus();
        this.cancelInputKey();
    }
    /**
     * 获取系统键位描述
     * @param key 系统键位名，对应GUI_Setting.KEY_BOARD的键
     */
    static getSystemKeyDesc(key) {
        if (ProjectUtils.lastControl <= 1) {
            let keyInfo = GUI_Setting.KEY_BOARD[key];
            if (!GUI_Setting.KEY_BOARD)
                return "";
            return Keyboard.getKeyName(keyInfo.keys[0]);
        }
        else {
            return key;
        }
    }
    //------------------------------------------------------------------------------------------------------
    // 载入设定
    //------------------------------------------------------------------------------------------------------
    static initHotKeySetting() {
        // 默认键盘键位设置
        for (let i = 0; i < WorldData.keyboards.length; i++) {
            let keyboardInfo = WorldData.keyboards[i];
            let sysKeyName = GUI_Setting.SYSTEM_KEYS[keyboardInfo.gameKey];
            let keySetting = GUI_Setting.KEY_BOARD[sysKeyName];
            if (keyboardInfo.keyCode1)
                keySetting.keys.push(keyboardInfo.keyCode1);
            if (keyboardInfo.keyCode2)
                keySetting.keys.push(keyboardInfo.keyCode2);
            if (keyboardInfo.keyCode3)
                keySetting.keys.push(keyboardInfo.keyCode3);
            if (keyboardInfo.keyCode4)
                keySetting.keys.push(keyboardInfo.keyCode4);
        }
        GUI_Setting.KEY_BOARD_DEFAULT = ObjectUtils.depthClone(GUI_Setting.KEY_BOARD);
        // 载入配置
        let settingData = SinglePlayerGame.getSaveCustomGlobalData("Setting");
        if (settingData) {
            GameAudio.bgmVolume = settingData.bgmVolume;
            GameAudio.bgsVolume = settingData.bgsVolume;
            GameAudio.seVolume = settingData.seVolume;
            GameAudio.tsVolume = settingData.tsVolume;
            if (settingData.KEY_BOARD)
                ObjectUtils.clone(settingData.KEY_BOARD, GUI_Setting.KEY_BOARD);
            if (settingData.GAMEPAD)
                ObjectUtils.clone(settingData.GAMEPAD, GUI_Setting.GAMEPAD);
        }
        // 同步LIST内置按键
        this.syncListKeyDownSetting();
        // 注册自定义储存信息
        SinglePlayerGame.regSaveCustomGlobalData("Setting", Callback.New(this.getGlobalData, this));
    }
    /**
     * 获取全局数据
     */
    static getGlobalData() {
        return {
            KEY_BOARD: GUI_Setting.KEY_BOARD,
            GAMEPAD: GUI_Setting.GAMEPAD,
            bgmVolume: GameAudio.bgmVolume,
            bgsVolume: GameAudio.bgsVolume,
            seVolume: GameAudio.seVolume,
            tsVolume: GameAudio.tsVolume
        };
    }
    //------------------------------------------------------------------------------------------------------
    // 功能
    //------------------------------------------------------------------------------------------------------
    /**
     * 判断系统按键是否按下
     * @param keyCode 按键值
     * @param keyInfo 对应 GUI_Setting.KEY_BOARD
     * @return [boolean]
     */
    static IS_KEY(keyCode, keyInfo) {
        return keyInfo.keys.indexOf(keyCode) != -1;
    }
    /**
     * 判断系统方向键是否已按下
     * @return [boolean]
     */
    static get IS_KEY_DOWN_DirectionKey() {
        if (!ProjectUtils.keyboardEvent)
            return;
        let keyCode = ProjectUtils.keyboardEvent.keyCode;
        if (GUI_Setting.IS_KEY(keyCode, GUI_Setting.KEY_BOARD.UP) ||
            GUI_Setting.IS_KEY(keyCode, GUI_Setting.KEY_BOARD.DOWN) ||
            GUI_Setting.IS_KEY(keyCode, GUI_Setting.KEY_BOARD.LEFT) ||
            GUI_Setting.IS_KEY(keyCode, GUI_Setting.KEY_BOARD.RIGHT)) {
            return true;
        }
        return false;
    }
    //------------------------------------------------------------------------------------------------------
    // 快捷键设定-键盘
    //------------------------------------------------------------------------------------------------------
    initKeyboardSetting() {
        // 创建每个项对象时
        this.keyboardList.onCreateItem = Callback.New((ui, data, index) => {
            let keyBoardInfo = data.data;
            ui.key1.label = GUI_Setting.getKeyBoardName(keyBoardInfo.keys[0]);
            ui.key2.label = GUI_Setting.getKeyBoardName(keyBoardInfo.keys[1]);
            ui.key3.label = GUI_Setting.getKeyBoardName(keyBoardInfo.keys[2]);
            ui.key4.label = GUI_Setting.getKeyBoardName(keyBoardInfo.keys[3]);
            ui.key1.on(EventObject.CLICK, this, this.openWaitInputKeyboard, [0]);
            ui.key2.on(EventObject.CLICK, this, this.openWaitInputKeyboard, [1]);
            ui.key3.on(EventObject.CLICK, this, this.openWaitInputKeyboard, [2]);
            ui.key4.on(EventObject.CLICK, this, this.openWaitInputKeyboard, [3]);
        }, this);
        // 显示全部按键
        this.refreshKeyboardList();
        // 用快捷键操作设置键位
        stage.on(EventObject.KEY_DOWN, this, this.onSetKeyboardByHotKey);
        // 还原默认值
        this.keyboardReset.on(EventObject.CLICK, this, this.resetKeyboard);
    }
    /**
     * 刷新显示全部按键信息列表
     */
    refreshKeyboardList() {
        // 显示全部按键
        let keyBoards = [];
        for (let i in GUI_Setting.KEY_BOARD) {
            let kInfo = GUI_Setting.KEY_BOARD[i];
            keyBoards.push({ name: i, keys: kInfo.keys, index: kInfo.index });
        }
        keyBoards.sort((a, b) => { return a.index < b.index ? -1 : 1; });
        let items = [];
        for (let s = 0; s < keyBoards.length; s++) {
            let d = new ListItem_1018;
            let keyBoardInfo = keyBoards[s];
            d.data = keyBoardInfo;
            d.keyName = keyBoardInfo.name;
            items.push(d);
        }
        this.keyboardList.items = items;
    }
    /**
     * 等待输入按键
     * @param keyIndex 按键位置 0-第一个按键 1-第二个按键
     */
    openWaitInputKeyboard(keyIndex) {
        if (!this.keyboardList.selectedItem || this.needInputKeyPanel.visible)
            return;
        let keyBoardInfo = this.keyboardList.selectedItem.data;
        if (!keyBoardInfo)
            return;
        this.typeTab.mouseEnabled = false;
        this.needInputKeyPanel.visible = true;
        this.needInputKeyLabel.text = keyBoardInfo.name + " " + WorldData.word_keyboardInput.replace("$1", (keyIndex + 1).toString());
        this.refreshFocus();
        GUI_Setting.IS_INPUT_KEY_MODE = true;
        stage.once(EventObject.KEY_DOWN, this, this.onSetKeyboard, [keyBoardInfo, keyIndex]);
        stage.once(EventObject.MOUSE_DOWN, this, this.cancelInputKey);
    }
    /**
     * 关闭等待输入按键
     */
    closeWaitInputKeyboard() {
        stage.off(EventObject.KEY_DOWN, this, this.onSetKeyboard);
        GUI_Setting.IS_INPUT_KEY_MODE = false;
        this.needInputKeyPanel.visible = false;
        this.typeTab.mouseEnabled = true;
        this.refreshFocus();
    }
    /**
     * 当设置按键按下时
     */
    onSetKeyboard(keyBoardInfo, keyIndex, e) {
        keyBoardInfo.keys[keyIndex] = e.keyCode;
        let ui = this.keyboardList.getItemUI(this.keyboardList.selectedIndex);
        ui["key" + (keyIndex + 1)].label = GUI_Setting.getKeyBoardName(e.keyCode);
        if (keyBoardInfo == GUI_Setting.KEY_BOARD.UP)
            UIList.KEY_UP[keyIndex] = e.keyCode;
        if (keyBoardInfo == GUI_Setting.KEY_BOARD.DOWN)
            UIList.KEY_DOWN[keyIndex] = e.keyCode;
        if (keyBoardInfo == GUI_Setting.KEY_BOARD.LEFT)
            UIList.KEY_LEFT[keyIndex] = e.keyCode;
        if (keyBoardInfo == GUI_Setting.KEY_BOARD.RIGHT)
            UIList.KEY_RIGHT[keyIndex] = e.keyCode;
        if (keyBoardInfo == GUI_Setting.KEY_BOARD.A)
            UIList.KEY_ENTER[keyIndex] = e.keyCode;
        this.closeWaitInputKeyboard();
        EventUtils.happen(GUI_Setting, GUI_Setting.EVENT_CHANGE_HOT_KEY);
        GameAudio.playSE(ClientWorld.data.sureSE);
    }
    /**
     * 当设置按键按下时（快捷键呼出）
     * @param e
     */
    onSetKeyboardByHotKey(e) {
        // 焦点不在设置键位上或该界面未显示则忽略
        if (UIList.focus != this.keyboardList || !this.keyboardList.stage || UIList.focus != this.keyboardList)
            return;
        // 左键设置第一个键位，右键设置第二个键位
        if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.LEFT)) {
            this.openWaitInputKeyboard(0);
        }
        else if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.RIGHT)) {
            this.openWaitInputKeyboard(1);
        }
    }
    /**
     * 重置按键
     */
    resetKeyboard() {
        GUI_Setting.KEY_BOARD = ObjectUtils.depthClone(GUI_Setting.KEY_BOARD_DEFAULT);
        this.refreshKeyboardList();
        GUI_Setting.syncListKeyDownSetting();
    }
    //------------------------------------------------------------------------------------------------------
    // 快捷键设定-手柄
    //------------------------------------------------------------------------------------------------------
    initGamepadSetting() {
        // 创建每个项对象时
        this.gamepadList.onCreateItem = Callback.New((ui, data, index) => {
            let gamepadInfo = data.data;
            ui.key1.label = this.getGamepadName(gamepadInfo.key);
            ui.key1.on(EventObject.CLICK, this, this.openWaitInputGamepad);
        }, this);
        // 显示全部按键
        this.refreshGamepadList();
        // 用快捷键操作设置键位
        stage.on(EventObject.KEY_DOWN, this, this.onSetGamepadByHotKey);
        // 还原默认值
        this.gamepadReset.on(EventObject.CLICK, this, this.resetGamepad);
    }
    /**
     * 刷新显示全部按键信息列表
     */
    refreshGamepadList() {
        // 显示全部按键
        let gamepads = [];
        for (let i in GUI_Setting.GAMEPAD) {
            let kInfo = GUI_Setting.GAMEPAD[i];
            kInfo.name = i;
            gamepads.push(kInfo);
        }
        gamepads.sort((a, b) => { return a.index < b.index ? -1 : 1; });
        let items = [];
        for (let s = 0; s < gamepads.length; s++) {
            let d = new ListItem_1019;
            let gamepadInfo = gamepads[s];
            d.data = gamepadInfo;
            d.keyName = gamepadInfo.name;
            items.push(d);
        }
        this.gamepadList.items = items;
    }
    /**
     * 获取键盘按键名
     * @param key 键位
     * @return [string]
     */
    getGamepadName(keyIndex) {
        if (keyIndex == -1)
            return "--/--";
        let name = "[" + keyIndex + "]" + GCGamepad.keyNames[keyIndex];
        return name ? name : "--/--";
    }
    /**
     * 等待输入按键
     * @param keyIndex 按键位置 0-第一个按键 1-第二个按键
     */
    openWaitInputGamepad(keyIndex) {
        if (!this.gamepadList.selectedItem || this.needInputKeyPanel.visible || UIList.focus != this.gamepadList)
            return;
        let gamepadInfo = this.gamepadList.selectedItem.data;
        if (!gamepadInfo)
            return;
        this.typeTab.mouseEnabled = false;
        this.needInputKeyPanel.visible = true;
        this.needInputKeyLabel.text = gamepadInfo.name + `：${WorldData.word_gamepadInput}...`;
        this.refreshFocus();
        GUI_Setting.IS_INPUT_KEY_MODE = true;
        GCGamepad.pad1.on(GCGamepad.GAMEPAD_KEY_DOWN, this, this.onSetGamepad, [gamepadInfo]);
        stage.once(EventObject.MOUSE_DOWN, this, this.cancelInputKey);
    }
    /**
     * 关闭等待输入按键
     */
    closeWaitInputGamepad() {
        GUI_Setting.IS_INPUT_KEY_MODE = false;
        GCGamepad.pad1.off(GCGamepad.GAMEPAD_KEY_DOWN, this, this.onSetGamepad);
        this.needInputKeyPanel.visible = false;
        this.typeTab.mouseEnabled = true;
        this.refreshFocus();
    }
    /**
     * 当设置按键按下时
     */
    onSetGamepad(gamepadInfo, keyCode, lastCtrlEnabled) {
        let keyIndex = GCGamepad.pad1.getKeyIndex(keyCode);
        // 将其他的同键位清空
        for (let i in GUI_Setting.GAMEPAD) {
            if (GUI_Setting.GAMEPAD[i].key == keyIndex)
                GUI_Setting.GAMEPAD[i].key = -1;
        }
        gamepadInfo.key = keyIndex;
        this.closeWaitInputGamepad();
        GameAudio.playSE(ClientWorld.data.sureSE);
        this.refreshGamepadList();
    }
    /**
     * 当设置按键按下时（快捷键呼出）
     * @param e
     */
    onSetGamepadByHotKey(e) {
        // 焦点不在设置键位上或该界面未显示则忽略
        if (UIList.focus != this.gamepadList || !this.gamepadList.stage)
            return;
        // 左键设置第一个键位，右键设置第二个键位
        if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.LEFT)) {
            this.openWaitInputGamepad(0);
        }
    }
    /**
     * 重置按键
     */
    resetGamepad() {
        GUI_Setting.GAMEPAD = ObjectUtils.depthClone(GUI_Setting.GAMEPAD_DEFAULT);
        this.refreshGamepadList();
    }
    //------------------------------------------------------------------------------------------------------
    // 内部
    //------------------------------------------------------------------------------------------------------
    /**
     * 同步LIST内置按键
     */
    static syncListKeyDownSetting() {
        UIList.KEY_UP = GUI_Setting.KEY_BOARD.UP.keys;
        UIList.KEY_DOWN = GUI_Setting.KEY_BOARD.DOWN.keys;
        UIList.KEY_LEFT = GUI_Setting.KEY_BOARD.LEFT.keys;
        UIList.KEY_RIGHT = GUI_Setting.KEY_BOARD.RIGHT.keys;
        UIList.KEY_ENTER = GUI_Setting.KEY_BOARD.A.keys;
    }
    /**
     * 获取键盘按键名
     * @param key 键位
     * @return [string]
     */
    static getKeyBoardName(key) {
        if (key != null) {
            for (let s in Keyboard) {
                if (Keyboard[s] == key)
                    return s;
            }
        }
        return "--/--";
    }
    /**
        * 根据标签类别刷新焦点
        */
    refreshFocus() {
        if (this.needInputKeyPanel.visible) {
            UIList.focus = null;
            return;
        }
        switch (this.typeTab.selectedIndex) {
            case 0:
                // UIList.focus = this.audioSettingList;
                break;
            case 1:
                UIList.focus = this.keyboardList;
                break;
            case 2:
                UIList.focus = this.gamepadList;
                break;
            case 3:
                UIList.focus = null;
                break;
        }
    }
    /**
     * 取消输入
     */
    cancelInputKey() {
        GUI_Setting.IS_INPUT_KEY_MODE = false;
        stage.off(EventObject.KEY_DOWN, this, this.onSetKeyboard);
        GCGamepad.pad1.off(GCGamepad.GAMEPAD_KEY_DOWN, this, this.onSetGamepad);
        this.needInputKeyPanel.visible = false;
        this.typeTab.mouseEnabled = true;
        this.refreshFocus();
    }
}
//------------------------------------------------------------------------------------------------------
// 静态
//------------------------------------------------------------------------------------------------------
/**
 * 事件：改变快捷键
 */
GUI_Setting.EVENT_CHANGE_HOT_KEY = "GUI_SettingEVENT_CHANGE_HOT_KEY";
/**
 * 系统按键集
 */
GUI_Setting.SYSTEM_KEYS = ["UP", "DOWN", "LEFT", "RIGHT", "A", "B", "X", "Y", "START", "BACK", "L1", "L2", "R1", "R2"];
/**
 * 当前键盘按键设定
 */
GUI_Setting.KEY_BOARD = {
    "UP": { index: 1, keys: [] },
    "DOWN": { index: 2, keys: [] },
    "LEFT": { index: 3, keys: [] },
    "RIGHT": { index: 4, keys: [] },
    "A": { index: 5, keys: [] },
    "B": { index: 17, keys: [] },
    "X": { index: 18, keys: [] },
    "Y": { index: 19, keys: [] },
    "START": { index: 20, keys: [] },
    "BACK": { index: 21, keys: [] },
    "L1": { index: 22, keys: [] },
    "L2": { index: 23, keys: [] },
    "R1": { index: 24, keys: [] },
    "R2": { index: 25, keys: [] }
};
GUI_Setting.GAMEPAD = {
    "X": { index: 1, key: GCGamepad.xKeyIndex },
    "Y": { index: 2, key: GCGamepad.yKeyIndex },
    "A": { index: 3, key: GCGamepad.aKeyIndex },
    "B": { index: 4, key: GCGamepad.bKeyIndex },
    "START": { index: 5, key: GCGamepad.startKeyIndex },
    "BACK": { index: 6, key: GCGamepad.backKeyIndex },
    "L1": { index: 7, key: GCGamepad.LBKeyIndex },
    "L2": { index: 8, key: GCGamepad.LTKeyIndex },
    "R1": { index: 9, key: GCGamepad.RBKeyIndex },
    "R2": { index: 10, key: GCGamepad.RTKeyIndex }
};
GUI_Setting.GAMEPAD_DEFAULT = ObjectUtils.depthClone(GUI_Setting.GAMEPAD);
//# sourceMappingURL=GUI_Setting.js.map