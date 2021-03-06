import 'mdui.jq/es/methods/each';
declare module 'mdui.jq/es/JQ' {
    interface JQ<T = HTMLElement> {
        /**
         * 设置当前元素的 transition-duration 属性
         * @param duration 可以是带单位的值；若不带单位，则自动添加 `ms` 作为单位
         * @example
    ```js
    $('.box').transition('300ms');
    $('.box').transition(300);
    ```
         */
        transition(duration: string | number): this;
    }
}
