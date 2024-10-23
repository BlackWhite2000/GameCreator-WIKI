/**
 * 档案管理
 * Created by 黑暗之神KDS on 2020-09-15 17:17:25.
 */
declare class GUI_SaveFileManager {
    /**
     * 当前档案的目录信息
     */
    static currentSveFileIndexInfo: {
        indexInfo: SaveFileListCustomData;
        id: number;
        now: number;
    };
    /**
     * 游戏内读档重启方式直接进入档案的标识符
     */
    static onceInSceneLoadGameSign: string;
    /**
     * 已读档后的自定义数据
     */
    private static currentSaveFileCustomData;
    /**
     * 是否读档中
     */
    private static isLoading;
    /**
     * 初始化档案列表
     * @param list 档案列表组件
     */
    static initSaveFileList(list: UIList, saveMode?: boolean): void;
    /**
     * 存档
     * @param id 档案ID
     * @param executeEvent [可选] 默认值=true 是否执行「存档完毕事件」
     * @param onFin [可选] 默认值=null 存档完毕后回调
     * @param waitEventCompleteCallback [可选] 默认值=true 存档完毕后回调是否等待「存档完毕事件」执行完成后回调
     */
    static saveFile(id: number, executeEvent?: boolean, onFin?: Callback, waitEventCompleteCallback?: boolean): void;
    /**
     * 读档
     * @param id 档案编号
     * @param onFin [可选] 默认值=null 读档完毕后回调
     */
    static loadFile(id: number, onFin?: Callback): void;
    /**
     * 当档案列表所属的界面显示时
     * @param list 列表
     */
    private static onSaveFileListDisplay;
    /**
     * 当列表项显示对象点击时
     * @param saveMode
     */
    private static onListItemClick;
    /**
     * 当每创建一个档案项时回调函数
     * @param saveMode 存档模式
     * @param ui 档案项界面
     * @param data 档案项数据
     * @param index 档案项索引
     */
    private static onCreateSaveFileItem;
    /**
     * 刷新存档数据显示
     * @param list 档案列表组件
     */
    static refreshSaveFileItem(list: UIList): void;
    /**
     * 获取自定义档案目录数据
     * -- 截图
     * -- 场景名称
     * -- 游戏时间
     */
    private static getCustomSaveIndexInfo;
    /**
     * 当按键按下时
     * @param list
     * @param e
     */
    private static onKeyDown;
}
/**
 * 档案目录追加的自定义数据
 * 档案目录使用GC-LifeData，是一种全局数据，在游戏启动时会自动读取
 * 该模板追加了一些自定义的档案目录数据，以便在读档前即可查看档案的一些缩略资料（目录）
 *
 * Created by 黑暗之神KDS on 2020-09-15 13:09:31.
 */
declare class SaveFileListCustomData {
    /**
     * 截图：base64字符串，Web版游戏本存在存档容量限定，所以缩略截图尽可能小
     */
    screenshotImg: string;
    /**
     * 地图名
     */
    mapName: string;
    /**
     * 总游戏时间（毫秒）
     */
    gameTime: number;
}
//# sourceMappingURL=GUI_SaveFileManager.d.ts.map