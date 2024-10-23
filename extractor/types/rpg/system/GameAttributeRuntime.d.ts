declare class WorldData {
    static readonly screenMode: number;
    static readonly sceneBGMGradientTime: number;
    static readonly sceneBGSGradientTime: number;
    static readonly moveToGridCenter: boolean;
    static readonly moveDir4: boolean;
    static readonly jumpTimeCost: number;
    static readonly jumpHeight: number;
    static menuEnabled: boolean;
    static readonly sceneObjectCollisionSize: number;
    static readonly sceneObjectMoveStartAct: number;
    static readonly useSceneObjectMoveStartAct2: boolean;
    static readonly sceneObjectMoveStartAct2Speed: number;
    static readonly sceneObjectMoveStartAct2: number;
    static readonly selectSceneObjectEffect: number;
    static readonly saveFileMax: number;
    static playCtrlEnabled: boolean;
    static readonly uiCompFocusAnimation: number;
    static gridObsDebug: boolean;
    static rectObsDebug: boolean;
    static dragSceneObjectDebug: boolean;
    static zoomCameraDebug: boolean;
    static readonly focusEnabled: boolean;
    static readonly hotKeyListEnabled: boolean;
    static readonly sceneObjectMoveStartAct2FPS: number;
    static readonly selectSE: string;
    static readonly sureSE: string;
    static readonly cancelSE: string;
    static readonly disalbeSE: string;
    static readonly dialogSE: string;
    static dialogSEEnabled: boolean;
    static keyboards: DataStructure_gameKeyboard[];
    static word_gamepadInput: string;
    static word_keyboardInput: string;
    static timeApi_yyvhc: string;
    static cursorStyle_Bind: DataStructure_cursorStyle_DataBind[];
    static w26_traceControl_record_log: boolean;
    static w26_traceControl_record_warn: boolean;
    static w26_traceControl_record_error: boolean;
    static w26_traceControl_record_systemInfo: boolean;
    static w26_traceControl_debugger: boolean;
    static w26_traceControl_upload: boolean;
    static w26_traceControl_enable: boolean;
    static w26_traceControl_gameName: string;
    static w26_traceControl_userApp: boolean;
    static w26_traceControl_onClose: boolean;
    static w26_traceControl_quiet: boolean;
    static w26_traceControl_ignore: string[];
    static w26_traceControl_event_error_upload: boolean;
    static w26_traceControl_server_host: string;
    static w26_traceControl_server_port: number;
    static w26_traceControl_server_email: string;
}
declare class PlayerData {
    sceneObject: SceneObject;
    package: DataStructure_packageItem[];
    gold: number;
}
//# sourceMappingURL=GameAttributeRuntime.d.ts.map