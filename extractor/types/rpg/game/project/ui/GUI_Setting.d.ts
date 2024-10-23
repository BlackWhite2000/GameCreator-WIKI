/**
 * 系统设置
 * Created by 黑暗之神KDS on 2020-03-12 13:55:53.
 */
declare class GUI_Setting extends GUI_6 {
    /**
     * 是否输入按键模式
     */
    static IS_INPUT_KEY_MODE: boolean;
    constructor();
    /**
     * 界面显示时
     */
    private onDisplay;
    /**
     * 事件：改变快捷键
     */
    static EVENT_CHANGE_HOT_KEY: string;
    /**
     * 系统按键集
     */
    static SYSTEM_KEYS: string[];
    /**
     * 当前键盘按键设定
     */
    static KEY_BOARD: {
        UP: {
            index: number;
            keys: any[];
        };
        DOWN: {
            index: number;
            keys: any[];
        };
        LEFT: {
            index: number;
            keys: any[];
        };
        RIGHT: {
            index: number;
            keys: any[];
        };
        A: {
            index: number;
            keys: any[];
        };
        B: {
            index: number;
            keys: any[];
        };
        X: {
            index: number;
            keys: any[];
        };
        Y: {
            index: number;
            keys: any[];
        };
        START: {
            index: number;
            keys: any[];
        };
        BACK: {
            index: number;
            keys: any[];
        };
        L1: {
            index: number;
            keys: any[];
        };
        L2: {
            index: number;
            keys: any[];
        };
        R1: {
            index: number;
            keys: any[];
        };
        R2: {
            index: number;
            keys: any[];
        };
    };
    static GAMEPAD: {
        X: {
            index: number;
            key: number;
        };
        Y: {
            index: number;
            key: number;
        };
        A: {
            index: number;
            key: number;
        };
        B: {
            index: number;
            key: number;
        };
        START: {
            index: number;
            key: number;
        };
        BACK: {
            index: number;
            key: number;
        };
        L1: {
            index: number;
            key: number;
        };
        L2: {
            index: number;
            key: number;
        };
        R1: {
            index: number;
            key: number;
        };
        R2: {
            index: number;
            key: number;
        };
    };
    /**
     * 获取系统键位描述
     * @param key 系统键位名，对应GUI_Setting.KEY_BOARD的键
     */
    static getSystemKeyDesc(key: string): string;
    /**
     * 默认键位设定
     */
    private static KEY_BOARD_DEFAULT;
    private static GAMEPAD_DEFAULT;
    static initHotKeySetting(): void;
    /**
     * 获取全局数据
     */
    static getGlobalData(): {
        KEY_BOARD: {
            UP: {
                index: number;
                keys: any[];
            };
            DOWN: {
                index: number;
                keys: any[];
            };
            LEFT: {
                index: number;
                keys: any[];
            };
            RIGHT: {
                index: number;
                keys: any[];
            };
            A: {
                index: number;
                keys: any[];
            };
            B: {
                index: number;
                keys: any[];
            };
            X: {
                index: number;
                keys: any[];
            };
            Y: {
                index: number;
                keys: any[];
            };
            START: {
                index: number;
                keys: any[];
            };
            BACK: {
                index: number;
                keys: any[];
            };
            L1: {
                index: number;
                keys: any[];
            };
            L2: {
                index: number;
                keys: any[];
            };
            R1: {
                index: number;
                keys: any[];
            };
            R2: {
                index: number;
                keys: any[];
            };
        };
        GAMEPAD: {
            X: {
                index: number;
                key: number;
            };
            Y: {
                index: number;
                key: number;
            };
            A: {
                index: number;
                key: number;
            };
            B: {
                index: number;
                key: number;
            };
            START: {
                index: number;
                key: number;
            };
            BACK: {
                index: number;
                key: number;
            };
            L1: {
                index: number;
                key: number;
            };
            L2: {
                index: number;
                key: number;
            };
            R1: {
                index: number;
                key: number;
            };
            R2: {
                index: number;
                key: number;
            };
        };
        bgmVolume: number;
        bgsVolume: number;
        seVolume: number;
        tsVolume: number;
    };
    /**
     * 判断系统按键是否按下
     * @param keyCode 按键值
     * @param keyInfo 对应 GUI_Setting.KEY_BOARD
     * @return [boolean]
     */
    static IS_KEY(keyCode: number, keyInfo: {
        keys: number[];
    }): boolean;
    /**
     * 判断系统方向键是否已按下
     * @return [boolean]
     */
    static get IS_KEY_DOWN_DirectionKey(): boolean;
    private initKeyboardSetting;
    /**
     * 刷新显示全部按键信息列表
     */
    private refreshKeyboardList;
    /**
     * 等待输入按键
     * @param keyIndex 按键位置 0-第一个按键 1-第二个按键
     */
    private openWaitInputKeyboard;
    /**
     * 关闭等待输入按键
     */
    private closeWaitInputKeyboard;
    /**
     * 当设置按键按下时
     */
    private onSetKeyboard;
    /**
     * 当设置按键按下时（快捷键呼出）
     * @param e
     */
    private onSetKeyboardByHotKey;
    /**
     * 重置按键
     */
    private resetKeyboard;
    private initGamepadSetting;
    /**
     * 刷新显示全部按键信息列表
     */
    private refreshGamepadList;
    /**
     * 获取键盘按键名
     * @param key 键位
     * @return [string]
     */
    private getGamepadName;
    /**
     * 等待输入按键
     * @param keyIndex 按键位置 0-第一个按键 1-第二个按键
     */
    private openWaitInputGamepad;
    /**
     * 关闭等待输入按键
     */
    private closeWaitInputGamepad;
    /**
     * 当设置按键按下时
     */
    private onSetGamepad;
    /**
     * 当设置按键按下时（快捷键呼出）
     * @param e
     */
    private onSetGamepadByHotKey;
    /**
     * 重置按键
     */
    private resetGamepad;
    /**
     * 同步LIST内置按键
     */
    private static syncListKeyDownSetting;
    /**
     * 获取键盘按键名
     * @param key 键位
     * @return [string]
     */
    static getKeyBoardName(key: number): string;
    /**
        * 根据标签类别刷新焦点
        */
    private refreshFocus;
    /**
     * 取消输入
     */
    private cancelInputKey;
}
//# sourceMappingURL=GUI_Setting.d.ts.map