/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import ItemData from '@bundle:com.example.component/entry/ets/common/bean/ItemData';
/**
 * Binds data to components and provides interfaces.
 */
export class MainViewModel {
    /**
     * Get swiper image data.
     *
     * @return {Array<Resource>} swiperImages.
     */
    getSwiperImages() {
        let swiperImages = [
            { "id": 16777399, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777299, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777392, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" },
            { "id": 16777389, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }
        ];
        return swiperImages;
    }
    /**
     * Get data of the first grid.
     *
     * @return {Array<PageResource>} firstGridData.
     */
    getFirstGridData() {
        let firstGridData = [
            new ItemData({ "id": 16777257, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777388, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777393, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777304, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777275, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777384, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777256, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777307, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777398, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777397, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return firstGridData;
    }
    /**
     * Get data of the second grid.
     *
     * @return {Array<PageResource>} secondGridData.
     */
    getSecondGridData() {
        let secondGridData = [
            new ItemData({ "id": 16777250, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777279, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777249, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777243, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777222, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777248, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777241, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777385, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777246, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777242, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777278, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777247, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return secondGridData;
    }
    /**
     * Get data of the setting list.
     *
     * @return {Array<PageResource>} settingListData.
     */
    getSettingListData() {
        let settingListData = [
            new ItemData({ "id": 16777271, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777308, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777274, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777269, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777281, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777270, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777390, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777268, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777220, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777273, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777305, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" }),
            new ItemData({ "id": 16777272, "type": 10003, params: [], "bundleName": "com.example.component", "moduleName": "entry" }, { "id": 16777302, "type": 20000, params: [], "bundleName": "com.example.component", "moduleName": "entry" })
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map