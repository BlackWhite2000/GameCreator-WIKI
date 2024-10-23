/**
 * A星算法
 * -- 以前使用AS3编写的翻译成TS后先使用，后期可优化
 * -- 支持四方向和八方向寻路
 * Created by 黑暗之神KDS on 2013-5-07 15:02:01.
 */
declare class AstarUtils {
    static ROAD_FIND_MAX: number;
    private startPoint;
    private endPoint;
    private mapArr;
    private w;
    private h;
    private openList;
    private closeList;
    private roadArr;
    private isPath;
    private isSearch;
    private ori4;
    /**
     * 移动至
     * 只在起点周围计算A星
     * @param x_x1 起点X
     * @param x_y1 起点Y
     * @param x_x2 终点X
     * @param x_y2 终点Y
     * @param gridW 格子宽
     * @param gridH 格子高
     * @param obsArr 障碍数组 [x][y] = true/false
     * @param toGridAsThroughEnabled 目的地看作是可通行点
     * @return [string] 返回移动路线结果 [有效路径]=|x,y|x,y|x,y|x,y [无效路径]=null
     */
    static moveTo(x_x1: number, x_y1: number, x_x2: number, x_y2: number, gridW: number, gridH: number, scene: ProjectClientScene, ori4?: boolean, toGridAsThroughEnabled?: boolean): number[][];
    private static big_mapmapmap;
    /**
     * 大地图移动模式缓存
     * @param gridW
     * @param gridH
     * @param obsArr
     */
    static def_bigMoveTo(gridW: number, gridH: number, obsArr: boolean[][]): void;
    /**
     * 大地图移动
     * @param x_x1 起点
     * @param x_y1 起点
     * @param x_x2 终点
     * @param x_y2 终点
     * @return [string]
     */
    static bigMoveTo(x_x1: number, x_y1: number, x_x2: number, x_y2: number): number[][];
    private searchRoad;
    private addAroundPoint;
    private inArr;
    private setGHF;
    private checkG;
    private getMinF;
}
declare class AstarBox {
    G: number;
    H: number;
    F: number;
    father: AstarBox;
    px: number;
    py: number;
    go: number;
}
//# sourceMappingURL=AstarUtils.d.ts.map