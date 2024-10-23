/**
 * 场景的工具类
 * 用于计算障碍、遮罩、桥属性、碰撞检测等
 *
 * Created by 黑暗之神KDS on 2020-01-24 02:55:52.
 */
declare class SceneUtils {
    /**
     * 格子上的场景对象：初始化时即设置了gridWidth x gridHeight的空数组
     */
    gridSceneObjects: ProjectClientSceneObject[][][];
    /**
     * 场景对象上次所在的格子坐标
     */
    protected lastUpdateObsBridgeGrid: Point[];
    /**
     * 边界的内边界矩形（边界默认为0-mapWidth 0-mapHeight，内边界则需要减去半个格子）
     */
    protected innerBoundaryRect: Rectangle;
    /**
     * 场景
     */
    scene: Scene;
    /**
     * 半格多一像素
     */
    protected halfGridPlus: number;
    /**
     * 获取附近可通行的格子点
     * @param gridP 障碍格子点
     * @param targetP [可选] 默认值=null 参考目标点，会优先选择与该目标点最近的点
     * @return [Point]
     */
    static getNearThroughGrid(gridP: Point, targetP?: Point): Point;
    /**
     * 计算两点间是否存在障碍 穷举法
     * @param x1 起点x坐标
     * @param y1 起点y坐标
     * @param x2 终点x坐标
     * @param y2 终点y坐标
     * @param scene 场景
     * @param except [可选] 默认值=null 排除在外的对象
     * @param exceptToP [可选] 默认值=false 终点是否排除在外
     * @return [boolean]
     */
    static twoPointHasObstacle(x1: number, y1: number, x2: number, y2: number, scene: ProjectClientScene, except?: ProjectClientSceneObject, exceptToP?: boolean): boolean;
    /**
     * 构造函数
     */
    constructor(scene: Scene);
    /**
     * 是否障碍,实际坐标（含动态障碍）
     * @param p 实际坐标
     * @param except [可选] 默认值=null 忽略计算的对象（如玩家自身）
     * @return [boolean]
     */
    isObstacle(p: Point, except?: ProjectClientSceneObject): boolean;
    /**
     * 是否是障碍格子（含动态障碍）
     * @param gridP 格子坐标
     * @return [boolean]
     */
    isObstacleGrid(gridP: Point, except?: ProjectClientSceneObject): boolean;
    /**
     * 是否存在地图固定障碍（地图或图块设置的障碍）
     * @param gridP 格子坐标
     * @param calcBridge 计算桥属性
     * @return [boolean]
     */
    isFixedObstacleGrid(gridP: Point, calcBridge?: boolean): boolean;
    /**
     * 是否存在地图固定桥属性
     * @param gridP 格子坐标
     * @return [boolean]
     */
    isFixedBridgeGrid(gridP: Point): boolean;
    /**
     * 是否存在遮罩，根据实际坐标
     * @param p
     * @return [boolean]
     */
    isMask(p: Point): boolean;
    /**
     * 是否存在遮罩，根据格子
     * @param gridP
     * @return [boolean]
     */
    isMaskGrid(gridP: Point): boolean;
    /**
     * 是否在场外
     * @param p 坐标
     * @param innerBoundary 计算内边界
     * @return [boolean]
     */
    isOutside(p: Point, innerBoundary?: boolean): boolean;
    /**
     * 是否在场外，根据格子
     * @param gridP 格子坐标
     * @return [boolean]
     */
    isOutsideByGrid(gridP: Point): boolean;
    /**
     * 将坐标限制在场景内
     * @param p 指定坐标
     */
    limitInside(p: Point, innerBoundary?: boolean): void;
    /**
     * 检查该格子是否具备动态穿透属性
     * 只包含 ProjectClientSceneObject，因为其他场景对象类未拥有障碍特性
     * -- 只要有桥对象则视为穿透
     * -- 否则只要有障碍物则视为有障碍
     * @param gridP 当前格子
     * @param excepter [可选] 默认值=null 排除在外的对象（比如自己）
     * @param gridSceneObjects [可选] 默认值=null 所在当前格子的场景对象（如有）
     * @return [number] 0-无障碍 1-桥属性 2-存在障碍
     */
    getGridDynamicObsStatus(gridP: Point, excepter?: ProjectClientSceneObject, gridSceneObjects?: ProjectClientSceneObject[]): number;
    /**
     * 刷新动态障碍和桥，根据单位场景对象
     * @param soc 障碍对象
     * @param inScene 是否在场景上
     * @return isChange 是否真正更新过坐标
     */
    updateDynamicObsAndBridge(soc: SceneObject, inScene: boolean, posGrid?: Point): boolean;
    /**
     * 碰撞检测
     * @param checker 检查者
     * @param useGridObstacle 是否使用格子计算障碍模式
     * @param posP 检查者即将到达的坐标（单位：像素）
     * @param posGridP [可选] 默认值=null 检查者的即将到达的坐标（单位：格子）
     * @param trendP [可选] 默认值=null 检查者移动趋势坐标（单位：像素）
     * @param trendGridP 检查者移动趋势坐标（单位：格子）
     * @return 障碍和碰触信息 isObstacle=是否碰到障碍 touchSceneObjects=碰触到的对象列表（可能包含自己） correctPos 修正坐标
     */
    touchCheck(checker: ProjectClientSceneObject, useGridObstacle: boolean, posP: Point, posGridP: Point, trendP: Point, trendGridP: Point): {
        isObstacle: boolean;
        touchSceneObjects: ProjectClientSceneObject[];
        alreadyCalcPosRect: boolean;
    };
    /**
     * 获取指定对象的周围的坐标位置
     * @param mode 0-按照指定的对象1的背面顺时针 1-按照对象2相对于对象1最近的方向开始顺时针
     * @param so1 被接近的目标
     * @param so2 接近的目标
     * @param positionSize [可选] 默认值=1 最多需要的位置数目，如3表示最多需要3个位置
     * @param calcWantToGo [可选] 默认值=false 是否计算想达到，如果计算的话想到达的位置也算被占用
     * @return 获取周围的位置
     */
    static getAroundPositions(mode: number, so1: ProjectClientSceneObject, so2: ProjectClientSceneObject, positionSize?: number, calcWantToGo?: boolean, gridSize?: number): Point[];
    /**
     * 碰撞检测-格子版
     * @param checker
     * @param posP
     * @param posGridP [可选] 默认值=null
     * @param trendP  [可选] 默认值=null 趋势移动点
     * @param calcTrendP [可选] 默认值=true 计算趋势点接触碰撞信息
     */
    private collsionCheckGrid;
    /**
     * 碰撞检测-矩形包围盒版
     * 碰撞为了优化计算按照场景对象原点 + WorldData.sceneObjectCollisionSize-1 计算。
     * @param p
     * @param trendP
     * @param checker
     * @param isObstacle
     * @param touchSceneObjects
     */
    private collsionCheckRect;
}
//# sourceMappingURL=SceneUtils.d.ts.map