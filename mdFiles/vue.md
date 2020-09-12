### 生命周期

#### 1、官方图解

![clipboard.png](https://segmentfault.com/img/bVVORa?w=1200&h=3039)

#### 2、父子组件的生命周期执行顺序

​		beforeCreate

​		created

​		beforeMount

​			beforeCreate

​			created

​			beforeMount

​			.......

​			.......

​			mouted

​		mouted

​		beforeUpdate

​			beforeUpdate

​			updated

​		updated

​		beforeDestory

​			beforeDestory

​			destroyed

​		destoryed

### 事件修饰符

#### 1、native事件修饰符

给组件绑定一个原生事件，将组件变成普通的HTML标签，对普通HTML标签没有任何作用
如果组件的事件没有添加改修饰符，则会被认为向组件传递方法，如果组件内部没有通过$emit触发该事件绑定的函数，则不会触发

#### 2、self事件修饰符

只当在 `event.target` 是当前元素自身时触发处理函数
即`e.target`和`e.currentTarget`相等时才会触发回调

### Vue-Router

​	Vue导航守卫以我自己的理解就是监听页面进入，修改，和离开的功能。每个守卫接受三个参数

​	to: Route: 即将要进入的目标路由对象

​	from: Route: 当前导航正要离开的路由

​	next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

​	next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。

​	next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 		地址会重置到 from 路由对应的地址。

​	next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

​	next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。

​	确保要调用 next 方法，否则钩子就不会被 resolved。

#### 1、全局守卫 

​	`beforeEach`

​		判断是否登录

#### 2、组件守卫 

`beforeRouterEnter` 特殊

~~~javascript
	beforeRouterEnter(to, from, next) {
		next(vm => {
			//因为当钩子执行前，组件实例还没被创建*
 		  	// vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
		})
	}
~~~

​	`beforeRouterUpdate`

​	  	//在当前路由改变，但是该组件被复用时调用
​      	//对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
​      	// 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
​      	// 可以访问组件实例 `this`

`beforeRouterLeave`

#### 3、路由独享守卫

​	`beforeEnter`

### vuex

#### 1、五个核心属性

VueX 是一个专门为 Vue.js 应用设计的状态管理构架，统一管理和维护各个vue组件的可变化状态。Vuex有五个核心概念：`state`, `getters`, `mutations`, `actions`, `modules`。

​		1、state：vuex的基本数据，用来存储变量

　　 2、getter：从基本数据(state)派生的数据，相当于state的计算属性

　　 3、mutation：提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。

　　 回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，提交载荷作为第二个参数。

　　 4、action：和mutation的功能大致相同，不同之处在于 ==》1. Action 提交的是 mutation，而不是直接变更状态。 2. Action 可以包含任意异步操作。

​		5、modules：模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。

#### 2、页面刷新 数据丢失

​	因为vuex里的数据是保存在运行内存中的，当页面刷新时，页面会重新加载vue实例，vuex里面的数据就会被重新赋值。

解决办法：sessionStorage,vuex-persistedstate插件

### nextTick

#### 作用：

​		将回调延迟到下次 DOM 更新循环之后执行。

#### 应用场景：

​		在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进`Vue.nextTick()`的回调函数中。

#### 官方文档：

​		Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部尝试对异步队列使用原生的 `Promise.then` 和`MessageChannel`，如果执行环境不支持，会采用 `setTimeout(fn, 0)`代替。



