class WorldData {
    static readonly screenMode: number; // = 0; 移动端屏幕布局模式
    static readonly sceneBGMGradientTime: number; // = 0; BGM过渡时间
    static readonly sceneBGSGradientTime: number; // = 0; BGS过渡时间
    static readonly moveToGridCenter: boolean; // = false; 移动至格子中心点
    static readonly moveDir4: boolean; // = false; 四方向移动
    static readonly jumpTimeCost: number; // = 0; 跳跃花费的时间
    static readonly jumpHeight: number; // = 0; 跳跃高度
    static menuEnabled: boolean; // = true;
    static readonly sceneObjectCollisionSize: number; // = 32; 场景对象碰撞范围
    static readonly sceneObjectMoveStartAct: number; // = 2; 行走动作
    static readonly useSceneObjectMoveStartAct2: boolean; // = false; 开启奔跑动作
    static readonly sceneObjectMoveStartAct2Speed: number; // = 0; 奔跑时的速度
    static readonly sceneObjectMoveStartAct2: number; // = 0; 奔跑动作
    static readonly selectSceneObjectEffect: number; // = 0; 场景对象悬停动画
    static readonly saveFileMax: number; // = 10; 存档总数
    static playCtrlEnabled: boolean; // = true;
    static readonly uiCompFocusAnimation: number; // = 0; 界面组件焦点动画
    static gridObsDebug: boolean; // = false; 显示地图格子障碍
    static rectObsDebug: boolean; // = false; 显示对象碰撞盒
    static dragSceneObjectDebug: boolean; // = false; 鼠标左键拖拽对象
    static zoomCameraDebug: boolean; // = false; 滚轮缩放镜头
    static readonly focusEnabled: boolean; // = false; 使用按钮焦点
    static readonly hotKeyListEnabled: boolean; // = false; 允许按键操作列表
    static readonly sceneObjectMoveStartAct2FPS: number; // = 20; 奔跑时的帧率
    static readonly selectSE: string; // = ""; 光标
    static readonly sureSE: string; // = ""; 确定
    static readonly cancelSE: string; // = ""; 取消
    static readonly disalbeSE: string; // = ""; 禁用
    static readonly dialogSE: string; // = ""; 文本播放音效
    static dialogSEEnabled: boolean; // = true;
    static keyboards: DataStructure_gameKeyboard[]; // = [];
    static word_gamepadInput: string; // = ""; 请按下游戏手柄键位
    static word_keyboardInput: string; // = ""; 请输入键盘键位
    static timeApi_yyvhc: string; // = "https://api.gcw.wiki/TimeStamp"; API地址
    static cursorStyle_Bind: DataStructure_cursorStyle_DataBind[]; // = [];
    static w26_traceControl_record_log: boolean; // = true; 记录log和trace
    static w26_traceControl_record_warn: boolean; // = true; 记录warn
    static w26_traceControl_record_error: boolean; // = true; 记录error
    static w26_traceControl_record_systemInfo: boolean; // = true; 记录系统信息
    static w26_traceControl_debugger: boolean; // = true; 未导出时调试
    static w26_traceControl_upload: boolean; // = false; 允许触发未捕捉异常时上传log至服务器
    static w26_traceControl_enable: boolean; // = true; 启用
    static w26_traceControl_gameName: string; // = "填写你的游戏名称 以便于生成文件夹"; 游戏名称
    static w26_traceControl_userApp: boolean; // = false; 保存在用户文件
    static w26_traceControl_onClose: boolean; // = false; 游戏关闭时上传log
    static w26_traceControl_quiet: boolean; // = false; 静默上传
    static w26_traceControl_ignore: string[]; // = [];
    static w26_traceControl_event_error_upload: boolean; // = true; 只有事件发生错误时才上传
    static w26_traceControl_server_host: string; // = "122.51.13.82"; host
    static w26_traceControl_server_port: number; // = 12336; port
    static w26_traceControl_server_email: string; // = "填写你的邮箱"; 报错文件发送至
}
class PlayerData {
    sceneObject: SceneObject;
    package: DataStructure_packageItem[]; // = [];
    gold: number; // = 0; 金币
}