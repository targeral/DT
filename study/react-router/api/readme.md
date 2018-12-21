# react-router

## 基础组件

在react-router里有三种组件: Routers、Route Matching、Navigation。

### Routers

每一个react-router的应用都需要一个Routers组件。对于web环境来说，提供了`<BrowserRouter>`和`<HashRouter>`，这两个都会提供一个专门的history对象。一般来说，如果您有响应请求的服务器，则应使用<BrowserRouter>;如果使用静态文件服务器，则应使用<HashRouter>。

### Route Matching(路由匹配)

路由匹配组件有：`<Route>`和`<Switch>`。路由匹配组件的实现是通过比较组件的path属性和当前的路径名称。

### Route rendering props

你有三种属性选择决定如何渲染一个组件：component、render、children。