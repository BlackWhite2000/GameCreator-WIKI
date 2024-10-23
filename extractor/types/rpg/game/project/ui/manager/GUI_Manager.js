/**
 * 游戏UI管理器
 * Created by 黑暗之神KDS on 2020-03-17 02:20:53.
 */
class GUI_Manager {
    //------------------------------------------------------------------------------------------------------
    // 标准化组件
    //------------------------------------------------------------------------------------------------------
    /**
     * 标准化列表LIST
     * -- 键位滚动至可见区域
     */
    static standardList(list, useItemClickSe = true) {
        list.on(EventObject.CHANGE, this, (list, state) => {
            if (state == 0)
                list.scrollTo(list.selectedIndex, true, true, 300, Ease.strongOut);
        }, [list]);
        if (useItemClickSe) {
            list.on(UIList.ITEM_CLICK, this, (list) => {
                GameAudio.playSE(ClientWorld.data.sureSE);
            }, [list]);
        }
    }
    /**
     * 标准化标签栏
     * -- 快捷键
     * @param tab
     */
    static standardTab(tab) {
        stage.on(EventObject.KEY_DOWN, tab, GUI_Manager.onStandardTabKeyDown, [tab]);
        tab["__lastIdx"] = tab.selectedIndex;
        tab.on(EventObject.CHANGE, this, (tab) => {
            let lastIndex = tab["__lastIdx"];
            if (lastIndex >= 0) {
                GameAudio.playSE(ClientWorld.data.selectSE);
            }
            tab["__lastIdx"] = tab.selectedIndex;
        }, [tab]);
    }
    /**
     * 注册鼠标点击区域后激活指定的列表
     * @param area 区域
     * @param list 列表
     * @param playSureSE [可选] 默认值=true 是否播放确认音效
     * @param onFocus [可选] 默认值=null 当产生焦点时回调
     * @param thisPtr [可选] 默认值=null 当产生焦点时回调的作用域
     */
    static regHitAreaFocusList(area, list, playSureSE = true, onFocus = null, thisPtr = null) {
        list.on(UIList.ITEM_CREATE, this, hitAreaFocusListCallback);
        function hitAreaFocusListCallback(ui, data, index) {
            ui.on(EventObject.MOUSE_DOWN, this, (e) => { e.stopPropagation(); });
        }
        area.on(EventObject.MOUSE_DOWN, GUI_Manager, (list, playSureSE) => {
            onFocus && onFocus.apply(thisPtr);
            GUI_Manager.focusList(list, playSureSE);
        }, [list, playSureSE]);
    }
    /**
     * 激活List并选中
     * @param list 列表
     * @param playSureSE [可选] 默认值=true 是否播放确认音效
     */
    static focusList(list, playSureSE = true) {
        if (UIList.focus == list)
            return;
        UIList.focus = list;
        for (let i = 0; i < list.length; i++) {
            let itemBox = list.getItemUI(i);
            if (itemBox.mouseX >= 0 && itemBox.mouseX <= list.itemWidth && itemBox.mouseY >= 0 && itemBox.mouseY <= list.itemHeight) {
                list.selectedIndex = i;
                break;
            }
        }
        if (playSureSE)
            GameAudio.playSE(WorldData.sureSE);
    }
    //------------------------------------------------------------------------------------------------------
    // 标准化标签栏-内部实现
    //------------------------------------------------------------------------------------------------------
    /**
     * 按键更改标签索引
     */
    static onStandardTabKeyDown(tab, e) {
        if (!tab.stage || !tab.mouseEnabled) {
            return;
        }
        let keyCode = e.keyCode;
        let index = tab.selectedIndex;
        if (GUI_Setting.IS_KEY(keyCode, GUI_Setting.KEY_BOARD.L1)) {
            index--;
        }
        else if ((GUI_Setting.IS_KEY(keyCode, GUI_Setting.KEY_BOARD.R1))) {
            index++;
        }
        else {
            return;
        }
        index = Math.min(tab.length - 1, Math.max(index, 0));
        tab.selectedIndex = index;
    }
}
//# sourceMappingURL=GUI_Manager.js.map