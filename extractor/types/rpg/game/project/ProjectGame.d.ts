/**
 * 项目层游戏管理器实现类
 * -- 为了让系统API属性的类别直接指向项目层的实现类
 *    游戏内会经常用到Game.player以及Game.currentScene，实现此类可指向项目层自定义的「玩家类」和「场景类」
 *
 *
 * Created by 黑暗之神KDS on 2020-09-08 17:00:46.
 */
declare class ProjectGame extends GameBase {
    /**
     * 游戏开始时间（新游戏时记录，读档后记录档案的时间会计算差值以便获得游戏总游玩时间）
     */
    static gameStartTime: Date;
    /**
    * 当前的场景对象：重写，以便类别能够对应项目层自定义的子类
    */
    currentScene: ProjectClientScene;
    /**
     * 玩家对象：重写，便类别能够对应项目层自定义的子类
     */
    player: ProjectPlayer;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 初始化
     */
    init(): void;
    private onInSceneStateChange;
}
//# sourceMappingURL=ProjectGame.d.ts.map