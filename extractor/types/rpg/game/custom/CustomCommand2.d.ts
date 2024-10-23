/**
 * 自定义事件命令
 * -- 图像/动画/立绘/界面/视频/音频相关的指令
 * -- 对于图像显示以及移动过程追加了存档读档支持
 * Created by 黑暗之神KDS on 2018-12-18 17:17:50.
 */
declare namespace CommandExecute {
    /**
     * 显示图片
     */
    export function customCommand_3001(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3001): void;
    /**
     * 移动图像
     */
    export function customCommand_3002(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3002): void;
    /**
     * 移动图像层相机
     */
    export function customCommand_3003(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3003): void;
    /**
     * 显示动画
     */
    export function customCommand_3004(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3004): void;
    /**
     * 移动动画
     */
    export function customCommand_3005(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3005): void;
    /**
     * 显示立绘
     */
    export function customCommand_3006(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3006): void;
    /**
     * 移动立绘
     */
    export function customCommand_3007(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3007): void;
    /**
     * 清理图像
     */
    export function customCommand_3008(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3008): void;
    /**
     * 自动旋转
     */
    export function customCommand_3009(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3009): void;
    /**
     * 显示界面
     */
    export function customCommand_3010(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3010): void;
    /**
     * 移动界面
     */
    export function customCommand_3011(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3011): void;
    /**
     * 关闭界面
     */
    export function customCommand_3012(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3012): void;
    /**
     * 移动界面元件
     */
    export function customCommand_3013(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3013): void;
    /**
     * 添加材质
     */
    export function customCommand_3014(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3014): void;
    /**
     * 更改材质：同添加材质
     */
    export function customCommand_3015(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3015): void;
    /**
     * 删除材质
     */
    export function customCommand_3016(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3016): void;
    /**
     * 显示视频
     */
    export function customCommand_3018(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3018): void;
    /**
     * 移动视频
     */
    export function customCommand_3019(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_3019): void;
    /**
     * 等待指定界面关闭
     */
    export function customCommand_3020(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_3020): void;
    /**
     * 播放背景音乐
     */
    export function customCommand_5001(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_5001): void;
    /**
     * 停止背景音乐
     */
    export function customCommand_5002(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_5002): void;
    /**
     * 播放环境声效
     */
    export function customCommand_5003(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_5003): void;
    /**
     * 停止环境声效
     */
    export function customCommand_5004(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_5004): void;
    /**
     * 播放音效
     */
    export function customCommand_5005(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_5005): void;
    /**
     * 停止全部音效
     */
    export function customCommand_5006(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_5006): void;
    /**
     * 播放语音
     */
    export function customCommand_5007(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_5007): void;
    /**
     * 停止全部语音
     */
    export function customCommand_5008(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], cp: CustomCommandParams_5008): void;
    /**
     * 移动图片时的逐帧执行的函数
     */
    export function gcImageMoveFrameUpdate(a: UIBitmap, m: ImageMoveParams, passageID: number, sign: string): void;
    /**
     * 移动相机时的逐帧执行的函数
     */
    export function gcCameraMoveFrameUpdate(a: any, m: ImageLayerCameraMoveParams, passageID: number, sign: string): void;
    /**
     * 移动动画时的逐帧执行的函数
     */
    export function gcAnimationMoveFrameUpdate(a: UIAnimation, m: AnimationMoveParams, passageID: number, sign: string, changeFrame: boolean): void;
    /**
     * 移动立绘时的逐帧执行的函数
     */
    export function gcStandAvatarMoveFrameUpdate(a: UIStandAvatar, m: StandAvatarMoveParams, passageID: number, sign: string): void;
    /**
     * 自动旋转的逐帧执行的函数
     */
    export function gcGameSpriteRotationMoveFrameUpdate(a: GameSprite, rotation: number, passageID: number, sign: string): void;
    /**
     * 移动界面的逐帧执行的函数
     */
    export function gcUIMoveFrameUpdate(a: GUI_BASE, m: ScaleSpriteMoveParams, passageID: number, sign: string): void;
    /**
     * 移动界面元件的逐帧执行的函数
     */
    export function gcUICompMoveFrameUpdate(a: GUI_BASE, m: UICompMoveParams, passageID: number, sign: string, nonTweenType: number): void;
    class ImageMoveParams {
        time: number;
        curTime: number;
        x: number;
        y: number;
        z: number;
        width: number;
        height: number;
        rotation: number;
        opacity: number;
        x2: number;
        y2: number;
        z2: number;
        width2: number;
        height2: number;
        rotation2: number;
        opacity2: number;
        pivotType2: number;
        blendMode2: number;
        flip2: boolean;
        transData: TransData;
    }
    class ImageLayerCameraMoveParams {
        time: number;
        curTime: number;
        x: number;
        y: number;
        z: number;
        rotation: number;
        x2: number;
        y2: number;
        z2: number;
        rotation2: number;
        transData: TransData;
    }
    class ScaleSpriteMoveParams {
        time: number;
        curTime: number;
        x: number;
        y: number;
        z: number;
        scaleX: number;
        scaleY: number;
        rotation: number;
        opacity: number;
        x2: number;
        y2: number;
        z2: number;
        scaleX2: number;
        scaleY2: number;
        rotation2: number;
        opacity2: number;
        transData: TransData;
    }
    class AnimationMoveParams extends ScaleSpriteMoveParams {
        aniFrame: number;
        aniFrame2: number;
    }
    class StandAvatarMoveParams extends ScaleSpriteMoveParams {
        actionID: number;
        avatarFrame: number;
        avatarFrame2: number;
        changeExpression: boolean;
        changeFrame: boolean;
    }
    class UICompMoveParams {
        time: any;
        curTime: number;
        transData: TransData;
        attrInfos: {
            uiComp: UIBase;
            uiCompID: number;
            attName: string;
            oldValue: any;
            needTween: boolean;
            newValue: any;
        }[];
    }
    type UIBase = any;
    export function refreshCompMaterials(attValue: any, uiComp: UIBase): void;
    export {};
}
//# sourceMappingURL=CustomCommand2.d.ts.map