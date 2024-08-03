const _useLangData = async (lang: string) => {
    const jsonFiles = {
        "zh_hans": () => import('~/lang/zh_hans.json'),
        "en": () => import('~/lang/en.json'),
    };

    if (jsonFiles[lang]) {
        try {
            const messages = await jsonFiles[lang]();
            return messages.default; // 返回导入的 JSON 数据
        } catch (error) {
            console.error('Error loading language file:', error);
            return null;
        }
    } else {
        console.error('Unsupported language:', lang);
        return null;
    }
};

// 导出这个函数
export const useLangData = _useLangData;
